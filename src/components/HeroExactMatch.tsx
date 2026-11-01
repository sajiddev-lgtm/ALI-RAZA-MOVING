import React, { useState } from 'react';
import {
  Check,
  Calendar,
  MapPin,
  Flag,
  Phone,
  Calculator,
  Lock,
  ArrowRight,
  Home,
  Building2,
  Tag,
  Truck,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';
import { HeroTypewriter } from './HeroTypewriter';
import { COMPANY_PROFILE } from '../data/omanData';

interface HeroExactMatchProps {
  onOpenBookingModal: (prefill?: any) => void;
}

export const HeroExactMatch: React.FC<HeroExactMatchProps> = ({ onOpenBookingModal }) => {
  // Card Form State
  const [moveCategory, setMoveCategory] = useState<'residential' | 'commercial'>('residential');
  const [fromLocation, setFromLocation] = useState('Ruwi High St, Muscat');
  const [toLocation, setToLocation] = useState('Al Mouj Sector 4, Seeb');
  const [propertySize, setPropertySize] = useState('1-2 Bedroom Home');
  const [moveDate, setMoveDate] = useState(() => {
    const d = new Date(Date.now() + 7 * 86400000);
    return d.toISOString().split('T')[0];
  });
  const [phoneNumber, setPhoneNumber] = useState('+968 98386824');
  const [currencyMode, setCurrencyMode] = useState<'OMR' | 'USD'>('OMR');

  // Dynamic price calculation
  const getCalculatedRate = () => {
    let lowOMR = 45;
    let highOMR = 75;

    if (moveCategory === 'commercial') {
      lowOMR = 85;
      highOMR = 145;
    }

    if (propertySize.includes('Studio')) {
      lowOMR = 30;
      highOMR = 45;
    } else if (propertySize.includes('3-4')) {
      lowOMR = 110;
      highOMR = 175;
    } else if (propertySize.includes('Large') || propertySize.includes('Corporate')) {
      lowOMR = 190;
      highOMR = 320;
    }

    const lowUSD = Math.round(lowOMR * 2.6);
    const highUSD = Math.round(highOMR * 2.6);

    return {
      omr: `${lowOMR} - ${highOMR} OMR`,
      omrArabic: `${lowOMR} إلى ${highOMR} ر.ع`,
      usd: `$${lowUSD} - $${highUSD}`,
      lowOMR,
      highOMR,
    };
  };

  const currentRate = getCalculatedRate();

  const handleCalculateRate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      serviceType: moveCategory === 'residential' ? 'house_moving' : 'office_moving',
      moveSize: propertySize.includes('Studio')
        ? 'studio_small'
        : propertySize.includes('1-2')
        ? '1bhk'
        : propertySize.includes('3-4')
        ? '3bhk_villa'
        : 'large_villa_office',
      pickupArea: fromLocation,
      destinationArea: toLocation,
      phone: phoneNumber,
    });
  };

  return (
    <section className="relative bg-slate-50 dark:bg-[#070D1E] text-slate-900 dark:text-slate-100 overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 transition-colors">
      {/* Subtle Dotted Background matching screenshot */}
      <div className="absolute inset-0 bg-[radial-gradient(#94A3B8_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#1E293B_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Exactly matching typography and structure */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge with green dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>#1 Rated Local & Long-Distance Movers in Oman</span>
            </div>

            {/* Rotating Typewriter Headline */}
            <HeroTypewriter />

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Licensed, fully insured, and background-checked moving specialists. We pack, load, and deliver your belongings with white-glove care and zero hidden fees.
            </p>

            {/* 4 Trust Benefits Checkmark List in 2 columns with orange/amber checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-2 text-sm font-semibold">
              <div className="flex items-center gap-2.5 group">
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm tracking-tight">
                  Guaranteed On-Time Delivery
                </span>
              </div>

              <div className="flex items-center gap-2.5 group">
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm tracking-tight">
                  Free Packing Materials Offer
                </span>
              </div>

              <div className="flex items-center gap-2.5 group">
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm tracking-tight">
                  Full Valuation Protection
                </span>
              </div>

              <div className="flex items-center gap-2.5 group">
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-semibold text-sm tracking-tight">
                  Transparent Flat-Rate Pricing
                </span>
              </div>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Avatar Stack + Ratings */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Customer verified review"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%230F172A"/><circle cx="20" cy="16" r="7" fill="%23EAB308"/><path d="M9 34c0-6 5-10 11-10s11 4 11 10" fill="%23EAB308"/></svg>';
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Customer verified review"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%231E293B"/><circle cx="20" cy="16" r="7" fill="%23F59E0B"/><path d="M9 34c0-6 5-10 11-10s11 4 11 10" fill="%23F59E0B"/></svg>';
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                    alt="Customer verified review"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%23334155"/><circle cx="20" cy="16" r="7" fill="%23FBBF24"/><path d="M9 34c0-6 5-10 11-10s11 4 11 10" fill="%23FBBF24"/></svg>';
                    }}
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-extrabold text-xs flex items-center justify-center font-mono shadow-xs">
                    +2k
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                      ))}
                    </div>
                    <span className="text-slate-900 dark:text-white font-black text-sm tracking-tight">4.9/5</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    From 3,400+ Verified Reviews
                  </div>
                </div>
              </div>

              {/* Insured Status & MOCIIP Registration */}
              <div className="flex items-center gap-2.5 pl-0 sm:pl-4 border-l-0 sm:border-l border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <span>100% Insured</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium">
                    MOCIIP CR: {COMPANY_PROFILE.crNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Exact White Card from the Image */}
          <div className="lg:col-span-5 relative">
            {/* Top Floating Badge: SAME DAY MOVE Available Today */}
            <div className="absolute -top-6 left-4 sm:left-6 z-20 bg-white text-slate-900 rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-orange-600">
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                  Same Day Move
                </div>
                <div className="text-xs font-extrabold text-slate-900">
                  Available Today
                </div>
              </div>
            </div>

            {/* Main Floating White Card */}
            <div className="bg-white text-slate-900 rounded-[2rem] p-6 sm:p-7 shadow-2xl relative border border-slate-100">
              {/* Card Header with Fast Estimate Badge */}
              <div className="flex items-start justify-between gap-2 pt-5 pb-3">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                    Get a Free Moving Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Takes less than 60 seconds • No obligation
                  </p>
                </div>

                <span className="bg-amber-100/70 border border-amber-200 text-amber-800 text-[11px] font-extrabold px-2.5 py-1 rounded-lg shrink-0">
                  Fast Estimate
                </span>
              </div>

              {/* Segmented Controls: Residential vs Commercial */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl my-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setMoveCategory('residential')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all cursor-pointer ${
                    moveCategory === 'residential'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Residential</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMoveCategory('commercial')}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all cursor-pointer ${
                    moveCategory === 'commercial'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Commercial</span>
                </button>
              </div>

              {/* Form Inputs Grid */}
              <form onSubmit={handleCalculateRate} className="space-y-3.5 text-left">
                {/* 2 Inputs: Moving From / Moving To */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Moving From
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        placeholder="Zip code or City"
                        className="w-full pl-9 pr-3 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Moving To
                    </label>
                    <div className="relative">
                      <Flag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        placeholder="Zip code or City"
                        className="w-full pl-9 pr-3 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* 2 Inputs: Home / Office Size & Estimated Move Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Home / Office Size
                    </label>
                    <select
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    >
                      <option value="Studio / Single Room">Studio / 1 Room</option>
                      <option value="1-2 Bedroom Home">1-2 Bedroom Home</option>
                      <option value="3-4 Bedroom Villa">3-4 Bedroom Villa</option>
                      <option value="Commercial Office Space">Commercial Office</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Estimated Move Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={moveDate}
                        onChange={(e) => setMoveDate(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Dark Highlighted Price Box matching screenshot */}
                <div className="bg-[#0B132B] rounded-2xl p-3.5 flex items-center justify-between text-white shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Estimated Starting Rate
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-white flex items-center gap-2">
                        <span>
                          {currencyMode === 'OMR' ? currentRate.omr : currentRate.usd}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrencyMode(currencyMode === 'OMR' ? 'USD' : 'OMR')}
                          className="text-[10px] bg-slate-800 text-amber-400 border border-slate-700 px-1.5 py-0.5 rounded font-mono hover:bg-slate-700"
                          title="Toggle OMR / USD"
                        >
                          {currencyMode === 'OMR' ? 'OMR' : 'USD'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Best Value
                  </span>
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number for Quote Delivery
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="(968) 9838-6824"
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-mono font-medium bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Big Orange Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm sm:text-base font-black text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Calculate & Lock In My Rate</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Secure Guarantee */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Your information is 100% secure. No spam guaranteed.</span>
                </div>
              </form>
            </div>

            {/* Bottom Floating Badge: NO HIDDEN FEES Free Instant Estimate */}
            <div className="absolute -bottom-6 right-4 sm:right-6 z-20 bg-white text-slate-900 rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Tag className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  No Hidden Fees
                </div>
                <div className="text-xs font-extrabold text-emerald-600">
                  Free Instant Estimate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
