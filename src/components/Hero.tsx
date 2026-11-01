import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Star, Truck } from 'lucide-react';
import { MoveType, PropertySize } from '../types';

interface HeroProps {
  onQuickStartQuote: (params: {
    moveType: MoveType;
    pickupZip: string;
    dropoffZip: string;
    propertySize: PropertySize;
  }) => void;
  onNavigateToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickStartQuote, onNavigateToBooking }) => {
  const [moveType, setMoveType] = useState<MoveType>('local');
  const [pickupZip, setPickupZip] = useState('10024');
  const [dropoffZip, setDropoffZip] = useState('06830');
  const [propertySize, setPropertySize] = useState<PropertySize>('2_bedroom');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickStartQuote({
      moveType,
      pickupZip,
      dropoffZip,
      propertySize,
    });
  };

  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Prop & Interactive Quick Estimator Launchpad */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata kicker without pill enclosure */}
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 mb-3 tracking-wide">
              <span>Licensed DOT #3892014</span>
              <span aria-hidden="true">·</span>
              <span>White-Glove Residential & Office Moving</span>
              <span aria-hidden="true">·</span>
              <span>100% Guaranteed Binding Rates</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-5 text-balance">
              Relocations engineered with absolute precision and zero stress.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Experience transparent, upfront pricing with our real-time moving quote engine. Whether relocating across the city or interstate, our vetted, background-checked crews treat your possessions with white-glove care.
            </p>

            {/* Interactive Quick Estimate Launcher Card */}
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 shadow-xs"
            >
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Instant Quote Estimator
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setMoveType('local')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      moveType === 'local'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200'
                    }`}
                  >
                    Local Move
                  </button>
                  <button
                    type="button"
                    onClick={() => setMoveType('long_distance')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      moveType === 'long_distance'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200'
                    }`}
                  >
                    Long Distance
                  </button>
                  <button
                    type="button"
                    onClick={() => setMoveType('commercial')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      moveType === 'commercial'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200'
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Pickup Zip
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupZip}
                    onChange={(e) => setPickupZip(e.target.value)}
                    placeholder="e.g. 10024"
                    className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Drop-off Zip
                  </label>
                  <input
                    type="text"
                    required
                    value={dropoffZip}
                    onChange={(e) => setDropoffZip(e.target.value)}
                    placeholder="e.g. 06830"
                    className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Home Size
                  </label>
                  <select
                    value={propertySize}
                    onChange={(e) => setPropertySize(e.target.value as PropertySize)}
                    className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="studio">Studio Apt</option>
                    <option value="1_bedroom">1 Bedroom</option>
                    <option value="2_bedroom">2 Bedroom</option>
                    <option value="3_bedroom">3 Bedroom</option>
                    <option value="4_plus_bedroom">4+ Bedroom</option>
                    <option value="office_small">Small Office</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="text-xs text-neutral-500 text-center sm:text-left">
                  Instant real-time calculation · No email required to preview rates
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  >
                    <span>Calculate Full Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToBooking}
                    className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Direct Booking
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: High Fidelity 16:9 Hero Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-16/10 lg:aspect-auto lg:h-full min-h-[340px] shadow-sm">
              <img
                src="/src/assets/images/moving_truck_crew_1793515743600.jpg"
                alt="Vanguard moving crew loading pristine furniture into clean moving truck"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle contrast scrim at bottom for photo caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      Standard Fleet & Crew
                    </div>
                    <div className="text-sm font-bold text-white">
                      Full Air-Ride Suspension & Uniformed Movers
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs text-neutral-200">
                    Insured up to $1,000,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip in a full-width row below the hero split */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-neutral-900 tracking-tight font-mono tabular-nums">
              3,240+
            </div>
            <div className="text-xs font-medium text-neutral-500">
              Verified Residential & Commercial Relocations
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold text-neutral-900 tracking-tight font-mono tabular-nums">
              4.9 / 5.0
            </div>
            <div className="text-xs font-medium text-neutral-500">
              Average Client Rating Across NY, CT & NJ
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold text-neutral-900 tracking-tight font-mono tabular-nums">
              $0.00
            </div>
            <div className="text-xs font-medium text-neutral-500">
              Hidden Fees Guarantee (Binding Written Estimate)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold text-neutral-900 tracking-tight font-mono tabular-nums">
              99.4%
            </div>
            <div className="text-xs font-medium text-neutral-500">
              Guaranteed On-Time Dispatch & Delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
