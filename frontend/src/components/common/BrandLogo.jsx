import React from 'react';
import { cn } from '@/lib/utils';

/**
 * BrandLogo — Modern, minimalist signature emblem for BeyondPahar.
 * Clean geometric silhouette of Bengal's granitic hill ridges and rising dawn sun.
 */
export function BrandLogo({ className, size = 36, customAssetUrl = null }) {
  if (customAssetUrl) {
    return (
      <img
        src={customAssetUrl}
        alt="BeyondPahar Symbol"
        width={size}
        height={size}
        className={cn('object-contain', className)}
      />
    );
  }

  return (
    <div
      className={cn('inline-flex items-center justify-center shrink-0 select-none', className)}
      style={{ width: size, height: (size * 32) / 42 }}
      aria-label="BeyondPahar Emblem"
    >
      <svg
        viewBox="0 0 42 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Geometric minimalist mountain peaks in warm terracotta */}
        <path
          d="M2 28L15 4L28 28H2Z"
          stroke="#D97736"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 28L31 12L40 28H22Z"
          stroke="#D97736"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Geometric internal crossbars */}
        <path
          d="M8.5 16H21.5"
          stroke="#D97736"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26.5 20H35.5"
          stroke="#D97736"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default BrandLogo;
