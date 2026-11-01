import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/omanData';

export const TopHeaderCredentials: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Official Government Registration */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>CR: {COMPANY_PROFILE.crNumber}</span>
            <span className="text-slate-600">|</span>
            <span>Tax ID: {COMPANY_PROFILE.taxId}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">·</span>
          <div className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
            <span>Ruwi / Muttrah, Muscat, Sultanate of Oman</span>
          </div>
        </div>

        {/* Right: Direct Hotline & WhatsApp Contact */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href={`tel:${COMPANY_PROFILE.phone}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 font-mono font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{COMPANY_PROFILE.phone}</span>
          </a>
          <span className="text-slate-700">|</span>
          <a
            href={`mailto:${COMPANY_PROFILE.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{COMPANY_PROFILE.email}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_PROFILE.whatsapp}?text=${encodeURIComponent(
              'Hello Ali Raza International Trade SPC / OAN Moving Services, I would like to inquire about your services in Muscat.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
