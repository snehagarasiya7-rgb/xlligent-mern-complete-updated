// ============================================================================
// PRODUCTS DATA
// Update this list as real product details are confirmed (name, tagline,
// description, features, industries served, screenshot). Each product needs
// this shape, and the Products page / homepage slider will render it
// automatically:
//
// {
//   slug: "example-product",
//   name: "Example Product Software",
//   tagline: "One line describing the product",
//   description: "2-3 sentence overview of what it does.",
//   industries: ["Healthcare", "Retail"],
//   features: [
//     { title: "Feature name", description: "Short description." },
//   ],
//   image: "/products/pharmacy-hero.png", // add real screenshot to /public/products/
//   seoTitle: "Optional — overrides the browser-tab / Google title for this page",
//   seoDescription: "Optional — overrides the meta description for this page",
//   faqs: [{ question: "...", answer: "..." }], // optional, renders + gets FAQ schema
// }
// ============================================================================


export const products = [
  {
    slug: "school-management",
    name: "School Management Software",
    tagline: "AI-powered platform to run admissions, academics, and daily school operations.",
    description:
      "A complete, AI-enabled school management system that brings admissions, attendance, academics, fee collection, and staff coordination into a single easy-to-use platform — with built-in AI to flag at-risk students and surface insights automatically.",
    industries: ["Education", "K-12 Schools"],
    aiEnabled: true,
    keyProblem:
      "Admissions, attendance, fees, and academic records are usually spread across registers, spreadsheets, and WhatsApp groups. That makes it hard to track a student's full history, delays fee follow-ups, and staff often notice a student is struggling only after report cards come out.",
    keySolution:
      "Xlligent brings admissions, attendance, academics, and fee collection into one platform, with AI watching attendance and grade trends in the background — so staff get an early alert the moment a student needs attention, instead of finding out weeks later.",
    seoTitle: "School Management Software India | Xlligent Softwares",
    seoDescription:
      "AI-powered school management software in India for admissions, attendance, academics, and fee collection. Built by Xlligent Softwares, Dewas — request a free demo.",
    features: [
      { title: "Admissions & Records", description: "Manage student admissions, records, and academic history in one place." },
      { title: "Attendance & Academics", description: "Track attendance, exams, and academic performance with ease." },
      { title: "Fee Management", description: "Automate fee collection, receipts, and reminders for parents." },
      { title: "Staff Coordination", description: "Keep teachers and administrative staff aligned with shared schedules and records." },
      { title: "AI Performance Predictions", description: "AI flags students at risk of falling behind based on attendance and grade trends." },
      { title: "AI Attendance Alerts", description: "Automatic AI-driven alerts for irregular attendance patterns, sent to staff and parents." },
      { title: "Customized to Your School", description: "Tailored workflows and modules that adapt to your school's specific processes." },
    ],
    faqs: [
      {
        question: "What does Xlligent's school management software include?",
        answer:
          "It covers admissions and student records, attendance and academics, fee collection with automated receipts and reminders, and staff coordination — plus AI-driven alerts for at-risk students and irregular attendance.",
      },
      {
        question: "Can the software be customized for our school's process?",
        answer:
          "Yes. Workflows and modules are tailored to your school's specific admissions, fee structure, and academic calendar.",
      },
      {
        question: "Is the fee collection process automated?",
        answer:
          "Yes — fee collection, receipts, and payment reminders to parents are automated within the platform.",
      },
      {
        question: "Where is Xlligent Softwares based?",
        answer:
          "Xlligent Softwares Pvt Ltd is based in Dewas, Madhya Pradesh, India, with additional offices in Indore and Bangalore.",
      },
    ],
    image: "/products/school-management.jpg",
  },
  {
    slug: "hospital-management",
    name: "Hospital Management Software",
    tagline: "AI-powered patient services, records, and hospital operations.",
    description:
      "An AI-enabled hospital management system designed to simplify patient registration, diagnostics coordination, and hospital performance tracking — with AI support that helps predict no-shows and highlights operational bottlenecks for better patient care.",
    industries: ["Healthcare", "Hospitals & Clinics"],
    aiEnabled: true,
    keyProblem:
      "Front-desk registration, diagnostics coordination, and performance tracking often run on paper and disconnected tools, which slows down patient check-in, hides bottlenecks like bed occupancy or ER load, and leaves no-shows to be discovered only when the appointment is missed.",
    keySolution:
      "Xlligent's hospital platform digitizes registration, diagnostics, and KPI tracking in one place, while AI predicts likely no-shows and flags operational bottlenecks in real time — helping staff plan capacity and improve patient care proactively.",
    seoTitle: "Hospital Management Software India | Xlligent Softwares",
    seoDescription:
      "AI-powered hospital management software in India for patient registration, diagnostics coordination, and hospital KPIs. Built by Xlligent Softwares — request a free demo.",
    features: [
      { title: "Patient Registration", description: "Fast, digital patient check-in and registration at the front desk." },
      { title: "Diagnostics & Imaging", description: "Coordinate diagnostic and imaging center workflows seamlessly." },
      { title: "Performance Metrics", description: "Monitor ER response times, bed occupancy, and hospital KPIs in real time." },
      { title: "Patient Services", description: "Centralize patient services and front-desk operations." },
      { title: "AI No-Show Prediction", description: "AI predicts likely patient no-shows so staff can follow up and reduce missed appointments." },
      { title: "AI Operational Insights", description: "AI-assisted insights on bed occupancy and ER load to support faster decisions." },
      { title: "Customized to Your Hospital", description: "Adaptable workflows configured around your hospital's departments and processes." },
    ],
    faqs: [
      {
        question: "What does Xlligent's hospital management software include?",
        answer:
          "Patient registration and front-desk services, diagnostics and imaging coordination, and real-time performance metrics like ER response times and bed occupancy — plus AI-driven no-show prediction and operational insights.",
      },
      {
        question: "Can it handle diagnostics and imaging center workflows?",
        answer:
          "Yes — diagnostics and imaging workflows are coordinated within the same system as patient records and registration.",
      },
      {
        question: "Is the software customizable for our hospital's departments?",
        answer:
          "Yes. Workflows are adapted to your hospital's specific departments and processes.",
      },
    ],
    image: "/products/hospital-management.jpg",
  },
  {
    slug: "billing-management",
    name: "Billing Management Software",
    tagline: "AI-powered, fast, reliable billing and point-of-sale for retail operations.",
    description:
      "An AI-enabled billing and point-of-sale system built for supermarkets and retail stores, enabling fast checkout, accurate billing, and smooth payment processing at scale — with AI that forecasts demand and flags unusual transactions.",
    industries: ["Retail", "Supermarkets"],
    aiEnabled: true,
    keyProblem:
      "Retail counters slow down during peak hours when billing systems can't handle multiple counters, digital payments, or accurate sales reporting — and stores often only discover demand spikes or suspicious transactions after the fact.",
    keySolution:
      "Xlligent's billing platform runs fast, multi-counter checkout with digital payments built in, while AI forecasts demand ahead of time and flags unusual transactions as they happen — keeping checkout lines moving and losses in check.",
    seoTitle: "Billing Management Software India | Xlligent Softwares",
    seoDescription:
      "AI-powered billing & POS software in India for supermarkets and retail stores — fast checkout, multi-counter support, digital payments. Request a free demo.",
    features: [
      { title: "Fast Checkout", description: "Barcode scanning and quick billing at every counter." },
      { title: "Multi-Counter Support", description: "Run billing across multiple counters during peak hours." },
      { title: "Digital Payments", description: "Accept card and digital payments alongside cash seamlessly." },
      { title: "Sales Reporting", description: "Track daily sales and transactions with clear reporting." },
      { title: "AI Demand Forecasting", description: "AI-driven sales trend and demand forecasts to help optimize inventory." },
      { title: "AI Fraud Detection", description: "AI flags unusual billing patterns and transactions for review in real time." },
      { title: "Customized to Your Store", description: "Configurable billing workflows tailored to your store's specific needs." },
    ],
    faqs: [
      {
        question: "What does the billing management software include?",
        answer:
          "Barcode-based fast checkout, multi-counter billing for peak hours, digital payment support alongside cash, and daily sales reporting — plus AI demand forecasting and fraud detection on unusual transactions.",
      },
      {
        question: "Can it run across multiple billing counters?",
        answer:
          "Yes — it's built to run billing across multiple counters at once, especially during peak hours.",
      },
      {
        question: "Does it support digital payments?",
        answer:
          "Yes, card and digital payments are accepted alongside cash within the same billing flow.",
      },
    ],
    image: "/products/billing-management.jpg",
  },
  {
    slug: "erp-software",
    name: "ERP Software",
    tagline: "AI-powered Enterprise Resource Planning to run your entire business from one system.",
    description:
      "A unified, AI-enabled ERP platform — an enterprise management system that connects sales, procurement, inventory, accounting, HR, and supply chain into a single source of truth — replacing scattered spreadsheets with one system that gives every department real-time visibility, and uses AI to surface trends and risks before they become problems.",
    industries: ["Manufacturing", "Trading & Distribution", "Enterprises"],
    aiEnabled: true,
    keyProblem:
      "As businesses grow, sales, procurement, inventory, and accounting end up scattered across spreadsheets and disconnected tools — so no one has a single source of truth, decisions get made on stale numbers, and unusual spending or stock issues go unnoticed until they become expensive problems.",
    keySolution:
      "Xlligent's ERP unifies sales, procurement, inventory, and accounting into one system with real-time visibility for every department, and AI continuously watches for demand shifts, cash-flow trends, and anomalies — so leadership can act on today's numbers, not last month's.",
    seoTitle: "ERP Software India | Xlligent Softwares",
    seoDescription:
      "AI-powered ERP software in India connecting sales, procurement, inventory, and accounting into one system. Built by Xlligent Softwares — request a free demo.",
    features: [
      { title: "Sales & CRM", description: "Track leads, orders, and customer accounts alongside the rest of your operations." },
      { title: "Procurement & Vendors", description: "Manage purchase orders, vendors, and approvals from one dashboard." },
      { title: "Inventory & Supply Chain", description: "Get real-time stock visibility across warehouses and locations." },
      { title: "Accounting & Finance", description: "Keep books, invoices, and financial reporting in sync with daily operations." },
      { title: "AI Demand Forecasting", description: "AI predicts demand and cash-flow trends from historical sales and purchase data." },
      { title: "AI Anomaly Detection", description: "AI flags unusual spending, stock movement, or transactions for quick review." },
      { title: "Customized to Your Business", description: "Modules and workflows configured around how your business actually runs." },
    ],
    faqs: [
      {
        question: "What modules does Xlligent's ERP software include?",
        answer:
          "Sales & CRM, procurement & vendor management, inventory & supply chain visibility, and accounting & finance — all in one system, with AI demand forecasting and anomaly detection built in.",
      },
      {
        question: "Can the ERP be customized to how our business runs?",
        answer:
          "Yes. Modules and workflows are configured around your actual sales, procurement, and inventory processes rather than a fixed template.",
      },
      {
        question: "Does it give real-time inventory visibility across locations?",
        answer:
          "Yes — stock across warehouses and locations is visible in real time within the same platform.",
      },
    ],
    image: "/products/erp-software.jpg",
  },
  {
    slug: "customer-web-development",
    name: "Customer Web Development",
    tagline: "AI-assisted custom websites and web apps built around your business needs.",
    description:
      "A custom web development service that designs and builds responsive websites and web applications tailored to each client — from UI/UX design through development and launch — using AI-assisted tooling to speed up delivery without compromising quality.",
    industries: ["E-Commerce", "Startups & Enterprises"],
    aiEnabled: true,
    keyProblem:
      "Most businesses are stuck choosing between generic templates that don't reflect their brand and slow, expensive custom builds — while still needing a site that loads fast, ranks well, and can grow with the business.",
    keySolution:
      "Xlligent designs and builds custom websites and web apps around each client's brand and goals, using AI-assisted development and QA to move faster without cutting corners — so clients get a site that's genuinely theirs, delivered on a realistic timeline.",
    seoTitle: "Custom Website Development Company India | Xlligent Softwares",
    seoDescription:
      "Custom website & web app development in India — UI/UX design, responsive builds, and e-commerce integration. Built by Xlligent Softwares — request a free consultation.",
    features: [
      { title: "Custom UI/UX Design", description: "Design tailored to your brand, not a generic template." },
      { title: "Responsive Development", description: "Websites and web apps that work smoothly across devices." },
      { title: "E-Commerce Integration", description: "Add stores, payments, and catalogs where your business needs them." },
      { title: "Performance Optimization", description: "Fast-loading, SEO-friendly builds optimized for real users." },
      { title: "AI-Assisted Development", description: "AI-assisted workflows help speed up development and QA cycles." },
      { title: "AI Content Suggestions", description: "AI helps suggest copy and layout improvements during design reviews." },
      { title: "Customized to Your Project", description: "Scope and tech stack matched to your project's goals and budget." },
    ],
    faqs: [
      {
        question: "What does Xlligent's web development service include?",
        answer:
          "Custom UI/UX design, responsive development across devices, e-commerce integration (stores, payments, catalogs), and performance/SEO optimization — with AI-assisted development speeding up build and QA cycles.",
      },
      {
        question: "Can you build an online store as part of the website?",
        answer:
          "Yes — e-commerce integration (stores, payments, catalogs) can be added wherever your business needs it.",
      },
      {
        question: "Is the design custom or template-based?",
        answer:
          "Design is tailored to your brand rather than a generic template, with scope and tech stack matched to your project's goals and budget.",
      },
    ],
    image: "/products/customer-web-development.jpg",
  },
  {
    slug: "e-commerce",
    name: "E-Commerce Software",
    tagline: "AI-powered online store platform for catalog, orders, and payments.",
    description:
      "An AI-enabled e-commerce platform for running an online store end to end — product catalog, secure checkout, order and shipment tracking, and customer support — with AI that recommends products to shoppers and flags suspicious orders automatically.",
    industries: ["Retail", "E-Commerce"],
    aiEnabled: true,
    keyProblem:
      "Running an online store means juggling a product catalog, payments, shipment tracking, and customer support across separate tools — which makes it hard to catch fraudulent orders early or show shoppers the products they're actually likely to buy.",
    keySolution:
      "Xlligent's e-commerce platform brings the catalog, checkout, order tracking, and support into one system, while AI recommends relevant products to shoppers and flags suspicious orders before they ship — driving more conversions with less risk.",
    seoTitle: "E-Commerce Software India | Xlligent Softwares",
    seoDescription:
      "AI-powered e-commerce software in India for product catalog, secure checkout, and order tracking. Built by Xlligent Softwares — request a free demo.",
    features: [
      { title: "Product Catalog", description: "Organize products, categories, and pricing with ease." },
      { title: "Secure Checkout & Payments", description: "Fast, secure payments with support for multiple payment methods." },
      { title: "Order & Shipment Tracking", description: "Track every order from placement to delivery." },
      { title: "Customer Support Tools", description: "Handle returns, queries, and support tickets in one place." },
      { title: "AI Product Recommendations", description: "AI suggests relevant products to shoppers to increase conversions." },
      { title: "AI Fraud Detection", description: "AI flags suspicious or fake orders for review before they ship." },
      { title: "Customized to Your Store", description: "Storefront and workflows configured around your product catalog." },
    ],
    faqs: [
      {
        question: "What does the e-commerce software include?",
        answer:
          "Product catalog management, secure checkout with multiple payment methods, order & shipment tracking, and customer support tools for returns and queries — plus AI product recommendations and fraud detection.",
      },
      {
        question: "Does it support multiple payment methods?",
        answer:
          "Yes — secure checkout supports multiple payment methods alongside fast, reliable processing.",
      },
      {
        question: "Can it flag suspicious or fraudulent orders?",
        answer:
          "Yes, AI flags suspicious or fake orders for review before they ship.",
      },
    ],
    image: "/products/e-commerce.jpg",
  },
  {
    slug: "hotel-management",
    name: "Hotel Management Software",
    tagline: "Complete platform for rooms, reservations, guests, billing, housekeeping and restaurant.",
    description:
      "A complete hotel management platform for rooms, reservations, guests, billing, housekeeping, restaurant and day-to-day hotel operations — from check-in to final invoice, all in one system.",
    industries: ["Hospitality", "Hotels & Resorts"],
    aiEnabled: false,
    keyProblem:
      "Front-desk registers, separate booking sheets, and manual room-status updates make it easy to double-book rooms, miss housekeeping requests, and lose track of guest charges across rooms, restaurant, and services.",
    keySolution:
      "Xlligent's hotel platform connects reservations, check-in/check-out, room status, housekeeping, restaurant billing, and reports in one place — so the front desk, housekeeping, and management all see the same live information.",
    seoTitle: "Hotel Management Software India | Xlligent Softwares",
    seoDescription:
      "Hotel management software in India for reservations, check-in/check-out, room billing, housekeeping, and restaurant POS. Built by Xlligent Softwares — request a free demo.",
    features: [],
    faqs: [
      {
        question: "What does the hotel management software include?",
        answer:
          "Front office and guest management, room and reservation management, guest billing with restaurant POS, housekeeping and maintenance, and detailed reports — with payment gateway and WhatsApp/email notifications.",
      },
      {
        question: "Does it include a restaurant POS?",
        answer:
          "Yes — restaurant POS, menu management, table management, and room service are part of the billing and restaurant module.",
      },
      {
        question: "Can it manage more than one property?",
        answer:
          "Yes, multi-property support with role-based permissions is available.",
      },
    ],
    image: "/products/hotel-management.jpg",
  },
  {
    slug: "travel-erp",
    name: "Travel ERP",
    tagline: "Complete travel management software for travel agencies and tour operators.",
    description:
      "Complete travel management software for travel agencies and tour operators to manage customers, packages, bookings, quotations, vendors, payments and operations from one system.",
    industries: ["Travel & Tourism", "Travel Agencies"],
    aiEnabled: false,
    keyProblem:
      "Travel agencies often manage customer enquiries, itineraries, vendor rates, quotations, and payments across spreadsheets, PDFs, and chat — which makes quotes slow, follow-ups easy to miss, and profit per trip hard to know.",
    keySolution:
      "Xlligent's Travel ERP keeps customers, packages, bookings, quotations, vendors, and payments together, so agents can create a quotation quickly, track every payment, and see profit for each trip.",
    seoTitle: "Travel ERP Software India | Xlligent Softwares",
    seoDescription:
      "Travel ERP software in India for travel agencies and tour operators — packages, bookings, quotations, vendors, payments, and reports. Built by Xlligent Softwares — request a free demo.",
    features: [],
    faqs: [
      {
        question: "What does the Travel ERP include?",
        answer:
          "Customer and package management, tour/hotel/flight/bus/cab bookings, quotations and vendor management, payments and trip operations, and detailed reports — with online booking, payment gateway, and WhatsApp/email support.",
      },
      {
        question: "Can we create quotations as PDFs?",
        answer:
          "Yes — travel and custom quotations with package costing, discount and tax, and a quotation PDF are supported.",
      },
      {
        question: "Does it support multiple branches and users?",
        answer:
          "Yes, multi-user and branch management is available.",
      },
    ],
    image: "/products/travel-erp.jpg",
  },
];
