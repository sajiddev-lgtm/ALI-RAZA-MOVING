import React, { useState, useEffect } from 'react';
import { HERO_TYPEWRITER_PHRASES } from '../i18n/translations';
import { useLanguage } from '../context/LanguageContext';

export const HeroTypewriter: React.FC = () => {
  const { language } = useLanguage();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  const currentPhrase = HERO_TYPEWRITER_PHRASES[phraseIndex][language];

  useEffect(() => {
    // If reduced motion is requested, cycle without typing effect
    if (prefersReducedMotion) {
      setDisplayText(currentPhrase);
      const timer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % HERO_TYPEWRITER_PHRASES.length);
      }, 4000);
      return () => clearTimeout(timer);
    }

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2400); // Pause duration once fully typed
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting) {
      // Typing phase
      if (displayText.length < currentPhrase.length) {
        const typeTimer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(typeTimer);
      } else {
        // Finished typing full phrase
        setIsPaused(true);
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        const eraseTimer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 28);
        return () => clearTimeout(eraseTimer);
      } else {
        // Finished erasing -> move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % HERO_TYPEWRITER_PHRASES.length);
      }
    }
  }, [displayText, isDeleting, isPaused, phraseIndex, currentPhrase, prefersReducedMotion]);

  // When language switches, update display text smoothly
  useEffect(() => {
    setDisplayText('');
    setIsDeleting(false);
    setIsPaused(false);
  }, [language]);

  return (
    <div className="min-h-[5.5rem] sm:min-h-[6.5rem] md:min-h-[7.5rem] lg:min-h-[8.5rem] flex items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-300">
          {displayText}
        </span>
        <span
          className="inline-block w-1 md:w-1.5 h-7 sm:h-9 md:h-11 lg:h-13 bg-orange-500 dark:bg-amber-400 align-middle ml-1 mr-1 animate-pulse"
          aria-hidden="true"
        />
      </h1>
    </div>
  );
};
