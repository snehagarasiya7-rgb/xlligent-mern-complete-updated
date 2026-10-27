// ============================================================================
// SERVICES DATA — used by the Home page, the Services page and the
// Service detail page (/services/:slug).
// `icon` maps to a react-icons/fa component in src/component/serviceIcons.js —
// keep the icon key in sync with the ICON_MAP defined there.
//
// Each service:
// {
//   slug, icon, title, description,          // card content
//   overview,                                // detail page intro
//   includes: [{ title, description }],      // what is covered
//   benefits: ["..."],                       // why it helps
//   bestFor: ["..."],                        // who it suits
// }
// ============================================================================

export const services = [
  {
    slug: "web-development",
    icon: "FaCode",
    title: "Web Development",
    description:
      "Fast, responsive websites and web platforms built around your business, not a generic template.",
    overview:
      "We design and build websites and web platforms that load fast, work on every screen size, and are structured around how your business actually operates — from a simple company site to a full web application with logins, dashboards and integrations.",
    includes: [
      { title: "Business Websites", description: "Clean, professional websites that present your company, services and contact details clearly." },
      { title: "Web Applications", description: "Portals, dashboards and internal tools with user roles, secure login and database-backed features." },
      { title: "Responsive Design", description: "Layouts that adapt smoothly to mobiles, tablets and desktops." },
      { title: "SEO-Friendly Build", description: "Clean structure, fast loading and proper metadata so your site is easy for search engines to understand." },
      { title: "Integrations", description: "Payment gateways, CRMs, email, WhatsApp and other third-party tools connected to your site." },
      { title: "Admin Panel", description: "Easy-to-use back office so your team can update content without a developer." },
    ],
    benefits: [
      "A site that reflects your brand instead of a copy-paste template",
      "Quick load times and smooth experience on all devices",
      "Easy to update and ready to grow as your business grows",
    ],
    bestFor: ["Startups and growing businesses", "Companies needing a customer or vendor portal", "Businesses replacing an outdated website"],
  },
  {
    slug: "mobile-app-development",
    icon: "FaMobileAlt",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for Android and iOS, built for real everyday use.",
    overview:
      "We build mobile apps for Android and iOS that are simple to use, reliable in daily operation, and connected to your business systems — whether you need a customer-facing app or a tool for your field staff.",
    includes: [
      { title: "Android & iOS Apps", description: "Apps for both platforms, built native or cross-platform depending on what suits your needs and budget." },
      { title: "Customer Apps", description: "Ordering, booking, tracking and account features that keep your customers engaged." },
      { title: "Staff & Field Apps", description: "Attendance, task, reporting and data-collection apps for your team on the move." },
      { title: "Backend & APIs", description: "Secure server-side systems and APIs that power the app and sync with your existing software." },
      { title: "Push Notifications", description: "Timely alerts and reminders that bring users back to the app." },
      { title: "Store Publishing", description: "Help with preparing and publishing your app on Google Play and the App Store." },
    ],
    benefits: [
      "Reach customers directly on the device they use most",
      "One connected system across app, website and back office",
      "Smooth, intuitive screens that need little training",
    ],
    bestFor: ["Businesses launching a customer app", "Teams needing a mobile tool for field work", "Companies extending an existing web product to mobile"],
  },
  {
    slug: "custom-software-development",
    icon: "FaLaptopCode",
    title: "Custom Software Development",
    description:
      "A custom software product built around your exact workflows — when off-the-shelf tools don't fit how you operate.",
    overview:
      "When ready-made software forces you to change how you work, custom software does the opposite. We study your processes and build a system that fits them — automating repetitive work, joining up disconnected tools, and giving you clear visibility into your operations.",
    includes: [
      { title: "Requirement Analysis", description: "We understand your workflows and pain points before proposing any solution." },
      { title: "Workflow Automation", description: "Replace manual registers, spreadsheets and repeated data entry with automated processes." },
      { title: "Management Systems", description: "Inventory, billing, HR, CRM, ERP-style modules designed around your business." },
      { title: "Reports & Dashboards", description: "Live reports and dashboards so you can make decisions from real data." },
      { title: "System Integration", description: "Connect your new software with existing tools, devices and databases." },
      { title: "Training & Handover", description: "Onboarding for your team so the software is actually used from day one." },
    ],
    benefits: [
      "Software that matches your process, not the other way around",
      "Less manual work and fewer errors",
      "Full ownership and flexibility to extend it later",
    ],
    bestFor: ["Businesses outgrowing spreadsheets", "Organizations with unique workflows", "Teams juggling several disconnected tools"],
  },
  {
    slug: "ecommerce-development",
    icon: "FaShoppingCart",
    title: "E-Commerce Development",
    description:
      "Online stores with secure checkout, catalog management, and order tracking built in.",
    overview:
      "We build online stores that make it easy for customers to browse, pay and track their orders — and easy for you to manage products, stock and shipments from a single dashboard.",
    includes: [
      { title: "Storefront Design", description: "Clean, mobile-friendly product pages and category browsing that encourage purchases." },
      { title: "Secure Checkout", description: "Smooth cart and checkout with popular payment gateways and multiple payment options." },
      { title: "Catalog Management", description: "Add and organize products, variants, prices, offers and stock levels with ease." },
      { title: "Order Management", description: "Track orders from placement to delivery, with status updates for customers." },
      { title: "Shipping & Logistics", description: "Delivery partner and shipping-rate integrations to simplify fulfilment." },
      { title: "Analytics", description: "Sales, customer and product performance reports to guide your next move." },
    ],
    benefits: [
      "Sell online around the clock",
      "Simple day-to-day store management",
      "A checkout experience customers can trust",
    ],
    bestFor: ["Retailers moving online", "Brands wanting their own store", "Wholesalers needing an ordering portal"],
  },
  {
    slug: "ui-ux-design",
    icon: "FaPaintBrush",
    title: "UI/UX Design",
    description:
      "User-centered design that makes your product intuitive, accessible, and easy to use.",
    overview:
      "Good software is easy to use before it is anything else. Our design work starts with your users and their tasks, then turns them into clear flows and clean interfaces that reduce confusion and training time.",
    includes: [
      { title: "User Research", description: "Understanding who will use the product and what they need to get done." },
      { title: "Wireframes & Flows", description: "Structured layouts and user journeys that map out every screen before development." },
      { title: "Visual Design", description: "Modern, consistent interfaces that fit your brand." },
      { title: "Interactive Prototypes", description: "Clickable prototypes to test ideas and get feedback early." },
      { title: "Design Systems", description: "Reusable components and style guidelines for a consistent product." },
      { title: "Usability Review", description: "Audit of an existing product to find and fix friction points." },
    ],
    benefits: [
      "Fewer user errors and support requests",
      "Faster onboarding for staff and customers",
      "A polished product that builds trust",
    ],
    bestFor: ["New products still at the idea stage", "Existing apps that feel confusing", "Teams wanting a consistent design language"],
  },
  {
    slug: "cloud-solutions",
    icon: "FaCloud",
    title: "Cloud Solutions",
    description:
      "Cloud hosting, migration, and infrastructure management for reliable performance at scale.",
    overview:
      "We help you host, move and manage your applications in the cloud so they stay fast, available and secure — without you having to worry about servers.",
    includes: [
      { title: "Cloud Hosting", description: "Reliable hosting setup on leading cloud platforms sized to your workload." },
      { title: "Migration", description: "Move existing applications and data from on-premise or older hosting with minimal downtime." },
      { title: "Backup & Recovery", description: "Automated backups and recovery plans to protect your data." },
      { title: "Security & Access", description: "Access control, encryption and monitoring to keep systems safe." },
      { title: "Scaling", description: "Infrastructure that grows with traffic and usage instead of slowing down." },
      { title: "Monitoring & Cost Control", description: "Performance monitoring and usage review to keep costs sensible." },
    ],
    benefits: [
      "Higher uptime and better performance",
      "Protection against data loss",
      "Pay for what you use, scale when you need",
    ],
    bestFor: ["Businesses with growing user traffic", "Companies leaving old servers", "Teams needing dependable backups"],
  },
  {
    slug: "digital-marketing",
    icon: "FaBullhorn",
    title: "Digital Marketing",
    description:
      "SEO, social media, and digital campaigns that help you reach and convert the right audience.",
    overview:
      "A good product or website still needs the right people to find it. We plan and run digital marketing that brings in relevant visitors and turns them into enquiries and customers.",
    includes: [
      { title: "Search Engine Optimization", description: "On-page and technical SEO to improve visibility on search results." },
      { title: "Social Media Marketing", description: "Content planning and management across the platforms your audience uses." },
      { title: "Paid Campaigns", description: "Targeted ads on Google and social platforms with clear budget control." },
      { title: "Content Creation", description: "Blogs, creatives and copy that explain your offering and build credibility." },
      { title: "Lead Generation", description: "Landing pages and campaigns designed to bring in qualified enquiries." },
      { title: "Performance Reports", description: "Regular reports showing what is working and where to improve." },
    ],
    benefits: [
      "More of the right visitors and enquiries",
      "Clear reporting on results",
      "Marketing aligned with your website and product",
    ],
    bestFor: ["New businesses building visibility", "Companies launching a product", "Brands wanting steady lead flow"],
  },
  {
    slug: "software-maintenance-support",
    icon: "FaTools",
    title: "Software Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and support to keep your software secure and running smoothly.",
    overview:
      "Software needs care after launch. We keep your applications updated, secure and performing well, and stay available when your team needs help or changes.",
    includes: [
      { title: "Bug Fixes", description: "Quick resolution of issues so your operations are not disrupted." },
      { title: "Updates & Upgrades", description: "Keeping frameworks, libraries and security patches current." },
      { title: "Monitoring", description: "Watching uptime and performance to catch problems early." },
      { title: "Feature Enhancements", description: "Adding new features and improvements as your needs change." },
      { title: "Backups & Security Checks", description: "Regular backups and security reviews to protect your data." },
      { title: "Helpdesk Support", description: "A dependable point of contact when your team needs assistance." },
    ],
    benefits: [
      "Fewer breakdowns and less downtime",
      "Software that stays secure and up to date",
      "One team that already understands your system",
    ],
    bestFor: ["Businesses running live software", "Teams without an in-house developer", "Owners of older applications needing a refresh"],
  },
];
