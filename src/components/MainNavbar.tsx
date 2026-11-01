import React, { useState } from 'react';
import { Menu, X, ArrowRight, Truck, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/omanData';

interface MainNavbarProps {
  onScrollTo: (sectionId: string) => void;
  onOpenBookingModal: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  onScrollTo,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Lockup matching the reference design palette */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-orange-500/20 shrink-0">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer"
          >
            <div className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-amber-400 transition-colors leading-tight">
              Ali Raza International Trade <span className="text-xs text-orange-400 font-extrabold uppercase">SPC</span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">OAN</span>
              <span>Moving & Logistics Services · Muscat, Oman</span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-300">
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            Pricing & FAQs
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_PROFILE.phone}`}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_PROFILE.phone}</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-orange-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBookingModal}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-orange-600 rounded-lg"
          >
            Quote
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-mono text-amber-400 pb-2 border-b border-slate-800 flex items-center justify-between">
            <span>CR: {COMPANY_PROFILE.crNumber}</span>
            <span>Tax ID: {COMPANY_PROFILE.taxId}</span>
          </div>

          <div className="flex flex-col space-y-2 pt-1 text-sm font-semibold text-slate-200">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Services (Moving & Trade)
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Contact & Location (Ruwi)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_PROFILE.phone}`}
              className="w-full text-center py-2.5 px-4 bg-slate-800 border border-slate-700 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: +968 98386824</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2"
            >
              <span>Instant Online Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
