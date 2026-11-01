import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Check,
  Truck,
  Building2,
  Home,
  Globe2,
  Package,
  Layers,
  Boxes,
  Briefcase,
  Calculator,
} from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICES_CATALOG } from '../data/servicesData';
import { CtaSection } from '../components/common/CtaSection';
import { SafeImage } from '../components/common/SafeImage';

export const ServicesIndexPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services — Complete Moving & Logistics Directory"
        description="Explore the full moving catalog of ALI RAZA INTERNATIONAL TRADE SPS (OAN Moving): Residential, Commercial, International, Office, Furniture, Packing, Loading, and Logistics in Oman."
        canonicalPath="/services"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: SERVICES_CATALOG.map((svc, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: svc.title,
              url: `https://aliraza-international.com/services/${svc.slug}`,
            })),
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100">
        <Breadcrumbs items={[{ label: 'Our Services' }]} />

        {/* Hero Section */}
        <section className="relative py-14 lg:py-20 border-b border-slate-800 text-left overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed Relocation & Freight Services in Oman</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Complete Moving, Packing & Logistics Solutions
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether relocating an executive villa in Al Mouj, transferring an office in Ruwi, or shipping personal freight across GCC borders, ALI RAZA INTERNATIONAL TRADE SPS delivers tailored solutions backed by commercial registration (CR: 1481820) and career moving specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Service Cards Grid */}
        <section className="py-16 bg-[#0A1128] border-b border-slate-800 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES_CATALOG.map((svc, idx) => (
                <div
                  key={svc.slug}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/80 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                      <SafeImage
                        src={svc.heroImage}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackCategory="moving"
                      />
                      <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-xs text-orange-400 font-mono text-xs font-bold px-3 py-1 rounded-lg border border-slate-700">
                        Division 0{idx + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {svc.title}
                      </h2>
                      <p className="text-xs font-medium text-amber-400/90 italic">
                        "{svc.tagline}"
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {svc.shortDesc}
                      </p>

                      {/* Benefits preview */}
                      <div className="pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Advantages:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {svc.benefits.slice(0, 3).map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-white">{b.title}:</strong> {b.desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Read Detailed Service Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/get-a-quote"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/20"
                    >
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Commercial Trading & Support Division */}
        <section className="py-14 bg-slate-950 border-b border-slate-800 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B132B] border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Trading & Municipal Support Activities
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Building Materials Wholesale, Housewares Trade & Site Waste Clearance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Beyond moving, Ali Raza International Trade SPS supplies wholesale gypsum, cement, and structural materials directly to Oman construction jobsites, as well as municipal-compliant commercial site waste disposal.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700"
                >
                  Inquire Trade Division
                </Link>
                <Link
                  to="/moving-cost-calculator"
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs"
                >
                  Moving Cost Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Need Guidance on the Best Service Package for Your Move?"
          subtitle="Our logistics advisors in Ruwi can guide you through truck sizing, packing options, and custom scheduling."
        />
      </div>
    </>
  );
};
