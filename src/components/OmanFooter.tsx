import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle, Clock, Truck } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/omanData';

interface OmanFooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenBookingModal: () => void;
}

export const OmanFooter: React.FC<OmanFooterProps> = ({
  onScrollTo,
  onOpenBookingModal,
}) => {
  return (
    <footer id="contact" className="bg-[#060A14] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Corporate Profile & Official MOCIIP Credentials (Span 5) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div className="text-lg font-black text-white tracking-tight">
                Ali Raza International Trade <span className="text-xs text-orange-400">SPC</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white">OAN Moving & Logistics Services</strong> is a dedicated division of Ali Raza International Trade SPC. Licensed for professional residential relocation, corporate shifting, building materials trading, housewares trade, and commercial waste collection across the Sultanate of Oman.
            </p>

            {/* Official Registration Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between text-orange-400 font-bold">
                <span>Commercial Reg (CR):</span>
                <span>{COMPANY_PROFILE.crNumber}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Tax ID Number:</span>
                <span>{COMPANY_PROFILE.taxId}</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-800/80">
                Ministry of Commerce, Industry and Investment Promotion (MOCIIP)
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Core Activities
            </div>
            <ul className="text-xs space-y-2 text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  OAN House & Villa Moving
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Corporate & Office Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Building Materials Trading & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Housewares & Commercial Trade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Commercial Site Waste Clearance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('hero')}
                  className="hover:text-orange-400 transition-colors text-orange-400 font-bold cursor-pointer"
                >
                  Free Quote Calculator (OMR)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Muscat Headquarters & Hotline Contact (Span 4) */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Direct Contact
            </div>
            <div className="text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  Headquarters: Ruwi / Muttrah Commercial Business Hub, Muscat, Sultanate of Oman
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_PROFILE.phone}`}
                  className="hover:text-orange-400 font-mono font-bold text-white transition-colors"
                >
                  {COMPANY_PROFILE.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.email}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {COMPANY_PROFILE.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {COMPANY_PROFILE.operatingHours}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={`https://wa.me/${COMPANY_PROFILE.whatsapp}?text=${encodeURIComponent(
                  'Salam, I would like to book a moving / logistics service with Ali Raza International Trade SPC.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>Reserve Online</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-300">Ali Raza International Trade SPC</strong> (OAN Moving & Logistics Services). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>Muscat, Oman</span>
            <span aria-hidden="true">·</span>
            <span>CR: {COMPANY_PROFILE.crNumber}</span>
            <span aria-hidden="true">·</span>
            <span>Tax ID: {COMPANY_PROFILE.taxId}</span>
            <span aria-hidden="true">·</span>
            <span className="text-orange-400 font-medium">سلطنة عُمان - مسقط</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
