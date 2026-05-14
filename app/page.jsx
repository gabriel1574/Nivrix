"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
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

const paymentSteps = [
  "Pedido recebido",
  "Risco analisado",
  "Pagamento aprovado",
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivrix.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Nivrix",
      url: siteUrl,
      logo: `${siteUrl}/assets/LOGO.svg`,
      description:
        "Gateway de pagamentos moderno para empresas digitais, e-commerces, criadores e negócios online.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Nivrix",
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Nivrix | Gateway de Pagamentos Moderno e Confiável",
      description:
        "Gateway de pagamentos para empresas digitais, e-commerces e criadores venderem online com mais fluidez e confiança.",
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#service`,
      },
      primaryImageOfPage: `${siteUrl}/assets/nivrix-people-payments.png`,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Gateway de Pagamentos Nivrix",
      serviceType: "Gateway de pagamentos",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "E-commerces",
        },
        {
          "@type": "Audience",
          audienceType: "Infoprodutores e criadores",
        },
        {
          "@type": "Audience",
          audienceType: "SaaS, marketplaces e assinaturas",
        },
      ],
      description:
        "Checkout, integração de pagamentos, acompanhamento de vendas e estrutura para negócios digitais venderem online.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluções Nivrix",
        itemListElement: services.map(({ title, text }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: title,
            description: text,
          },
        })),
      },
    },
  ],
};

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
  const [activePaymentStep, setActivePaymentStep] = useState(0);
  const [heroPointer, setHeroPointer] = useState({ x: 74, y: 42 });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePaymentStep((current) => (current + 1) % paymentSteps.length);
    }, 1900);

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

  const updateHeroPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setHeroPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />

      <main>
        <section
          className="hero"
          id="inicio"
          aria-labelledby="hero-title"
          onPointerMove={updateHeroPointer}
          style={{
            "--hero-x": `${heroPointer.x}%`,
            "--hero-y": `${heroPointer.y}%`,
          }}
        >
          <img
            className="hero-image"
            src="/assets/nivrix-people-payments.png"
            alt="Empreendedores digitais acompanhando pagamentos online em um ambiente moderno"
          />
          <div className="hero-shade" />
          <div className="hero-glow" aria-hidden="true" />

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

          <aside className="payment-widget" aria-label="Simulação de pagamento aprovado">
            <div className="payment-widget-top">
              <span>Checkout ao vivo</span>
              <BadgeCheck aria-hidden="true" />
            </div>
            <div className="payment-amount">R$ 842,90</div>
            <div className="payment-progress" aria-hidden="true">
              <span style={{ width: `${((activePaymentStep + 1) / paymentSteps.length) * 100}%` }} />
            </div>
            <div className="payment-steps">
              {paymentSteps.map((step, index) => (
                <span className={index <= activePaymentStep ? "is-active" : ""} key={step}>
                  {step}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="hero-strip reveal" aria-label="Indicadores Nivrix">
          <p>Construída para negócios digitais que precisam vender com confiança</p>
          <div className="hero-strip-grid">
            {indicators.map(([title, text]) => (
              <div className="stagger-item interactive-surface" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section intro-section reveal" aria-labelledby="intro-title">
          <div className="human-split">
            <div className="intro-copy">
              <div className="section-kicker">Posicionamento</div>
              <h2 id="intro-title">Tudo para receber pagamentos e crescer no digital.</h2>
              <p>
                Inspirada nas melhores plataformas globais de pagamento, a Nivrix organiza
                checkout, integração, aprovação e acompanhamento em uma experiência única,
                moderna e confiável para marcas que vendem pela internet.
              </p>
            </div>
            <figure className="human-photo">
              <img
                src="/assets/nivrix-ecommerce-payments.png"
                alt="Empreendedor de e-commerce acompanhando pagamentos aprovados"
              />
              <figcaption>
                <strong>Para pessoas reais vendendo todos os dias.</strong>
                <span>Menos fricção na compra, mais clareza para decidir.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="people-band reveal" aria-labelledby="people-title">
          <div className="people-band-image" aria-hidden="true" />
          <div className="people-band-content">
            <div className="section-kicker light">Experiência</div>
            <h2 id="people-title">Tecnologia que aproxima marca, comprador e aprovação.</h2>
            <p>
              A Nivrix foi pensada para o momento em que alguém decide comprar:
              rápido, claro e confiável para quem paga e para quem vende.
            </p>
          </div>
        </section>

        <section className="trust-section reveal" aria-label="Tipos de negócios atendidos pela Nivrix">
          <p>Construída para negócios digitais que precisam vender com confiança</p>
          <div className="trust-logos">
            {businessTypes.map((type) => (
              <span className="stagger-item interactive-surface" key={type}>
                {type}
              </span>
            ))}
          </div>
        </section>

        <section className="section solutions-section reveal" id="solucoes" aria-labelledby="solutions-title">
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
              <article className="service-card stagger-item interactive-surface" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band method-section reveal" id="metodo" aria-labelledby="method-title">
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
              <article className="stagger-item interactive-surface" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-section reveal" aria-labelledby="stats-title">
          <div>
            <div className="section-kicker">Performance</div>
            <h2 id="stats-title">Uma operação de pagamento com sinais claros de evolução.</h2>
          </div>
          <div className="stats-grid">
            {stats.map(([title, text]) => (
              <div className="stagger-item interactive-surface" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section proof-section reveal" aria-labelledby="proof-title">
          <div>
            <div className="section-kicker">Diferenciais</div>
            <h2 id="proof-title">Tecnologia para vender melhor, com uma presença segura.</h2>
          </div>

          <div className="proof-grid">
            {proofItems.map(([title, text]) => (
              <div className="proof-item stagger-item" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section clients-section reveal" id="clientes" aria-labelledby="clients-title">
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
              <article className="client-card stagger-item interactive-surface" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contato">{cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contato" aria-labelledby="contact-title">
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
