import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-xl p-0.5 border transition-colors ${
        language === 'ar' ? 'flex-row-reverse' : 'flex-row'
      } bg-slate-100 border-slate-200 dark:bg-slate-800/90 dark:border-slate-700 shadow-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-150 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-700 dark:text-amber-400'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
        }`}
        aria-label="Switch language to English"
      >
        English
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-150 cursor-pointer font-arabic ${
          language === 'ar'
            ? 'bg-white text-orange-600 shadow-sm dark:bg-slate-700 dark:text-amber-400'
            : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
        }`}
        aria-label="تغيير اللغة إلى العربية"
      >
        العربية
      </button>
    </div>
  );
};
