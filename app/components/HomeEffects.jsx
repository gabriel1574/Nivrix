"use client";

import { useEffect } from "react";

const paymentStepsLength = 3;

export default function HomeEffects() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return undefined;

    const updateHeroPointer = (event) => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--hero-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      hero.style.setProperty("--hero-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
    };

    hero.addEventListener("pointermove", updateHeroPointer, { passive: true });
    return () => hero.removeEventListener("pointermove", updateHeroPointer);
  }, []);

  useEffect(() => {
    const progress = document.querySelector(".payment-progress span");
    const steps = Array.from(document.querySelectorAll(".payment-steps span"));
    if (!progress || steps.length === 0) return undefined;

    let activeStep = 0;
    const render = () => {
      progress.style.width = `${((activeStep + 1) / paymentStepsLength) * 100}%`;
      steps.forEach((step, index) => {
        step.classList.toggle("is-active", index <= activeStep);
      });
      activeStep = (activeStep + 1) % paymentStepsLength;
    };

    const interval = window.setInterval(render, 1900);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(".reveal, .stagger-item").forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
