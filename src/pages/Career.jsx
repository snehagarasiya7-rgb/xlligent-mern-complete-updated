import { useState } from "react";
import {
  FaLightbulb,
  FaClock,
  FaChartLine,
  FaUsers,
  FaReact,
  FaLaptopCode,
  FaPaintBrush,
  FaBug,
  FaBullhorn,
  FaCode,
  FaUpload,
} from "react-icons/fa";
import SEO from "../component/SEO";
import { company } from "../data/company";
import { whyJoinUs, openPositions, internships, jobOpenings } from "../data/careers";
import JobOpenings from "../component/JobOpenings";
import TechStack from "../component/TechStack";
import { submitApplication } from "../api";
import "./Career.css";

import heroBg from "../assets/pages/lab-overview.jpg";

// Keep in sync with the `icon` keys used in src/data/careers.js
const ICON_MAP = {
  FaLightbulb,
  FaClock,
  FaChartLine,
  FaUsers,
  FaReact,
  FaLaptopCode,
  FaPaintBrush,
  FaBug,
  FaBullhorn,
  FaCode,
};

function Career() {
  const [position, setPosition] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const scrollToForm = (title) => {
    setPosition(title);
    const el = document.getElementById("apply-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const appliedFor = form.position.value || "Not specified";
    const resumeInput = form.resume;
    const resumeFile = resumeInput?.files?.[0];

    setStatus("sending");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("position", appliedFor);
      formData.append("message", "");
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }
      await submitApplication(formData);
      setStatus("sent");
      form.reset();
      setResumeName("");
      setPosition("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <SEO
        path="/career"
        title="Careers"
        description={`Join ${company.name}. See open positions, internship opportunities, and what it's like to work here.`}
      />

      <section className="page-hero has-media" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <span className="eyebrow">Careers</span>
          <h1>Build real software, with people who care about the work</h1>
          <p>
            We're a small, product-focused team. If you like solving real
            problems rather than shipping generic templates, take a look at
            what's open.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Why Join Us?</span>
          <h2 className="section-heading">What it's like working here</h2>
          <div className="why-join-grid">
            {whyJoinUs.map((w) => {
              const Icon = ICON_MAP[w.icon];
              return (
                <div className="why-join-card" key={w.title}>
                  <div className="why-join-icon">{Icon && <Icon />}</div>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section career-section-alt">
        <div className="container">
          <span className="eyebrow">Open Positions</span>
          <h2 className="section-heading">Current openings</h2>
          <div className="positions-list">
            {openPositions.map((p) => {
              const Icon = ICON_MAP[p.icon];
              return (
                <div className="position-row" key={p.slug}>
                  <div className="position-row-info">
                    <div className="position-icon">{Icon && <Icon />}</div>
                    <h3>{p.title}</h3>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={() => scrollToForm(p.title)}>
                    Apply
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Internship Opportunities</span>
          <h2 className="section-heading">Internships</h2>
          <div className="positions-list">
            {internships.map((p) => {
              const Icon = ICON_MAP[p.icon];
              return (
                <div className="position-row" key={p.slug}>
                  <div className="position-row-info">
                    <div className="position-icon">{Icon && <Icon />}</div>
                    <h3>{p.title}</h3>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={() => scrollToForm(p.title)}>
                    Apply
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unlock Your Potential with Us */}
      <JobOpenings onApply={scrollToForm} bordered />

      {/* Tech stack strip */}
      <TechStack />

      {/* Apply Form */}
      <section className="section career-section-alt" id="apply-form">
        <div className="container">
          <div className="apply-form-wrap">
            <div className="apply-form-intro">
              <span className="eyebrow">Apply Now</span>
              <h2 className="section-heading">Send us your application</h2>
              <p className="section-sub">
                Fill in your details and attach your resume. We'll get back
                to you if there's a fit.
              </p>
            </div>

            <form className="contact-form apply-form" onSubmit={handleSubmit}>
              <label>
                Position you're applying for
                <select name="position" value={position} onChange={(e) => setPosition(e.target.value)}>
                  <option value="">Select a position</option>
                  <optgroup label="Open Positions">
                    {openPositions.map((p) => (
                      <option key={p.slug} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Job Openings">
                    {jobOpenings.map((p) => (
                      <option key={p.slug} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Internships">
                    {internships.map((p) => (
                      <option key={p.slug} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </label>

              <label>
                Name
                <input type="text" name="name" required placeholder="Your full name" />
              </label>

              <label>
                Email
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>

              <label>
                Phone
                <input type="tel" name="phone" required placeholder="Your phone number" />
              </label>

              <label className="resume-upload-label">
                Resume Upload
                <div className="resume-upload-box">
                  <FaUpload />
                  <span>{resumeName || "Choose a file (PDF or Word)"}</span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                  />
                </div>
              </label>

              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Submitting…" : "Apply"}
              </button>

              {status === "sent" && (
                <p className="form-note">
                  Application submitted successfully! Our HR team will contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-note" style={{ color: "#c0392b" }}>
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
