import React from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';

export interface OptimizedImageProps extends Omit<NextImageProps, 'priority'> {
  /**
   * Set to `true` if this image appears in the initial viewport (above the fold)
   * to apply Next.js priority loading and fetchPriority="high" for optimal LCP.
   *
   * When `false` (default for below-the-fold elements), the image uses native lazy
   * loading and deferred bandwidth priority to eliminate network contention.
   */
  aboveTheFold?: boolean;

  /**
   * Explicit priority loading flag. If provided, takes precedence over `aboveTheFold`.
   */
  priority?: boolean;
}

/**
 * OptimizedImage Component
 *
 * Custom Next.js Image wrapper that strictly optimizes Largest Contentful Paint (LCP)
 * by applying `priority={true}` and `fetchPriority="high"` only to above-the-fold assets,
 * while automatically enforcing `loading="lazy"` and `decoding="async"` on below-the-fold assets.
 *
 * Also guarantees `referrerPolicy="no-referrer"` to prevent broken images from referrer-restricted hosts.
 */
export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      aboveTheFold = false,
      priority,
      loading,
      referrerPolicy = 'no-referrer',
      fetchPriority,
      decoding,
      ...props
    },
    ref
  ) => {
    // Priority is granted if explicitly requested or if marked as above-the-fold
    const shouldPrioritize = priority !== undefined ? priority : aboveTheFold;

    const resolvedLoading = shouldPrioritize ? undefined : (loading ?? 'lazy');
    const resolvedFetchPriority = fetchPriority ?? (shouldPrioritize ? 'high' : 'auto');
    const resolvedDecoding = decoding ?? (shouldPrioritize ? 'sync' : 'async');

    return (
      <NextImage
        ref={ref}
        priority={shouldPrioritize}
        loading={resolvedLoading}
        fetchPriority={resolvedFetchPriority}
        decoding={resolvedDecoding}
        referrerPolicy={referrerPolicy}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
