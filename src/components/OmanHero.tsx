import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  ArrowRight,
  Phone,
  MessageCircle,
  Calculator,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { COMPANY_PROFILE, calculateOmanQuote, OmanQuoteParams } from '../data/omanData';

interface OmanHeroProps {
  onOpenBookingModal: (prefill?: Partial<OmanQuoteParams>) => void;
  onExploreServices: () => void;
}

export const OmanHero: React.FC<OmanHeroProps> = ({
  onOpenBookingModal,
  onExploreServices,
}) => {
  // Interactive Instant Quote Estimator Widget State
  const [serviceType, setServiceType] = useState<OmanQuoteParams['serviceType']>('house_moving');
  const [moveSize, setMoveSize] = useState<OmanQuoteParams['moveSize']>('2bhk');
  const [distanceCategory, setDistanceCategory] = useState<OmanQuoteParams['distanceCategory']>('local_muscat');
  const [packingNeeded, setPackingNeeded] = useState(true);

  // Calculation Result state
  const [calculatedQuote, setCalculatedQuote] = useState(() =>
    calculateOmanQuote({
      serviceType: 'house_moving',
      moveSize: '2bhk',
      distanceCategory: 'local_muscat',
      helpersCount: 3,
      packingNeeded: true,
    })
  );

  const [hasCalculated, setHasCalculated] = useState(true);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateOmanQuote({
      serviceType,
      moveSize,
      distanceCategory,
      helpersCount: 3,
      packingNeeded,
    });
    setCalculatedQuote(result);
    setHasCalculated(true);
  };

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'house_moving':
        return 'OAN House & Villa Moving';
      case 'office_moving':
        return 'Corporate & Office Relocation';
      case 'building_materials':
        return 'Building Materials Transport';
      case 'waste_collection':
        return 'Commercial Waste Collection';
    }
  };

  const getSizeLabel = () => {
    switch (moveSize) {
      case 'studio_small':
        return 'Studio / Single Room';
      case '1bhk':
        return '1 BHK Apartment';
      case '2bhk':
        return '2 BHK Flat / Small Villa';
      case '3bhk_villa':
        return '3-4 BHK Large Villa';
      case 'large_villa_office':
        return 'Commercial Office / Large Estate';
    }
  };

  const whatsappMessage = `Hello Ali Raza International Trade SPC / OAN Moving Services!%0A%0AI used your website instant quote estimator:%0A- Service: ${getServiceLabel()}%0A- Size: ${getSizeLabel()}%0A- Route: ${calculatedQuote.distanceLabel}%0A- Packing: ${packingNeeded ? 'Professional Packing Included' : 'Self-Packed'}%0A- Estimated Cost: ${calculatedQuote.estimatedTotalLowOMR} - ${calculatedQuote.estimatedTotalHighOMR} OMR%0A%0APlease confirm availability for my preferred move date.`;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100 overflow-hidden border-b border-slate-800">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Striking Corporate Headline & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 font-bold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>MOCIIP Registered · CR: {COMPANY_PROFILE.crNumber}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium font-mono">
                Tax ID: {COMPANY_PROFILE.taxId}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>Muscat, Oman</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-balance">
              Professional House Moving, Logistics & General Trading Across the Sultanate of Oman.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Backed by official Ministry registration (CR: 1481820), <strong className="text-white">Ali Raza International Trade SPC</strong> delivers premier <strong className="text-amber-400">OAN Relocation Services</strong>, corporate shifting, certified building materials wholesale, and commercial site clearance across Muscat and all governorates.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Master carpenters for furniture dismantling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Premium bubble wrap & carton crating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Clean 3-ton to 10-ton covered fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Official VAT tax invoicing for companies</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`tel:${COMPANY_PROFILE.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-400/20 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch: +968 98386824</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp}?text=${encodeURIComponent(
                  'Hello Ali Raza International Trade SPC / OAN Moving Services, I would like to book a moving service in Muscat.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us Direct</span>
              </a>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>View Core Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Instant Quote Estimator Widget Card */}
          <div className="lg:col-span-5" id="quote-estimator">
            <div className="bg-slate-800/90 border-2 border-amber-400/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-sm relative">
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">
                      Instant Quote Estimator
                    </h2>
                    <div className="text-[11px] text-amber-400 font-mono">
                      Real-Time Rates in Omani Riyal (OMR)
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-300 bg-slate-900 border border-slate-700 rounded px-2 py-0.5">
                  CR: 1481820
                </span>
              </div>

              {/* Form Controls */}
              <form onSubmit={handleCalculate} className="space-y-4">
                {/* 1. Service Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    1. Select Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="house_moving">OAN House & Villa Moving (نقل أثاث منزلي)</option>
                    <option value="office_moving">Corporate & Office Shifting (نقل مكاتب)</option>
                    <option value="building_materials">Building Materials Transport (مواد بناء)</option>
                    <option value="waste_collection">Waste Collection & Site Clearance (مخلفات)</option>
                  </select>
                </div>

                {/* 2. Move / Load Size */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    2. Move / Load Size
                  </label>
                  <select
                    value={moveSize}
                    onChange={(e) => setMoveSize(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="studio_small">Studio / Single Room / Small Pickup</option>
                    <option value="1bhk">1 BHK Apartment (غرفة وصالة)</option>
                    <option value="2bhk">2 BHK Flat / Small Villa (غرفتين وصالة)</option>
                    <option value="3bhk_villa">3-4 BHK Large Villa (فيلا كبيرة)</option>
                    <option value="large_villa_office">Commercial Office / Multiple Loads</option>
                  </select>
                </div>

                {/* 3. Distance Category / Route */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    3. Route / Governorate Distance
                  </label>
                  <select
                    value={distanceCategory}
                    onChange={(e) => setDistanceCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="local_muscat">Within Muscat (Ruwi, Qurum, Seeb, Al Mouj)</option>
                    <option value="muscat_batinah">Muscat ⇄ Al Batinah (Barka, Sohar, Rustaq)</option>
                    <option value="muscat_dakhiliyah">Muscat ⇄ Ad Dakhiliyah (Samail, Nizwa, Bahla)</option>
                    <option value="interstate_salalah">Muscat ⇄ Dhofar / Salalah Long Haul</option>
                  </select>
                </div>

                {/* 4. Packing Option */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={packingNeeded}
                      onChange={(e) => setPackingNeeded(e.target.checked)}
                      className="rounded border-slate-600 bg-slate-900 text-amber-400 focus:ring-amber-400"
                    />
                    <span>Include premium bubble wrap, cardboard & carpenter tools</span>
                  </label>
                </div>

                {/* Calculation Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md shadow-amber-400/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Estimated Cost</span>
                </button>
              </form>

              {/* Dynamic Output Box */}
              {hasCalculated && (
                <div className="mt-5 pt-4 border-t border-slate-700">
                  <div className="bg-slate-950/80 border border-slate-700/80 rounded-xl p-4 text-center">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Estimated Cost Range
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight my-1">
                      {calculatedQuote.estimatedTotalLowOMR} – {calculatedQuote.estimatedTotalHighOMR}{' '}
                      <span className="text-xl font-bold text-white">OMR</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      (~ {calculatedQuote.currencySymbol} {calculatedQuote.estimatedTotalLowOMR} إلى {calculatedQuote.estimatedTotalHighOMR} ريال عماني)
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2">
                      Includes driver, commercial transport, and loading crew. Guaranteed rate.
                    </div>

                    {/* Book Now & WhatsApp Direct Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800">
                      <a
                        href={`https://wa.me/${COMPANY_PROFILE.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          onOpenBookingModal({
                            serviceType,
                            moveSize,
                            distanceCategory,
                            packingNeeded,
                          })
                        }
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                      >
                        <span>Reserve Move Slot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
