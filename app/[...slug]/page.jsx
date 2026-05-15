import { notFound } from "next/navigation";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { legalDocuments, pageImages, pagePaths, pageThemes, pages, siteUrl } from "../content";

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
  const rootSection = params.slug[0];
  const theme = pageThemes[rootSection] || pageThemes.plataforma;
  const pageImage = pageImages[path] || theme.image;
  const pageClass = path.replace(/^\//, "").replace(/\//g, "-") || "home";
  const legalDocument = legalDocuments[path];

  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main className={`subpage ${theme.className} page-${pageClass}`}>
        <section className="subpage-hero">
          <div className="subpage-hero-copy">
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
          </div>

          <div className="subpage-visual" aria-hidden="true">
            <img src={pageImage} alt="" />
            <span>{page.eyebrow}</span>
          </div>
        </section>

        {legalDocument ? (
          <section className="legal-document-section" aria-label={`Documento ${page.eyebrow}`}>
            <article className="legal-document">
              <p className="legal-updated">{legalDocument.updatedAt}</p>
              <p className="legal-intro">{legalDocument.intro}</p>
              {legalDocument.sections.map((section) => (
                <section className="legal-topic" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </article>
          </section>
        ) : (
          <section className="subpage-content" aria-label={`Conteúdo sobre ${page.eyebrow}`}>
            {page.sections.map(([title, text]) => (
              <article className="subpage-card interactive-surface" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </section>
        )}

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
