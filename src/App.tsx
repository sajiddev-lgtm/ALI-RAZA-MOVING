import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Providers
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Layout & Common Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

// Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { MovingCostCalculatorPage } from './pages/MovingCostCalculatorPage';
import { FaqPage } from './pages/FaqPage';
import { OurProcessPage } from './pages/OurProcessPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AdminPricingPage } from './pages/AdminPricingPage';

// Service Detail Pages
import { ResidentialMovingPage } from './pages/services/ResidentialMovingPage';
import { CommercialMovingPage } from './pages/services/CommercialMovingPage';
import { InternationalMovingPage } from './pages/services/InternationalMovingPage';
import { OfficeRelocationPage } from './pages/services/OfficeRelocationPage';
import { FurnitureMovingPage } from './pages/services/FurnitureMovingPage';
import { PackingUnpackingPage } from './pages/services/PackingUnpackingPage';
import { LoadingUnloadingPage } from './pages/services/LoadingUnloadingPage';
import { TransportationLogisticsPage } from './pages/services/TransportationLogisticsPage';

// Contact & Legal Pages
import ContactPage from './pages/ContactPage';
import GetAQuotePage from './pages/GetAQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Sync language state with URL prefix if user visits /ar/... or /en/...
const LanguageRouteSync: React.FC = () => {
  const { pathname } = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (pathname.startsWith('/ar')) {
      setLanguage('ar');
    } else if (pathname.startsWith('/en')) {
      setLanguage('en');
    }
  }, [pathname, setLanguage]);

  return null;
};

// 404 Not Found Page
const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-slate-50 dark:bg-[#070D1E] text-slate-900 dark:text-white flex items-center justify-center px-4 py-20 text-center transition-colors">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/30 rounded-3xl flex items-center justify-center mx-auto text-orange-600 dark:text-orange-400 font-black text-3xl">
          404
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          The page you requested could not be found or has moved. Explore our comprehensive moving and logistics services below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-orange-500/20"
          >
            Go to Home
          </Link>
          <Link
            to="/moving-cost-calculator"
            className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-sm transition-all border border-slate-300 dark:border-slate-700"
          >
            Calculate Move Cost
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <LanguageRouteSync />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070D1E] text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-200">
            {/* Automatic scroll to top on navigation */}
            <ScrollToTop />

            {/* Global Header with Theme Switcher & Language Selector */}
            <Header />

            {/* Main Page Routing */}
            <main className="flex-1">
              <Routes>
                {/* 1. Home Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/en" element={<HomePage />} />
                <Route path="/ar" element={<HomePage />} />

                {/* 2. About Us */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/en/about" element={<AboutPage />} />
                <Route path="/ar/about" element={<AboutPage />} />

                {/* 3. Services Index */}
                <Route path="/services" element={<ServicesIndexPage />} />
                <Route path="/en/services" element={<ServicesIndexPage />} />
                <Route path="/ar/services" element={<ServicesIndexPage />} />

                {/* 4-11. Dedicated Service Pages */}
                <Route path="/services/residential-moving" element={<ResidentialMovingPage />} />
                <Route path="/en/services/residential-moving" element={<ResidentialMovingPage />} />
                <Route path="/ar/services/residential-moving" element={<ResidentialMovingPage />} />

                <Route path="/services/commercial-moving" element={<CommercialMovingPage />} />
                <Route path="/en/services/commercial-moving" element={<CommercialMovingPage />} />
                <Route path="/ar/services/commercial-moving" element={<CommercialMovingPage />} />

                <Route path="/services/international-moving" element={<InternationalMovingPage />} />
                <Route path="/en/services/international-moving" element={<InternationalMovingPage />} />
                <Route path="/ar/services/international-moving" element={<InternationalMovingPage />} />

                <Route path="/services/office-relocation" element={<OfficeRelocationPage />} />
                <Route path="/en/services/office-relocation" element={<OfficeRelocationPage />} />
                <Route path="/ar/services/office-relocation" element={<OfficeRelocationPage />} />

                <Route path="/services/furniture-moving" element={<FurnitureMovingPage />} />
                <Route path="/en/services/furniture-moving" element={<FurnitureMovingPage />} />
                <Route path="/ar/services/furniture-moving" element={<FurnitureMovingPage />} />

                <Route path="/services/packing-unpacking" element={<PackingUnpackingPage />} />
                <Route path="/en/services/packing-unpacking" element={<PackingUnpackingPage />} />
                <Route path="/ar/services/packing-unpacking" element={<PackingUnpackingPage />} />

                <Route path="/services/loading-unloading" element={<LoadingUnloadingPage />} />
                <Route path="/en/services/loading-unloading" element={<LoadingUnloadingPage />} />
                <Route path="/ar/services/loading-unloading" element={<LoadingUnloadingPage />} />

                <Route path="/services/transportation-logistics" element={<TransportationLogisticsPage />} />
                <Route path="/en/services/transportation-logistics" element={<TransportationLogisticsPage />} />
                <Route path="/ar/services/transportation-logistics" element={<TransportationLogisticsPage />} />

                {/* 12. Interactive Moving Cost Calculator */}
                <Route path="/moving-cost-calculator" element={<MovingCostCalculatorPage />} />
                <Route path="/en/moving-cost-calculator" element={<MovingCostCalculatorPage />} />
                <Route path="/ar/moving-cost-calculator" element={<MovingCostCalculatorPage />} />

                {/* 13. Frequently Asked Questions */}
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/en/faq" element={<FaqPage />} />
                <Route path="/ar/faq" element={<FaqPage />} />

                {/* 14. Our Process */}
                <Route path="/our-process" element={<OurProcessPage />} />
                <Route path="/en/our-process" element={<OurProcessPage />} />
                <Route path="/ar/our-process" element={<OurProcessPage />} />
                <Route path="/process" element={<OurProcessPage />} />
                <Route path="/en/process" element={<OurProcessPage />} />
                <Route path="/ar/process" element={<OurProcessPage />} />

                {/* 15. Customer Testimonials */}
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/en/testimonials" element={<TestimonialsPage />} />
                <Route path="/ar/testimonials" element={<TestimonialsPage />} />

                {/* 16. Contact Us */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/en/contact" element={<ContactPage />} />
                <Route path="/ar/contact" element={<ContactPage />} />

                {/* 17. Request a Free Quote */}
                <Route path="/get-a-quote" element={<GetAQuotePage />} />
                <Route path="/en/get-a-quote" element={<GetAQuotePage />} />
                <Route path="/ar/get-a-quote" element={<GetAQuotePage />} />

                {/* 18. Admin Tariff & Pricing Dashboard */}
                <Route path="/admin/pricing" element={<AdminPricingPage />} />

                {/* 19. Legal: Privacy Policy & Terms */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/en/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/ar/privacy-policy" element={<PrivacyPolicyPage />} />

                <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="/en/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="/ar/terms-and-conditions" element={<TermsConditionsPage />} />

                {/* Catch-all 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Global Comprehensive Footer */}
            <Footer />

            {/* Animated Floating WhatsApp Button */}
            <FloatingWhatsApp />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
