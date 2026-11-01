import { InventoryCategoryItem, PropertySize } from '../types';

export const INVENTORY_CATALOG: InventoryCategoryItem[] = [
  // Living Room
  { id: 'sofa_3seater', name: '3-Seater Sofa / Couch', category: 'Living Room', volumeCuFt: 50, weightLbs: 160 },
  { id: 'sectional_sofa', name: 'Sectional Sofa (L-Shape)', category: 'Living Room', volumeCuFt: 100, weightLbs: 280 },
  { id: 'armchair', name: 'Armchair / Recliner', category: 'Living Room', volumeCuFt: 25, weightLbs: 70 },
  { id: 'coffee_table', name: 'Coffee Table', category: 'Living Room', volumeCuFt: 15, weightLbs: 45 },
  { id: 'tv_media_unit', name: 'TV Media Console & TV (up to 75")', category: 'Living Room', volumeCuFt: 30, weightLbs: 85 },
  { id: 'bookshelf_large', name: 'Tall Bookshelf / Display', category: 'Living Room', volumeCuFt: 35, weightLbs: 110 },
  
  // Bedroom
  { id: 'king_bed', name: 'King Bed & Mattress Set', category: 'Bedroom', volumeCuFt: 70, weightLbs: 180 },
  { id: 'queen_bed', name: 'Queen Bed & Mattress Set', category: 'Bedroom', volumeCuFt: 55, weightLbs: 140 },
  { id: 'dresser_6drawer', name: '6-Drawer Bureau / Dresser', category: 'Bedroom', volumeCuFt: 40, weightLbs: 130 },
  { id: 'nightstand', name: 'Nightstands (Pair)', category: 'Bedroom', volumeCuFt: 15, weightLbs: 50 },
  { id: 'wardrobe_armour', name: 'Standing Armoire', category: 'Bedroom', volumeCuFt: 50, weightLbs: 170 },

  // Kitchen & Dining
  { id: 'dining_table_chairs', name: 'Dining Table + 4-6 Chairs', category: 'Kitchen & Dining', volumeCuFt: 60, weightLbs: 190 },
  { id: 'china_cabinet', name: 'Curio / China Cabinet', category: 'Kitchen & Dining', volumeCuFt: 45, weightLbs: 150 },
  { id: 'bar_stools', name: 'Bar Stools (Set of 2-3)', category: 'Kitchen & Dining', volumeCuFt: 15, weightLbs: 40 },
  { id: 'refrigerator', name: 'Refrigerator / Major Appliance', category: 'Kitchen & Dining', volumeCuFt: 55, weightLbs: 220 },

  // Office & Misc
  { id: 'office_desk', name: 'Executive Desk / Workstation', category: 'Office & Misc', volumeCuFt: 35, weightLbs: 110 },
  { id: 'ergonomic_chair', name: 'Ergonomic Task Chair', category: 'Office & Misc', volumeCuFt: 15, weightLbs: 35 },
  { id: 'filing_cabinet', name: 'Metal Filing Cabinet', category: 'Office & Misc', volumeCuFt: 20, weightLbs: 75 },
  { id: 'exercise_bike_treadmill', name: 'Treadmill / Exercise Bike', category: 'Office & Misc', volumeCuFt: 45, weightLbs: 180 },

  // Boxes & Fragile
  { id: 'box_medium', name: 'Medium Moving Boxes (3.0 cu ft)', category: 'Boxes & Fragile', volumeCuFt: 3, weightLbs: 25 },
  { id: 'box_large', name: 'Large Moving Boxes (4.5 cu ft)', category: 'Boxes & Fragile', volumeCuFt: 4.5, weightLbs: 40 },
  { id: 'box_wardrobe', name: 'Wardrobe Box with Metal Hanging Bar', category: 'Boxes & Fragile', volumeCuFt: 12, weightLbs: 45 },
  { id: 'box_dishpack', name: 'Double-Walled Fragile Dishpack Box', category: 'Boxes & Fragile', volumeCuFt: 5, weightLbs: 40 },

  // Specialty Items
  { id: 'upright_piano', name: 'Upright Piano (Rigging & Skid Board)', category: 'Specialty', volumeCuFt: 60, weightLbs: 450 },
  { id: 'gun_heavy_safe', name: 'Commercial Heavy Safe (>300 lbs)', category: 'Specialty', volumeCuFt: 25, weightLbs: 400 },
  { id: 'pool_table', name: 'Slate Pool Table (Disassembly)', category: 'Specialty', volumeCuFt: 75, weightLbs: 650 },
  { id: 'fine_art_crate', name: 'Fine Art / Sculpture Custom Wooden Crate', category: 'Specialty', volumeCuFt: 25, weightLbs: 80 },
];

