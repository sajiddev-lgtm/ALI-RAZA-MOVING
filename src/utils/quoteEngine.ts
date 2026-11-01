import { QuoteInputs, QuoteBreakdown } from '../types';
import { INVENTORY_CATALOG, PROPERTY_SIZE_DEFAULTS, PRICING_CONFIG } from '../data/mockData';

export function calculateQuote(inputs: QuoteInputs): QuoteBreakdown {
  // Check if custom inventory is filled
  const hasCustomInventory = Object.values(inputs.inventoryCounts).some((qty) => qty > 0);

  let totalCuFt = 0;
  let totalWeightLbs = 0;
  let specialtyItemsFee = 0;

  if (hasCustomInventory) {
    INVENTORY_CATALOG.forEach((item) => {
      const qty = inputs.inventoryCounts[item.id] || 0;
      if (qty > 0) {
        totalCuFt += item.volumeCuFt * qty;
        totalWeightLbs += item.weightLbs * qty;
        if (item.category === 'Specialty' && PRICING_CONFIG.specialtySurplus[item.id]) {
          specialtyItemsFee += PRICING_CONFIG.specialtySurplus[item.id] * qty;
        }
      }
    });
  } else {
    const defaults = PROPERTY_SIZE_DEFAULTS[inputs.propertySize];
    totalCuFt = defaults.avgVolumeCuFt;
    totalWeightLbs = defaults.avgWeightLbs;
  }

  // Determine recommended crew and truck
  let recommendedCrew = 2;
  let recommendedTruck = '16ft City Mover';

  if (totalCuFt > 1600 || totalWeightLbs > 11000) {
    recommendedCrew = 4;
    recommendedTruck = '26ft Heavy Transporter (or Multi-Truck)';
  } else if (totalCuFt > 1000 || totalWeightLbs > 7000) {
    recommendedCrew = 4;
    recommendedTruck = '26ft Heavy Transporter';
  } else if (totalCuFt > 600 || totalWeightLbs > 4200) {
    recommendedCrew = 3;
    recommendedTruck = '20ft - 24ft Truck';
  } else {
    recommendedCrew = 2;
    recommendedTruck = '16ft City Mover';
  }

  const activeCrew = inputs.crewCount > 0 ? inputs.crewCount : recommendedCrew;
  const hourlyRate = activeCrew * PRICING_CONFIG.hourlyRatePerMover;

  // Base labor hours calculation
  // Base rate: ~200 cu ft loaded & unloaded per hour for 2 movers; scaled by crew
  const baseManHours = Math.max(2.5, totalCuFt / 140);
  let estimatedHours = Number((baseManHours / (activeCrew / 2.2)).toFixed(1));

  // Stairs penalty: add 0.4 hours per flight without elevator
  const pickupStairFlights = !inputs.pickupHasElevator && inputs.pickupFloor > 1 ? inputs.pickupFloor - 1 : 0;
  const dropoffStairFlights = !inputs.dropoffHasElevator && inputs.dropoffFloor > 1 ? inputs.dropoffFloor - 1 : 0;
  const stairFlightHours = (pickupStairFlights + dropoffStairFlights) * 0.35;
  estimatedHours += stairFlightHours;

  if (inputs.longCarryRequired) {
    estimatedHours += 0.5;
  }

  // Minimum job duration: 3.0 hours
  estimatedHours = Math.max(3.0, Math.round(estimatedHours * 2) / 2);

  // Labor Total
  const laborTotal = Math.round(estimatedHours * hourlyRate);

  // Mileage and transit
  const freeMiles = 15;
  const billableMiles = Math.max(0, inputs.estimatedMiles - freeMiles);
  const mileageAndFuelFee = Math.round(billableMiles * PRICING_CONFIG.mileageRatePerMile);

  // Truck fee
  const truckAndEquipmentFee = PRICING_CONFIG.truckBaseFee;

  // Packing materials fee
  const packingMaterialsFee = PRICING_CONFIG.packingRates[inputs.packingTier] || 0;

  // Storage fee
  const storageFee = inputs.includeStorage ? inputs.storageWeeks * PRICING_CONFIG.storagePerWeek : 0;

  // Insurance fee
  const insuranceFee = PRICING_CONFIG.insuranceOptions[inputs.insuranceTier]?.cost || 0;

  // Date multiplier (weekends +5%, end of month +8%)
  let dateMultiplier = 1.0;
  if (inputs.selectedMoveDate) {
    const dateObj = new Date(inputs.selectedMoveDate + 'T12:00:00');
    const dayOfWeek = dateObj.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      dateMultiplier += 0.05; // 5% weekend surcharge
    }
    const dayOfMonth = dateObj.getDate();
    if (dayOfMonth >= 28 || dayOfMonth <= 2) {
      dateMultiplier += 0.08; // 8% peak month-end
    }
  }

  const rawSubtotal =
    laborTotal +
    mileageAndFuelFee +
    truckAndEquipmentFee +
    packingMaterialsFee +
    storageFee +
    insuranceFee +
    specialtyItemsFee;

  const subtotal = Math.round(rawSubtotal * dateMultiplier);

  // Range +/- 8%
  const estimatedTotalLow = Math.round(subtotal * 0.94);
  const estimatedTotalHigh = Math.round(subtotal * 1.08);

  const quoteId = `Q-${Math.floor(10000 + Math.random() * 90000)}`;

  return {
    quoteId,
    estimatedHours,
    hourlyRate,
    laborTotal,
    mileageAndFuelFee,
    truckAndEquipmentFee,
    packingMaterialsFee,
    storageFee,
    insuranceFee,
    specialtyItemsFee,
    subtotal,
    estimatedTotalLow,
    estimatedTotalHigh,
    totalCuFt: Math.round(totalCuFt),
    totalWeightLbs: Math.round(totalWeightLbs),
    recommendedCrew,
    recommendedTruck,
  };
}
