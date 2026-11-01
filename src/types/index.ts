export type MoveType = 'local' | 'long_distance' | 'commercial' | 'packing_storage';

export type PropertySize = 
  | 'studio'
  | '1_bedroom'
  | '2_bedroom'
  | '3_bedroom'
  | '4_plus_bedroom'
  | 'office_small'
  | 'office_large';

export interface InventoryCategoryItem {
  id: string;
  name: string;
  category: 'Living Room' | 'Bedroom' | 'Kitchen & Dining' | 'Office & Misc' | 'Boxes & Fragile' | 'Specialty';
  volumeCuFt: number;
  weightLbs: number;
  defaultQty?: number;
}

export interface QuoteInputs {
  moveType: MoveType;
  pickupZip: string;
  dropoffZip: string;
  estimatedMiles: number;
  propertySize: PropertySize;
  pickupFloor: number;
  dropoffFloor: number;
  pickupHasElevator: boolean;
  dropoffHasElevator: boolean;
  longCarryRequired: boolean;
  crewCount: number; // 2, 3, 4, 5
  truckSizeFeet: number; // 16, 20, 26
  includePacking: boolean;
  packingTier: 'none' | 'fragile_only' | 'full_pack';
  includeStorage: boolean;
  storageWeeks: number;
  insuranceTier: 'basic' | 'standard' | 'premium';
  inventoryCounts: Record<string, number>;
  selectedMoveDate: string;
}

export interface QuoteBreakdown {
  quoteId: string;
  estimatedHours: number;
  hourlyRate: number;
  laborTotal: number;
  mileageAndFuelFee: number;
  truckAndEquipmentFee: number;
  packingMaterialsFee: number;
  storageFee: number;
  insuranceFee: number;
  specialtyItemsFee: number;
  subtotal: number;
  estimatedTotalLow: number;
  estimatedTotalHigh: number;
  totalCuFt: number;
  totalWeightLbs: number;
  recommendedCrew: number;
  recommendedTruck: string;
}

export interface BookingRecord {
  id: string;
  createdAt: string;
  status: 'Confirmed' | 'Dispatch Assigned' | 'In Progress' | 'Completed';
  quote: QuoteBreakdown;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    contactMethod: 'phone' | 'email' | 'text';
  };
  pickup: {
    address: string;
    city: string;
    state: string;
    zip: string;
    floor: number;
    hasElevator: boolean;
    parkingInstructions?: string;
  };
  dropoff: {
    address: string;
    city: string;
    state: string;
    zip: string;
    floor: number;
    hasElevator: boolean;
    parkingInstructions?: string;
  };
  schedule: {
    moveDate: string;
    arrivalWindow: 'morning_8_10' | 'afternoon_1_3' | 'evening_4_6';
  };
  specialInstructions?: string;
}
