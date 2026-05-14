"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navGroups } from "../content";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
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
        <img className="brand-logo" src="/assets/LOGO.svg" alt="Nivrix" title="Nivrix" />
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
        <Menu aria-hidden="true" />
      </button>
    </header>
  );
}
