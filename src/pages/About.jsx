import { Link } from "react-router-dom";
import { FaBuilding, FaBullseye, FaCode, FaEye, FaFlag, FaQuoteLeft } from "react-icons/fa";
import SEO from "../component/SEO";
import { OverviewSection, FunFactSection, WhyChooseSection } from "../component/CompanyOverview";
import { company } from "../data/company";
import { founder, vision, mission, journey, team } from "../data/about";
import "./About.css";

import heroBg from "../assets/pages/lab-overview.jpg";
import whoImg from "../assets/pages/lab-overview.jpg";
import approachImg from "../assets/pages/developer.jpg";
import buildImg from "../assets/pages/assembly.jpg";
import locationsBg from "../assets/pages/locations-bg.jpg";

function Avatar({ name, photo, className = "" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`avatar ${className}`}>
      {photo ? <img src={photo} alt={name} loading="lazy" /> : <span>{initials}</span>}
    </div>
  );
}

function About() {
  return (
    <>
      <SEO
        path="/about"
        title="About Us | Enterprise Software Company"
        description="Xlligent Softwares is a product-based software company building AI software solutions and business management systems for organizations in India, the USA and Asia."
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Building software products for real business operations</h1>
          <p>
            {company.legalName} is a product-based software company. We
            design and build practical software products aimed at real
            business workflows — from management software to enterprise
            software — rather than taking on generic outsourced development
            work.
          </p>
        </div>
      </section>

      <section className="section about-grid">
        <div className="container about-grid-inner">
          <div className="about-card">
            <div className="about-card-media">
              <img src={whoImg} alt="Who we are" loading="lazy" />
            </div>
            <FaBuilding />
            <h3>Who we are</h3>
            <p>
              We're a product-focused software company with teams across
              India and Malaysia, working on business management software
              built to be used day-to-day by real teams in real organizations
              across India, the USA and Asia.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-media">
              <img src={approachImg} alt="Our approach" loading="lazy" />
            </div>
            <FaCode />
            <h3>Our approach</h3>
            <p>
              We start with the operational problem, design around the
              people who will actually use the software, then build for
              reliability, security, and long-term maintainability.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-media">
              <img src={buildImg} alt="What we build" loading="lazy" />
            </div>
            <FaBullseye />
            <h3>What we build</h3>
            <p>
              Industry-focused software products aimed at automating and
              centralizing business operations — built as products, not
              one-off client projects.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW → FUN FACT → WHY CHOOSE US */}
      <OverviewSection alt />
      <FunFactSection />
      <WhyChooseSection />

      {/* FOUNDER (no background image) */}
      <section className="section founder-section">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-heading">A message from our founder</h2>

          <div className="founder-card">
            <div className="founder-profile">
              <Avatar name={founder.name} photo={founder.photo} className="avatar-lg" />
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
            </div>
            <div className="founder-message">
              <FaQuoteLeft className="founder-quote-icon" />
              {founder.message.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section vm-section">
        <div className="container vm-grid">
          <div className="vm-card">
            <div className="vm-icon"><FaEye /></div>
            <h3>{vision.title}</h3>
            <p>{vision.text}</p>
          </div>
          <div className="vm-card">
            <div className="vm-icon"><FaFlag /></div>
            <h3>{mission.title}</h3>
            <p>{mission.text}</p>
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY */}
      <section className="section journey-section">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h2 className="section-heading">Company journey</h2>

          <div className="timeline">
            {journey.map((step) => (
              <div className="timeline-item" key={step.title}>
                <div className="timeline-dot" />
                <span className="timeline-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section team-section">
        <div className="container">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-heading">The people behind Xlligent</h2>
          <p className="section-sub">
            A dedicated team of engineers, designers and business professionals
            working together to build software that works.
          </p>

          <div className="team-grid">
            {team.map((m) => (
              <div className="team-card" key={m.name}>
                <Avatar name={m.name} photo={m.photo} />
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section locations-section has-media"
        style={{ backgroundImage: `url(${locationsBg})` }}
      >
        <div className="container">
          <span className="eyebrow">Where We Are</span>
          <h2 className="section-heading">Our locations</h2>
          <div className="locations-grid">
            {company.locations.map((loc) => (
              <div className="location-card" key={loc.city}>
                <h3>{loc.city}</h3>
                <p>
                  {loc.region ? `${loc.region}, ` : ""}
                  {loc.country}
                  {loc.hq ? " — Head Office" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Want to know more about what we build?</h2>
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

export default About;
