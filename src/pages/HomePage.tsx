import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  MessageCircle,
  Calculator,
  Building2,
  Globe2,
  Clock,
  HelpCircle,
  FileCheck,
  Award,
  Users,
} from 'lucide-react';
import { SEO, getOrganizationSchema } from '../components/common/SEO';
import { HeroExactMatch } from '../components/HeroExactMatch';
import { TrustFeatureStrip } from '../components/TrustFeatureStrip';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { SERVICES_CATALOG } from '../data/servicesData';
import { FAQS_CATALOG } from '../data/faqData';
import { COMPANY_STATS } from '../data/companyStats';
import { CtaSection } from '../components/common/CtaSection';
import { SafeImage } from '../components/common/SafeImage';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { language, isRTL, t } = useLanguage();

  const handleOpenBookingModal = (prefill?: any) => {
    if (prefill) {
      sessionStorage.setItem('oan_quote_prefill', JSON.stringify(prefill));
    }
    navigate('/get-a-quote');
  };

  const previewFaqs = FAQS_CATALOG.slice(0, 5);

  return (
    <>
      <SEO
        title="Professional Moving, Logistics & International Freight in Oman"
        description="Ali Raza International Trade SPS (CR: 1481820) offers premier residential, commercial, office, and international moving across Muscat, Oman & the GCC. Free online cost calculator."
        canonicalPath="/"
        schema={[
          getOrganizationSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ALI RAZA INTERNATIONAL TRADE SPS',
            url: 'https://aliraza-international.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://aliraza-international.com/services?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />

      <div className="bg-slate-50 dark:bg-[#070D1E] text-slate-900 dark:text-slate-100 transition-colors">
        {/* 1. Cinematic Hero Section with Typewriter Rotating Headline */}
        <HeroExactMatch onOpenBookingModal={handleOpenBookingModal} />

        {/* 2. Trust Feature Strip (4 Key Pillars) */}
        <TrustFeatureStrip />

        {/* 3. Verified Customer Statistics Banner */}
        <section className="py-12 bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-orange-600 dark:text-amber-400 font-mono">
                  {COMPANY_STATS.customerCount.toLocaleString()}+
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mt-1">
                  {t('customerStatTitle', 'Customers in the Last 8 Months')}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {t('customerStatSub', 'Across Muscat, Sohar, Salalah & GCC')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                  99.4%
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mt-1">
                  {t('statSatisfactionLabel', 'Safety & Punctuality Record')}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {language === 'ar' ? 'وصول الشاحنات في الموعد المحدد' : 'Zero transit furniture damage claims'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 font-mono">
                  4.9 / 5
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mt-1">
                  {t('statReviews', '4.9/5 Rating')}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {t('statReviewsLabel', 'From 3,400+ Verified Reviews')}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400 font-mono">
                  100%
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mt-1">
                  MOCIIP Compliant
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Commercial Reg (CR): 1481820
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Moving Services Overview & Gateway to All Service Pages */}
        <section className="py-16 lg:py-24 bg-slate-100 dark:bg-[#0A1128] border-b border-slate-200 dark:border-slate-800 text-left transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <div className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span>Comprehensive Relocation Solutions</span>
                  <span>·</span>
                  <span>CR: 1481820</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === 'ar'
                    ? 'خدمات هندسية متكاملة لنقل الأثاث والشحن اللوجستي'
                    : 'Engineered Moving & Freight Services for Every Requirement'}
                </h2>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                {language === 'ar'
                  ? 'استكشف كافة قطاعات النقل المتخصصة. يتم تنفيذ كل عملية بواسطة كوادرنا النظامية وتحت إشراف نجارين محترفين.'
                  : 'Explore our full spectrum of specialized relocation divisions. Each service is executed by our full-time, background-checked crews and master carpenters.'}
              </div>
            </div>

            {/* 8 Moving Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES_CATALOG.map((svc) => (
                <div
                  key={svc.slug}
                  className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-orange-500/80 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div>
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                      <SafeImage
                        src={svc.heroImage}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        fallbackCategory="moving"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-700">
                        {language === 'ar' ? 'معتمد رسمياً' : 'Official Division'}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors">
                        {language === 'ar' ? svc.titleAr || svc.title : svc.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {svc.shortDesc}
                      </p>

                      <ul className="mt-3.5 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {(svc.whatsIncluded || []).slice(0, 3).map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-orange-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-slate-950 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>{language === 'ar' ? 'تفاصيل الخدمة' : 'Service Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all"
              >
                <span>{language === 'ar' ? 'عرض دليل الخدمات الكامل' : 'View Master Services Directory'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Customer Testimonials Carousel on Homepage */}
        <section className="py-16 bg-white dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 text-center transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {t('navTestimonials', 'Customer Testimonials')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {t('testimonialsHeroTitle', 'Trusted by Customers. Driven by Every Journey.')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
                {language === 'ar'
                  ? 'آراء وتجارب حقيقية لعملاء وثقوا بخدمات علي رضا للتجارة الدولية (عون).'
                  : 'Genuine reviews from verified home and corporate moves across Muscat & Oman.'}
              </p>
            </div>

            <TestimonialCarousel />

            <div className="mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-amber-400 hover:underline"
              >
                <span>{language === 'ar' ? 'عرض كافة آراء العملاء وقصص النجاح' : 'Read All Customer Stories & Leave Your Feedback'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Cost Calculator Callout Card Preview */}
        <section className="py-16 bg-slate-100 dark:bg-gradient-to-r dark:from-slate-950 dark:via-[#0A1128] dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 text-left transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-[#0B132B] border border-orange-500/40 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>5-Step Interactive Estimation</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === 'ar' ? 'احسب تكلفة نقلك بالريال العماني في ثوانٍ' : 'Calculate Your Moving Cost in Omani Riyals in Seconds'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Adjust origin, destination, home size, packing options, and floor levels. Our calculator provides a transparent line-item breakdown with zero surprise fees.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-amber-400" />
                    <span>Real-time published OMR estimates</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-amber-400" />
                    <span>1-click transfer to quote form</span>
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  to="/moving-cost-calculator"
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t('navCalculator', 'Open Full Cost Calculator')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/get-a-quote"
                  className="px-5 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 flex items-center justify-center whitespace-nowrap"
                >
                  {t('navGetQuote', 'Direct Quote Request')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ Preview */}
        <section className="py-16 bg-white dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 text-left transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
                Got Questions?
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Frequently Asked Moving Questions
              </h2>
            </div>

            <div className="space-y-3">
              {previewFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl p-5"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-amber-400 hover:underline"
              >
                <span>View All Frequently Asked Questions (20+ Answers)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Bottom Conversion CTA Section */}
        <CtaSection
          title="Plan Your Move with ALI RAZA INTERNATIONAL TRADE SPS Today"
          subtitle="Experienced in-house moving teams, master carpenters, and official MOCIIP registered commercial fleet (CR: 1481820) at your service across Muscat and the Sultanate."
        />
      </div>
    </>
  );
};
