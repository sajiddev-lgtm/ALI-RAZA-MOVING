import React, { useState } from 'react';
import { ArrowRight, Check, Phone, ShieldCheck, Box, Truck, Building2, Trash2, Hammer } from 'lucide-react';
import { CORE_SERVICES, ServiceDetail, COMPANY_PROFILE } from '../data/omanData';
import { SafeImage } from './common/SafeImage';

interface OmanServicesGridProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onOpenBookingModal: (prefill?: any) => void;
}

export const OmanServicesGrid: React.FC<OmanServicesGridProps> = ({
  onSelectServiceForQuote,
  onOpenBookingModal,
}) => {
  const [selectedDetailModal, setSelectedDetailModal] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0A1128] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>Licensed Commercial Activities</span>
              <span>·</span>
              <span>CR: {COMPANY_PROFILE.crNumber}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
              Comprehensive Moving, Logistics & General Trading Services in Oman
            </h2>
          </div>
          <div className="text-sm text-slate-300 max-w-md leading-relaxed text-left">
            From premier household shifting under <strong className="text-white">OAN Relocations</strong> to wholesale building materials supply, our team provides dependable solutions across the Sultanate.
          </div>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-orange-500/80 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/10 text-left"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackCategory="moving"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-orange-400 font-mono text-xs font-bold px-2.5 py-1 rounded-md border border-slate-700">
                    {service.code}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                    {service.unit}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-amber-400 font-medium mb-1">
                    {service.arabicTitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDetailModal(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-white underline cursor-pointer"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onSelectServiceForQuote(service.id);
                    onOpenBookingModal({ serviceType: service.id });
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-lg transition-colors cursor-pointer shadow-sm shadow-orange-500/20"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Commercial Contracting Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-slate-900/90 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Corporate Accounts & Contractor Contracts</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Need Long-Term Fleet Logistics or Building Materials Trade Lines?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Ali Raza International Trade SPC partners with Muscat engineering firms, interior fit-out companies, and developers. Official tax invoices, VAT documentation, and credit facilities available.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_PROFILE.phone}`}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-orange-500/20 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Corporate Desk: +968 98386824</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-[#0B132B] border border-slate-700 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-left shadow-2xl relative text-white">
            <div className="flex items-start justify-between pb-3 border-b border-slate-800">
              <div>
                <div className="text-xs font-mono text-orange-400 uppercase">
                  Service Specification · {selectedDetailModal.code}
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedDetailModal.title}
                </h3>
                <div className="text-xs text-slate-400 font-medium">
                  {selectedDetailModal.arabicTitle}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDetailModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>{selectedDetailModal.fullDesc}</p>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-orange-400 text-xs uppercase tracking-wider">
                  Included Features & Safeguards:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedDetailModal.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                {selectedDetailModal.unit}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDetailModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedDetailModal.id;
                    setSelectedDetailModal(null);
                    onOpenBookingModal({ serviceType: id });
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
