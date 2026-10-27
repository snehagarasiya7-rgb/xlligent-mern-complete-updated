import { overview, funFact, whyChoose } from "../data/overview";
import "./CompanyOverview.css";

// Company Overview + Fun Fact stats + Why Choose Us.
// Plain sections — no background images. Used on the About and Career pages.
export function OverviewSection({ alt = false }) {
  return (
    <section className={`section${alt ? " co-alt" : ""}`}>
      <div className="container co-inner">
        <span className="eyebrow">{overview.eyebrow}</span>
        <h2 className="section-heading">{overview.heading}</h2>
        <p className="overview-text">{overview.text}</p>
      </div>
    </section>
  );
}

export function FunFactSection() {
  return (
      <section className="funfact-section">
        <div className="container">
          <h2>{funFact.heading}</h2>
          <p className="funfact-text">{funFact.text}</p>
          <div className="stats-grid">
            {funFact.stats.map((st) => (
              <div className="stat-card" key={st.label}>
                <div className="stat-value">{st.value}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export function WhyChooseSection() {
  return (
      <section className="section co-alt">
        <div className="container co-inner">
          <span className="eyebrow">{whyChoose.eyebrow}</span>
          <h2 className="section-heading">{whyChoose.heading}</h2>
          <p className="overview-text">{whyChoose.text}</p>
          <div className="choose-chips">
            {whyChoose.highlights.map((h) => (
              <span className="choose-chip" key={h}>{h}</span>
            ))}
          </div>
        </div>
      </section>
  );
}

// All three blocks in order (used on the Career page).
function CompanyOverview() {
  return (
    <>
      <OverviewSection />
      <FunFactSection />
      <WhyChooseSection />
    </>
  );
}

export default CompanyOverview;
