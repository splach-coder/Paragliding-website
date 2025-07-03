import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";


// Custom hooks from your masonry code
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasIntersected, options]);

  return [ref, isIntersecting, hasIntersected];
};

// Optimized image component with lazy loading
const LazyImage = ({ src, alt, className, style, onLoad, onError, ...props }) => {
  const [imageRef, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (hasIntersected && !imageSrc) {
      setImageSrc(src);
    }
  }, [hasIntersected, src, imageSrc]);

  const handleLoad = useCallback((e) => {
    setImageLoaded(true);
    onLoad?.(e);
  }, [onLoad]);

  const handleError = useCallback((e) => {
    setImageError(true);
    onError?.(e);
  }, [onError]);

  return (
    <div 
      ref={imageRef} 
      className={`relative overflow-hidden ${className}`}
      style={style}
      {...props}
    >
      {/* Placeholder while loading */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-slate-blue/20 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-deep-teal border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 bg-slate-blue/10 flex items-center justify-center">
          <div className="text-grayish-teal text-sm">Failed to load image</div>
        </div>
      )}
      
      {/* Actual image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformOrigin: 'center' }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

// Simple animation functions
const animateElement = (element, properties, duration = 600) => {
  if (!element) return;
  
  const startTime = performance.now();
  const startValues = {};
  
  Object.keys(properties).forEach(prop => {
    if (prop === 'opacity') {
      startValues[prop] = parseFloat(getComputedStyle(element).opacity) || 0;
    } else if (prop === 'transform') {
      startValues[prop] = element.style.transform || '';
    }
  });
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    Object.keys(properties).forEach(prop => {
      if (prop === 'opacity') {
        element.style.opacity = startValues[prop] + (properties[prop] - startValues[prop]) * easeOut;
      } else if (prop === 'transform') {
        element.style.transform = properties[prop];
      }
    });
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

const GallerySection = () => {
  const { t } = useTranslation();
  
  // Gallery data with varied heights and alt text for accessibility
  const galleryItems = [
    { id: 1, img: "/images/gallery/gallery-1.jpg", height: 400, alt: "Tandem paragliding flight over mountain landscape" },
    { id: 2, img: "/images/gallery/gallery-2.jpg", height: 300, alt: "Paraglider preparing for takeoff" },
    { id: 3, img: "/images/gallery/gallery-3.jpg", height: 500, alt: "Aerial view of coastline during tandem flight" },
    { id: 4, img: "/images/gallery/gallery-4.jpg", height: 350, alt: "Instructor and passenger before flight" },
    { id: 5, img: "/images/gallery/gallery-5.jpg", height: 450, alt: "Paragliding over forest canopy" },
    { id: 6, img: "/images/gallery/gallery-6.jpg", height: 320, alt: "Landing preparation in open field" },
    { id: 7, img: "/images/gallery/gallery-7.jpg", height: 380, alt: "Tandem flight over lake and mountains" },
    { id: 8, img: "/images/gallery/gallery-8.jpg", height: 420, alt: "Sunset paragliding experience" },
    { id: 9, img: "/images/gallery/gallery-9.jpg", height: 360, alt: "Group of paragliders in formation" },
    { id: 10, img: "/images/gallery/gallery-10.jpg", height: 480, alt: "Close-up of paraglider canopy in flight" },
    { id: 11, img: "/images/gallery/gallery-11.jpg", height: 340, alt: "Panoramic view from paraglider" },
    { id: 12, img: "/images/gallery/gallery-12.jpg", height: 390, alt: "Successful landing celebration" }
  ];

  const columns = useMedia(
    [
      "(min-width:1024px)",
      "(min-width:768px)",
      "(min-width:640px)",
    ],
    [3, 2, 1],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [loadedImages, setLoadedImages] = useState(new Set());
  const hasMounted = useRef(false);
  const itemRefs = useRef(new Map());

  const handleImageLoad = useCallback((itemId) => {
    setLoadedImages(prev => new Set(prev).add(itemId));
  }, []);

  const handleImageError = useCallback((itemId) => {
    console.warn(`Failed to load image for item ${itemId}`);
  }, []);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return galleryItems.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = (child.height * columnWidth) / 400;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, width]);

  useLayoutEffect(() => {
    if (!width) return;

    grid.forEach((item, index) => {
      const element = itemRefs.current.get(item.id);
      if (!element) return;

      element.style.position = 'absolute';
      element.style.left = `${item.x}px`;
      element.style.top = `${item.y}px`;
      element.style.width = `${item.w}px`;
      element.style.height = `${item.h}px`;

      if (!hasMounted.current) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        // Stagger animation based on column position for better visual flow
        const delay = (index % columns) * 50 + Math.floor(index / columns) * 100;
        
        setTimeout(() => {
          animateElement(element, {
            opacity: 1,
            transform: 'translateY(0px)'
          }, 800);
        }, delay);
      } else {
        animateElement(element, {
          opacity: 1,
          transform: 'translateY(0px)'
        }, 400);
      }
    });

    hasMounted.current = true;
  }, [grid, width, columns]);

  const handleMouseEnter = useCallback((e) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease-out';
    }
    
    // Add focus ring for keyboard navigation
    e.currentTarget.style.outline = '2px solid #124E66';
    e.currentTarget.style.outlineOffset = '2px';
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
    
    // Remove focus ring
    e.currentTarget.style.outline = 'none';
  }, []);

  const handleKeyDown = useCallback((e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Could open modal or navigate to full image
      console.log(`Activated gallery item ${item.id}`);
    }
  }, []);

  return (
    <section 
      className="w-full py-16 lg:py-24"
      aria-label="Photo gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-dark-blue mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-lg font-light text-grayish-teal max-w-2xl mx-auto leading-relaxed">
            {t("gallery.description")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="relative" role="region" aria-label="Image gallery">
          <div
            ref={containerRef}
            className="relative w-full"
            style={{ 
              height: grid.length > 0 ? `${Math.max(...grid.map(item => item.y + item.h))}px` : '400px',
              minHeight: '400px'
            }}
          >
            {grid.map((item, index) => (
              <div
                key={item.id}
                ref={el => {
                  if (el) itemRefs.current.set(item.id, el);
                  else itemRefs.current.delete(item.id);
                }}
                className="absolute cursor-pointer group focus:outline-none"
                style={{ willChange: 'transform, opacity' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={(e) => handleKeyDown(e, item)}
                tabIndex={0}
                role="button"
                aria-label={`View image: ${item.alt}`}
              >
                <div className="relative w-full h-full overflow-hidden bg-slate-blue shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-deep-teal focus-within:ring-offset-2">
                  <LazyImage
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full"
                    onLoad={() => handleImageLoad(item.id)}
                    onError={() => handleImageError(item.id)}
                  />
                  <div className="absolute inset-0 bg-dark-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading progress indicator */}
        {loadedImages.size < galleryItems.length && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-grayish-teal text-sm">
              <div className="w-4 h-4 border-2 border-deep-teal border-t-transparent rounded-full animate-spin" />
              <span>Loading images... ({loadedImages.size}/{galleryItems.length})</span>
            </div>
          </div>
        )}

        {/* Screen reader only summary */}
        <div className="sr-only">
          Gallery contains {galleryItems.length} images showcasing paragliding experiences. 
          Use arrow keys to navigate between images and Enter or Space to view details.
        </div>
      </div>
    </section>
  );
};

export default GallerySection;