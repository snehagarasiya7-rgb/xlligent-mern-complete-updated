import { Link } from "react-router-dom";
import {
  FaCogs,
  FaShieldAlt,
  FaLayerGroup,
  FaUsersCog,
  FaSyncAlt,
  FaCompass,
  FaPencilRuler,
  FaCode,
  FaHeadset,
} from "react-icons/fa";
import Hero from "../component/Hero";
import SEO from "../component/SEO";
import ProductSlider from "../component/ProductSlider";
import GoogleReviews from "../component/GoogleReviews";
import { FaArrowRight } from "react-icons/fa";
import { products } from "../data/products";
import { services } from "../data/services";
import { SERVICE_ICONS } from "../component/serviceIcons";
import "./Home.css";
import "./Services.css";

import whyBgImg from "../assets/why/section-bg.jpg";
import workflowsImg from "../assets/why/workflows.jpg";
import industryImg from "../assets/why/industry.jpg";
import interfacesImg from "../assets/why/interfaces.jpg";
import securityImg from "../assets/why/security.jpg";
import scalableImg from "../assets/why/scalable.jpg";
import supportImg from "../assets/why/support.jpg";

import buildSectionBg from "../assets/home/build-section-bg.jpg";
import processBg from "../assets/home/process-bg.jpg";
import ctaBg from "../assets/home/cta-bg.jpg";

const WHY_US = [
  {
    icon: <FaCogs />,
    title: "Built for real workflows",
    text: "Products shaped around how businesses actually operate day to day, not generic templates.",
    img: workflowsImg,
  },
  {
    icon: <FaLayerGroup />,
    title: "Industry-focused solutions",
    text: "Software designed around the specific needs of the industries we build for.",
    img: industryImg,
  },
  {
    icon: <FaUsersCog />,
    title: "Easy-to-use interfaces",
    text: "Clean, intuitive interfaces that reduce training time for every team member.",
    img: interfacesImg,
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure by design",
    text: "Security considered at every stage of product design and development.",
    img: securityImg,
  },
  {
    icon: <FaSyncAlt />,
    title: "Scalable architecture",
    text: "Built to grow with your organization, from a single location to many.",
    img: scalableImg,
  },
  {
    icon: <FaHeadset />,
    title: "Ongoing improvement",
    text: "Products that continue to evolve based on real-world usage and feedback.",
    img: supportImg,
  },
];

const PROCESS = [
  { icon: <FaCompass />, title: "Discover", text: "Understand the real operational problem before writing a single line of code." },
  { icon: <FaPencilRuler />, title: "Design", text: "Map workflows into clean, intuitive interfaces built around the end user." },
  { icon: <FaCode />, title: "Build", text: "Develop the product with a focus on reliability, security and performance." },
  { icon: <FaHeadset />, title: "Support", text: "Roll out, train, and continue improving the product based on real usage." },
];

function Home() {
  return (
    <>
      <SEO
        path="/"
        title="Business Management Software & AI Solutions | Xlligent"
        description="Xlligent builds AI-powered business management software and custom software products for organizations in India, the USA and Asia."
      />
      <Hero />

      {/* WHY XLLIGENT */}
      <section
        className="section why-us"
        style={{ backgroundImage: `url(${whyBgImg})` }}
      >
        <div className="container">
          <span className="eyebrow">Why Xlligent Softwares</span>
          <h2 className="section-heading">
            Software products built around how businesses actually work
          </h2>
          <p className="section-sub">
            We build products, not one-off projects — enterprise software and
            business management systems designed to be used every day,
            refined over time, and scaled as organizations grow.
          </p>

          <div className="why-grid">
            {WHY_US.map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-card-media">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="why-icon">{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section
        id="solutions"
        className="section products-showcase has-media"
        style={{ backgroundImage: `url(${buildSectionBg})` }}
      >
        <div className="container">
          <span className="eyebrow">Our Products</span>
          <h2 className="section-heading">Management software products we build</h2>
          <p className="section-sub">
            A growing lineup of AI software solutions and management systems
            focused on real business operations and industry-specific needs.
          </p>

          {products.length > 0 ? (
            <ProductSlider products={products} />
          ) : (
            <div className="products-placeholder">
              <h3>Our product lineup is being published</h3>
              <p>
                We're putting together detailed pages for each of our
                software products. In the meantime, get in touch and our
                team will walk you through what we currently offer.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES (plain section, no background image) */}
      <section id="services" className="section home-services">
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-heading">Services to support your product, end to end</h2>
          <p className="section-sub">
            From the first design mockup to long-term support, here's what
            our team can help you with — including custom software product
            development for businesses in India, the USA and across Asia.
          </p>

          <div className="services-grid home-services-grid">
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

      {/* HOW IT WORKS */}
      <section
        className="section process has-media"
        style={{ backgroundImage: `url(${processBg})` }}
      >
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-heading">From problem to product</h2>

          <div className="process-grid">
            {PROCESS.map((step, i) => (
              <div className="process-card" key={step.title}>
                <div className="process-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11, 28, 58, 0.92), rgba(11, 45, 90, 0.88)), url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container cta-inner">
          <h2>Ready to see what Xlligent Softwares can build for you?</h2>
          <p>Talk to our team about your business operations and where business management software can help.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
            <Link to="/products" className="btn btn-primary">
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS — sits just above the footer */}
      <GoogleReviews />
    </>
  );
}

export default Home;
