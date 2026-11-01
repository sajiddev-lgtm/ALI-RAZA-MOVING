import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'moving' | 'office' | 'storage' | 'truck' | 'avatar' | 'general';
}

// Inline fallback SVG data URIs for guaranteed 100% offline & deployment reliability
const FALLBACK_SVGS: Record<string, string> = {
  moving: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230F172A"/><stop offset="100%" stop-color="%231E293B"/></linearGradient></defs><rect width="800" height="500" fill="url(%23g)"/><circle cx="400" cy="220" r="60" fill="%23EAB308" opacity="0.15"/><path d="M370 200h45l15 20v25h-60zm5 45a10 10 0 1 0 0 .1zm40 0a10 10 0 1 0 0 .1z" fill="%23EAB308"/><text x="400" y="310" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23EAB308" text-anchor="middle">OAN MOVING &amp; LOGISTICS</text><text x="400" y="340" font-family="sans-serif" font-size="14" fill="%2394A3B8" text-anchor="middle">Muscat, Sultanate of Oman</text></svg>`,
  avatar: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%231E293B"/><circle cx="50" cy="40" r="18" fill="%23EAB308"/><path d="M22 84c0-16 12-24 28-24s28 8 28 24" fill="%23EAB308"/></svg>`,
};

/**
 * Normalizes asset URLs to ensure production and dev compatibility.
 * Turns legacy `/src/assets/images/...` paths into `/images/...` served from public folder.
 */
export const normalizeImageUrl = (url?: string): string => {
  if (!url) return '';
  if (url.startsWith('/src/assets/images/')) {
    return url.replace('/src/assets/images/', '/images/');
  }
  if (url.startsWith('src/assets/images/')) {
    return '/' + url.replace('src/assets/images/', 'images/');
  }
  return url;
};

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Ali Raza International Logistics',
  className = '',
  fallbackCategory = 'moving',
  ...rest
}) => {
  const normalizedSrc = normalizeImageUrl(src);
  const [currentSrc, setCurrentSrc] = useState<string>(normalizedSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const updated = normalizeImageUrl(src);
    setCurrentSrc(updated);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      const fallback = FALLBACK_SVGS[fallbackCategory] || FALLBACK_SVGS.moving;
      setCurrentSrc(fallback);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className.includes('rounded') ? '' : ''}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center">
          <Truck className="w-6 h-6 text-slate-400 dark:text-slate-600 animate-bounce" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};
