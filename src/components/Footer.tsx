import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'calculator' | 'booking' | 'services' | 'checklist') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Regulatory Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl font-extrabold tracking-tight text-white">
              Vanguard Relocations
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Precision residential, commercial, and fine art relocation services. Operating air-ride commercial transports with background-vetted, career movers across NY, CT, NJ, and interstate corridors nationwide.
            </p>

            <div className="pt-2 text-[11px] font-mono text-neutral-400 space-y-1">
              <div>USDOT Carrier # 3892014 · MC Authority # 910245</div>
              <div>NYSDOT License # T-39912 · CT Heavy Haul Reg # 09214</div>
              <div>Fully Bonded & Insured to $1,000,000 General Liability</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="text-xs space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors"
                >
                  Free Quote Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:text-white transition-colors"
                >
                  Interactive Move Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Commercial & Office Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checklist')}
                  className="hover:text-white transition-colors"
                >
                  8-Week Moving Timeline Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Vault Storage Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Dispatch Hub & Contact
            </div>
            <div className="text-xs text-neutral-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-300 shrink-0 mt-0.5" />
                <span>Headquarters: 540 West 26th Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
                <span>Direct Toll-Free: (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
                <span>Dispatch: dispatch@vanguardrelocations.com</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500">
              Coverage: Manhattan, Brooklyn, Queens, Long Island, Westchester, Fairfield County CT, Northern NJ, and nationwide direct dedicated interstate transport.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Vanguard Relocations Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Carriage</span>
            <span aria-hidden="true">·</span>
            <span>Tariff Schedule & Valuation Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
