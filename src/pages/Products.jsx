import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaRobot } from "react-icons/fa";
import SEO from "../component/SEO";
import ProductRecommender from "../component/ProductRecommender";
import { products } from "../data/products";
import "./Products.css";

import heroBg from "../assets/pages/assembly.jpg";

function Products() {
  const navigate = useNavigate();

  const goToAiFeatures = (e, slug) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/products/${slug}#ai-features`);
  };

  return (
    <>
      <SEO
        path="/products"
        title="Management Software Products"
        description="Explore Xlligent's AI-enabled management software: school, hospital, billing, ERP and more — enterprise software built for real business operations."
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">Our Products</span>
          <h1>Management software products built for real operations</h1>
          <p>
            Every product we build starts with a real operational problem —
            not a generic template. Explore our AI software solutions and
            business management systems for organizations in India, the USA
            and Asia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.length > 0 ? (
            <div className="products-list-grid">
              {products.map((p) => (
                <Link to={`/products/${p.slug}`} className="product-card" key={p.slug}>
                  {p.aiEnabled && (
                    <button
                      type="button"
                      className="ai-badge is-clickable"
                      onClick={(e) => goToAiFeatures(e, p.slug)}
                    >
                      <FaRobot /> AI Enabled
                    </button>
                  )}
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <span className="product-link">
                    View product <FaArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="products-placeholder">
              <h3>Product pages coming soon</h3>
              <p>
                We're finalizing detailed pages for each of our software
                products. Contact our team to learn about what we currently
                offer and what's in development.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team
              </Link>
            </div>
          )}

          <ProductRecommender />
        </div>
      </section>
    </>
  );
}

export default Products;
