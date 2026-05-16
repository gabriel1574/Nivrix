"use client";

import { useState } from "react";

const consentCookieName = "nivrix_cookie_consent";

function hasConsentChoice() {
  if (typeof document === "undefined") return false;

  const cookieExists = document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith(`${consentCookieName}=`));
  if (cookieExists) return true;

  try {
    return window.localStorage.getItem(consentCookieName) !== null;
  } catch {
    return false;
  }
}

function saveConsent(value) {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${consentCookieName}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;

  try {
    window.localStorage.setItem(consentCookieName, value);
  } catch {
    // The cookie already stores the preference when localStorage is unavailable.
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => !hasConsentChoice());

  const chooseConsent = (value) => {
    saveConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-banner" aria-label="Aviso de cookies">
      <div>
        <strong>Usamos cookies</strong>
        <p>
          Utilizamos cookies essenciais para o funcionamento do site e, com seu consentimento,
          cookies de análise para melhorar a experiência da Nivrix.
        </p>
        <a href="/legal/politica-de-cookies">Ver política de cookies</a>
      </div>
      <div className="cookie-actions">
        <button type="button" className="button cookie-secondary" onClick={() => chooseConsent("rejected")}>
          Recusar
        </button>
        <button type="button" className="button button-primary" onClick={() => chooseConsent("accepted")}>
          Aceitar cookies
        </button>
      </div>
    </aside>
  );
}
