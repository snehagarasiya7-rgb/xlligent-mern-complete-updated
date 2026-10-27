// ============================================================================
// CAREERS DATA — used by the Career page.
// Update openPositions / internships as real openings change.
// `icon` maps to a react-icons/fa component in src/pages/Career.jsx —
// keep the icon key in sync with the ICON_MAP defined there.
// ============================================================================

export const whyJoinUs = [
  {
    icon: "FaLightbulb",
    title: "Learning Opportunities",
    description: "Work across real products and pick up new skills and tools on the job.",
  },
  {
    icon: "FaClock",
    title: "Flexible Work Environment",
    description: "Flexible hours and a focus on output, not just hours logged at a desk.",
  },
  {
    icon: "FaChartLine",
    title: "Career Growth",
    description: "Clear growth paths as you take on more responsibility and ownership.",
  },
  {
    icon: "FaUsers",
    title: "Friendly Team",
    description: "A small, approachable team where you can ask questions and learn fast.",
  },
];

export const openPositions = [
  { slug: "react-developer", title: "React Developer", icon: "FaReact" },
  { slug: "full-stack-developer", title: "Full Stack Developer", icon: "FaLaptopCode" },
  { slug: "ui-ux-designer", title: "UI/UX Designer", icon: "FaPaintBrush" },
  { slug: "qa-tester", title: "QA Tester", icon: "FaBug" },
  { slug: "digital-marketing-executive", title: "Digital Marketing Executive", icon: "FaBullhorn" },
];

// "Unlock Your Potential with Us" job cards — shown on the Career and About
// pages via src/component/JobOpenings.jsx.
export const jobsIntro = {
  eyebrow: "Join Our Team",
  heading: "Unlock Your Potential with Us",
  text: "Join a team of innovators, problem-solvers, and creators shaping the future of technology.",
};

export const jobOpenings = [
  { slug: "bde", title: "BDE", icon: "FaHandshake", type: "Full Time", experience: "0 to 3 years", vacancies: "03 Position" },
  { slug: "sales-executive", title: "Sales Executive", icon: "FaChartLine", type: "Full Time", experience: "0 to 3 years", vacancies: "03 Position" },
  { slug: "php-developer", title: "PHP Developer", icon: "FaCode", type: "Full Time", experience: "0 to 3 years", vacancies: "03 Position" },
];

export const internships = [
  { slug: "web-development-intern", title: "Web Development Intern", icon: "FaCode" },
  { slug: "react-intern", title: "React Intern", icon: "FaReact" },
  { slug: "software-testing-intern", title: "Software Testing Intern", icon: "FaBug" },
];
