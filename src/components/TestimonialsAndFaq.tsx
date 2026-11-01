import React, { useState } from 'react';
import { ChevronDown, Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/mockData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Trusted by homeowners, designers, and fast-growing enterprises.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Read how our transparent binding quotes and certified moving crews execute on moving day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed route metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3 font-mono">
                    <span>{t.route}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">{t.author}</div>
                    <div className="text-[11px] text-neutral-500">
                      {t.role} · {t.inventorySize}
                    </div>
                  </div>
                  <div className="flex text-neutral-900">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-neutral-900 stroke-none" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-neutral-200">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Clear Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600">
              Everything you need to know about our quote engine, deposits, and moving day policies.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-sm font-bold text-neutral-900 hover:text-neutral-700"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
