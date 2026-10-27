import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { company } from "../data/company";
import { products } from "../data/products";
import "./FAQ.css";

const locationText = company.locations
  .map((l) => `${l.city}${l.region ? `, ${l.region}` : ""} (${l.country})`)
  .join("; ");

const FAQS = [
  {
    q: `What does ${company.name} do?`,
    a: `${company.legalName} is a product-based software company. We build practical, industry-focused software products for real business operations rather than one-off agency projects.`,
  },
  {
    q: "Which products do you offer?",
    a:
      products.length > 0
        ? `We currently offer ${products.length} core products: ${products
            .map((p) => p.name)
            .join(", ")}. You can explore each one on our Products page.`
        : "Our product lineup is being published. Contact us and our team will walk you through what we currently offer.",
  },
  {
    q: "How can I get a demo?",
    a: `Send us a message using the form on this page, email us at ${company.email}, or call/WhatsApp us on ${company.phones[0]}. Our team will get back to you to arrange a demo.`,
  },
  {
    q: "How much does your software cost?",
    a: "Pricing depends on your organization's size and the modules you need. Contact our team and we will prepare an exact quote for you.",
  },
  {
    q: "Are your products AI-enabled?",
    a: "Many of our products have AI built in rather than added as an afterthought. Open any product page to see its features and AI capabilities.",
  },
  {
    q: "Where are your offices located?",
    a: `We have offices in: ${locationText}.`,
  },
  {
    q: "How quickly will you reply to my enquiry?",
    a: `Our team reviews every enquiry and responds as soon as possible. For a faster response you can message us directly on WhatsApp at +${company.whatsapp.slice(0, 2)} ${company.whatsapp.slice(2)}.`,
  },
  {
    q: "Are you hiring?",
    a: `Open positions are listed on our Career page. You can also write to ${company.hrEmail}.`,
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2 className="section-heading">Frequently asked questions</h2>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <FaChevronDown />
                </button>
                {isOpen && <p className="faq-a">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
