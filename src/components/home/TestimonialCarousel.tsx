import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { useLanguage } from '../../context/LanguageContext';

export const TestimonialCarousel: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const testimonials = TESTIMONIALS_DATA;

  // Auto sliding
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left
        isRTL ? handlePrev() : handleNext();
      } else {
        // swipe right
        isRTL ? handleNext() : handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const activeItem = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md relative overflow-hidden transition-colors">
        {/* Subtle decorative quote mark */}
        <div className="absolute top-4 right-6 text-7xl font-serif text-slate-100 dark:text-slate-800/80 select-none pointer-events-none">
          &ldquo;
        </div>

        <div className="relative z-10">
          {/* Rating & Verified badge */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex text-amber-400">
              {[...Array(activeItem.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            {activeItem.verified && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t('verifiedReviewBadge', 'Verified Move')}
              </span>
            )}
          </div>

          {/* Quote text */}
          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed italic mb-6">
            &ldquo;{language === 'ar' ? activeItem.commentAr || activeItem.comment : activeItem.comment}&rdquo;
          </p>

          {/* Author info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                {activeItem.name}
              </h4>
              <p className="text-xs text-orange-600 dark:text-amber-400 font-semibold mt-0.5">
                {language === 'ar' ? activeItem.serviceCategoryAr || activeItem.serviceCategory : activeItem.serviceCategory}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? activeItem.locationAr || activeItem.location : activeItem.location}</span>
              </p>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={isRTL ? handleNext : handlePrev}
                aria-label="Previous review"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={isRTL ? handlePrev : handleNext}
                aria-label="Next review"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-orange-500 dark:bg-amber-400'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
