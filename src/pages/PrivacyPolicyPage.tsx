import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Ali Raza International Trade SPC"
        description="Official Privacy Policy for Ali Raza International Trade SPC (OAN Moving & Logistics). Learn how we protect customer data under Oman commerce regulations."
        canonicalUrl="/privacy-policy"
        keywords="OAN moving privacy policy, Ali Raza International Trade data policy, Oman moving company terms"
      />

      <section className="bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#0F172A] text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Corporate Governance & Data Protection
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Privacy Policy
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
                <Building2 className="w-5 h-5 text-orange-600" />
                1. Identification of the Entity
              </h2>
              <p>
                This Privacy Policy outlines how <strong>Ali Raza International Trade SPC</strong> (operating as <strong>OAN Moving &amp; Logistics Services</strong>), Commercial Registration (CR) Number: <strong>1481820</strong>, Tax Identification Number: <strong>1896320</strong>, headquartered in the Ruwi / Muttrah Commercial Business Hub, Muscat, Sultanate of Oman, collects, processes, and protects your personal information when you use our website or engage our moving, transport, and logistics services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                2. Information We Collect
              </h2>
              <p className="mb-3">To deliver moving, freight, and quotation services, we may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
                <li><strong>Contact Identification:</strong> Full name, phone/WhatsApp number, and email address.</li>
                <li><strong>Relocation Coordinates:</strong> Origin address, drop-off destination address, building floor, elevator access, and regional governorate.</li>
                <li><strong>Cargo &amp; Inventory Details:</strong> Furniture descriptions, room counts, box quantities, declared high-value items, and special handling instructions.</li>
                <li><strong>Technical Data:</strong> Device browser type, operating system, and anonymous interaction metrics for website optimization.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-600" />
                3. Purpose of Processing
              </h2>
              <p className="mb-3">We utilize collected customer information solely for lawful commercial purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
                <li>Generating accurate moving quotes and logistics schedules.</li>
                <li>Dispatching moving crews, vehicles, packing supplies, and carpenters to designated locations.</li>
                <li>Facilitating cross-border customs declarations and transit manifests for international shipping.</li>
                <li>Maintaining invoice records in compliance with Oman Tax Authority and MOCIIP statutory regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-600" />
                4. Data Sharing &amp; Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party advertisers. Information is only disclosed to operational partners directly involved in executing your relocation (such as bonded freight forwarding carriers, port clearance agents for sea freight, or customs authorities at international border checkpoints) or when required by legal mandate under the laws of the Sultanate of Oman.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                5. Data Security &amp; Retention
              </h2>
              <p>
                We employ standard physical, electronic, and managerial safeguards to protect your data against unauthorized access, alteration, or disclosure. Customer contact records are retained only for the duration required to fulfill moving contracts and comply with statutory bookkeeping obligations under Omani commercial law.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Our Privacy Officer</h2>
              <p className="text-sm text-slate-600">
                If you have questions about your personal data or wish to request corrections, please contact:
              </p>
              <div className="mt-3 bg-slate-50 p-4 rounded-xl text-xs space-y-1 font-mono text-slate-700 border border-slate-200">
                <p><strong>Ali Raza International Trade SPC</strong></p>
                <p>Attn: Data Compliance Officer</p>
                <p>Ruwi / Muttrah Commercial Business Hub, Muscat, Sultanate of Oman</p>
                <p>Email: Iqumantransport@gmail.com | Phone: +968 9838 6824</p>
                <p>CR: 1481820 | Tax ID: 1896320</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
