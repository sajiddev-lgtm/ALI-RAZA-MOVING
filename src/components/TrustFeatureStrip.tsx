import React from 'react';
import { ShieldCheck, Package, DollarSign, Users, Award, Truck } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/omanData';

export const TrustFeatureStrip: React.FC = () => {
  return (
    <div className="bg-[#060A14] border-y border-slate-800/80 py-5 px-4 sm:px-6 lg:px-8 text-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Fully Licensed & Insured
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              CR: {COMPANY_PROFILE.crNumber} · Tax: {COMPANY_PROFILE.taxId}
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
            <Package className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              Free Packing Box Kit
            </div>
            <div className="text-[11px] text-slate-400">
              Wardrobes & heavy bubble roll
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              No Hidden Fees
            </div>
            <div className="text-[11px] text-slate-400">
              Guaranteed binding price in OMR
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
              10,000+ Happy Moves
            </div>
            <div className="text-[11px] text-slate-400">
              Across Muscat & Sultanate of Oman
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