export const PROPERTY_SIZE_DEFAULTS: Record<PropertySize, {
  name: string;
  sqFtEstimate: string;
  avgVolumeCuFt: number;
  avgWeightLbs: number;
  recommendedCrew: number;
  recommendedTruck: string;
  defaultBaseHours: number;
}> = {
  studio: {
    name: 'Studio Apartment',
    sqFtEstimate: '400 - 600 sq ft',
    avgVolumeCuFt: 350,
    avgWeightLbs: 2400,
    recommendedCrew: 2,
    recommendedTruck: '16ft City Mover',
    defaultBaseHours: 3.5,
  },
  '1_bedroom': {
    name: '1 Bedroom Home / Apt',
    sqFtEstimate: '600 - 850 sq ft',
    avgVolumeCuFt: 550,
    avgWeightLbs: 3800,
    recommendedCrew: 2,
    recommendedTruck: '16ft - 20ft Truck',
    defaultBaseHours: 4.5,
  },
  '2_bedroom': {
    name: '2 Bedroom Home / Apt',
    sqFtEstimate: '900 - 1,400 sq ft',
    avgVolumeCuFt: 850,
    avgWeightLbs: 5900,
    recommendedCrew: 3,
    recommendedTruck: '20ft - 24ft Truck',
    defaultBaseHours: 6.0,
  },
  '3_bedroom': {
    name: '3 Bedroom Residence',
    sqFtEstimate: '1,500 - 2,200 sq ft',
    avgVolumeCuFt: 1300,
    avgWeightLbs: 9100,
    recommendedCrew: 4,
    recommendedTruck: '26ft Heavy Transporter',
    defaultBaseHours: 7.5,
  },
  '4_plus_bedroom': {
    name: '4+ Bedroom Estate',
    sqFtEstimate: '2,500+ sq ft',
    avgVolumeCuFt: 1950,
    avgWeightLbs: 13600,
    recommendedCrew: 4,
    recommendedTruck: '26ft Transporter (or Multi-Truck)',
    defaultBaseHours: 9.5,
  },
  office_small: {
    name: 'Small Office (up to 10 desks)',
    sqFtEstimate: '1,000 - 2,500 sq ft',
    avgVolumeCuFt: 900,
    avgWeightLbs: 6500,
    recommendedCrew: 3,
    recommendedTruck: '26ft Commercial Freight',
    defaultBaseHours: 6.5,
  },
  office_large: {
    name: 'Corporate Office (15+ desks)',
    sqFtEstimate: '3,000+ sq ft',
    avgVolumeCuFt: 2200,
    avgWeightLbs: 15400,
    recommendedCrew: 5,
    recommendedTruck: 'Multi-Truck Fleet 26ft',
    defaultBaseHours: 11.0,
  },
};

export const PRICING_CONFIG = {
  hourlyRatePerMover: 65, // $130/hr for 2 movers, $195/hr for 3, $260/hr for 4
  truckBaseFee: 140, // includes dollies, moving blankets, straps, shrink wrap
  mileageRatePerMile: 3.25, // over first 15 miles
  flightOfStairsFee: 35, // per flight without elevator
  longCarryFee: 75,
  packingRates: {
    none: 0,
    fragile_only: 180,
    full_pack: 490,
  },
  storagePerWeek: 115,
  insuranceOptions: {
    basic: { name: 'Released Value ($0.60/lb)', cost: 0 },
    standard: { name: 'Comprehensive Protection ($25,000 max)', cost: 125 },
    premium: { name: 'Full Replacement Value ($75,000 max, zero deductible)', cost: 245 },
  },
  specialtySurplus: {
    upright_piano: 220,
    gun_heavy_safe: 180,
    pool_table: 280,
    fine_art_crate: 140,
  } as Record<string, number>,
};

