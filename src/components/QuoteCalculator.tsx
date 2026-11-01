import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Plus,
  Minus,
  Check,
  Copy,
  Printer,
  ArrowRight,
  ShieldAlert,
  Info,
  Truck,
  Users,
  Box,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  BookmarkCheck,
} from 'lucide-react';
import { QuoteInputs, QuoteBreakdown, MoveType, PropertySize } from '../types';
import { INVENTORY_CATALOG, PROPERTY_SIZE_DEFAULTS, PRICING_CONFIG } from '../data/mockData';
import { calculateQuote } from '../utils/quoteEngine';

interface QuoteCalculatorProps {
  initialInputs?: Partial<QuoteInputs>;
  onTransferToBooking: (inputs: QuoteInputs, quote: QuoteBreakdown) => void;
  onSaveQuote: (quote: QuoteBreakdown, inputs: QuoteInputs) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  initialInputs,
  onTransferToBooking,
  onSaveQuote,
}) => {
  const [calculationMode, setCalculationMode] = useState<'property' | 'inventory'>('property');
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  // Input states
  const [moveType, setMoveType] = useState<MoveType>(initialInputs?.moveType || 'local');
  const [pickupZip, setPickupZip] = useState(initialInputs?.pickupZip || '10024');
  const [dropoffZip, setDropoffZip] = useState(initialInputs?.dropoffZip || '06830');
  const [estimatedMiles, setEstimatedMiles] = useState(initialInputs?.estimatedMiles || 38);
  const [propertySize, setPropertySize] = useState<PropertySize>(initialInputs?.propertySize || '2_bedroom');
  const [pickupFloor, setPickupFloor] = useState(initialInputs?.pickupFloor || 2);
  const [dropoffFloor, setDropoffFloor] = useState(initialInputs?.dropoffFloor || 1);
  const [pickupHasElevator, setPickupHasElevator] = useState(initialInputs?.pickupHasElevator ?? true);
  const [dropoffHasElevator, setDropoffHasElevator] = useState(initialInputs?.dropoffHasElevator ?? false);
  const [longCarryRequired, setLongCarryRequired] = useState(initialInputs?.longCarryRequired ?? false);
  const [crewCount, setCrewCount] = useState<number>(initialInputs?.crewCount || 0); // 0 means auto recommended
  const [packingTier, setPackingTier] = useState<'none' | 'fragile_only' | 'full_pack'>(
    initialInputs?.packingTier || 'none'
  );
  const [includeStorage, setIncludeStorage] = useState(initialInputs?.includeStorage || false);
  const [storageWeeks, setStorageWeeks] = useState(initialInputs?.storageWeeks || 2);
  const [insuranceTier, setInsuranceTier] = useState<'basic' | 'standard' | 'premium'>(
    initialInputs?.insuranceTier || 'basic'
  );
  const [selectedMoveDate, setSelectedMoveDate] = useState(
    initialInputs?.selectedMoveDate || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]
  );
  const [inventoryCounts, setInventoryCounts] = useState<Record<string, number>>(
    initialInputs?.inventoryCounts || {}
  );

  // Grouped inventory categories
  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen & Dining', 'Office & Misc', 'Boxes & Fragile', 'Specialty'];

  const filteredCatalog = useMemo(() => {
    if (activeCategoryFilter === 'All') return INVENTORY_CATALOG;
    return INVENTORY_CATALOG.filter((i) => i.category === activeCategoryFilter);
  }, [activeCategoryFilter]);

  const updateItemQty = (id: string, delta: number) => {
    setInventoryCounts((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const currentInputs: QuoteInputs = useMemo(
    () => ({
      moveType,
      pickupZip,
      dropoffZip,
      estimatedMiles,
      propertySize,
      pickupFloor,
      dropoffFloor,
      pickupHasElevator,
      dropoffHasElevator,
      longCarryRequired,
      crewCount,
      truckSizeFeet: 24,
      includePacking: packingTier !== 'none',
      packingTier,
      includeStorage,
      storageWeeks,
      insuranceTier,
      inventoryCounts: calculationMode === 'inventory' ? inventoryCounts : {},
      selectedMoveDate,
    }),
    [
      moveType,
      pickupZip,
      dropoffZip,
      estimatedMiles,
      propertySize,
      pickupFloor,
      dropoffFloor,
      pickupHasElevator,
      dropoffHasElevator,
      longCarryRequired,
      crewCount,
      packingTier,
      includeStorage,
      storageWeeks,
      insuranceTier,
      calculationMode,
      inventoryCounts,
      selectedMoveDate,
    ]
  );

  const quote = useMemo(() => calculateQuote(currentInputs), [currentInputs]);

  const totalInventoryCount = Object.values(inventoryCounts).reduce((a, b) => a + b, 0);

  const handleCopyQuote = () => {
    const text = `Vanguard Relocations Free Quote (${quote.quoteId}):
• Estimated Total: $${quote.estimatedTotalLow} - $${quote.estimatedTotalHigh}
• Route: ${pickupZip} -> ${dropoffZip} (~${estimatedMiles} miles)
• Move Date: ${selectedMoveDate}
• Crew: ${quote.recommendedCrew} movers with ${quote.recommendedTruck}
• Estimated Duration: ~${quote.estimatedHours} hours at $${quote.hourlyRate}/hr
• Volume: ~${quote.totalCuFt} cu ft (~${quote.totalWeightLbs} lbs)
• Binding price guarantee applies. Book online at Vanguard Relocations.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    onSaveQuote(quote, currentInputs);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <section id="quote-calculator" className="py-12 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Real-Time Estimator Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Free Guaranteed Moving Quote Calculator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Customize every parameter of your upcoming move. Our algorithmic engine accounts for volume, travel, access staircases, and handling requirements with zero surprise fees.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-neutral-200/80 p-1.5 rounded-xl w-fit">
          <button
            onClick={() => setCalculationMode('property')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              calculationMode === 'property'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Quick Property Size Estimate
          </button>
          <button
            onClick={() => setCalculationMode('inventory')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              calculationMode === 'inventory'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>Detailed Room Inventory</span>
            {totalInventoryCount > 0 && (
              <span className="font-mono text-[11px] bg-neutral-900 text-white rounded-full px-1.5 py-0.2">
                {totalInventoryCount}
              </span>
            )}
          </button>
        </div>

        {/* 2-Column Split: Calculator Configuration (Left 7) & Live Summary Card (Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Controls & Form Sections */}
          <div className="lg:col-span-7 space-y-6">
            {/* Box 1: Route & Date */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-600" />
                  <span>1. Route & Schedule</span>
                </h3>
                <span className="text-xs text-neutral-500 font-mono">
                  {estimatedMiles} miles distance
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Pickup Postal Code
                  </label>
                  <input
                    type="text"
                    value={pickupZip}
                    onChange={(e) => setPickupZip(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    placeholder="10024"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Destination Postal Code
                  </label>
                  <input
                    type="text"
                    value={dropoffZip}
                    onChange={(e) => setDropoffZip(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                    placeholder="06830"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Target Move Date
                  </label>
                  <input
                    type="date"
                    value={selectedMoveDate}
                    onChange={(e) => setSelectedMoveDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Distance Slider */}
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
                  <span>Transit Distance</span>
                  <span className="font-mono font-bold text-neutral-900">{estimatedMiles} miles</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="450"
                  step="5"
                  value={estimatedMiles}
                  onChange={(e) => setEstimatedMiles(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                  <span>Local (&lt; 20 mi)</span>
                  <span>Regional (100 mi)</span>
                  <span>Interstate (400+ mi)</span>
                </div>
              </div>
            </div>

            {/* Box 2: Inventory Mode or Property Size */}
            {calculationMode === 'property' ? (
              <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Box className="w-4 h-4 text-neutral-600" />
                    <span>2. Residence & Floor Size</span>
                  </h3>
                  <button
                    onClick={() => setCalculationMode('inventory')}
                    className="text-xs text-neutral-800 underline hover:text-neutral-950 font-medium"
                  >
                    Switch to itemized list
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(Object.keys(PROPERTY_SIZE_DEFAULTS) as PropertySize[]).map((key) => {
                    const item = PROPERTY_SIZE_DEFAULTS[key];
                    const isSelected = propertySize === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setPropertySize(key)}
                        className={`p-3 text-left rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                            : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100/50'
                        }`}
                      >
                        <div className="text-xs font-bold leading-tight">{item.name}</div>
                        <div
                          className={`text-[11px] mt-1 ${
                            isSelected ? 'text-neutral-300' : 'text-neutral-500'
                          }`}
                        >
                          {item.sqFtEstimate}
                        </div>
                        <div
                          className={`text-[11px] font-mono mt-2 ${
                            isSelected ? 'text-neutral-300' : 'text-neutral-500'
                          }`}
                        >
                          ~{item.avgVolumeCuFt} cu ft
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <Box className="w-4 h-4 text-neutral-600" />
                    <span>2. Room-by-Room Inventory Estimator</span>
                  </h3>
                  <button
                    onClick={() => setInventoryCounts({})}
                    className="text-xs text-neutral-500 hover:text-neutral-900"
                  >
                    Reset Inventory
                  </button>
                </div>

                {/* Category Filter Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 text-xs scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                        activeCategoryFilter === cat
                          ? 'bg-neutral-900 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Catalog Grid */}
                <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                  {filteredCatalog.map((item) => {
                    const count = inventoryCounts[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="pr-2">
                          <div className="text-xs font-semibold text-neutral-900">{item.name}</div>
                          <div className="text-[11px] text-neutral-500 flex items-center gap-2">
                            <span>{item.volumeCuFt} cu ft</span>
                            <span>·</span>
                            <span>{item.weightLbs} lbs</span>
                            {item.category === 'Specialty' && (
                              <span className="text-neutral-800 font-bold">
                                · Specialty Rigging
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => updateItemQty(item.id, -1)}
                            disabled={count <= 0}
                            className="w-7 h-7 flex items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center font-mono text-xs font-bold text-neutral-900">
                            {count}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateItemQty(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
                  <span>
                    Total calculated volume: <strong className="font-mono text-neutral-900">{quote.totalCuFt} cu ft</strong>
                  </span>
                  <span>
                    Estimated payload: <strong className="font-mono text-neutral-900">{quote.totalWeightLbs.toLocaleString()} lbs</strong>
                  </span>
                </div>
              </div>
            )}

            {/* Box 3: Access & Logistics Factors */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-neutral-600" />
                <span>3. Access, Stairs & Carrying Logistics</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup Access */}
                <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                  <div className="text-xs font-bold text-neutral-800 mb-2">Pickup Location Access</div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-neutral-600">Floor Level</label>
                    <select
                      value={pickupFloor}
                      onChange={(e) => setPickupFloor(Number(e.target.value))}
                      className="px-2 py-1 text-xs bg-white border border-neutral-300 rounded font-mono"
                    >
                      <option value="1">1st Floor / Ground</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                      <option value="4">4th Floor</option>
                      <option value="5">5th+ Floor</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pickupHasElevator}
                      onChange={(e) => setPickupHasElevator(e.target.checked)}
                      className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    />
                    <span>Freight or passenger elevator available</span>
                  </label>
                </div>

                {/* Dropoff Access */}
                <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                  <div className="text-xs font-bold text-neutral-800 mb-2">Dropoff Location Access</div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-neutral-600">Floor Level</label>
                    <select
                      value={dropoffFloor}
                      onChange={(e) => setDropoffFloor(Number(e.target.value))}
                      className="px-2 py-1 text-xs bg-white border border-neutral-300 rounded font-mono"
                    >
                      <option value="1">1st Floor / Ground</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                      <option value="4">4th Floor</option>
                      <option value="5">5th+ Floor</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dropoffHasElevator}
                      onChange={(e) => setDropoffHasElevator(e.target.checked)}
                      className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                    />
                    <span>Freight or passenger elevator available</span>
                  </label>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-200">
                <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={longCarryRequired}
                    onChange={(e) => setLongCarryRequired(e.target.checked)}
                    className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                  />
                  <span>Long walking carry (&gt;75 feet between parking spot and front door entrance)</span>
                </label>
              </div>
            </div>

            {/* Box 4: Optional Add-ons & Valuation Protection */}
            <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2 mb-4">
                <ShieldAlert className="w-4 h-4 text-neutral-600" />
                <span>4. Packing Services & Valuation Coverage</span>
              </h3>

              <div className="space-y-4">
                {/* Packing Options */}
                <div>
                  <div className="text-xs font-medium text-neutral-700 mb-2">
                    Packing & Box Preparation
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPackingTier('none')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        packingTier === 'none'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Self-Packed</div>
                      <div className="text-[11px] opacity-80 mt-0.5">Boxes packed by customer ($0)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPackingTier('fragile_only')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        packingTier === 'fragile_only'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Fragile Only</div>
                      <div className="text-[11px] opacity-80 mt-0.5">Glassware & TVs (+$180)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPackingTier('full_pack')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        packingTier === 'full_pack'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Full White Glove</div>
                      <div className="text-[11px] opacity-80 mt-0.5">All rooms & crating (+$490)</div>
                    </button>
                  </div>
                </div>

                {/* Storage Add-on */}
                <div className="pt-3 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs font-medium text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeStorage}
                        onChange={(e) => setIncludeStorage(e.target.checked)}
                        className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>Need Climate-Controlled Storage in Transit?</span>
                    </label>

                    {includeStorage && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-500">Duration:</span>
                        <select
                          value={storageWeeks}
                          onChange={(e) => setStorageWeeks(Number(e.target.value))}
                          className="px-2 py-1 text-xs bg-white border border-neutral-300 rounded font-mono"
                        >
                          <option value="1">1 Week ($115)</option>
                          <option value="2">2 Weeks ($230)</option>
                          <option value="4">1 Month ($460)</option>
                          <option value="8">2 Months ($920)</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Insurance Tier */}
                <div className="pt-3 border-t border-neutral-200">
                  <div className="text-xs font-medium text-neutral-700 mb-2">
                    Valuation Insurance Plan
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setInsuranceTier('basic')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        insuranceTier === 'basic'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Basic Released</div>
                      <div className="text-[11px] opacity-80 mt-0.5">$0.60/lb standard (Free)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInsuranceTier('standard')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        insuranceTier === 'standard'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Comprehensive</div>
                      <div className="text-[11px] opacity-80 mt-0.5">$25k coverage (+$125)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInsuranceTier('premium')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors ${
                        insuranceTier === 'premium'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold">Full Replacement</div>
                      <div className="text-[11px] opacity-80 mt-0.5">$75k zero deductible (+$245)</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Transparent Quote Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white border-2 border-neutral-900 rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Instant Quote Reference
                  </span>
                  <div className="font-mono text-xs font-semibold text-neutral-800">
                    {quote.quoteId}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
                    Binding Rate Guaranteed
                  </span>
                </div>
              </div>

              {/* Price Display */}
              <div className="py-5 border-b border-neutral-200 text-center sm:text-left">
                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                  Estimated Total Investment Range
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-mono tracking-tight mt-1">
                  ${quote.estimatedTotalLow.toLocaleString()}{' '}
                  <span className="text-neutral-400 font-light text-2xl">–</span> ${quote.estimatedTotalHigh.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Expected midpoint: <strong className="text-neutral-800 font-mono">${quote.subtotal.toLocaleString()}</strong> · All taxes & equipment included
                </div>
              </div>

              {/* Resource Recommendation Pill Strip */}
              <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-neutral-600 shrink-0" />
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase font-bold">Crew Assigned</div>
                    <div className="font-bold text-neutral-900">{quote.recommendedCrew} Certified Movers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-neutral-600 shrink-0" />
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase font-bold">Truck Fleet</div>
                    <div className="font-bold text-neutral-900 truncate" title={quote.recommendedTruck}>
                      {quote.recommendedTruck}
                    </div>
                  </div>
                </div>
              </div>

              {/* Line-item cost breakdown */}
              <div className="space-y-2 py-3 border-b border-neutral-200 text-xs">
                <div className="flex items-center justify-between text-neutral-700">
                  <span>
                    Labor ({quote.estimatedHours} hrs @ ${quote.hourlyRate}/hr)
                  </span>
                  <span className="font-mono tabular-nums font-semibold">${quote.laborTotal}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-700">
                  <span>Commercial Truck & Fuel Fee</span>
                  <span className="font-mono tabular-nums font-semibold">${quote.truckAndEquipmentFee}</span>
                </div>

                {quote.mileageAndFuelFee > 0 && (
                  <div className="flex items-center justify-between text-neutral-700">
                    <span>Transit Mileage Fee ({estimatedMiles} miles)</span>
                    <span className="font-mono tabular-nums font-semibold">${quote.mileageAndFuelFee}</span>
                  </div>
                )}

                {quote.packingMaterialsFee > 0 && (
                  <div className="flex items-center justify-between text-neutral-700">
                    <span>Packing Services & Materials</span>
                    <span className="font-mono tabular-nums font-semibold">${quote.packingMaterialsFee}</span>
                  </div>
                )}

                {quote.storageFee > 0 && (
                  <div className="flex items-center justify-between text-neutral-700">
                    <span>Transit Storage ({storageWeeks} wks)</span>
                    <span className="font-mono tabular-nums font-semibold">${quote.storageFee}</span>
                  </div>
                )}

                {quote.insuranceFee > 0 && (
                  <div className="flex items-center justify-between text-neutral-700">
                    <span>Valuation Protection Upgrade</span>
                    <span className="font-mono tabular-nums font-semibold">${quote.insuranceFee}</span>
                  </div>
                )}

                {quote.specialtyItemsFee > 0 && (
                  <div className="flex items-center justify-between text-neutral-700">
                    <span>Specialty Rigging & Equipment Fee</span>
                    <span className="font-mono tabular-nums font-semibold">${quote.specialtyItemsFee}</span>
                  </div>
                )}
              </div>

              {/* Key Deliverables Included */}
              <div className="py-3 text-[11px] text-neutral-600 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>Free furniture padding, disassembly & floor runners</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>No credit card required to calculate or save quote</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>Zero cancellation fee up to 48 hours before move</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => onTransferToBooking(currentInputs, quote)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-sm"
                >
                  <span>Proceed to Interactive Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>{savedSuccess ? 'Saved!' : 'Save Quote'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyQuote}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="flex items-center justify-center gap-1 py-2 px-2 text-[11px] font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
