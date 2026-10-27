// ============================================================================
// COMPANY DATA — single source of truth for real Xlligent Softwares facts.
// Only put verified, factual information here. Do NOT add stats, client
// names, awards or numbers that haven't been confirmed by the company.
// ============================================================================

export const company = {
  name: "Xlligent Softwares",
  legalName: "Xlligent Softwares Pvt Ltd",
  tagline: "Product-Based Software Company",
  email: "sales@xlligent-softwares.com",
  hrEmail: "hr@xlligentsoftwares.com",
  phones: ["+91 6261900209"], // single official number, used everywhere on the site
  // WhatsApp number (digits only, with country code). Currently the same as the
  // official number — change here if the WhatsApp Business number is different.
  whatsapp: "916261900209",
  whatsappMessage: "Hello Xlligent Softwares, I would like to know more about your products.",
  // Google reviews: "View on Google" link (opens the Google listing/reviews).
  // Replace with the exact Google review link (g.page/... or maps share link) when available.
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Xlligent+Softwares+Pvt+Ltd+Dewas",
  locations: [
    { city: "Durham", region: "", country: "United States", hq: true },
    { city: "Indore", region: "Madhya Pradesh", country: "India" },
    { city: "Bangalore", region: "Karnataka", country: "India" },
    { city: "Penang", region: "", country: "Malaysia" },
  ],
  social: {
    // Handles / URLs found on the company's public profiles — please verify.
    instagram: "xlligent_softwares_pvt.ltd", // handle without @
    twitter: "xlligent", // X / Twitter handle without @
    linkedin: "https://in.linkedin.com/company/xlligentsoftwares-pvt-ltd",
  },
};

// Simple nav structure shared by Navbar (desktop + mobile) and Footer.
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Career", to: "/career" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const whatsappLink = (text = company.whatsappMessage) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
