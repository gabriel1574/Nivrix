"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  CreditCard,
  Menu,
  Network,
  PlugZap,
  ShieldCheck,
  Store,
  UserRoundCheck,
  Zap,
} from "lucide-react";

const navLinks = [
  { href: "#solucoes", label: "Plataforma" },
  { href: "#metodo", label: "Vantagens" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

const indicators = [
  ["Conversão", "menos atrito no checkout"],
  ["API", "integração limpa"],
  ["Confiança", "operação confiável"],
];

const businessTypes = [
  "E-commerce",
  "Infoprodutos",
  "SaaS",
  "Creators",
  "Marketplaces",
  "Assinaturas",
];

const services = [
  {
    icon: CreditCard,
    title: "Checkout de Alta Conversão",
    text: "Experiência clara, moderna e otimizada para aumentar a conversão.",
  },
  {
    icon: Zap,
    title: "Pagamentos Sem Atrito",
    text: "Processamento rápido para compras mais naturais e menos interrupções.",
  },
  {
    icon: PlugZap,
    title: "Integração Simples",
    text: "Conecte lojas, plataformas e produtos digitais com uma base técnica limpa.",
  },
  {
    icon: ShieldCheck,
    title: "Operação Confiável",
    text: "Operação segura para vender todos os dias com mais controle e tranquilidade.",
  },
];

const steps = [
  ["01", "Receba Online", "Aceite pagamentos digitais em uma jornada visualmente limpa e objetiva."],
  ["02", "Conecte Canais", "Integre loja, landing page, plataforma de curso ou sistema próprio."],
  ["03", "Acompanhe Vendas", "Veja o fluxo de transações com mais previsibilidade e segurança."],
  ["04", "Escale com Confiança", "Cresça com uma base de pagamento preparada para rotinas digitais."],
];

const stats = [
  ["24/7", "vendas online sempre ativas"],
  ["API", "base pronta para integração"],
  ["+Conversão", "checkout criado para reduzir abandono"],
  ["Dados", "visão clara sobre pagamentos"],
];

const proofItems = [
  ["Fluidez", "Uma experiência de pagamento limpa, rápida e sem excesso de etapas."],
  ["Conversão", "Checkout projetado para reduzir atrito e manter o comprador avançando."],
  ["Confiança", "Visual premium, estrutura segura e comunicação moderna para marcas digitais."],
];

const clients = [
  {
    icon: UserRoundCheck,
    title: "Criadores e Infoprodutores",
    text: "Para quem vende cursos, comunidades, mentorias, conteúdos exclusivos e produtos digitais.",
    cta: "Receber com a Nivrix",
  },
  {
    icon: Store,
    title: "E-commerces",
    text: "Para lojas que precisam de checkout confiável, integração simples e menos abandono na compra.",
    cta: "Melhorar checkout",
  },
  {
    icon: Building2,
    title: "Empresas Digitais",
    text: "Para SaaS, serviços online e negócios recorrentes que precisam operar pagamentos com clareza.",
    cta: "Escalar pagamentos",
  },
  {
    icon: Network,
    title: "Marketplaces",
    text: "Para plataformas que conectam vendedores, compradores e ofertas em uma jornada de pagamento fluida.",
    cta: "Conectar operação",
  },
];

function Header() {
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
      <a className="brand" href="#inicio" aria-label="Nivrix início">
        <img className="brand-logo" src="/assets/LOGO.svg" alt="Nivrix" />
      </a>

      <nav className="nav-links" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato">
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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/assets/nivrix-cyan-wave-hero.png"
            alt="Interface abstrata de gateway de pagamentos em preto e ciano"
          />
          <div className="hero-shade" />

          <div className="hero-content">
            <p className="eyebrow">Gateway de Pagamentos</p>
            <h1 id="hero-title">Nivrix</h1>
            <p className="hero-copy">
              A plataforma para empresas digitais, e-commerces e criadores venderem
              online com uma experiência de pagamento rápida, segura e feita para converter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Solicitar Acesso
              </a>
              <a className="button button-secondary" href="#solucoes">
                Conhecer Plataforma
              </a>
            </div>
          </div>
        </section>

        <section className="hero-strip" aria-label="Indicadores Nivrix">
          <p>Construída para negócios digitais que precisam vender com confiança</p>
          <div className="hero-strip-grid">
            {indicators.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-section" aria-labelledby="intro-title">
          <div className="section-kicker">Posicionamento</div>
          <div className="split">
            <div>
              <h2 id="intro-title">Tudo para receber pagamentos e crescer no digital.</h2>
            </div>
            <p>
              Inspirada nas melhores plataformas globais de pagamento, a Nivrix organiza
              checkout, integração, aprovação e acompanhamento em uma experiência única,
              moderna e confiável para marcas que vendem pela internet.
            </p>
          </div>
        </section>

        <section className="trust-section" aria-label="Tipos de negócios atendidos pela Nivrix">
          <p>Construída para negócios digitais que precisam vender com confiança</p>
          <div className="trust-logos">
            {businessTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </section>

        <section className="section solutions-section" id="solucoes" aria-labelledby="solutions-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Plataforma</div>
              <h2 id="solutions-title">Uma plataforma completa para vender, receber e acompanhar.</h2>
            </div>
            <p>
              A Nivrix reúne os pontos essenciais de um gateway moderno: checkout fluido,
              integração simples, segurança e visibilidade para o negócio.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band method-section" id="metodo" aria-labelledby="method-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker light">Vantagens</div>
              <h2 id="method-title">Pagamento simples para o cliente. Controle inteligente para o negócio.</h2>
            </div>
            <p>
              A experiência foi pensada para reduzir barreiras na compra e dar mais
              clareza para quem precisa acompanhar vendas, aprovações e crescimento.
            </p>
          </div>

          <div className="timeline">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-section" aria-labelledby="stats-title">
          <div>
            <div className="section-kicker">Performance</div>
            <h2 id="stats-title">Uma operação de pagamento com sinais claros de evolução.</h2>
          </div>
          <div className="stats-grid">
            {stats.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section proof-section" aria-labelledby="proof-title">
          <div>
            <div className="section-kicker">Diferenciais</div>
            <h2 id="proof-title">Tecnologia para vender melhor, com uma presença segura.</h2>
          </div>

          <div className="proof-grid">
            {proofItems.map(([title, text]) => (
              <div className="proof-item" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section clients-section" id="clientes" aria-labelledby="clients-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Quem São Nossos Clientes?</div>
              <h2 id="clients-title">
                A Nivrix atende quem precisa transformar audiência, tráfego e oferta em pagamento aprovado.
              </h2>
            </div>
            <p>
              Assim como grandes plataformas de pagamento segmentam suas soluções por perfil
              de uso, a Nivrix organiza sua proposta para quem vive de vendas digitais.
            </p>
          </div>

          <div className="client-grid">
            {clients.map(({ icon: Icon, title, text, cta }) => (
              <article className="client-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contato">{cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <div className="section-kicker light">Contato</div>
              <h2 id="contact-title">Pronto para receber pagamentos com mais fluidez?</h2>
              <p>
                Fale com a Nivrix e veja como um gateway moderno pode fortalecer sua
                conversão, sua confiabilidade e a experiência de compra da sua marca.
              </p>
            </div>

            <form className="contact-form" action="mailto:contato@nivrix.com" method="post" encType="text/plain">
              <label>
                Nome
                <input type="text" name="nome" autoComplete="name" required />
              </label>
              <label>
                E-mail
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Tipo de Negócio
                <textarea name="projeto" rows="4" required />
              </label>
              <button className="button button-primary" type="submit">
                Quero Conhecer
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#inicio" aria-label="Nivrix início">
          <img className="brand-logo" src="/assets/LOGO.svg" alt="Nivrix" />
        </a>
        <p>(c) 2026 Nivrix. Gateway de pagamentos moderno, tecnológico e confiável.</p>
      </footer>
    </>
  );
}
