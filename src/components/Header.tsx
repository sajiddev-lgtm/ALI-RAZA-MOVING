import React from 'react';
import { Package, Search, Phone, CalendarCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'calculator' | 'booking' | 'services' | 'checklist';
  onNavigate: (tab: 'home' | 'calculator' | 'booking' | 'services' | 'checklist') => void;
  onOpenTracker: () => void;
  hasBookingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onOpenTracker,
  hasBookingsCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-xl font-extrabold tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors whitespace-nowrap shrink-0 text-left"
        >
          Vanguard Relocations
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          <button
            onClick={() => onNavigate('calculator')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-950 ${
              activeTab === 'calculator' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Quote Calculator
          </button>
          <button
            onClick={() => onNavigate('booking')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-950 ${
              activeTab === 'booking' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Interactive Booking
          </button>
          <button
            onClick={() => onNavigate('services')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-950 ${
              activeTab === 'services' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Services & Fleet
          </button>
          <button
            onClick={() => onNavigate('checklist')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-neutral-950 ${
              activeTab === 'checklist' ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900' : ''
            }`}
          >
            Moving Checklist
          </button>
        </nav>

        {/* Zone 3: 1 primary action + helper affordances */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTracker}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Track existing reservation"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-neutral-700" />
            <span>Track Move</span>
            {hasBookingsCount > 0 && (
              <span className="font-mono text-[10px] bg-neutral-900 text-white rounded px-1.5 py-0.2">
                {hasBookingsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('calculator')}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Instant Free Quote
          </button>
        </div>
      </div>
    </header>
  );
};
