import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle, Clock, Truck, ArrowRight, Lock, Star } from 'lucide-react';
import { SERVICES_CATALOG } from '../../data/servicesData';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, isRTL, t } = useLanguage();

  return (
    <footer className="bg-slate-100 dark:bg-[#040814] text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80 text-left">
          {/* Column 1: Company Profile & Official Credentials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold shadow-md shadow-orange-500/20">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                ALI RAZA INTERNATIONAL TRADE <span className="text-xs text-orange-600 dark:text-orange-400">SPS</span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-200">OAN Moving & Logistics Services</strong> is a premier division of Ali Raza International Trade Single Person Company (SPS). Fully registered under the Ministry of Commerce, Industry and Investment Promotion (MOCIIP), delivering white-glove residential moving, commercial office relocations, international freight, and building materials transport.
            </p>

            {/* Official Registration Box */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs font-mono shadow-sm">
              <div className="flex items-center justify-between text-orange-600 dark:text-amber-400 font-bold">
                <span>Commercial Reg (CR):</span>
                <span>1481820</span>
              </div>
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                <span>Tax ID (Oman Tax Authority):</span>
                <span>1896320</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
                MOCIIP Registered · Ruwi/Muttrah, Muscat
              </div>
            </div>
          </div>

          {/* Column 2: Moving & Logistics Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t('navServices', 'Moving Services')}
            </div>
            <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {language === 'ar' ? svc.titleAr || svc.title : svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Resources (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </div>
            <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navHome', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navAbout', 'About Us')}
                </Link>
              </li>
              <li>
                <Link to="/moving-cost-calculator" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navCalculator', 'Cost Calculator')}
                </Link>
              </li>
              <li>
                <Link to="/our-process" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navProcess', 'Our Process')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold text-orange-600 dark:text-amber-400">
                  <Star className="w-3 h-3 text-amber-500" />
                  <span>{t('navTestimonials', 'Testimonials')}</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navFaq', 'FAQ')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors">
                  {t('navContact', 'Contact Us')}
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors font-semibold">
                  {t('navGetQuote', 'Request a Free Quote')}
                </Link>
              </li>
              <li>
                <Link to="/admin/pricing" className="hover:text-orange-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1 text-[11px] text-slate-400 pt-1">
                  <Lock className="w-3 h-3" />
                  <span>{t('navAdmin', 'Admin Pricing')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Support & Headquarters (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'ar' ? 'خدمة العملاء ومقر مسقط' : 'Headquarters & Support'}
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Ruwi / Muttrah Commercial Business Hub, Muscat, Sultanate of Oman</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 dark:text-amber-400 shrink-0" />
                <a href="tel:+96898386824" className="hover:text-orange-600 dark:hover:text-amber-400 font-mono font-bold text-slate-900 dark:text-white">
                  +968 9838 6824
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 dark:text-amber-400 shrink-0" />
                <a href="mailto:Iqumantransport@gmail.com" className="hover:text-orange-600 dark:hover:text-amber-400 font-mono break-all">
                  Iqumantransport@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Sat - Thu: 07:30 - 21:00 · Fri: 14:00 - 20:00 (24/7 Dispatch)</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/96898386824"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('chatWithUs', 'WhatsApp Direct Dispatch')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ALI RAZA INTERNATIONAL TRADE SPS. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <Link to="/sitemap.xml" target="_blank" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
