import { notFound } from "next/navigation";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pagePaths, pages, siteUrl } from "../content";

export function generateStaticParams() {
  return pagePaths
    .filter((path) => path !== "/")
    .map((path) => ({
      slug: path.split("/").filter(Boolean),
    }));
}

export function generateMetadata({ params }) {
  const path = `/${params.slug.join("/")}`;
  const page = pages[path];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": path,
        "x-default": path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${path}`,
      images: [
        {
          url: "/assets/nivrix-og.jpg",
          width: 1200,
          height: 630,
          alt: "Nivrix gateway de pagamentos",
        },
      ],
    },
  };
}

export default function SubPage({ params }) {
  const path = `/${params.slug.join("/")}`;
  const page = pages[path];

  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="section-kicker light">{page.eyebrow}</div>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/contato">
              Falar com a Nivrix
            </a>
            <a className="button button-secondary" href="/">
              Voltar ao início
            </a>
          </div>
        </section>

        <section className="subpage-content" aria-label={`Conteúdo sobre ${page.eyebrow}`}>
          {page.sections.map(([title, text]) => (
            <article className="subpage-card interactive-surface" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </section>

        {path === "/contato" && (
          <section className="subpage-contact" aria-labelledby="contact-page-title">
            <div>
              <div className="section-kicker">Atendimento</div>
              <h2 id="contact-page-title">Conte sobre seu negócio digital.</h2>
              <p>
                Envie uma mensagem para conversar sobre checkout, integração e operação de pagamentos.
              </p>
            </div>

            <ContactForm />
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
