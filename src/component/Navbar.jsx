import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { company } from "../data/company";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/career" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile/side menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="navbar-inner container">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img src="/logo.webp" alt={company.name} />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="navbar-phone">
              <FaPhoneAlt /> {company.phones[0]}
            </a>
            <Link to="/contact" className="btn btn-primary navbar-cta">
              Get Started
            </Link>
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`side-menu-backdrop ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side / mobile menu */}
      <aside className={`side-menu ${open ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          ✕
        </button>

        <img src="/logo.webp" alt={company.name} className="menu-logo" />

        <nav className="side-menu-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <h3>Contact Us</h3>

        <div className="contact-item">
          <FaPhoneAlt />
          <span>{company.phones.join(", ")}</span>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <span>{company.email}</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <div className="location-text">
            <p>Locations:</p>
            {company.locations.map((loc) => (
              <p key={loc.city}>
                {loc.city}
                {loc.region ? `, ${loc.region}` : ""} {loc.country}
              </p>
            ))}
          </div>
        </div>

        <Link to="/contact" className="btn btn-primary side-menu-cta" onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </aside>
    </>
  );
}

export default Navbar;
