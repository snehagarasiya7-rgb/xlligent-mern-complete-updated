import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SEO from "../component/SEO";
import { services } from "../data/services";
import { SERVICE_ICONS } from "../component/serviceIcons";
import "./Services.css";

import heroBg from "../assets/pages/developer.jpg";

function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Custom Software Development Services"
        description="Custom software product development, web and mobile apps, cloud and support from Xlligent for businesses in India, the USA and Asia."
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Services built to support your product, end to end</h1>
          <p>
            From the first design mockup to long-term support, here's what
            our team can help you with — including custom software product
            development and business management system implementation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <div className="service-card" key={s.slug}>
                  <div className="service-icon">{Icon && <Icon />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link to={`/services/${s.slug}`} className="product-link">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Have a project in mind?</h2>
          <p>Tell us what you're trying to build and our team will get back to you.</p>
          <div className="cta-btns">
            <Link to="/products" className="btn btn-ghost">
              View Products
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
