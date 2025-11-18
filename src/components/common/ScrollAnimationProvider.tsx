"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollAnimationProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".wow")
    );

    if (!elements.length) return;

    const activate = (element: HTMLElement) => {
      const delay = element.getAttribute("data-wow-delay");
      const duration = element.getAttribute("data-wow-duration");

      element.style.animationDelay = delay ?? "";
      element.style.animationDuration = duration ?? "";

      element.classList.add("wow-animate");
      element.classList.remove("wow-init");
    };

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        activate(element);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activate(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => {
      element.classList.remove("wow-animate");
      element.classList.add("wow-init");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollAnimationProvider;

