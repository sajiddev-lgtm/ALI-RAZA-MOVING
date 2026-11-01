import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Check,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  Calculator,
  Truck,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, SERVICES_CATALOG } from '../../data/servicesData';
import { SEO, getOrganizationSchema } from '../common/SEO';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CtaSection } from '../common/CtaSection';
import { SafeImage } from '../common/SafeImage';

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ service }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const relatedServices = SERVICES_CATALOG.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <SEO
        title={`${service.title} Services in Muscat, Oman`}
        description={`${service.shortDesc} Provided by ALI RAZA INTERNATIONAL TRADE SPS (CR: 1481820).`}
        canonicalPath={`/services/${service.slug}`}
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.title,
            provider: {
              '@type': 'LocalBusiness',
              name: 'ALI RAZA INTERNATIONAL TRADE SPS',
              telephone: '+96898386824',
              url: 'https://aliraza-international.com',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Sultanate of Oman',
            },
            description: service.shortDesc,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100 text-left">
        <Breadcrumbs
          items={[
            { label: 'Services', path: '/services' },
            { label: service.title },
          ]}
        />

        {/* 1. Large Cinematic Hero */}
        <section className="relative py-14 lg:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensed Moving Division · CR: 1481820</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  {service.title} in Muscat & Across Oman
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.overview}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all"
                  >
                    <span>Request a Free Quote</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>

                  <Link
                    to="/moving-cost-calculator"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-colors"
                  >
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Calculate Rates in OMR</span>
                  </Link>

                  <a
                    href={`https://wa.me/96898386824?text=${encodeURIComponent(
                      `Hello, I would like to inquire about ${service.title} in Oman.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 aspect-16/10 lg:aspect-4/3">
                  <SafeImage
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    fallbackCategory="moving"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-slate-200">
                    ALI RAZA INTERNATIONAL TRADE SPS · Career Moving Fleet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Benefits Grid */}
        <section className="py-16 bg-[#0A1128] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                Why Choose This Service
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Key Advantages of Our {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-2 hover:border-amber-400/40 transition-colors"
                >
                  <div className="text-orange-400 font-bold text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 stroke-[3]" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. What's Included Section */}
        <section className="py-16 bg-[#070D1E] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                  Comprehensive Coverage
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  What’s Included in Our {service.title} Package
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Every move is accompanied by full equipment, protective packing accessories, and dedicated transport. Zero hidden equipment rental fees.
                </p>
                <div className="pt-2">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs"
                  >
                    <span>Request Custom Scope & Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
                  {service.whatsIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 py-2 border-b border-slate-800/80 last:border-b-0 text-xs sm:text-sm text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How the Service Works (4 Steps) */}
        <section className="py-16 bg-[#0A1128] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                Execution Workflow
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                How Our {service.title} Protocol Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative group hover:border-slate-700 transition-colors"
                >
                  <div className="text-2xl font-black font-mono text-amber-400 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Service-Specific FAQs */}
        <section className="py-16 bg-[#070D1E] border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                Specific Inquiries
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-amber-400 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-14 bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">
                  Related Relocation Services
                </h3>
                <Link
                  to="/services"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  View All Services →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/services/${rel.slug}`}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-orange-500/80 transition-colors block group"
                  >
                    <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                      {rel.shortDesc}
                    </p>
                    <span className="text-xs font-bold text-amber-400 inline-flex items-center gap-1">
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CtaSection
          title={`Ready to Book ${service.title}?`}
          subtitle="Get in touch with our dispatch team or generate your indicative estimate in minutes."
        />
      </div>
    </>
  );
};