export const TESTIMONIALS = [
  {
    id: 'test_1',
    author: 'Elena & Marcus Vance',
    role: 'Homeowners',
    route: 'Upper West Side, NY → Greenwich, CT',
    moveDate: 'September 2026',
    comment: 'The quote calculator estimated $1,840 for our 3-bedroom brownstone. Our final invoice on moving day was exactly $1,815. Crew of four led by Alex arrived at 8:00 AM sharp, protected all oak banisters, and finished two hours faster than expected.',
    rating: 5,
    inventorySize: '3-Bedroom Colonial',
  },
  {
    id: 'test_2',
    author: 'David Chen',
    role: 'Managing Partner, Apex Law Group',
    route: 'Midtown Manhattan → Brooklyn Navy Yard',
    moveDate: 'October 2026',
    comment: 'Relocating 18 partner workstations, encrypted servers, and a massive physical archive over a single weekend seemed daunting. Vanguard delivered seamless logistics: zero downtime, everything labeled and unpacked in place by Sunday night.',
    rating: 5,
    inventorySize: 'Corporate Office (22 desks)',
  },
  {
    id: 'test_3',
    author: 'Sarah Jenkins',
    role: 'Art Director',
    route: 'Chelsea, NY → Tribeca, NY',
    moveDate: 'August 2026',
    comment: 'Having custom oil paintings and vintage glass mirrors made me very protective. Their white-glove crate service was immaculate. Every single piece arrived in flawless museum-grade condition.',
    rating: 5,
    inventorySize: '2-Bedroom Loft',
  },
];

export const FAQS = [
  {
    question: 'How accurate is the instant free quote calculator?',
    answer: 'Our instant quote calculator utilizes real-time labor algorithms, weight-to-volume formulas, and actual transit distances. Over 96% of our completed moves finalize within 5% of this estimate. We also back all confirmed bookings with our Guaranteed Binding Price Pledge once your inventory is locked.',
  },
  {
    question: 'What is included in the base moving package?',
    answer: 'Every move includes clean commercial air-ride trucks, commercial moving blankets, heavy-duty quilted padding, wardrobe boxes on loan for moving day, disassembling and reassembling standard beds and tables, floor runners, and $0.60/lb standard released valuation coverage.',
  },
  {
    question: 'How far in advance should I reserve my move date?',
    answer: 'We recommend booking 2 to 4 weeks in advance, especially for end-of-month and weekend moves. However, our interactive calendar shows live slot availability, and we frequently accommodate expedited moves with 48 hours notice.',
  },
  {
    question: 'Are there hidden fees for stairs, elevators, or long walking distances?',
    answer: 'No hidden fees ever. All stair flights, elevator usage, or parking distance factors are configured transparently in your calculator breakdown before you confirm your booking. What you see is what you pay.',
  },
  {
    question: 'How does Vanguard handle delicate or specialty items like pianos and safes?',
    answer: 'Our senior crew leaders are certified in specialty rigging. We use heavy-duty neoprene stair skids, dual-strap piano boards, and padded commercial dollies. Items requiring specialty crating are handled by our in-house carpenters.',
  },
];

export const DEFAULT_SAMPLE_BOOKING: import('../types').BookingRecord = {
  id: 'VR-84920',
  createdAt: '2026-10-24T14:32:00Z',
  status: 'Dispatch Assigned',
  quote: {
    quoteId: 'Q-49201',
    estimatedHours: 5.5,
    hourlyRate: 195,
    laborTotal: 1072.5,
    mileageAndFuelFee: 65,
    truckAndEquipmentFee: 140,
    packingMaterialsFee: 0,
    storageFee: 0,
    insuranceFee: 125,
    specialtyItemsFee: 0,
    subtotal: 1402.5,
    estimatedTotalLow: 1350,
    estimatedTotalHigh: 1520,
    totalCuFt: 720,
    totalWeightLbs: 5100,
    recommendedCrew: 3,
    recommendedTruck: '20ft - 24ft Truck',
  },
  customer: {
    fullName: 'Caroline Hughes',
    email: 'caroline.hughes@example.com',
    phone: '(212) 555-0194',
    contactMethod: 'phone',
  },
  pickup: {
    address: '450 West 42nd St, Apt 14B',
    city: 'New York',
    state: 'NY',
    zip: '10036',
    floor: 14,
    hasElevator: true,
    parkingInstructions: 'Loading dock reservation confirmed with building management 8am-12pm.',
  },
  dropoff: {
    address: '88 Meadow Road',
    city: 'Greenwich',
    state: 'CT',
    zip: '06830',
    floor: 2,
    hasElevator: false,
    parkingInstructions: 'Private driveway with direct truck access to front door.',
  },
  schedule: {
    moveDate: '2026-11-14',
    arrivalWindow: 'morning_8_10',
  },
  specialInstructions: 'Hardwood floor runners requested at both locations. 65" OLED TV requires moving box.',
};
