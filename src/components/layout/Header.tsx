import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Calculator,
  Star,
  Lock,
} from 'lucide-react';
import { SERVICES_CATALOG } from '../../data/servicesData';
import { PromoTopBanner } from '../PromoTopBanner';
import { ThemeSwitcher } from '../common/ThemeSwitcher';
import { LanguageSelector } from '../common/LanguageSelector';
import { BrandLogo } from '../common/BrandLogo';
import { useLanguage } from '../../context/LanguageContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, isRTL, t } = useLanguage();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setMobileAboutExpanded(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(target)) {
        setAboutDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
      isActive
        ? 'text-orange-600 bg-orange-500/10 dark:text-amber-400 dark:bg-slate-800/80 shadow-sm'
        : 'text-slate-700 hover:text-orange-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-amber-400 dark:hover:bg-slate-800/40'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
      isActive
        ? 'bg-orange-500/10 text-orange-600 dark:bg-amber-400/10 dark:text-amber-400 font-extrabold'
        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
    }`;

  const isAboutActive =
    location.pathname === '/about' ||
    location.pathname === '/en/about' ||
    location.pathname === '/ar/about' ||
    location.pathname === '/our-process' ||
    location.pathname === '/en/our-process' ||
    location.pathname === '/ar/our-process' ||
    location.pathname === '/process';

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* 1. Promotional Limited Offer Bar */}
      <PromoTopBanner />

      {/* 2. Top Header Credentials Bar */}
      <div className="bg-slate-100 dark:bg-[#050914] text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800/90 text-xs py-2 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Government Registration Credentials */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-orange-600 dark:text-amber-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{t('crLabel', 'CR: 1481820')}</span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span>{t('taxLabel', 'Tax ID: 1896320')}</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <MapPin className="w-3 h-3 text-orange-500 dark:text-amber-400 shrink-0" />
              <span>{t('locationLabel', 'Ruwi / Muttrah, Muscat, Sultanate of Oman')}</span>
            </span>
          </div>

          {/* Quick Direct Contacts & Direct WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:+96898386824"
              className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-amber-400 font-mono font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400 shrink-0" />
              <span>+968 9838 6824</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://wa.me/96898386824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <div className="bg-white/95 dark:bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          {/* Header Brand Logo (Exact Ali Raza International Trade logo) */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-xs sm:text-sm">
            <NavLink to="/" end className={navLinkClass}>
              {t('navHome', 'Home')}
            </NavLink>

            {/* About Us Dropdown (Includes About Us & Our Process) */}
            <div
              className="relative"
              ref={aboutDropdownRef}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setAboutDropdownOpen(!aboutDropdownOpen);
                  } else if (e.key === 'Escape') {
                    setAboutDropdownOpen(false);
                  }
                }}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isAboutActive
                    ? 'text-orange-600 bg-orange-500/10 dark:text-amber-400 dark:bg-slate-800/80 shadow-sm'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-amber-400 dark:hover:bg-slate-800/40'
                }`}
              >
                <span>{t('navAbout', 'About Us')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-orange-600 dark:text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div
                  role="menu"
                  className={`absolute top-full mt-2 w-64 bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    isRTL ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 dark:border-slate-800">
                    {language === 'ar' ? 'عن الشركة' : 'Company Overview'}
                  </div>
                  <div className="py-1 space-y-0.5">
                    <NavLink
                      to="/about"
                      role="menuitem"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={({ isActive }) =>
                        `flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-colors ${
                          isActive
                            ? 'bg-orange-500/10 text-orange-600 dark:bg-amber-400/10 dark:text-amber-400 font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/90 hover:text-orange-600 dark:hover:text-amber-400'
                        }`
                      }
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">
                          {t('navAbout', 'About Us')}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {language === 'ar' ? 'نبذة عن الشركة وسجلنا التجاري ورؤيتنا' : 'Company profile, MOCIIP license & values'}
                        </div>
                      </div>
                    </NavLink>

                    <NavLink
                      to="/our-process"
                      role="menuitem"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={({ isActive }) =>
                        `flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-colors ${
                          isActive
                            ? 'bg-orange-500/10 text-orange-600 dark:bg-amber-400/10 dark:text-amber-400 font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/90 hover:text-orange-600 dark:hover:text-amber-400'
                        }`
                      }
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">
                          {t('navProcess', 'Our Process')}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {language === 'ar' ? 'مراحل النقل المنظمة من الباب إلى الباب' : 'Step-by-step moving workflow'}
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown (Renamed from 'Our Services' to 'Services') */}
            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  } else if (e.key === 'Escape') {
                    setServicesDropdownOpen(false);
                  }
                }}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  location.pathname.startsWith('/services')
                    ? 'text-orange-600 bg-orange-500/10 dark:text-amber-400 dark:bg-slate-800/80 shadow-sm'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-amber-400 dark:hover:bg-slate-800/40'
                }`}
              >
                <span>{t('navServices', 'Services')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-orange-600 dark:text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  role="menu"
                  className={`absolute top-full mt-2 w-80 bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    isRTL ? 'right-0' : 'left-0'
                  }`}
                >
                  <div className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 dark:border-slate-800">
                    {language === 'ar' ? 'قطاعات النقل واللوجستيات' : 'Moving & Logistics Divisions'}
                  </div>
                  <div className="py-1.5 space-y-0.5">
                    {SERVICES_CATALOG.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/90 hover:text-orange-600 dark:hover:text-amber-400 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-slate-100">
                            {language === 'ar' ? svc.titleAr || svc.title : svc.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[220px]">
                            {svc.shortDesc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 px-3">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-orange-600 dark:text-amber-400 hover:underline flex items-center justify-between py-1"
                    >
                      <span>{language === 'ar' ? 'عرض كافة الخدمات (٨)' : 'Explore All 8 Services'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/moving-cost-calculator" className={navLinkClass}>
              <span className="flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-orange-600 dark:text-amber-400" />
                <span>{t('navCalculator', 'Cost Calculator')}</span>
              </span>
            </NavLink>

            <NavLink to="/testimonials" className={navLinkClass}>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('navTestimonials', 'Testimonials')}</span>
              </span>
            </NavLink>

            <NavLink to="/faq" className={navLinkClass}>
              {t('navFaq', 'FAQ')}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {t('navContact', 'Contact')}
            </NavLink>
          </nav>

          {/* Desktop Right Controls (Theme Switcher, Language Selector, Get Quote CTA) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Light / Dark Mode Switcher */}
            <ThemeSwitcher />

            {/* Request a Quote CTA */}
            <Link
              to="/get-a-quote"
              className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-xl shadow-md shadow-orange-500/20 text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>{t('navGetQuote', 'Get a Quote')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls: Theme + Lang + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#070D1E] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {t('languageSelector', 'Language')}
            </span>
            <LanguageSelector />
          </div>

          <div className="space-y-1">
            <NavLink to="/" end className={mobileNavLinkClass}>
              {t('navHome', 'Home')}
            </NavLink>

            {/* Mobile Expandable About Us (Includes About Us and Our Process) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>{t('navAbout', 'About Us')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileAboutExpanded ? 'rotate-180 text-orange-600 dark:text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileAboutExpanded && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-orange-500/30 my-1">
                  <NavLink to="/about" className={mobileNavLinkClass}>
                    {t('navAbout', 'About Us')}
                  </NavLink>
                  <NavLink to="/our-process" className={mobileNavLinkClass}>
                    {t('navProcess', 'Our Process')}
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Expandable Services (Renamed from 'Our Services' to 'Services') */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>{t('navServices', 'Services')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesExpanded ? 'rotate-180 text-orange-600 dark:text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileServicesExpanded && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-orange-500/30 my-1">
                  {SERVICES_CATALOG.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className="block py-1.5 px-2 text-xs text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-amber-400 font-medium"
                    >
                      {language === 'ar' ? svc.titleAr || svc.title : svc.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block py-1.5 px-2 text-xs text-orange-600 dark:text-amber-400 font-bold hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
                  >
                    {language === 'ar' ? 'عرض كافة الخدمات (٨)' : 'Explore All Services'}
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/moving-cost-calculator" className={mobileNavLinkClass}>
              {t('navCalculator', 'Moving Cost Calculator')}
            </NavLink>

            <NavLink to="/testimonials" className={mobileNavLinkClass}>
              {t('navTestimonials', 'Customer Testimonials')}
            </NavLink>

            <NavLink to="/faq" className={mobileNavLinkClass}>
              {t('navFaq', 'Frequently Asked Questions')}
            </NavLink>

            <NavLink to="/contact" className={mobileNavLinkClass}>
              {t('navContact', 'Contact Us')}
            </NavLink>

            <NavLink to="/admin/pricing" className={mobileNavLinkClass}>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                <span>{t('navAdmin', 'Admin Pricing Panel')}</span>
              </span>
            </NavLink>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link
              to="/get-a-quote"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl text-center text-sm shadow-md"
            >
              {t('navGetQuote', 'Request a Free Quote')}
            </Link>

            <a
              href="https://wa.me/96898386824"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('chatWithUs', 'Chat on WhatsApp: +968 9838 6824')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
