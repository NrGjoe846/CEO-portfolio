import React, { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number; // can be in seconds or ms
  threshold?: number;
  direction?: "up" | "down" | "fade" | "scale";
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = "",
  id,
  delay = 0,
  threshold = 0.08,
  direction = "up"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  const delayMs = delay < 15 ? delay * 1000 : delay;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
            return () => clearTimeout(timer);
          } else {
            setIsVisible(true);
          }
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px"
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
  }, [delayMs, threshold]);

  const getHiddenStyles = () => {
    switch (direction) {
      case "scale":
        return "opacity-0 scale-[0.96] translate-y-8";
      case "down":
        return "opacity-0 -translate-y-10";
      case "fade":
        return "opacity-0";
      case "up":
      default:
        return "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={domRef}
      id={id}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-[transform,opacity] ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 filter-none"
          : `${getHiddenStyles()} blur-[1px]`
      } ${className}`}
    >
      {children}
    </div>
  );
};

