import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaRobot } from "react-icons/fa";
import "./ProductSlider.css";

function ProductSlider({ products }) {
  const [index, setIndex] = useState(0);
  const total = products.length;

  const goTo = (i) => setIndex((i + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (total === 0) return null;

  return (
    <div className="product-slider">
      <div className="product-slider-viewport">
        <div
          className="product-slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((p) => (
            <div className="product-slide" key={p.slug}>
              <div className="product-slide-media">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-slide-content">
                {p.aiEnabled && (
                  <Link
                    to={`/products/${p.slug}#ai-features`}
                    className="ai-badge is-clickable"
                  >
                    <FaRobot /> AI Enabled
                  </Link>
                )}
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <Link to={`/products/${p.slug}`} className="product-link">
                  Learn more <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={prev}
            aria-label="Previous product"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={next}
            aria-label="Next product"
          >
            <FaChevronRight />
          </button>

          <div className="slider-dots">
            {products.map((p, i) => (
              <button
                type="button"
                key={p.slug}
                className={`slider-dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductSlider;
