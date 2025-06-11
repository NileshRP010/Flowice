// src/hooks/useScrollAnimation.ts
"use client";
import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: "-50px 0px -50px 0px", // Optional: Adjust viewport bounds
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}
