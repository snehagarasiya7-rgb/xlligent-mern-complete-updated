import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { reviews as staticReviews } from "../data/reviews";
import { company } from "../data/company";
import { getReviews } from "../api";
import "./GoogleReviews.css";

// Reviews are rendered by the Elfsight Google Reviews widget.
// If the widget does not appear (ad-blocker, offline, plan limit, script error),
// the real Google reviews saved in src/data/reviews.js are shown instead, so
// this section is never empty.
const WIDGET_CLASS = "elfsight-app-3d330041-924d-4d7f-805c-8538d8ae4a6f";
const FALLBACK_AFTER_MS = 8000;

function GoogleReviews() {
  const widgetRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);
  const [reviews, setReviews] = useState(staticReviews);

  useEffect(() => {
    // Prefer reviews from MongoDB backend; fall back to static data.
    getReviews()
      .then((res) => {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          setReviews(res.data);
        }
      })
      .catch(() => {
        /* keep staticReviews */
      });
  }, []);

  useEffect(() => {
    // Load a fresh copy of the platform script every time this section mounts,
    // so the widget also starts when navigating to Home from another page.
    document
      .querySelectorAll("script[data-elfsight-platform]")
      .forEach((el) => el.remove());
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-platform", "true");
    document.body.appendChild(script);

    const started = Date.now();
    const timer = setInterval(() => {
      const loaded = widgetRef.current && widgetRef.current.children.length > 0;
      if (loaded) {
        setShowFallback(false);
        clearInterval(timer);
      } else if (Date.now() - started > FALLBACK_AFTER_MS) {
        setShowFallback(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      script.remove();
    };
  }, []);

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="section gr-section">
      <div className="container">
        <span className="eyebrow">Google Reviews</span>
        <h2 className="section-heading">What people say about us on Google</h2>

        {/* Elfsight Google Reviews | Untitled Google Reviews */}
        <div
          ref={widgetRef}
          className={WIDGET_CLASS}
          data-elfsight-app-lazy
        ></div>

        {showFallback && reviews.length > 0 && (
          <>
            <div className="gr-grid">
              {reviews.map((r) => (
                <article className="gr-card" key={r.name + r.date}>
                  <div className="gr-stars" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: r.rating || 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="gr-text">{r.text}</p>
                  <div className="gr-meta">
                    <strong>{r.name}</strong>
                    <span>{r.date}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="gr-actions">
              {avg && (
                <span className="gr-summary">
                  {avg} <FaStar /> · {reviews.length} Google reviews
                </span>
              )}
              <a
                className="btn btn-primary"
                href={company.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View all reviews on Google
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default GoogleReviews;
