"use client";

export default function ContactForm() {
  const submitContact = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = formData.get("nome") || "";
    const email = formData.get("email") || "";
    const projeto = formData.get("projeto") || "";
    const body = [`Nome: ${nome}`, `E-mail: ${email}`, `Tipo de Negocio: ${projeto}`].join("\n");

    window.location.href = `mailto:contato@nivrix.com?subject=${encodeURIComponent(
      "Contato pelo site Nivrix",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={submitContact}>
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
  );
}
