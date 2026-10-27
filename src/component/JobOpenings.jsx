import { FaHandshake, FaChartLine, FaCode, FaEnvelope, FaBriefcase, FaClock, FaUserFriends } from "react-icons/fa";
import { company } from "../data/company";
import { jobsIntro, jobOpenings } from "../data/careers";
import "./JobOpenings.css";

const ICONS = { FaHandshake, FaChartLine, FaCode };

// "Unlock Your Potential with Us" job cards. Used on the About and Career pages.
// Pass `onApply(title)` to show an "Apply Online" button (Career page form).
function JobOpenings({ onApply, bordered = false }) {
  return (
    <section className={`section${bordered ? " jobs-bordered" : ""}`}>
      <div className="container">
        <span className="eyebrow">{jobsIntro.eyebrow}</span>
        <h2 className="section-heading">{jobsIntro.heading}</h2>
        <p className="section-sub">{jobsIntro.text}</p>

        <div className="jobs-grid">
          {jobOpenings.map((p) => {
            const Icon = ICONS[p.icon];
            const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${company.hrEmail}&su=${encodeURIComponent(
              `Job Application - ${p.title}`
            )}`;
            return (
              <div className="job-card" key={p.slug}>
                <div className="job-icon">{Icon && <Icon />}</div>
                <h3>{p.title}</h3>
                <ul className="job-meta">
                  <li><FaBriefcase /> {p.type}</li>
                  <li><FaClock /> Experience : {p.experience}</li>
                  <li><FaUserFriends /> Vacancies: {p.vacancies}</li>
                </ul>
                <a href={gmail} target="_blank" rel="noopener noreferrer" className="job-mail">
                  <FaEnvelope />
                  <span>
                    Send your resume
                    <strong>{company.hrEmail}</strong>
                  </span>
                </a>
                {onApply && (
                  <button type="button" className="btn btn-secondary job-apply" onClick={() => onApply(p.title)}>
                    Apply Online
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JobOpenings;
