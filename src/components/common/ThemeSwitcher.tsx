import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export const ThemeSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('lightMode', 'Switch to Light Mode') : t('darkMode', 'Switch to Dark Mode')}
      title={isDark ? t('lightMode', 'Switch to Light Mode') : t('darkMode', 'Switch to Dark Mode')}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
        isDark
          ? 'bg-slate-800/90 text-amber-400 border-slate-700 hover:bg-slate-700 shadow-inner'
          : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:text-orange-600 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-90 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 -rotate-12 hover:rotate-0 text-slate-700" />
        )}
      </div>
      <span className="sr-only">
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </span>
    </button>
  );
};
