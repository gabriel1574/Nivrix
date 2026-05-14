import { navGroups } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="/" aria-label="Nivrix início">
          <img className="brand-logo" src="/assets/LOGO.svg" alt="Nivrix" title="Nivrix" />
        </a>
        <p>(c) 2026 Nivrix. Gateway de pagamentos moderno, tecnológico e confiável.</p>
      </div>

      <nav className="footer-links" aria-label="Links do rodapé">
        {navGroups.map((group) => (
          <a key={group.href} href={group.href}>
            {group.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
