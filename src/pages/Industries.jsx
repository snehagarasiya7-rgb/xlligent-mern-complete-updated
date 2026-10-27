import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaHospital,
  FaStore,
  FaLandmark,
  FaHome,
  FaIndustry,
  FaTruck,
  FaPlane,
  FaHotel,
} from "react-icons/fa";
import SEO from "../component/SEO";
import { industries } from "../data/industries";
import "./Industries.css";

import heroBg from "../assets/pages/assembly.jpg";

// Keep in sync with the `icon` keys used in src/data/industries.js
const ICON_MAP = {
  FaGraduationCap,
  FaHospital,
  FaStore,
  FaLandmark,
  FaHome,
  FaIndustry,
  FaTruck,
  FaPlane,
  FaHotel,
};

function Industries() {
  return (
    <>
      <SEO
        path="/industries"
        title="Industry Software Solutions"
        description="Business management systems and enterprise software for Education, Healthcare, Retail, Finance, Hospitality, Manufacturing, Logistics and Travel."
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">Industries We Serve</span>
          <h1>Software built around how each industry actually works</h1>
          <p>
            Every industry runs differently. Here's where our management
            software products and custom software are focused.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((ind) => {
              const Icon = ICON_MAP[ind.icon];
              return (
                <div className="industry-card" key={ind.slug}>
                  <div className="industry-icon">{Icon && <Icon />}</div>
                  <h3>{ind.title}</h3>
                  {ind.subtitle && <span className="industry-subtitle">{ind.subtitle}</span>}
                  <p>{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Don't see your industry listed?</h2>
          <p>We build custom software for operations that don't fit a template too.</p>
          <div className="cta-btns">
            <Link to="/services" className="btn btn-ghost">
              View Services
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

export default Industries;
