import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LOGO_SRC_LOCAL = '/images/ali_raza_logo.png';
const LOGO_SRC_REMOTE =
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0d8tx7swe3OAUJtFc51HoiSFEyeKepLKdpPu-sMQfuBaCzynqf_pgwXw_hN8E12XJVaPgXBcMhQ-mB5WPcbbksmAqaWJxS5cm-Cv8t2vawq75ARClLHUh4CmQhqiW3J5_hrZuHn-MQkLYdcxHrDNPQhKQK6XE7h0pY3gRkApIkkzcvJ_tFzaSZcdwXy0/w640-h426/Ali%20Raza%20International%20Moving%20Banner%20(1).png';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  const [imgSrc, setImgSrc] = useState(LOGO_SRC_LOCAL);

  return (
    <Link
      to="/"
      aria-label="Ali Raza International Trade SPS — Home"
      className={`inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl transition-transform active:scale-95 group ${className}`}
    >
      {/* Crisp badge container ensuring high contrast and pristine look in both light & dark modes */}
      <div className="relative flex items-center justify-center bg-white dark:bg-white rounded-lg sm:rounded-xl p-0.5 sm:p-1 shadow-sm ring-1 ring-slate-200/90 dark:ring-white/25 transition-all duration-200 group-hover:ring-orange-500/50 group-hover:shadow-md">
        <img
          src={imgSrc}
          alt="Ali Raza International Trade SPS — Moving & Logistics"
          className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          loading="eager"
          fetchPriority="high"
          width={639}
          height={426}
          onError={() => {
            // Fallback to exact Blogger URL if local file is missing in remote hosting
            if (imgSrc !== LOGO_SRC_REMOTE) {
              setImgSrc(LOGO_SRC_REMOTE);
            }
          }}
        />
      </div>
    </Link>
  );
};
