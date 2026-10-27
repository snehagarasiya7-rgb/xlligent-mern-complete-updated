import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./TechStack.css";

// Technologies shown on the Career page (below "Unlock Your Potential").
const TECHS = [
  { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f0b400" },
  { name: "React", icon: FaReact, color: "#00a8d6" },
  { name: "PHP", icon: FaPhp, color: "#6c78b4" },
  { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
  { name: "MySQL", icon: SiMysql, color: "#00758f" },
];

function TechStack() {
  return (
    <section className="tech-section">
      <div className="container">
        <span className="eyebrow">Our Tech Stack</span>
        <h2 className="section-heading center">Technologies you'll work with</h2>
        <p className="section-sub center">
          Modern, proven tools we use every day to build reliable software.
        </p>

        <div className="tech-grid">
          {TECHS.map(({ name, icon: Icon, color }) => (
            <div className="tech-item" key={name}>
              <div className="tech-icon" style={{ color }}>
                <Icon />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
