import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaHotel,
  FaPlane,
  FaHospital,
  FaStore,
  FaMagic,
  FaArrowRight,
  FaRedo,
} from "react-icons/fa";
import { products } from "../data/products";
import "./ProductRecommender.css";

// Maps a simple business-type answer directly to a product slug.
// Kept intentionally simple/deterministic so recommendations are always
// accurate to what's actually in data/products.js.
const QUESTIONS = [
  {
    icon: <FaGraduationCap />,
    label: "School (K-12)",
    slug: "school-management",
  },
  {
    icon: <FaHospital />,
    label: "Hospital / Clinic",
    slug: "hospital-management",
  },
  {
    icon: <FaStore />,
    label: "Retail / Supermarket",
    slug: "billing-management",
  },
  {
    icon: <FaHotel />,
    label: "Hotel / Resort",
    slug: "hotel-management",
  },
  {
    icon: <FaPlane />,
    label: "Travel Agency",
    slug: "travel-erp",
  },
];

function ProductRecommender() {
  const [selected, setSelected] = useState(null);

  const recommended = selected
    ? products.find((p) => p.slug === selected)
    : null;

  return (
    <div className="recommender">
      <div className="recommender-head">
        <span className="recommender-badge">
          <FaMagic /> Smart Product Recommender
        </span>
        <h2 className="section-heading">Not sure which product fits you?</h2>
        <p className="section-sub">
          Tell us what kind of business you run, and we'll point you to the
          right product in seconds.
        </p>
      </div>

      {!recommended ? (
        <div className="recommender-options">
          {QUESTIONS.map((q) => (
            <button
              type="button"
              key={q.slug}
              className="recommender-option"
              onClick={() => setSelected(q.slug)}
            >
              <span className="recommender-option-icon">{q.icon}</span>
              <span>{q.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="recommender-result">
          <div className="recommender-result-media">
            <img src={recommended.image} alt={recommended.name} loading="lazy" />
          </div>
          <div className="recommender-result-content">
            <span className="recommender-result-eyebrow">Recommended for you</span>
            <h3>{recommended.name}</h3>
            <p>{recommended.tagline}</p>
            <div className="recommender-result-actions">
              <Link to={`/products/${recommended.slug}`} className="btn btn-primary">
                View Product <FaArrowRight />
              </Link>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSelected(null)}
              >
                <FaRedo /> Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductRecommender;
