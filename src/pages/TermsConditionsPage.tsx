import React from 'react';
import { Scale, FileCheck, AlertTriangle, ShieldCheck, Truck, DollarSign } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function TermsConditionsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Ali Raza International Trade SPC"
        description="Official moving service terms and carriage conditions for Ali Raza International Trade SPC (OAN Moving & Logistics) in the Sultanate of Oman."
        canonicalUrl="/terms-and-conditions"
        keywords="terms of service moving Oman, OAN moving terms, carriage conditions Muscat, Ali Raza Trade terms"
      />

      <section className="bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#0F172A] text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" />
              Standard Conditions of Carriage & Service Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Effective Date: January 1, 2026 · Ali Raza International Trade SPC (CR: 1481820)
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200 text-slate-700 space-y-8 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-orange-600" />
                1. Quotations &amp; Indicative Pricing
              </h2>
              <p>
                Calculations generated via our online Moving Cost Calculator or ballpark web estimators are non-binding indicative estimates based on standard volume configurations. A binding fixed quotation is established only after an on-site physical survey, itemized video walkthrough, or formal written contract signed by both <strong>Ali Raza International Trade SPC</strong> and the customer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-orange-600" />
                2. Payments &amp; Invoicing
              </h2>
              <p className="mb-2">
                All pricing is quoted in <strong>Omani Riyals (OMR)</strong> unless explicitly stated otherwise.
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
                <li>For standard residential city moves within Muscat, payment in full is due upon completion of loading, transport, and delivery.</li>
                <li>For inter-governorate transit (e.g. Salalah, Sohar, Sur) or international shipments, a deposit of 30% to 50% is required prior to vehicle dispatch.</li>
                <li>Invoices are issued reflecting official Commercial Registration (CR: 1481820) and Tax Identification (1896320).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange-600" />
                3. Customer Access &amp; Preparedness
              </h2>
              <p>
                The client is responsible for securing necessary access permissions from building management, security gates (e.g. Al Mouj, Muscat Hills, Madinat Sultan Qaboos compounds), elevator reservations, and parking clearance for heavy moving trucks at both origin and destination addresses. Delays exceeding 2 hours due to lack of access may incur standard idle vehicle charges.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                4. Prohibited &amp; Excluded Cargo
              </h2>
              <p className="mb-3">
                Under Sultanate of Oman public safety and transport laws, the following items cannot be accepted for carriage:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
                <li>Hazardous materials: flammable gases, butane canisters, corrosive pool chemicals, explosive ordnance, or open paints.</li>
                <li>Perishable food items subject to rapid spoilage during warm weather transit.</li>
                <li>Personal valuables: cash currency, bearer bonds, high-end fine jewelry, bullion, passports, and official identity documents (clients are instructed to transport these personally).</li>
                <li>Items prohibited or restricted by the Royal Oman Police or customs statutes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
                5. Transit Protection &amp; Liability Claims
              </h2>
              <p>
                Our crew exercises the highest industry care utilizing specialized furniture pads, shrink wraps, and corrugated strapping. In the rare event of transit damage, claims must be formally documented on the Delivery Receipt prior to our supervisor departing the premises, followed by photographic evidence submitted via email within 48 hours. Items packed exclusively by the customer without our supervision (&quot;P.B.O. — Packed by Owner&quot;) carry limited carrier liability for internal contents.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-orange-600" />
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms and Conditions and any contractual disputes arising from moving services shall be governed and construed in accordance with the commercial laws of the <strong>Sultanate of Oman</strong>. The competent courts in Muscat, Oman, shall have exclusive jurisdiction over any unresolved dispute.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
              <p>
                For questions regarding terms or carrier insurance endorsements, contact: <strong>Ali Raza International Trade SPC</strong>, Ruwi/Muttrah, Muscat. Phone: +968 9838 6824, Email: Iqumantransport@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
