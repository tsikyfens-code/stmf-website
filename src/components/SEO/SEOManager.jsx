import { useEffect } from "react";
import { useLocation } from "react-router";

import {
  ORGANIZATION_SCHEMA,
  SEO_PAGES,
  SITE_URL,
} from "../../data/seo";


function updateMeta(attribute, name, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );


  if (!element) {
    element = document.createElement("meta");

    element.setAttribute(
      attribute,
      name
    );

    document.head.appendChild(element);
  }


  element.setAttribute(
    "content",
    content
  );
}


function updateCanonical(url) {
  let canonical =
    document.head.querySelector(
      'link[rel="canonical"]'
    );


  if (!canonical) {
    canonical =
      document.createElement("link");

    canonical.setAttribute(
      "rel",
      "canonical"
    );

    document.head.appendChild(canonical);
  }


  canonical.setAttribute(
    "href",
    url
  );
}


function updateOrganizationSchema(
  pathname
) {
  const existingSchema =
    document.getElementById(
      "stmf-organization-schema"
    );


  if (pathname !== "/") {
    existingSchema?.remove();

    return;
  }


  const script =
    existingSchema ||
    document.createElement("script");


  script.id =
    "stmf-organization-schema";

  script.type =
    "application/ld+json";

  script.textContent =
    JSON.stringify(
      ORGANIZATION_SCHEMA
    );


  if (!existingSchema) {
    document.head.appendChild(script);
  }
}


function SEOManager() {
  const { pathname } = useLocation();


  useEffect(() => {
    const seo =
      SEO_PAGES[pathname] ||
      SEO_PAGES["/"];


    const canonicalUrl =
      `${SITE_URL}${seo.path}`;


    /* ==============================
       Langue
    ============================== */

    document.documentElement.lang =
      "fr";


    /* ==============================
       Title
    ============================== */

    document.title =
      seo.title;


    /* ==============================
       Description
    ============================== */

    updateMeta(
      "name",
      "description",
      seo.description
    );


    /* ==============================
       Robots
    ============================== */

    updateMeta(
      "name",
      "robots",
      "index, follow"
    );


    /* ==============================
       Open Graph
    ============================== */

    updateMeta(
      "property",
      "og:title",
      seo.title
    );


    updateMeta(
      "property",
      "og:description",
      seo.description
    );


    updateMeta(
      "property",
      "og:url",
      canonicalUrl
    );


    updateMeta(
      "property",
      "og:type",
      "website"
    );


    updateMeta(
      "property",
      "og:site_name",
      "STMF"
    );


    updateMeta(
      "property",
      "og:locale",
      "fr_FR"
    );


    /* ==============================
       Canonical
    ============================== */

    updateCanonical(
      canonicalUrl
    );


    /* ==============================
       Organization JSON-LD
    ============================== */

    updateOrganizationSchema(
      pathname
    );

  }, [pathname]);


  return null;
}


export default SEOManager;