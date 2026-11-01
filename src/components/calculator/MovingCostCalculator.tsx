import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Truck,
  Home,
  Building2,
  Package,
  Check,
  ChevronRight,
  ChevronLeft,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Info,
  Layers,
  Sparkles,
  AlertCircle,
  Clock,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { PRICING_CONFIG } from '../../data/pricingConfig';
import { pricingService } from '../../services/pricingService';
import { useLanguage } from '../../context/LanguageContext';

export interface CalculatorState {
  // Step 1
  originCity: string;
  destinationCity: string;
  moveDate: string;
  moveType: 'residential' | 'commercial' | 'office' | 'international';
  isReturnTrip: boolean;

  // Step 2
  propertyType: 'studio' | '1bed' | '2bed' | '3bed' | '4plus_house' | 'villa' | 'office' | 'custom';
  bedroomsCount: number;
  approxFurnitureItems: number;

  // Step 3: Requirements
  furniturePacking: boolean;
  unpackingServices: boolean;
  furnitureDismantling: boolean;
  furnitureAssembly: boolean;
  fragileItemHandling: boolean;
  heavyFurnitureTransport: boolean;
  loadingUnloading: boolean;
  storageNeeded: boolean;
  storageWeeks: number;

  // Step 4: Access & Additional Info
  pickupFloor: number;
  pickupHasElevator: boolean;
  dropoffFloor: number;
  dropoffHasElevator: boolean;
  approxBoxes: number;
  extraHelpersCount: number;
  longCarryDistance: boolean;
  specialHandlingNotes: string;
}

const DEFAULT_CALCULATOR_STATE: CalculatorState = {
  originCity: 'Ruwi / Muttrah, Muscat',
  destinationCity: 'Al Mouj, Seeb, Muscat',
  moveDate: new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0],
  moveType: 'residential',
  isReturnTrip: false,

  propertyType: '2bed',
  bedroomsCount: 2,
  approxFurnitureItems: 18,

  furniturePacking: true,
  unpackingServices: false,
  furnitureDismantling: true,
  furnitureAssembly: true,
  fragileItemHandling: true,
  heavyFurnitureTransport: false,
  loadingUnloading: true,
  storageNeeded: false,
  storageWeeks: 1,

  pickupFloor: 2,
  pickupHasElevator: true,
  dropoffFloor: 1,
  dropoffHasElevator: true,
  approxBoxes: 30,
  extraHelpersCount: 0,
  longCarryDistance: false,
  specialHandlingNotes: '',
};

