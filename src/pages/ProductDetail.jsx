import { useEffect } from "react";
import { Link, useParams, useLocation, Navigate } from "react-router-dom";
import { FaRobot, FaStar } from "react-icons/fa";
import SEO from "../component/SEO";
import { products } from "../data/products";
import { featureGroups, isKeyItem } from "../data/featureGroups";
import { reviews } from "../data/reviews";
import { company } from "../data/company";
import "./ProductDetail.css";

const avgRating = reviews.length
  ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
  : null;

function ProductDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const product = products.find((p) => p.slug === slug);

  // Scroll to the AI features section when arriving via an "AI Enabled"
  // badge link (e.g. /products/<slug>#ai-features).
  useEffect(() => {
    if (location.hash === "#ai-features") {
      const el = document.getElementById("ai-features");
      if (el) {
        // Wait a tick so the page has finished laying out first.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    }
  }, [location, product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // PDF feature groups replace the old generic boxes. Products without PDF data
  // keep their original boxes. Where groups exist we still keep the AI boxes
  // (the "AI Enabled" badge scrolls to them) and the "Customized to..." box.
  const groups = featureGroups[product.slug] || [];
  const extraFeatures =
    groups.length > 0
      ? (product.features || []).filter((f) => /\bai\b/i.test(f.title) || /^customized/i.test(f.title))
      : product.features || [];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    brand: { "@type": "Organization", name: company.legalName },
    ...(avgRating && reviews.length
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating,
            reviewCount: reviews.length,
          },
        }
      : {}),
  };

  const faqSchema =
    product.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const scrollToAiFeatures = (e) => {
    e.preventDefault();
    const el = document.getElementById("ai-features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        path={`/products/${product.slug}`}
        title={product.seoTitle || product.name}
        description={product.seoDescription || `${product.name} by Xlligent Softwares — ${product.tagline}`}
        schema={faqSchema ? [softwareSchema, faqSchema] : softwareSchema}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Product</span>
          {product.aiEnabled && (
            <button
              type="button"
              className="ai-badge is-clickable"
              onClick={scrollToAiFeatures}
            >
              <FaRobot /> AI Enabled
            </button>
          )}
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
          {avgRating && reviews.length > 0 && (
            <div className="product-rating-badge">
              <span className="product-rating-stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((n) => (
                  <FaStar key={n} className={n <= Math.round(avgRating) ? "on" : ""} />
                ))}
              </span>
              <span>
                {avgRating} · {reviews.length} Google reviews
              </span>
            </div>
          )}
        </div>
      </section>

      {(product.keyProblem || product.keySolution) && (
        <section className="section problem-solution-section">
          <div className="container">
            <div className="problem-solution-grid">
              {product.keyProblem && (
                <div className="ps-card ps-problem">
                  <span className="ps-label">The Problem</span>
                  <p>{product.keyProblem}</p>
                </div>
              )}
              {product.keySolution && (
                <div className="ps-card ps-solution">
                  <span className="ps-label">Our Solution</span>
                  <p>{product.keySolution}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container product-detail-grid">
          <div>
            <h2 className="section-heading">Overview</h2>
            <p className="section-sub">{product.description}</p>

            {(groups.length > 0 || extraFeatures.length > 0) && (
              <div className="feature-list" id="ai-features">
                {groups.map((g) => (
                  <div className="feature-item feature-group" key={g.title}>
                    <div className="feature-group-head">
                      <h4>{g.title}</h4>
                      <span className="feature-count">{g.count}</span>
                    </div>
                    <ul className="feature-chips">
                      {g.items.map((it) => (
                        <li key={it} className={isKeyItem(product.slug, it) ? "is-key" : undefined}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {extraFeatures.map((f) => (
                  <div
                    className={`feature-item${f.title.toLowerCase().includes("ai") ? " feature-item-ai" : ""}`}
                    key={f.title}
                  >
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {product.image && (
            <img src={product.image} alt={`${product.name} by Xlligent Softwares`} className="product-detail-image" />
          )}
        </div>
      </section>

      {product.faqs?.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <div className="feature-list">
              {product.faqs.map((f) => (
                <div className="feature-item" key={f.question}>
                  <h4>{f.question}</h4>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Interested in {product.name}?</h2>
          <p>Get in touch for a walkthrough or a demo.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
