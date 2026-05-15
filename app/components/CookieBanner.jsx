"use client";

import { useEffect, useState } from "react";

const consentCookieName = "nivrix_cookie_consent";

function saveConsent(value) {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${consentCookieName}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
  window.localStorage.setItem(consentCookieName, value);
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const consent = window.localStorage.getItem(consentCookieName);
    setIsVisible(!consent);
  }, []);

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
