import { Link, useParams, Navigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import SEO from "../component/SEO";
import { services } from "../data/services";
import { SERVICE_ICONS } from "../component/serviceIcons";
import "./ProductDetail.css";
import "./ServiceDetail.css";

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = SERVICE_ICONS[service.icon];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SEO
        path={`/services/${service.slug}`}
        title={service.title}
        description={service.description}
      />

      <section className="page-hero">
        <div className="container">
          <Link to="/services" className="back-link">
            <FaArrowLeft /> All Services
          </Link>
          <span className="eyebrow">Service</span>
          <div className="service-hero-title">
            <div className="service-icon">{Icon && <Icon />}</div>
            <h1>{service.title}</h1>
          </div>
          <p>{service.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div>
            <h2 className="section-heading">Overview</h2>
            <p className="section-sub">{service.overview}</p>

            <h3 className="service-subheading">What's included</h3>
            <div className="feature-list service-includes">
              {service.includes.map((item) => (
                <div className="feature-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="service-side">
            <div className="service-side-card">
              <h3>Key benefits</h3>
              <ul>
                {service.benefits.map((b) => (
                  <li key={b}>
                    <FaCheckCircle /> <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-side-card">
              <h3>Best suited for</h3>
              <ul>
                {service.bestFor.map((b) => (
                  <li key={b}>
                    <FaCheckCircle /> <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="btn btn-primary service-side-btn">
              Get a Quote
            </Link>
          </aside>
        </div>
      </section>

      <section className="section service-others">
        <div className="container">
          <h2 className="section-heading">Other services</h2>
          <div className="service-chips">
            {others.map((s) => (
              <Link to={`/services/${s.slug}`} className="service-chip" key={s.slug}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Interested in {service.title}?</h2>
          <p>Tell us what you're trying to build and our team will get back to you.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
