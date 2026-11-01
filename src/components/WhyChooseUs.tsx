import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Truck,
  CheckCircle2,
  ChevronDown,
  Star,
  MapPin,
  Clock,
  Banknote,
} from 'lucide-react';
import { COMPANY_PROFILE, OMAN_REVIEWS, OMAN_FAQS } from '../data/omanData';

export const WhyChooseUs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div id="why-us" className="py-16 lg:py-24 bg-[#070D1E] text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Why Choose Us Pillars */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
            The OAN Moving Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
            Why Muscat Homeowners & Enterprises Choose Ali Raza International Trade SPC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Moving or sourcing materials in Oman requires certified credentials, experienced local carpenters, and climate-protected transport.
          </p>
        </div>

        {/* 4 Trust Pillars matching screenshot palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-left hover:border-orange-500/60 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              100% MOCIIP Regulated
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official Single Person Company registered under Commercial Registration No. <strong className="text-slate-200 font-mono">1481820</strong> and Tax ID <strong className="text-slate-200 font-mono">1896320</strong> in Muscat.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-left hover:border-orange-500/60 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Master Carpenters (نجار محترف)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trained specialists who safely take apart and assemble multi-door master bedrooms, luxury display cabinets, and complex modular office desks.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-left hover:border-orange-500/60 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Dust & Heat Sealed Fleet
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clean enclosed commercial cargo boxes protecting your leather furniture, electronics, and sensitive goods from extreme Muscat summer temperatures and road dust.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-left hover:border-orange-500/60 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              Guaranteed OMR Pricing
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              What we quote is exactly what you pay. No unexpected fuel surcharges or stair fees on moving day. Official VAT tax invoices issued for all companies.
            </p>
          </div>
        </div>

        {/* Section 2: Verified Client Reviews */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div className="text-left">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                Local Client Reviews
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Trusted Across Muscat & Neighboring Governorates
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              4.9/5 Average Rating from over 850+ completed moves in Oman
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OMAN_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between text-left hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                    <span className="text-orange-400 font-bold">{rev.service}</span>
                    <span>{rev.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{rev.author}</div>
                    <div className="text-[11px] text-slate-400">{rev.role}</div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto text-left">
          <div className="text-center mb-8">
            <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
              Common Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions (أسئلة شائعة)
            </h3>
          </div>

          <div className="space-y-3">
            {OMAN_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-orange-400 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
