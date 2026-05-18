'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    reveals.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      reveals.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
