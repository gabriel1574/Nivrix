"use client";

import { useEffect, useState } from "react";
import { navGroups } from "../content";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastValue = false;

    const updateHeader = () => {
      const nextValue = window.scrollY > 18;
      if (nextValue === lastValue) return;

      lastValue = nextValue;
      setIsScrolled(nextValue);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateHeader();
        frame = 0;
      });
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMenuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="/" aria-label="Nivrix início">
        <img className="brand-logo" src="/assets/logotipo-nivrix-branco.svg" alt="Nivrix" title="Nivrix" />
      </a>

      <nav className="nav-links" aria-label="Navegação principal">
        {navGroups.map((group) => (
          <div className="nav-group" key={group.href}>
            <a href={group.href} onClick={() => setIsMenuOpen(false)}>
              {group.label}
            </a>
            {group.links.length > 0 && (
              <div className="nav-dropdown">
                {group.links.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <a className="header-cta" href="/contato">
        Começar Agora
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
