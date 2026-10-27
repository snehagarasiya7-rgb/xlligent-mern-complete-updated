import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { company } from "../data/company";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <img src="/logo.webp" alt={company.name} className="footer-logo" />
          <p className="footer-tagline">
            A product-based software company building practical software for
            real business operations.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <Link to="/products">Explore Products</Link>
          <Link to="/contact">Request a Demo</Link>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <div className="footer-line">
            <FaPhoneAlt />
            <span>{company.phones.join(" / ")}</span>
          </div>
          <div className="footer-line">
            <FaEnvelope />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="footer-line">
            <FaMapMarkerAlt />
            <span>
              {company.locations.map((l) => l.city).join(" · ")}
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {year} {company.legalName}. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
