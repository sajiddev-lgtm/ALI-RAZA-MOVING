import React from 'react';
import { ShieldCheck, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MovingCostCalculator } from '../components/calculator/MovingCostCalculator';
import { CtaSection } from '../components/common/CtaSection';

export const MovingCostCalculatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Moving Cost Calculator — Interactive Rate Estimator in Oman"
        description="Estimate your residential, commercial, or international moving cost in Omani Riyal (OMR). Full itemized breakdown based on real transport, labor, and packing parameters."
        canonicalPath="/moving-cost-calculator"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Interactive Moving Cost Calculator',
            url: 'https://aliraza-international.com/moving-cost-calculator',
            description:
              'Interactive multi-step moving cost calculator for Sultanate of Oman relocations.',
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100 text-left">
        <Breadcrumbs items={[{ label: 'Moving Cost Calculator' }]} />

        {/* Hero Header */}
        <section className="py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Real-Time Algorithmic Estimator · Sultanate of Oman</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Interactive Moving Cost Calculator
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Plan your relocation budget with complete transparency. Customize route distances, property sizes, packing supplies, and carpenter services for an immediate itemized cost breakdown.
            </p>
          </div>
        </section>

        {/* Calculator Widget */}
        <section className="py-12 sm:py-16 bg-[#0A1128] border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <MovingCostCalculator />
          </div>
        </section>

        {/* Pricing Transparency Commitment */}
        <section className="py-14 bg-[#070D1E] border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Our Binding Price & Rate Transparency Guarantee
                  </h2>
                  <div className="text-xs text-slate-400">
                    ALI RAZA INTERNATIONAL TRADE SPS · CR: 1481820 | Tax ID: 1896320
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>No Moving Day Surprises</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    We do not add arbitrary stair fees, parking fines, or unexpected fuel surcharges when our crew arrives at your door.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Configured Fleet Rates</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Our calculations are tied to real operational parameters: vehicle fuel bands, certified driver compensation, and packing material costs.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Fast Quote Transfer</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Satisfied with your calculation? Click "Request This Quote" to automatically populate our booking form with your exact breakdown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Need an On-Site Survey or Custom Corporate Rate Card?"
          subtitle="Our logistics coordinators in Muscat are ready to conduct an on-site inventory walkthrough or prepare formal corporate tenders."
        />
      </div>
    </>
  );
};
