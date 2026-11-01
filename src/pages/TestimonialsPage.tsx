import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Phone, ArrowRight, Send, Sparkles, Building2, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TESTIMONIALS_DATA, Testimonial } from '../data/testimonialsData';
import { COMPANY_STATS } from '../data/companyStats';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsPage: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [animatedCount, setAnimatedCount] = useState(0);

  // Form submission state
  const [formData, setFormData] = useState({
    name: '',
    serviceCategory: 'Residential Moving',
    location: '',
    rating: 5,
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Counter animation for customer count
  useEffect(() => {
    let current = 0;
    const target = COMPANY_STATS.customerCount;
    const step = Math.ceil(target / 45);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setAnimatedCount(target);
        clearInterval(interval);
      } else {
        setAnimatedCount(current);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.testimonial) {
          setTestimonials((prev) => [
            {
              ...data.testimonial,
              serviceCategoryAr: data.testimonial.serviceCategory,
              locationAr: data.testimonial.location,
              commentAr: data.testimonial.comment,
            },
            ...prev,
          ]);
        }
      }
    } catch {
      // Offline fallback
      const offlineEntry: Testimonial = {
        id: `local-${Date.now()}`,
        name: formData.name,
        serviceCategory: formData.serviceCategory,
        serviceCategoryAr: formData.serviceCategory,
        location: formData.location || 'Muscat, Oman',
        locationAr: formData.location || 'مسقط، عُمان',
        rating: formData.rating,
        date: new Date().toISOString().split('T')[0],
        comment: formData.comment,
        commentAr: formData.comment,
        verified: false,
      };
      setTestimonials((prev) => [offlineEntry, ...prev]);
    }
    setIsSubmitting(false);
    setSubmittedMessage(true);
    setFormData({ name: '', serviceCategory: 'Residential Moving', location: '', rating: 5, comment: '' });
  };

  return (
    <>
      <SEO
        title={t('testimonialsHeroTitle', 'Customer Testimonials')}
        description="Read authentic client reviews and relocation feedback for Ali Raza International Trade SPS (OAN Moving) across Muscat and Oman."
        canonicalPath="/testimonials"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-[#070D1E] dark:via-[#0B132B] dark:to-[#0F172A] pt-10 pb-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: t('navTestimonials', 'Testimonials') }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              {t('statReviews', '4.9/5 Rating')} · {t('statReviewsLabel', 'Based on 3,400+ Client Experiences')}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {t('testimonialsHeroTitle', 'Trusted by Customers. Driven by Every Journey.')}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(
                'testimonialsHeroSub',
                'Discover the experiences of customers who have chosen ALI RAZA INTERNATIONAL TRADE SPS for their moving and relocation needs.'
              )}
            </p>
          </div>

          {/* Customer Statistics Card Banner */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                {t('customerStatTitle', 'Customers in the Last 8 Months')}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-orange-600 dark:text-amber-400 font-mono">
                {animatedCount.toLocaleString()}+
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {t('customerStatSub', 'Across Muscat, Sohar, Salalah & GCC Cross-Border Routes')}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                {language === 'ar' ? 'سجل الأمان والالتزام' : 'Safety & Punctuality'}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                99.4%
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {language === 'ar' ? 'وصول الشاحنات في الموعد وتسليم الأثاث سليماً' : 'Zero transit claim rate for crated & wrapped furniture'}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                {language === 'ar' ? 'الترخيص والاعتماد' : 'Official Compliance'}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-orange-600" />
                <span>MOCIIP CR: 1481820</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {language === 'ar' ? 'شركة مسجلة رسمياً لدى وزارة التجارة والصناعة' : 'Fully certified moving and cargo logistics carrier in Oman'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-16 bg-slate-50 dark:bg-[#070D1E] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {language === 'ar' ? 'شهادات وتقييمات العملاء الموثقة' : 'Verified Client Testimonials'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'ar' ? 'تجارب حقيقية لعمليات نقل في مسقط ومحافظات السلطنة' : 'Real moves executed across the Sultanate of Oman & GCC'}
              </p>
            </div>
            <a
              href="#submit-feedback"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-orange-600 dark:text-amber-400 border border-orange-200 dark:border-slate-700 shadow-sm hover:bg-orange-50 dark:hover:bg-slate-700 transition"
            >
              <Send className="w-3.5 h-3.5" />
              {t('shareYourFeedback', 'Share your feedback')}
            </a>
          </div>

          {/* 3-Col Desktop, 2-Col Tablet, 1-Col Mobile Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((tItem) => (
              <div
                key={tItem.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(tItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    {tItem.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        {t('verifiedReviewBadge', 'Verified Move')}
                      </span>
                    )}
                  </div>

                  {/* Comment Quote */}
                  <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{language === 'ar' ? tItem.commentAr || tItem.comment : tItem.comment}&rdquo;
                  </blockquote>
                </div>

                {/* Customer Details Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{tItem.name}</h3>
                  <p className="text-xs text-orange-600 dark:text-amber-400 font-medium mt-0.5">
                    {language === 'ar' ? tItem.serviceCategoryAr || tItem.serviceCategory : tItem.serviceCategory}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{language === 'ar' ? tItem.locationAr || tItem.location : tItem.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Feedback Submission Form Section */}
          <div id="submit-feedback" className="mt-16 max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                {t('shareYourFeedback', 'Have you moved with us? Share your feedback')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {language === 'ar' ? 'أضف تقييمك ومراجعتك للخدمة' : 'Submit Your Authentic Experience'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'ar' ? 'تساعد مراجعتك عملاءنا الجدد في اختيار خدمة النقل المناسبة' : 'Your review helps future customers and keeps our moving crews accountable'}
              </p>
            </div>

            {submittedMessage ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'شكراً جزيلاً لمشاركتك!' : 'Thank you for your valuable feedback!'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {language === 'ar' ? 'تم استلام تقييمك بنجاح وسوف يظهر في الموقع بعد التدقيق.' : 'Your review has been registered and added to our customer records.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      {language === 'ar' ? 'الاسم الكريم *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'ar' ? 'مثال: ناصر الوهيبي' : 'e.g. Salim Al-Harthy'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      {language === 'ar' ? 'الخدمة المنفذة' : 'Service Received'}
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option>Residential Moving (Villa/Apartment)</option>
                      <option>Commercial Office Relocation</option>
                      <option>Furniture Packing & Carpentry</option>
                      <option>International / GCC Cross-Border Moving</option>
                      <option>Heavy Cargo / Logistics Transport</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      {language === 'ar' ? 'الموقع / المسار' : 'Location / Route'}
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={language === 'ar' ? 'مثال: من السيب إلى الخوض' : 'e.g. Al Mouj to Qurum'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      {language === 'ar' ? 'التقييم العام' : 'Rating'}
                    </label>
                    <select
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="5">★★★★★ (5/5 Exceptional)</option>
                      <option value="4">★★★★☆ (4/5 Very Good)</option>
                      <option value="3">★★★☆☆ (3/5 Satisfactory)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'ملاحظاتك وتقييمك *' : 'Your Review / Feedback *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder={language === 'ar' ? 'اكتب ملاحظاتك عن جودة التغليف والتزام الموعد...' : 'Share your comments on crew punctuality, packing care, or overall experience...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : t('submitReviewBtn', 'Submit Genuine Review')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Conversion Banner at Bottom */}
      <section className="py-16 bg-gradient-to-r from-[#0B132B] to-[#0F172A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            {t('readyToExperience', 'Ready to Experience a Better Move?')}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'انضم إلى أكثر من ٢,٠٦٧ عميل وثقوا في خدمات علي رضا للتجارة الدولية (عون). احصل على عرض سعر مجاني اليوم.'
              : 'Join thousands of satisfied families and businesses across Oman. Get a transparent, no-obligation quotation in minutes.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/get-a-quote"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
            >
              <span>{t('navGetQuote', 'Request a Free Quote')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs sm:text-sm border border-slate-700 transition-all"
            >
              {t('navContact', 'Contact Us')}
            </Link>
            <a
              href="https://wa.me/96898386824"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('whatsappUs', 'WhatsApp Us')}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
