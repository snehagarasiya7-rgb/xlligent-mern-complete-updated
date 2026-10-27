import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SEO from "../component/SEO";
import { company, whatsappLink } from "../data/company";
import FAQ from "../component/FAQ";
import { submitContact } from "../api";
import "./Contact.css";

import heroBg from "../assets/pages/developer.jpg";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    setStatus("sending");
    setErrorMsg("");

    try {
      await submitContact({ name, email, phone, message });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <SEO
        path="/contact"
        title="Contact Us | Software Solutions India & USA"
        description="Contact Xlligent Softwares for a demo of our business management software or a custom software product. Call, email or WhatsApp our team."
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's talk about what you're trying to build</h1>
          <p>
            Reach out about business management software, a custom software
            product, a demo, or a general question — our team will get back
            to you.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
                  {company.phones[0]}
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>

            <div className="social-icons">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="social-icon wa"
              >
                <FaWhatsapp />
              </a>
              {company.social.instagram && (
                <a
                  href={`https://www.instagram.com/${company.social.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="social-icon ig"
                >
                  <FaInstagram />
                </a>
              )}
              {company.social.twitter && (
                <a
                  href={`https://twitter.com/${company.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  className="social-icon x"
                >
                  <FaXTwitter />
                </a>
              )}
              {company.social.linkedin && (
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="social-icon in"
                >
                  <FaLinkedinIn />
                </a>
              )}
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Locations</h4>
                <ol className="location-list">
                  {company.locations.map((loc) => (
                    <li key={loc.city}>
                      <strong>{loc.city}</strong>
                      <span>
                        {[loc.region, loc.country].filter(Boolean).join(", ")}
                        {loc.hq ? " — Head Office" : ""}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>

            <label>
              Full Name
              <input type="text" name="name" required placeholder="Your name" disabled={status === "sending"} />
            </label>

            <label>
              Email
              <input type="email" name="email" required placeholder="you@company.com" disabled={status === "sending"} />
            </label>

            <label>
              Phone Number
              <input type="tel" name="phone" placeholder="Your phone number" disabled={status === "sending"} />
            </label>

            <label>
              Message
              <textarea name="message" rows="5" required placeholder="Tell us about your requirement" disabled={status === "sending"} />
            </label>

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="form-note">
                Thank you! Your message has been received. We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-note" style={{ color: "#c0392b" }}>
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </section>

      <FAQ />
    </>
  );
}

export default Contact;
