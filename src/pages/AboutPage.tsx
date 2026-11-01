import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  Users,
  Target,
  Eye,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Boxes,
  Building2,
} from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CtaSection } from '../components/common/CtaSection';
import { SafeImage } from '../components/common/SafeImage';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us — Corporate Profile & Moving Capabilities"
        description="Learn about ALI RAZA INTERNATIONAL TRADE SPS (CR: 1481820 | Tax ID: 1896320), operating OAN Moving & Logistics Services across Muscat, Sultanate of Oman."
        canonicalPath="/about"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About ALI RAZA INTERNATIONAL TRADE SPS',
            url: 'https://aliraza-international.com/about',
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 border-b border-slate-800 text-left overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Commercial Registration: 1481820 · Tax ID: 1896320</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  Dedicated to Reliable Moving, Logistics & Trade Excellence in Oman.
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  <strong className="text-white">ALI RAZA INTERNATIONAL TRADE SPS</strong> operates premier relocation and transportation services under the brand <strong className="text-amber-400">OAN Moving & Logistics Services</strong>. Headquartered in the commercial hub of Ruwi / Muttrah in Muscat, we serve residential clients, multinational corporations, local businesses, and government entities with disciplined, stress-free moving solutions.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>Ruwi / Muttrah Commercial Hub, Muscat</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>+968 9838 6824</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 aspect-4/3">
                  <SafeImage
                    src="/images/moving_truck_crew_1793515743600.jpg"
                    alt="ALI RAZA moving crew and commercial truck in Oman"
                    className="w-full h-full object-cover"
                    fallbackCategory="truck"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-slate-200">
                    Uniformed moving crew and enclosed transport vehicle fleet in Muscat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-[#0A1128] border-b border-slate-800 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 space-y-4 hover:border-amber-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To eliminate the anxiety and friction traditionally associated with relocating homes and businesses in Oman. We fulfill this by providing background-checked moving personnel, skilled carpenters, high-grade protective packing, and upfront, binding pricing without hidden charges.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 space-y-4 hover:border-amber-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To be recognized across the Sultanate of Oman and the wider GCC as the most dependable and customer-centric logistics partner—known for integrity, operational punctuality, and complete stewardship of our clients' property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach to Moving & Logistics */}
        <section className="py-16 lg:py-20 bg-[#070D1E] border-b border-slate-800 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                Operational Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our Approach to Moving & Logistics
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                We believe that successful moves are won in the preparation phase. Here are the core pillars that guide our daily operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'In-House Master Carpenters',
                  desc: 'Every team includes carpentry specialists trained to safely disassemble and reassemble complex European, Italian, and IKEA bedroom and office suites without stripped screws or damaged finishes.',
                },
                {
                  title: 'Dust-Sealed & Enclosed Fleet',
                  desc: 'We operate covered cargo box vehicles to protect your upholstery, electronics, and wardrobe cartons from intense Gulf heat, sunlight, and highway road dust.',
                },
                {
                  title: 'Transparent Binding Quotes',
                  desc: 'We never lure customers with artificial low quotes only to invent stair, fuel, or parking charges on moving day. What we quote in our formal estimate is what you pay.',
                },
                {
                  title: 'Punctual Dispatch Discipline',
                  desc: 'We respect your building booking slots and family schedules. Our crews are dispatched early to guarantee arrival within the confirmed window.',
                },
                {
                  title: 'Dual Residential & Commercial Focus',
                  desc: 'From single-room apartment shifts in Seeb to weekend multi-workstation office relocations in Ruwi, our operations accommodate both private households and registered corporate clients.',
                },
                {
                  title: 'Official VAT & Corporate Compliance',
                  desc: 'As an officially registered commercial entity (CR: 1481820 | Tax ID: 1896320), we supply formal invoices and documentation required for corporate expense clearance.',
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Trust Credentials Banner */}
        <section className="py-12 bg-slate-950 border-b border-slate-800 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-orange-400 uppercase font-bold">
                  Corporate Verification Details
                </div>
                <div className="text-lg font-bold text-white">
                  ALI RAZA INTERNATIONAL TRADE SINGLE PERSON COMPANY (SPS)
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  MOCIIP Commercial Reg: 1481820 · Tax ID: 1896320 · Sultanate of Oman
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs"
                >
                  Contact Muscat Office
                </Link>
                <Link
                  to="/get-a-quote"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs shadow-md shadow-orange-500/20"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaSection
          title="Ready to Relocate with Muscat’s Dedicated Moving Team?"
          subtitle="Speak with our dispatch coordinators or use our online calculator to plan your relocation today."
        />
      </div>
    </>
  );
};
