"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollAnimationProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const body = document.body;
    body.classList.add("home-transition");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".wow, [data-anim]")
    );

    const activate = (element: HTMLElement) => {
      if (element.hasAttribute("data-anim")) {
        const delay = element.getAttribute("data-anim-delay");
        const duration = element.getAttribute("data-anim-duration");

        if (delay) {
          element.style.transitionDelay = delay;
        }
        if (duration) {
          element.style.transitionDuration = duration;
        }

        element.classList.add("is-visible");
        return;
      }

      const delay = element.getAttribute("data-wow-delay");
      const duration = element.getAttribute("data-wow-duration");

      if (delay) {
        element.style.animationDelay = delay;
      }
      if (duration) {
        element.style.animationDuration = duration;
      }

      element.classList.add("wow-animate");
      element.classList.remove("wow-init");
    };

    if (!elements.length) {
      return () => {
        body.classList.remove("home-transition");
      };
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        activate(element);
      });
      return () => {
        body.classList.remove("home-transition");
      };
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
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((element) => {
      if (element.hasAttribute("data-anim")) {
        element.classList.remove("is-visible");
      } else {
        element.classList.remove("wow-animate");
        element.classList.add("wow-init");
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      body.classList.remove("home-transition");
    };
  }, [pathname]);

  return null;
};

export default ScrollAnimationProvider;

