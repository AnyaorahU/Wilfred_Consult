// Central site configuration. Sensitive / deployment-specific values are read
// from environment variables (see frontend/.env.example) with safe fallbacks
// for local development.
//
// NOTE: Vite only exposes vars prefixed with VITE_, and they are embedded into
// the client bundle at build time — so treat these as public configuration, not
// true secrets. Anything that must stay secret needs a server/proxy.

const rawPhone = import.meta.env.VITE_CONTACT_PHONE || "+1 (212) 555-0100";
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || "12125550100";
const email = import.meta.env.VITE_CONTACT_EMAIL || "hello@wilfredconsult.com";

export const siteConfig = {
  // Phone
  phone: rawPhone,
  phoneHref: `tel:${rawPhone.replace(/[^\d+]/g, "")}`,

  // WhatsApp (digits only, incl. country code)
  whatsapp,
  whatsappHref: `https://wa.me/${whatsapp}`,

  // Email
  email,
  emailHref: `mailto:${email}`,

  // Formspree form id used by src/lib/sendForm.js
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || "",
};
