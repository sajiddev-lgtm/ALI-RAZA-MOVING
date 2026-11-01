import React from 'react';
import { ArrowRight, ShieldCheck, Box, Truck, Warehouse, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Capabilities & Fleet
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Engineered for seamless transitions, zero downtime, and complete peace of mind.
            </h2>
          </div>
          <div className="text-sm text-neutral-600 max-w-md">
            Every relocation is managed by full-time carrier-certified professionals equipped with air-ride suspension transports and commercial protective systems.
          </div>
        </div>

        {/* Bento Grid: 2 Marquee Cards + 2 Compact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Residential Moving (Span 7) */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-300 transition-colors">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                01. Residential Relocations
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                Full-Service Home & Luxury Apartment Moves
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                From high-rise apartments in Manhattan to historic estates in Greenwich and Westchester. We provide full floor-to-ceiling door protection, custom furniture wrapping, and precision placement in every room of your new home.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-600 mb-6">
                <span>Hardwood Floor Runners</span>
                <span>·</span>
                <span>Wardrobe Box Wardens</span>
                <span>·</span>
                <span>Elevator Booking Coordination</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectService('residential')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                <span>Calculate Residential Rate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="relative aspect-16/9 w-full overflow-hidden bg-neutral-200 border-t border-neutral-200">
              <img
                src="/src/assets/images/residential_moving_1793515744246.jpg"
                alt="Residential moving boxes and padded sofa in a modern sunlit apartment"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 2: Corporate Relocation (Span 5) */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-300 transition-colors">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                02. Corporate & Office Logistics
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                Commercial Facility & IT Relocation
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Weekend and overnight scheduling engineered for absolute zero business interruption. Specialized anti-static computer carts, modular furniture reassembly, and secured document chains of custody.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-600 mb-6">
                <span>Encrypted Server Moving</span>
                <span>·</span>
                <span>Weekend Overnight Moves</span>
                <span>·</span>
                <span>Asset Inventory Tagging</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectService('commercial')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                <span>Request Commercial Rate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-200 border-t border-neutral-200">
              <img
                src="/src/assets/images/commercial_office_1793515744170.jpg"
                alt="Movers transporting padded office desks and computer monitors in glass hallway"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 3: Storage Solutions (Span 5) */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-300 transition-colors">
            <div className="p-6 sm:p-8">
              <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                03. Climate-Controlled Storage
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                Secure Private Vault Storage
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Direct vault loading straight from your home into private wooden storage vaults. Constant 68°F temperature and 50% humidity regulation with 24/7 biometric surveillance.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-600 mb-6">
                <span>Zero Double-Handling</span>
                <span>·</span>
                <span>Weekly or Monthly Flexible Leases</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectService('storage')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                <span>Add Storage to Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-200 border-t border-neutral-200">
              <img
                src="/src/assets/images/storage_facility_1793515744751.jpg"
                alt="Organized climate controlled storage corridors with polished concrete floors"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 4: White-Glove Packing & Custom Crating (Span 7) */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-neutral-300 transition-colors">
            <div>
              <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                04. White-Glove Packing & Rigging
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                Museum-Grade Crating for Pianos, Safes & Fine Art
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Our in-house carpenters craft custom shock-absorbing timber crates for fine oil paintings, marble tables, and delicate chandeliers. Our heavy rigging specialists safely transport upright and baby grand pianos with neoprene skid runners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-neutral-200 text-xs my-4">
                <div>
                  <div className="font-bold text-neutral-900">Custom Timber Crates</div>
                  <div className="text-neutral-500 mt-0.5">Built to exact millimeter dimensions</div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Heavy Rigging Gear</div>
                  <div className="text-neutral-500 mt-0.5">Hydraulic jacks & stair skids</div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Zero-Waste Eco Crates</div>
                  <div className="text-neutral-500 mt-0.5">Reusable hard-plastic box rental kits</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                100% itemized inventory with condition photo logging
              </span>
              <button
                type="button"
                onClick={() => onSelectService('packing')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
              >
                <span>Explore Crating Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
