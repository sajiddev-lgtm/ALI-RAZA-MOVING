import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Calculator, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  primaryActionPath?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready for a Smooth, Punctual Relocation in Oman?',
  subtitle = 'Get your transparent, binding estimate in minutes. Background-checked moving crews, master carpenters, and dust-sealed commercial transports ready for dispatch.',
  primaryActionLabel = 'Request Free Quotation',
  primaryActionPath = '/get-a-quote',
}) => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#0B132B] via-[#070D1E] to-[#040814] text-white border-t border-slate-800 overflow-hidden">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-amber-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ALI RAZA INTERNATIONAL TRADE SPS · CR: 1481820</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance text-white">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to={primaryActionPath}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-orange-500/30 whitespace-nowrap"
          >
            <span>{primaryActionLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/moving-cost-calculator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Open Cost Calculator</span>
          </Link>

          <a
            href="https://wa.me/96898386824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us (+968 9838 6824)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
