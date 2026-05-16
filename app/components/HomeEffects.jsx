"use client";

import { useEffect } from "react";

const paymentStepsLength = 3;

export default function HomeEffects() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return undefined;

    const canTrackPointer =
      window.matchMedia("(pointer: fine)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!canTrackPointer) return undefined;

    let frame = 0;
    let latestEvent = null;

    const updateHeroPointer = (event) => {
      latestEvent = event;
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        if (!latestEvent) return;

        const bounds = hero.getBoundingClientRect();
        hero.style.setProperty("--hero-x", `${((latestEvent.clientX - bounds.left) / bounds.width) * 100}%`);
        hero.style.setProperty("--hero-y", `${((latestEvent.clientY - bounds.top) / bounds.height) * 100}%`);
        frame = 0;
      });
    };

    hero.addEventListener("pointermove", updateHeroPointer, { passive: true });
    return () => {
      hero.removeEventListener("pointermove", updateHeroPointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const progress = document.querySelector(".payment-progress span");
    const steps = Array.from(document.querySelectorAll(".payment-steps span"));
    if (!progress || steps.length === 0) return undefined;

    let activeStep = 0;
    let interval = 0;

    const render = () => {
      progress.style.width = `${((activeStep + 1) / paymentStepsLength) * 100}%`;
      steps.forEach((step, index) => {
        step.classList.toggle("is-active", index <= activeStep);
      });
      activeStep = (activeStep + 1) % paymentStepsLength;
    };

    const start = () => {
      if (!interval) interval = window.setInterval(render, 1900);
    };

    const stop = () => {
      if (!interval) return;
      window.clearInterval(interval);
      interval = 0;
    };

    const updateTimer = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", updateTimer);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", updateTimer);
    };
  }, []);

  return null;
}