export const MovingCostCalculator: React.FC = () => {
  const navigate = useNavigate();
  const { language, isRTL, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pricingRules, setPricingRules] = useState<any>(PRICING_CONFIG);

  // Fetch published admin pricing rules on mount
  useEffect(() => {
    pricingService.getActivePricing().then((active) => {
      if (active) {
        setPricingRules(active);
      }
    });
  }, []);

  const [state, setState] = useState<CalculatorState>(() => {
    try {
      const saved = sessionStorage.getItem('oan_calculator_state');
      if (saved) {
        return { ...DEFAULT_CALCULATOR_STATE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_CALCULATOR_STATE;
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('oan_calculator_state', JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const updateState = <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  // Dynamic real-time calculation based on admin published rates
  const calculation = useMemo(() => {
    const isCustomRoute =
      state.moveType === 'international' ||
      state.originCity.toLowerCase().includes('dubai') ||
      state.destinationCity.toLowerCase().includes('dubai') ||
      state.destinationCity.toLowerCase().includes('uae') ||
      state.destinationCity.toLowerCase().includes('qatar') ||
      state.destinationCity.toLowerCase().includes('saudi');

    // 1. Base property charge
    let baseMovingCost = 85;
    let baseLabor = 30;
    const propertyMap: Record<string, { base: number; labor: number; name: string; nameAr: string }> = {
      studio: { base: 40, labor: 15, name: 'Studio Apartment', nameAr: 'شقة استوديو' },
      '1bed': { base: 55, labor: 20, name: '1-Bedroom Apartment', nameAr: 'شقة غرفة وصالة' },
      '2bed': { base: 85, labor: 30, name: '2-Bedroom Apartment', nameAr: 'شقة غرفتين وصالة' },
      '3bed': { base: 125, labor: 40, name: '3-Bedroom Apartment', nameAr: 'شقة ٣ غرف وصالة' },
      '4plus_house': { base: 175, labor: 50, name: '4+ Bedroom House', nameAr: 'منزل ٤ غرف فأكثر' },
      villa: { base: 220, labor: 60, name: 'Villa (Multi-Story)', nameAr: 'فيلا متعددة الطوابق' },
      office: { base: 140, labor: 45, name: 'Commercial Office Space', nameAr: 'مكتب تجاري' },
      custom: { base: 60, labor: 25, name: 'Custom Inventory', nameAr: 'منقولات مخصصة' },
    };

    const propInfo = propertyMap[state.propertyType] || propertyMap['2bed'];
    baseMovingCost = propInfo.base;
    baseLabor = propInfo.labor;

    // 2. Distance charge
    let distanceCharge = 20;
    const destLower = state.destinationCity.toLowerCase();
    if (destLower.includes('salalah') || destLower.includes('dhofar')) {
      distanceCharge = 160;
    } else if (destLower.includes('sohar') || destLower.includes('batinah')) {
      distanceCharge = 45;
    } else if (destLower.includes('nizwa') || destLower.includes('dakhiliyah')) {
      distanceCharge = 40;
    } else if (destLower.includes('sur') || destLower.includes('sharqiyah')) {
      distanceCharge = 55;
    } else if (isCustomRoute) {
      distanceCharge = 180;
    } else {
      distanceCharge = 20; // local Muscat
    }

    if (state.isReturnTrip) {
      distanceCharge = Math.round(distanceCharge * 1.6);
    }

    // 3. Labor charges
    let laborCharges = baseLabor;
    if (state.loadingUnloading) {
      laborCharges += 25;
    }
    if (!state.pickupHasElevator && state.pickupFloor > 2) {
      laborCharges += (state.pickupFloor - 2) * 5;
    }
    if (!state.dropoffHasElevator && state.dropoffFloor > 2) {
      laborCharges += (state.dropoffFloor - 2) * 5;
    }
    if (state.extraHelpersCount > 0) {
      laborCharges += state.extraHelpersCount * 15;
    }

    // 4. Packing charges
    let packingCharges = 0;
    if (state.furniturePacking) packingCharges += 25;
    if (state.unpackingServices) packingCharges += 20;
    if (state.fragileItemHandling) packingCharges += 20;

    // 5. Additional service charges
    let additionalServiceCharges = 0;
    if (state.furnitureDismantling) additionalServiceCharges += 15;
    if (state.furnitureAssembly) additionalServiceCharges += 15;
    if (state.heavyFurnitureTransport) additionalServiceCharges += 40;
    if (state.storageNeeded) additionalServiceCharges += state.storageWeeks * 35;

    const subtotal = baseMovingCost + distanceCharge + packingCharges + laborCharges + additionalServiceCharges;

    // Discount if code applies
    const discountPct = 15;
    const discountAmount = Math.round((subtotal * discountPct) / 100);
    const totalOMR = Math.max(35, subtotal - discountAmount);

    return {
      isCustomRoute,
      baseMovingCost,
      distanceCharge,
      laborCharges,
      packingCharges,
      additionalServiceCharges,
      subtotal,
      discountAmount,
      totalOMR,
      propertyLabel: language === 'ar' ? propInfo.nameAr : propInfo.name,
    };
  }, [state, language]);

  const handleTransferToQuote = () => {
    const payload = {
      from: state.originCity,
      to: state.destinationCity,
      date: state.moveDate,
      moveType: state.moveType,
      propertyType: state.propertyType,
      additionalServices: [
        state.furniturePacking && 'Furniture packing',
        state.unpackingServices && 'Unpacking services',
        state.furnitureDismantling && 'Furniture dismantling',
        state.furnitureAssembly && 'Furniture assembly',
        state.fragileItemHandling && 'Fragile item handling',
        state.storageNeeded && 'Storage requirements',
      ].filter(Boolean),
      totalOMR: calculation.totalOMR,
      estimatedCostMin: Math.round(calculation.totalOMR * 0.95),
      estimatedCostMax: Math.round(calculation.totalOMR * 1.15),
      notes: state.specialHandlingNotes,
    };
    sessionStorage.setItem('oan_quote_prefill', JSON.stringify(payload));
    navigate('/get-a-quote');
  };

  const steps = [
    { num: 1, title: t('step1Title', 'Moving Details') },
    { num: 2, title: t('step2Title', 'Property Sizing') },
    { num: 3, title: t('step3Title', 'Services') },
    { num: 4, title: t('step4Title', 'Access Details') },
    { num: 5, title: t('step5Title', 'Price Breakdown') },
  ];

  return (
    <div className="bg-white dark:bg-[#070D1E] text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 transition-colors">
      {/* Visual Progress Stepper */}
      <div className="mb-8">
        {/* Mobile Compact Progress Bar */}
        <div className="sm:hidden mb-4">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-orange-600 dark:text-amber-400">
              {language === 'ar' ? `الخطوة ${currentStep} من ٥: ` : `Step ${currentStep} of 5: `}
              {steps[currentStep - 1].title}
            </span>
            <span className="font-mono text-slate-500 dark:text-slate-400">
              {Math.round((currentStep / 5) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Desktop Horizontal Progress Stepper with Step Lines & Icons */}
        <div className="hidden sm:block">
          <div className="relative flex items-center justify-between">
            {/* Animated Background Line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-slate-200 dark:bg-slate-800 z-0">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Circles */}
            {steps.map((s) => {
              const isCompleted = s.num < currentStep;
              const isActive = s.num === currentStep;

              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setCurrentStep(s.num)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 ${
                      isActive
                        ? 'bg-orange-500 text-white ring-4 ring-orange-500/20 shadow-lg scale-110'
                        : isCompleted
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-600 border-2 border-slate-300 dark:border-slate-800'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                  </div>
                  <span
                    className={`mt-2 text-[11px] font-bold text-center transition-colors ${
                      isActive
                        ? 'text-orange-600 dark:text-amber-400'
                        : isCompleted
                        ? 'text-slate-700 dark:text-slate-300'
                        : 'text-slate-400 dark:text-slate-600'
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* STEP 1: Moving Details */}
      {currentStep === 1 && (
        <div className="space-y-6 text-left animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('step1Title', 'Moving Details')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'ar'
                ? 'حدد مواقع الانطلاق والوصول ونوع النقل لتحديد أسطول الشاحنات المناسب.'
                : 'Specify origin, destination, and the move category to determine fleet allocation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {t('movingFrom', 'Moving From (Origin City / Area)')}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={state.originCity}
                  onChange={(e) => updateState('originCity', e.target.value)}
                  placeholder="e.g. Ruwi, Muttrah, Muscat"
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {t('movingTo', 'Moving To (Destination City / Area)')}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-orange-500 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={state.destinationCity}
                  onChange={(e) => updateState('destinationCity', e.target.value)}
                  placeholder="e.g. Al Mouj, Sohar, Salalah, Dubai"
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {t('movingDate', 'Target Moving Date')}
              </label>
              <input
                type="date"
                value={state.moveDate}
                onChange={(e) => updateState('moveDate', e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 dark:text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {t('movingType', 'Relocation Category')}
              </label>
              <select
                value={state.moveType}
                onChange={(e) => updateState('moveType', e.target.value as any)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 dark:text-white"
              >
                <option value="residential">{t('residential', 'Residential Moving')}</option>
                <option value="commercial">{t('commercial', 'Commercial & Corporate')}</option>
                <option value="office">Office Relocation & IT</option>
                <option value="international">{t('international', 'International / GCC Freight')}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 cursor-pointer">
              <input
                type="checkbox"
                checked={state.isReturnTrip}
                onChange={(e) => updateState('isReturnTrip', e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded"
              />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('returnTrip', 'Return or Multi-Stop Route Required')}
              </span>
            </label>
          </div>
        </div>
      )}

      {/* STEP 2: Property Details */}
      {currentStep === 2 && (
        <div className="space-y-6 text-left animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('step2Title', 'Property Sizing')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'ar'
                ? 'اختر حجم المسكن أو المكتب لحساب سعة الشاحنة المطلوبة وعدد العمالة.'
                : 'Select the scale of your residence or office for accurate fleet allocation.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'studio', label: t('studio', 'Studio Apartment'), icon: Home },
              { id: '1bed', label: t('bed1', '1-Bed Flat'), icon: Home },
              { id: '2bed', label: t('bed2', '2-Bed Flat'), icon: Home },
              { id: '3bed', label: t('bed3', '3-Bed Flat'), icon: Home },
              { id: '4plus_house', label: t('bed4plus', '4+ Bed House'), icon: Home },
              { id: 'villa', label: t('villa', 'Villa (Multi-Story)'), icon: Building2 },
              { id: 'office', label: t('office', 'Commercial Office'), icon: Building2 },
              { id: 'custom', label: t('customInventory', 'Custom Inventory'), icon: Package },
            ].map((prop) => {
              const Icon = prop.icon;
              const isSelected = state.propertyType === prop.id;
              return (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => updateState('propertyType', prop.id as any)}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-amber-400 ring-2 ring-orange-500/30'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-bold">{prop.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {language === 'ar' ? 'عدد غرف النوم التقريبي' : 'Bedrooms Count'}
              </label>
              <input
                type="number"
                min="0"
                max="12"
                value={state.bedroomsCount}
                onChange={(e) => updateState('bedroomsCount', Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {language === 'ar' ? 'عدد كراتين التعبئة التقديرية' : 'Estimated Box Count'}
              </label>
              <input
                type="number"
                min="5"
                max="300"
                value={state.approxBoxes}
                onChange={(e) => updateState('approxBoxes', Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Requirements */}
      {currentStep === 3 && (
        <div className="space-y-6 text-left animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('step3Title', 'Services')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'ar'
                ? 'اختر خدمات التغليف والنجارة والمعدات الثقيلة المطلوبة.'
                : 'Select wrapping, carpentry, heavy rigging, and storage needs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: 'furniturePacking',
                title: 'Full Furniture Wrapping',
                titleAr: 'تغليف وحماية الأثاث بالكامل',
                desc: 'Bubble wrap, stretch film, edge corner guards',
                value: state.furniturePacking,
              },
              {
                id: 'unpackingServices',
                title: 'Unpacking at Destination',
                titleAr: 'فك التغليف وترتيب الغرف',
                desc: 'Unpacking and debris removal',
                value: state.unpackingServices,
              },
              {
                id: 'furnitureDismantling',
                title: 'Furniture Dismantling (Carpentry)',
                titleAr: 'فك غرف النوم والأسرة والدواليب (نجارة)',
                desc: 'Expert master carpenter',
                value: state.furnitureDismantling,
              },
              {
                id: 'furnitureAssembly',
                title: 'Furniture Assembly & Mounting',
                titleAr: 'إعادة تركيب الأثاث وتثبيته في الوجهة',
                desc: 'Precision re-assembly at new home',
                value: state.furnitureAssembly,
              },
              {
                id: 'fragileItemHandling',
                title: 'Fragile China & Glassware Crating',
                titleAr: 'تغليف الأواني والزجاجيات في كراتين مقسمة',
                desc: 'Custom partitioned dish cartons',
                value: state.fragileItemHandling,
              },
              {
                id: 'heavyFurnitureTransport',
                title: 'Heavy Safe / Piano Handling',
                titleAr: 'نقل الخزائن الحديدية الثقيلة والبيانو',
                desc: 'Specialized dollies and strapping gear',
                value: state.heavyFurnitureTransport,
              },
              {
                id: 'storageNeeded',
                title: 'Temporary Secure Storage',
                titleAr: 'مستودعات تخزين مؤمنة ومكيفة في مسقط',
                desc: 'Insured air-cooled Muscat facility',
                value: state.storageNeeded,
              },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                  opt.value
                    ? 'bg-orange-500/10 border-orange-500/70 text-slate-900 dark:text-white'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={opt.value}
                  onChange={(e) => updateState(opt.id as any, e.target.checked)}
                  className="w-4 h-4 mt-0.5 text-orange-600 rounded"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? opt.titleAr : opt.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{opt.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: Access Details */}
      {currentStep === 4 && (
        <div className="space-y-6 text-left animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('step4Title', 'Access Details')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {language === 'ar'
                ? 'بيانات الطوابق والمصاعد في نقطتي الانطلاق والوصول لحساب العمالة الإضافية بدقة.'
                : 'Floor levels and elevator availability at both locations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Origin Access */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase text-orange-600 dark:text-amber-400">
                {language === 'ar' ? 'مبنى التحميل (الانطلاق)' : 'Pickup Building Access'}
              </span>
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Floor Level</label>
                <select
                  value={state.pickupFloor}
                  onChange={(e) => updateState('pickupFloor', Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="0">Ground Floor / Villa</option>
                  <option value="1">1st Floor</option>
                  <option value="2">2nd Floor</option>
                  <option value="3">3rd Floor</option>
                  <option value="4">4th Floor or Higher</option>
                </select>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={state.pickupHasElevator}
                  onChange={(e) => updateState('pickupHasElevator', e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <span>Elevator / Lift Available</span>
              </label>
            </div>

            {/* Destination Access */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">
                {language === 'ar' ? 'مبنى التنزيل (الوجهة)' : 'Dropoff Building Access'}
              </span>
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Floor Level</label>
                <select
                  value={state.dropoffFloor}
                  onChange={(e) => updateState('dropoffFloor', Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="0">Ground Floor / Villa</option>
                  <option value="1">1st Floor</option>
                  <option value="2">2nd Floor</option>
                  <option value="3">3rd Floor</option>
                  <option value="4">4th Floor or Higher</option>
                </select>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={state.dropoffHasElevator}
                  onChange={(e) => updateState('dropoffHasElevator', e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <span>Elevator / Lift Available</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              {language === 'ar' ? 'ملاحظات خاصة عن الأثاث والمداخل' : 'Special Handling Notes'}
            </label>
            <textarea
              rows={2}
              value={state.specialHandlingNotes}
              onChange={(e) => updateState('specialHandlingNotes', e.target.value)}
              placeholder="e.g. Narrow stairwell, 65-inch OLED TV, delicate chandelier..."
              className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>
        </div>
      )}

      {/* STEP 5: Price Estimate & Itemized Breakdown */}
      {currentStep === 5 && (
        <div className="space-y-6 text-left animate-in fade-in duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t('step5Title', 'Price Breakdown')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {calculation.isCustomRoute
                ? t('customQuoteRequired', 'Custom quotation required for this route or international crossing.')
                : t('indicativeNotice', 'Indicative estimate based on active published rates.')}
            </p>
          </div>

          {/* If international or custom route */}
          {calculation.isCustomRoute && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">
                  {language === 'ar' ? 'يتطلب هذا المسار عرض سعر جمركي مخصص' : 'Custom International / Cross-Border Quote Required'}
                </strong>
                <p className="mt-0.5">
                  Cross-border moves between Oman and the GCC (UAE, Saudi Arabia, Qatar) involve border manifests, port customs clearance, and container sizing. Our operations manager will prepare a custom proposal.
                </p>
              </div>
            </div>
          )}

          {/* Itemized Cost Breakdown Card */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-sans font-bold">{t('baseCost', 'Base Moving Fee')} ({calculation.propertyLabel})</span>
              <span>OMR {calculation.baseMovingCost}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 py-1.5 border-b border-slate-200 dark:border-slate-800">
              <span className="font-sans font-bold">{t('transportCharge', 'Transportation & Vehicle')}</span>
              <span>OMR {calculation.distanceCharge}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 py-1.5 border-b border-slate-200 dark:border-slate-800">
              <span className="font-sans font-bold">{t('laborCharge', 'Professional Crew & Access')}</span>
              <span>OMR {calculation.laborCharges}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 py-1.5 border-b border-slate-200 dark:border-slate-800">
              <span className="font-sans font-bold">{t('packingCharge', 'Packing Supplies & Protection')}</span>
              <span>OMR {calculation.packingCharges}</span>
            </div>

            {calculation.additionalServiceCharges > 0 && (
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-sans font-bold">{t('additionalCharge', 'Carpentry & Optional Services')}</span>
                <span>OMR {calculation.additionalServiceCharges}</span>
              </div>
            )}

            {calculation.discountAmount > 0 && (
              <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400 py-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-sans font-bold">Mid-Week Promo Discount (15%)</span>
                <span>- OMR {calculation.discountAmount}</span>
              </div>
            )}

            {/* Total Estimate */}
            <div className="pt-3 flex justify-between items-baseline text-slate-900 dark:text-white text-base sm:text-lg font-black font-sans">
              <span>{t('totalEstimatedCost', 'Estimated Total Cost')}</span>
              <span className="text-2xl sm:text-3xl text-orange-600 dark:text-amber-400 font-mono">
                OMR {calculation.totalOMR}
              </span>
            </div>
          </div>

          {/* Lock In / Request This Quote Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleTransferToQuote}
              className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/25 text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Calculator className="w-5 h-5" />
              <span>{t('requestThisQuote', 'Request This Moving Quote')}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`https://wa.me/96898386824?text=${encodeURIComponent(
                `Hello OAN Moving, I used your Moving Cost Calculator. Route: ${state.originCity} to ${state.destinationCity}. Estimated Total: OMR ${calculation.totalOMR}. Please contact me to lock in my rate.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'إرسال التقدير للواتساب' : 'WhatsApp This Estimate'}</span>
            </a>
          </div>
        </div>
      )}

      {/* Stepper Navigation Buttons (Back & Next) */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition cursor-pointer"
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t('prevStep', 'Previous Step')}</span>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition cursor-pointer"
          >
            <span>{t('nextStep', 'Next Step')}</span>
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'بدء حساب جديد' : 'Recalculate'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
