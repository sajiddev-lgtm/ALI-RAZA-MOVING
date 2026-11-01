import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Package,
  Truck,
  Home,
  Check,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaSection } from '../components/common/CtaSection';

export const OurProcessPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Inventory Survey',
      timing: '1 to 2 Weeks Prior',
      desc: 'We start by reviewing your home or office inventory. You can use our online Moving Cost Calculator, send room photos via WhatsApp (+968 9838 6824), or request an on-site survey in Muscat.',
      deliverables: [
        'Detailed itemized volume estimate and crew size recommendation',
        'Binding written price quotation in Omani Riyal (OMR) with zero hidden fees',
        'Guidance on building elevator reservations and municipality parking permits',
      ],
    },
    {
      num: '02',
      title: 'Precision Packing & Carpenter Dismantling',
      timing: 'Moving Day Morning / Day Prior',
      desc: 'Our uniformed crew arrives punctually with fresh 5-ply cartons, bubble wrap, stretch film, and wardrobe boxes. Master carpenters systematically dismantle large multi-door wardrobes, king beds, and executive desks.',
      deliverables: [
        'All hardware screws and fittings preserved in labeled, sealed bags',
        'Glassware, chandeliers, and TVs wrapped in multi-layer shock-absorbing cell packs',
        'Floor runners and door jamb pads deployed to protect floors and walls',
      ],
    },
    {
      num: '03',
      title: 'Secure Loading & Highway Transit',
      timing: 'Transit Stage',
      desc: 'Items are strategically loaded into our clean, dust-sealed enclosed cargo trucks. Heavy furniture forms the base layer, locked down with commercial ratcheting straps to prevent shifting during transit across Muscat or inter-governorate highways.',
      deliverables: [
        'Even weight distribution across commercial cargo axles',
        'All-weather enclosed box vehicles shielding against Muscat heat and road dust',
        'Direct driver communication and real-time dispatch updates',
      ],
    },
    {
      num: '04',
      title: 'Unloading, Reassembly & Debris Removal',
      timing: 'Arrival at Destination',
      desc: 'Upon reaching your new home or office, goods are carried inside and placed into their designated rooms. Our carpenters reassemble all bedframes, cupboards, and desks, inspect door alignments, and clear all used boxes and paper.',
      deliverables: [
        'Furniture reassembled in exact rooms specified on floorplans',
        'Mattresses placed on bedframes and heavy appliances positioned',
        'All empty packing boxes and wrapping debris carted away for recycling',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Our Relocation Process — How We Execute Moves in Oman"
        description="Discover the 4-stage moving process of ALI RAZA INTERNATIONAL TRADE SPS. Learn how our survey, packing, carpenter dismantling, transit, and reassembly protocol guarantees a zero-stress move."
        canonicalPath="/our-process"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Move Home or Office with ALI RAZA INTERNATIONAL TRADE SPS',
            step: steps.map((s, idx) => ({
              '@type': 'HowToStep',
              position: idx + 1,
              name: s.title,
              text: s.desc,
            })),
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100 text-left">
        <Breadcrumbs items={[{ label: 'Our Process' }]} />

        {/* Hero */}
        <section className="py-14 sm:py-20 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Standard Operating Procedures · Sultanate of Oman</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              How Our Moving Process Works
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We replace moving chaos with structured logistics. Every residential and commercial relocation follows our time-tested 4-stage methodology.
            </p>
          </div>
        </section>

        {/* 4 Process Stages Detailed */}
        <section className="py-16 bg-[#0A1128] border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 hover:border-orange-500/60 transition-colors shadow-xl"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black font-mono text-xl flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                      {st.num}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {st.title}
                      </h2>
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        Phase: {st.timing}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="py-4 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>{st.desc}</p>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                      Key Deliverables in this Stage:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {st.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Moving Day Preparation Tips */}
        <section className="py-16 bg-[#070D1E] border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                  Customer Checklist
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  3 Quick Tips for a Flawless Moving Day
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="font-bold text-amber-400 block text-sm">1. First-Night Bag</span>
                  <p className="text-slate-400 leading-relaxed">
                    Keep passports, civil IDs, phone chargers, daily toiletries, and medications in your personal car or overnight tote.
                  </p>
                </div>

                <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="font-bold text-amber-400 block text-sm">2. Elevator Booking</span>
                  <p className="text-slate-400 leading-relaxed">
                    Inform building security or management in advance to lock service lifts during the scheduled loading hours.
                  </p>
                </div>

                <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="font-bold text-amber-400 block text-sm">3. Fridge Defrosting</span>
                  <p className="text-slate-400 leading-relaxed">
                    Empty and unplug refrigerators 12 to 24 hours prior to loading to prevent water leaks onto adjacent carton boxes during transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Ready to Experience a Stress-Free Move?"
          subtitle="Calculate your rate in OMR or book your relocation date with our Muscat dispatch desk."
        />
      </div>
    </>
  );
};
