import React, { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';

    // 1. Check previously saved manual selection
    const saved = localStorage.getItem('oan_language');
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }

    // 2. Check browser / device preferred language
    try {
      const browserLanguages = navigator.languages || [navigator.language];
      for (const langStr of browserLanguages) {
        if (!langStr) continue;
        const lower = langStr.toLowerCase();
        if (
          lower === 'ar' ||
          lower.startsWith('ar-') // ar-OM, ar-SA, ar-AE, ar-KW, ar-QA, etc.
        ) {
          return 'ar';
        }
        if (lower.startsWith('en')) {
          return 'en';
        }
      }
    } catch {
      // ignore
    }

    // 3. Fallback to English
    return 'en';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
    localStorage.setItem('oan_language', language);
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const t = (key: string, fallback?: string): string => {
    const entry = TRANSLATIONS[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    if (entry && entry.en) {
      return entry.en;
    }
    return fallback || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
