import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', compact = false }) => {
  const { language, isRTL } = useLanguage();

  return (
    <Link
      to="/"
      aria-label="Ali Raza International Trade — Home"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl transition-transform active:scale-95 ${className}`}
    >
      {/* Premium Monogram Icon: AR with Logistics Forward Dynamic Wing */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A1128] dark:from-[#0B132B] dark:via-[#162347] dark:to-[#1C2C5E] p-0.5 shadow-md shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all duration-300 border border-amber-500/30">
        <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center relative overflow-hidden">
          {/* Subtle champagne gold background grid accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_0.75px,transparent_0.75px)] [background-size:6px_6px] opacity-20" />
          
          {/* SVG Monogram AR */}
          <svg
            viewBox="0 0 100 100"
            className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EA580C" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Letter 'A' with dynamic forward lean */}
            <path
              d="M20 78 L38 22 Q40 18 45 18 Q50 18 52 22 L70 78"
              stroke="url(#goldGradient)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 'A' Crossbar with logistics forward arrow */}
            <path
              d="M30 56 H58 L63 52"
              stroke="url(#goldGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Letter 'R' interlocking seamlessly */}
            <path
              d="M48 24 H66 C77 24 82 32 82 41 C82 50 75 56 65 56 H50"
              stroke="url(#goldGradient)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Dynamic Logistics Forward Leg */}
            <path
              d="M62 55 L78 78"
              stroke="url(#goldGradient)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Speed Chevrons (Logistics Motion) */}
            <path
              d="M74 36 L81 41 L74 46"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>

          {/* Golden shine ping */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full blur-[1px] opacity-75" />
        </div>
      </div>

      {/* Compact Brand Typography */}
      <div className={`flex flex-col text-left ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center gap-1.5">
          <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
            AR
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-slate-700 dark:text-slate-200">
            {language === 'ar' ? 'اللوجستية' : 'Logistics'}
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-md font-black bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wider">
            Oman
          </span>
        </div>

        {!compact && (
          <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-tight flex items-center gap-1">
            <span className="font-semibold text-orange-600 dark:text-amber-400">OAN</span>
            <span>·</span>
            <span>
              {language === 'ar'
                ? 'خدمات نقل وتجارة دولية'
                : 'Moving & International Trade'}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
