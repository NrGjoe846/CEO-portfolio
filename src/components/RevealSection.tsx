import React, { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number; // optional delay in ms
  threshold?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = "",
  id,
  delay = 0,
  threshold = 0.12
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer);
          } else {
            setIsVisible(true);
          }
          // Once animated in, we can unobserve if we want a permanent reveal
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-12 blur-[1.5px]"
      } ${className}`}
    >
      {children}
    </div>
  );
};
