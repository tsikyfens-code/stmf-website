export const SITE_URL =
  "https://stmf-gestion-locative.com";


export const SEO_PAGES = {
  "/": {
    title:
      "STMF | Externalisation de gestion locative à Madagascar",

    description:
      "STMF accompagne les professionnels de la gestion locative avec des services d’externalisation comptable, administrative et de relation clients depuis Madagascar.",

    path: "/",
  },


  "/en-savoir-plus": {
    title:
      "Services d’externalisation en gestion locative | STMF",

    description:
      "Découvrez les services STMF : sous-traitance comptable, administrative et relation clients pour les professionnels de la gestion locative.",

    path: "/en-savoir-plus",
  },


  "/a-propos": {
    title:
      "À propos de STMF | Externalisation comptable et administrative",

    description:
      "Découvrez STMF, son équipe à Madagascar, son expertise en externalisation comptable et administrative et son accompagnement des gestionnaires locatifs.",

    path: "/a-propos",
  },


  "/recrutement": {
    title:
      "Recrutement | Rejoignez l’équipe STMF à Madagascar",

    description:
      "Découvrez les opportunités de recrutement chez STMF à Madagascar et rejoignez une équipe spécialisée en gestion locative et services administratifs.",

    path: "/recrutement",
  },


  "/contact": {
    title:
      "Contact | STMF - Externalisation de gestion locative",

    description:
      "Contactez STMF pour échanger sur vos besoins en externalisation comptable, administrative ou relation clients pour la gestion locative.",

    path: "/contact",
  },
};


export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "STMF",

  url: SITE_URL,

  logo: `${SITE_URL}/logo-stmf.png`,

  email: "stmfanilo@gmail.com",

  description:
    "STMF accompagne les professionnels de la gestion locative dans l'externalisation comptable, administrative et la relation clients.",
};