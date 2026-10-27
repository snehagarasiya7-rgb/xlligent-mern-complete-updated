import { useEffect } from "react";

/**
 * Lightweight per-page SEO helper — sets document title + meta description
 * + canonical + Open Graph tags without pulling in an extra dependency.
 */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo-jsonld="${id}"]`);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo-jsonld", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEO({ title, description, path = "/", schema }) {
  useEffect(() => {
    // Titles that already carry the brand name are used as-is; others get the suffix.
    const fullTitle = title
      ? /xlligent/i.test(title)
        ? title
        : `${title} | Xlligent Softwares`
      : "Business Management Software & AI Solutions | Xlligent";
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    setMeta("property", "og:url", `${origin}${path}`);
    setCanonical(`${origin}${path}`);

    // schema can be a single JSON-LD object or an array of them (e.g. product + FAQ).
    const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    schemas.forEach((s, i) => setJsonLd(`${path}-${i}`, s));
    return () => schemas.forEach((_, i) => setJsonLd(`${path}-${i}`, null));
  }, [title, description, path, schema]);

  return null;
}
