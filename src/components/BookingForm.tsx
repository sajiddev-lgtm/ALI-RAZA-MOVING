import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Truck,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Printer,
  Copy,
  Building,
  User,
  Phone,
  Mail,
  FileCheck,
} from 'lucide-react';
import { BookingRecord, QuoteBreakdown, QuoteInputs, PropertySize } from '../types';
import { PROPERTY_SIZE_DEFAULTS } from '../data/mockData';

interface BookingFormProps {
  initialQuote?: QuoteBreakdown | null;
  initialInputs?: QuoteInputs | null;
  onBookingComplete: (booking: BookingRecord) => void;
  onBackToCalculator: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialQuote,
  initialInputs,
  onBookingComplete,
  onBackToCalculator,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Form State
  // Step 1: Route & Date
  const [moveDate, setMoveDate] = useState(
    initialInputs?.selectedMoveDate || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]
  );
  const [arrivalWindow, setArrivalWindow] = useState<'morning_8_10' | 'afternoon_1_3' | 'evening_4_6'>('morning_8_10');
  const [pickupAddress, setPickupAddress] = useState('240 Central Park South, Apt 8A');
  const [pickupCity, setPickupCity] = useState('New York');
  const [pickupState, setPickupState] = useState('NY');
  const [pickupZip, setPickupZip] = useState(initialInputs?.pickupZip || '10019');

  const [dropoffAddress, setDropoffAddress] = useState('42 Meadowbank Lane');
  const [dropoffCity, setDropoffCity] = useState('Greenwich');
  const [dropoffState, setDropoffState] = useState('CT');
  const [dropoffZip, setDropoffZip] = useState(initialInputs?.dropoffZip || '06830');

  // Step 2: Access & Logistics
  const [pickupFloor, setPickupFloor] = useState(initialInputs?.pickupFloor || 8);
  const [pickupHasElevator, setPickupHasElevator] = useState(initialInputs?.pickupHasElevator ?? true);
  const [pickupParkingInstructions, setPickupParkingInstructions] = useState(
    'Loading dock reservation secured with concierge for morning slot.'
  );

  const [dropoffFloor, setDropoffFloor] = useState(initialInputs?.dropoffFloor || 2);
  const [dropoffHasElevator, setDropoffHasElevator] = useState(initialInputs?.dropoffHasElevator ?? false);
  const [dropoffParkingInstructions, setDropoffParkingInstructions] = useState(
    'Driveway wide enough for 26ft commercial truck.'
  );

  // Step 3: Property & Inventory
  const [propertySize, setPropertySize] = useState<PropertySize>(initialInputs?.propertySize || '2_bedroom');
  const [specialInstructions, setSpecialInstructions] = useState(
    'Please bring protective floor runners for polished oak floors at destination.'
  );

  // Step 4: Contact & Details
  const [fullName, setFullName] = useState('Alexander Wright');
  const [email, setEmail] = useState('alexander.wright@example.com');
  const [phone, setPhone] = useState('(212) 555-0182');
  const [contactMethod, setContactMethod] = useState<'phone' | 'email' | 'text'>('phone');
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!pickupAddress.trim()) newErrors.pickupAddress = 'Pickup street address is required';
      if (!pickupZip.trim()) newErrors.pickupZip = 'Pickup postal code is required';
      if (!dropoffAddress.trim()) newErrors.dropoffAddress = 'Destination address is required';
      if (!dropoffZip.trim()) newErrors.dropoffZip = 'Destination postal code is required';
      if (!moveDate) newErrors.moveDate = 'Please select a move date';
    } else if (step === 2) {
      if (pickupFloor < 1) newErrors.pickupFloor = 'Floor must be at least 1';
      if (dropoffFloor < 1) newErrors.dropoffFloor = 'Floor must be at least 1';
    } else if (step === 4) {
      if (!fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email is required';
      if (!phone.trim() || phone.length < 8) newErrors.phone = 'Valid phone number is required';
      if (!agreedToTerms) newErrors.agreedToTerms = 'You must agree to the moving terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    const bookingId = `VR-${Math.floor(10000 + Math.random() * 90000)}`;

    const fallbackQuote: QuoteBreakdown = initialQuote || {
      quoteId: `Q-${Math.floor(10000 + Math.random() * 90000)}`,
      estimatedHours: 5.5,
      hourlyRate: 195,
      laborTotal: 1072.5,
      mileageAndFuelFee: 85,
      truckAndEquipmentFee: 140,
      packingMaterialsFee: 0,
      storageFee: 0,
      insuranceFee: 125,
      specialtyItemsFee: 0,
      subtotal: 1422.5,
      estimatedTotalLow: 1350,
      estimatedTotalHigh: 1540,
      totalCuFt: PROPERTY_SIZE_DEFAULTS[propertySize].avgVolumeCuFt,
      totalWeightLbs: PROPERTY_SIZE_DEFAULTS[propertySize].avgWeightLbs,
      recommendedCrew: PROPERTY_SIZE_DEFAULTS[propertySize].recommendedCrew,
      recommendedTruck: PROPERTY_SIZE_DEFAULTS[propertySize].recommendedTruck,
    };

    const newBooking: BookingRecord = {
      id: bookingId,
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      quote: fallbackQuote,
      customer: {
        fullName,
        email,
        phone,
        contactMethod,
      },
      pickup: {
        address: pickupAddress,
        city: pickupCity,
        state: pickupState,
        zip: pickupZip,
        floor: pickupFloor,
        hasElevator: pickupHasElevator,
        parkingInstructions: pickupParkingInstructions,
      },
      dropoff: {
        address: dropoffAddress,
        city: dropoffCity,
        state: dropoffState,
        zip: dropoffZip,
        floor: dropoffFloor,
        hasElevator: dropoffHasElevator,
        parkingInstructions: dropoffParkingInstructions,
      },
      schedule: {
        moveDate,
        arrivalWindow,
      },
      specialInstructions,
    };

    setConfirmedBooking(newBooking);
    onBookingComplete(newBooking);
  };

  const copyBookingId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // If already confirmed, render the Confirmation View
  if (confirmedBooking) {
    return (
      <section className="py-12 bg-neutral-100/60 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-neutral-900 rounded-2xl p-6 sm:p-10 shadow-lg">
            {/* Header Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Reservation Confirmed
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                    Your Move is Officially Scheduled
                  </h2>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-right w-full sm:w-auto">
                <div className="text-[11px] font-medium text-neutral-500">Booking Reference ID</div>
                <div className="flex items-center justify-end gap-2 font-mono text-base font-extrabold text-neutral-950">
                  <span>{confirmedBooking.id}</span>
                  <button
                    type="button"
                    onClick={() => copyBookingId(confirmedBooking.id)}
                    className="p-1 hover:bg-neutral-200 rounded transition-colors text-neutral-600"
                    title="Copy ID"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                {copiedId && <div className="text-[10px] text-emerald-600 font-medium">Copied!</div>}
              </div>
            </div>

            {/* Move Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Pickup and Destination */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Transit Route & Access</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-neutral-500 font-medium">Origin Pickup:</div>
                    <div className="font-semibold text-neutral-900">
                      {confirmedBooking.pickup.address}, {confirmedBooking.pickup.city}, {confirmedBooking.pickup.state} {confirmedBooking.pickup.zip}
                    </div>
                    <div className="text-neutral-500 text-[11px]">
                      Floor {confirmedBooking.pickup.floor} · {confirmedBooking.pickup.hasElevator ? 'Elevator Accessible' : 'Stairs Only'}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-200">
                    <div className="text-neutral-500 font-medium">Destination Drop-off:</div>
                    <div className="font-semibold text-neutral-900">
                      {confirmedBooking.dropoff.address}, {confirmedBooking.dropoff.city}, {confirmedBooking.dropoff.state} {confirmedBooking.dropoff.zip}
                    </div>
                    <div className="text-neutral-500 text-[11px]">
                      Floor {confirmedBooking.dropoff.floor} · {confirmedBooking.dropoff.hasElevator ? 'Elevator Accessible' : 'Stairs Only'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule and Crew */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Dispatch Schedule & Crew</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="text-neutral-500 font-medium">Scheduled Move Date:</div>
                    <div className="font-semibold text-neutral-900 font-mono">
                      {confirmedBooking.schedule.moveDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-neutral-500 font-medium">Arrival Window:</div>
                    <div className="font-semibold text-neutral-900">
                      {confirmedBooking.schedule.arrivalWindow === 'morning_8_10'
                        ? 'Morning Slot: 8:00 AM – 10:00 AM'
                        : confirmedBooking.schedule.arrivalWindow === 'afternoon_1_3'
                        ? 'Afternoon Slot: 1:00 PM – 3:00 PM'
                        : 'Evening Slot: 4:00 PM – 6:00 PM'}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-neutral-200">
                    <div className="text-neutral-500 font-medium">Assigned Resources:</div>
                    <div className="font-semibold text-neutral-900">
                      {confirmedBooking.quote.recommendedCrew} Movers · {confirmedBooking.quote.recommendedTruck}
                    </div>
                    <div className="text-neutral-500 text-[11px]">
                      Est. Total: ${confirmedBooking.quote.estimatedTotalLow} – ${confirmedBooking.quote.estimatedTotalHigh} (Binding Quote)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps for Customer */}
            <div className="p-4 bg-neutral-900 text-white rounded-xl mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                What Happens Next
              </div>
              <ul className="text-xs space-y-1.5 text-neutral-200">
                <li>• Our senior dispatch supervisor will call 24 hours prior to reconfirm access timings.</li>
                <li>• You will receive live GPS SMS tracking of your assigned commercial truck on moving morning.</li>
                <li>• Disassembly of standard bed frames and dining tables is fully included.</li>
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Confirmation / Receipt</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setConfirmedBooking(null);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Book Another Move
                </button>
                <button
                  type="button"
                  onClick={onBackToCalculator}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  Return to Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Active Multi-Step Booking Form View
  return (
    <section id="interactive-booking" className="py-12 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
            Fast 4-Step Reservation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Reserve Your Move Date Online
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600">
            Lock in your crew and vehicle with our verified binding pricing. No deposit required to reserve up to 72 hours out.
          </p>
        </div>

        {/* Progress Step Indicator */}
        <div className="mb-10">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <button
              onClick={() => setCurrentStep(1)}
              className={`p-2 rounded-lg border text-left transition-all ${
                currentStep === 1
                  ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                  : currentStep > 1
                  ? 'border-neutral-300 bg-neutral-50 text-neutral-800 font-medium'
                  : 'border-neutral-200 text-neutral-400'
              }`}
            >
              <div className="text-[10px] uppercase opacity-75">Step 1</div>
              <div className="truncate text-xs">Addresses & Date</div>
            </button>

            <button
              onClick={() => validateStep(1) && setCurrentStep(2)}
              className={`p-2 rounded-lg border text-left transition-all ${
                currentStep === 2
                  ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                  : currentStep > 2
                  ? 'border-neutral-300 bg-neutral-50 text-neutral-800 font-medium'
                  : 'border-neutral-200 text-neutral-400'
              }`}
            >
              <div className="text-[10px] uppercase opacity-75">Step 2</div>
              <div className="truncate text-xs">Access & Parking</div>
            </button>

            <button
              onClick={() => validateStep(1) && validateStep(2) && setCurrentStep(3)}
              className={`p-2 rounded-lg border text-left transition-all ${
                currentStep === 3
                  ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                  : currentStep > 3
                  ? 'border-neutral-300 bg-neutral-50 text-neutral-800 font-medium'
                  : 'border-neutral-200 text-neutral-400'
              }`}
            >
              <div className="text-[10px] uppercase opacity-75">Step 3</div>
              <div className="truncate text-xs">Home & Inventory</div>
            </button>

            <button
              onClick={() => validateStep(1) && validateStep(2) && setCurrentStep(4)}
              className={`p-2 rounded-lg border text-left transition-all ${
                currentStep === 4
                  ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                  : 'border-neutral-200 text-neutral-400'
              }`}
            >
              <div className="text-[10px] uppercase opacity-75">Step 4</div>
              <div className="truncate text-xs">Contact & Lock</div>
            </button>
          </div>
        </div>

        {/* Step Forms */}
        <form onSubmit={handleSubmitBooking} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          {/* STEP 1: Addresses and Move Date */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  Step 1: Relocation Route & Timing
                </h3>
                <p className="text-xs text-neutral-500">
                  Where will our team pick up your items and where are we heading?
                </p>
              </div>

              {/* Pickup Address */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Pickup Location (Origin)</span>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Street Address & Apartment / Suite #
                  </label>
                  <input
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    placeholder="e.g. 240 Central Park South, Apt 8A"
                  />
                  {errors.pickupAddress && (
                    <div className="text-[11px] text-red-600 mt-1">{errors.pickupAddress}</div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">City</label>
                    <input
                      type="text"
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">State</label>
                    <input
                      type="text"
                      value={pickupState}
                      onChange={(e) => setPickupState(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={pickupZip}
                      onChange={(e) => setPickupZip(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    />
                    {errors.pickupZip && (
                      <div className="text-[11px] text-red-600 mt-1">{errors.pickupZip}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Destination Address */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Destination Location (Drop-off)</span>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Street Address & Apartment / Suite #
                  </label>
                  <input
                    type="text"
                    value={dropoffAddress}
                    onChange={(e) => setDropoffAddress(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    placeholder="e.g. 42 Meadowbank Lane"
                  />
                  {errors.dropoffAddress && (
                    <div className="text-[11px] text-red-600 mt-1">{errors.dropoffAddress}</div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">City</label>
                    <input
                      type="text"
                      value={dropoffCity}
                      onChange={(e) => setDropoffCity(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">State</label>
                    <input
                      type="text"
                      value={dropoffState}
                      onChange={(e) => setDropoffState(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={dropoffZip}
                      onChange={(e) => setDropoffZip(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    />
                    {errors.dropoffZip && (
                      <div className="text-[11px] text-red-600 mt-1">{errors.dropoffZip}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Move Date & Slot */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Target Date & Preferred Arrival Window</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={moveDate}
                      onChange={(e) => setMoveDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    />
                    {errors.moveDate && (
                      <div className="text-[11px] text-red-600 mt-1">{errors.moveDate}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Arrival Window</label>
                    <select
                      value={arrivalWindow}
                      onChange={(e) => setArrivalWindow(e.target.value as any)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    >
                      <option value="morning_8_10">Morning (8:00 AM – 10:00 AM)</option>
                      <option value="afternoon_1_3">Afternoon (1:00 PM – 3:00 PM)</option>
                      <option value="evening_4_6">Late Afternoon (4:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Access, Elevators & Parking */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  Step 2: Building Access & Parking Logistics
                </h3>
                <p className="text-xs text-neutral-500">
                  Providing access notes guarantees our crew arrives with the right ramp lengths, floor runners, and permits.
                </p>
              </div>

              {/* Pickup Details */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Pickup Location Access Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Floor Level
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={pickupFloor}
                      onChange={(e) => setPickupFloor(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg font-mono"
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 text-xs text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={pickupHasElevator}
                        onChange={(e) => setPickupHasElevator(e.target.checked)}
                        className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>Elevator available for mover use</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Parking / Loading Dock Notes
                  </label>
                  <input
                    type="text"
                    value={pickupParkingInstructions}
                    onChange={(e) => setPickupParkingInstructions(e.target.value)}
                    placeholder="e.g. Building loading bay reserved from 8 AM to 12 PM"
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Dropoff Details */}
              <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
                <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  Drop-off Location Access Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Floor Level
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="60"
                      value={dropoffFloor}
                      onChange={(e) => setDropoffFloor(Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg font-mono"
                    />
                  </div>
                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 text-xs text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dropoffHasElevator}
                        onChange={(e) => setDropoffHasElevator(e.target.checked)}
                        className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>Elevator available for mover use</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Destination Driveway / Street Parking Notes
                  </label>
                  <input
                    type="text"
                    value={dropoffParkingInstructions}
                    onChange={(e) => setDropoffParkingInstructions(e.target.value)}
                    placeholder="e.g. Private driveway, plenty of room for 26ft truck"
                    className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Property Type & Special Handling */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  Step 3: Property Size & Special Instructions
                </h3>
                <p className="text-xs text-neutral-500">
                  Select your home layout to allocate adequate commercial equipment and moving supplies.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <label className="block text-xs font-bold text-neutral-800 mb-3 uppercase tracking-wider">
                  Property Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(PROPERTY_SIZE_DEFAULTS) as PropertySize[]).map((key) => {
                    const isSelected = propertySize === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPropertySize(key)}
                        className={`p-3 text-left rounded-lg border text-xs transition-colors ${
                          isSelected
                            ? 'border-neutral-900 bg-neutral-900 text-white font-bold'
                            : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <div>{PROPERTY_SIZE_DEFAULTS[key].name}</div>
                        <div className="text-[11px] opacity-75 font-mono mt-1">
                          ~{PROPERTY_SIZE_DEFAULTS[key].avgVolumeCuFt} cu ft
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <label className="block text-xs font-bold text-neutral-800 mb-2 uppercase tracking-wider">
                  Special Handling & Instructions
                </label>
                <textarea
                  rows={3}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Note any fragile art, heavy stone tabletops, pet arrangements, or building rules..."
                  className="w-full p-3 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Contact & Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  Step 4: Contact Details & Reservation Finalization
                </h3>
                <p className="text-xs text-neutral-500">
                  Who should our dispatch lead contact with updates on moving day?
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Primary Contact Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    placeholder="e.g. Alexander Wright"
                  />
                  {errors.fullName && <div className="text-[11px] text-red-600 mt-1">{errors.fullName}</div>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      placeholder="alexander@example.com"
                    />
                    {errors.email && <div className="text-[11px] text-red-600 mt-1">{errors.email}</div>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Direct Mobile Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                      placeholder="(212) 555-0182"
                    />
                    {errors.phone && <div className="text-[11px] text-red-600 mt-1">{errors.phone}</div>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Preferred Dispatch Communication Channel
                  </label>
                  <div className="flex gap-4 text-xs text-neutral-800">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={contactMethod === 'phone'}
                        onChange={() => setContactMethod('phone')}
                      />
                      <span>Phone Call</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="text"
                        checked={contactMethod === 'text'}
                        onChange={() => setContactMethod('text')}
                      />
                      <span>SMS Text Message</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={contactMethod === 'email'}
                        onChange={() => setContactMethod('email')}
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Binding Rate Summary Preview */}
              <div className="bg-neutral-900 text-white p-4 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Guaranteed Price Protection:</span>
                  <span className="font-mono text-emerald-400 font-bold">100% Binding Rate Policy</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>Target Date:</span>
                  <span className="font-mono text-white">{moveDate} ({arrivalWindow})</span>
                </div>
                <div className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
                  By confirming, a commercial truck and certified crew will be assigned to your route. No advance deposit charged today.
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                  />
                  <span>
                    I confirm the above addresses and inventory descriptions are accurate to the best of my knowledge, and agree to standard DOT carrier terms.
                  </span>
                </label>
                {errors.agreedToTerms && (
                  <div className="text-[11px] text-red-600 mt-1">{errors.agreedToTerms}</div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-neutral-200">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Step</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToCalculator}
                className="text-xs text-neutral-500 hover:text-neutral-900 font-medium"
              >
                Back to Quote Estimator
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors ml-auto shadow-xs"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-all ml-auto shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirm & Lock Reservation</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
