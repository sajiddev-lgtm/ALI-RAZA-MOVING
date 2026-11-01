import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  ShieldCheck,
  Phone,
  MessageCircle,
  FileQuestion,
} from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQS_CATALOG, FaqItem } from '../data/faqData';
import { CtaSection } from '../components/common/CtaSection';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'gen-1': true, 'cost-1': true });

  const categories = [
    'All',
    'General Questions',
    'Moving Costs',
    'Packing & Moving',
    'International Moving',
    'Booking & Support',
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions — Relocation & Logistics FAQ"
        description="Find verified answers to common questions about moving costs, packing supplies, furniture dismantling, international freight, and booking with ALI RAZA INTERNATIONAL TRADE SPS in Oman."
        canonicalPath="/faq"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS_CATALOG.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          },
        ]}
      />

      <div className="bg-[#070D1E] text-slate-100 text-left">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero Header */}
        <section className="py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-400">
              <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
              <span>Transparent Relocation Answers · Sultanate of Oman</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Find clear, professional answers regarding our moving procedures, OMR pricing calculations, carpentry services, and international customs requirements.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto pt-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. wardrobe, pricing, Dubai, elevator)..."
                  className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Tabs & Accordions */}
        <section className="py-12 sm:py-16 bg-[#0A1128] border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-bold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3.5">
                {filteredFaqs.map((faq) => {
                  const isOpen = !!openIds[faq.id];
                  return (
                    <div
                      key={faq.id}
                      className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div>
                          <span className="text-[10px] font-mono uppercase text-orange-400 font-bold tracking-wider block mb-1">
                            {faq.category}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 mt-1 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">
                <FileQuestion className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">No matching questions found.</p>
                <p className="text-xs mt-1">Try adjusting your search query or select "All" categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Still have questions? Help Card */}
        <section className="py-12 bg-[#070D1E] border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1">
                <h3 className="text-lg font-bold text-white">Have a Specific Moving Question?</h3>
                <p className="text-xs text-slate-400">
                  Our dispatch coordinator in Ruwi is available Saturday through Thursday to assist you.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:+96898386824"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call +968 9838 6824</span>
                </a>
                <a
                  href="https://wa.me/96898386824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="Ready to Book Your Move?"
          subtitle="Get an instant transparent estimate with our cost calculator or submit your details for a tailored written quotation."
        />
      </div>
    </>
  );
};
