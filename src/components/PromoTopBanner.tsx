import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

export const PromoTopBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('OANWEEKDAY');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Special promotion" className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-2 px-4 text-xs font-semibold shadow-inner relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
        <span className="bg-white/20 backdrop-blur-xs border border-white/30 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-200" />
          <span>Limited Offer</span>
        </span>
        <span className="text-white text-xs sm:text-sm">
          Save 15% on all Mid-Week Moves across Muscat & Oman! Use code{' '}
          <button
            onClick={copyCode}
            className="underline underline-offset-2 decoration-2 decoration-white font-mono font-bold hover:text-amber-100 transition-colors cursor-pointer inline-flex items-center gap-1 ml-0.5"
            title="Click to copy promo code"
          >
            <span>OANWEEKDAY</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-white" />
            ) : (
              <Copy className="w-3 h-3 text-white/80" />
            )}
          </button>
        </span>
      </div>
    </aside>
  );
};
