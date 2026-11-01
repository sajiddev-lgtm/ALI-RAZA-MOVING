import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const greeting = language === 'ar'
    ? 'السلام عليكم، أود الاستفسار عن خدمات نقل الأثاث والشحن لدى شركة علي رضا للتجارة الدولية (عون).'
    : 'Hello OAN Moving / Ali Raza International Trade SPS, I would like to inquire about your moving and logistics services in Oman.';

  const whatsappUrl = `https://wa.me/96898386824?text=${encodeURIComponent(greeting)}`;

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center group ${
        isRTL ? 'left-6 flex-row-reverse' : 'right-6 flex-row'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Card */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xl border transition-all duration-300 pointer-events-none whitespace-nowrap ${
          isRTL ? 'ml-3' : 'mr-3'
        } ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        } bg-white text-slate-800 border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <div>
          <p className="font-bold">{t('chatWithUs', 'Chat with us on WhatsApp')}</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">+968 9838 6824 · 24/7</p>
        </div>
      </div>

      {/* Pulsing Circular Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact OAN Moving & Ali Raza International Trade on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 whatsapp-pulse"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-md"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Small Notification Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
