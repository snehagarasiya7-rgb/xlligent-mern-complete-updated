// ============================================================================
// PRODUCT FEATURE GROUPS
// Source: "Xlligent Software Key Features & Developer Website Content Guide" PDF.
// Keyed by product slug (see products.js). Each group renders as one box in
// the Overview section of that product's detail page.
// ============================================================================

export const featureGroups = {
  "hospital-management": [
    { title: "Patient & OPD Management", count: "7+ features", items: ["Patient Registration", "Patient Profile & History", "Electronic Medical Records", "OPD Registration", "Doctor Assignment", "Token Management", "Prescription & Follow-up"] },
    { title: "IPD & Appointment", count: "7+ features", items: ["Patient Admission", "Bed & Room Management", "Ward Management", "Patient Transfer", "Discharge Management", "Online Appointment", "Doctor Availability & Reminders"] },
    { title: "Billing & Pharmacy", count: "7+ features", items: ["Patient Billing", "Invoice & Payment Collection", "Package Billing", "Discount & Refund", "Medicine Management", "Purchase & Sales", "Batch, Expiry & Low Stock Alerts"] },
    { title: "Lab, Inventory & Reports", count: "7+ features", items: ["Pathology & Radiology", "Sample & Test Management", "Digital Reports", "Inventory & Stock Ledger", "Supplier Management", "MIS Reports", "Dashboard & Analytics"] },
    { title: "Advanced Modules", count: "8+ features", items: ["TPA & Insurance", "Blood Bank", "Ambulance", "Referral Doctor", "HR & Attendance", "Email/SMS", "WhatsApp Integration", "Role-Based Access"] },
  ],
  "school-management": [
    { title: "Student & Admission", count: "7+ features", items: ["Student Registration", "Admission Management", "Student Profile", "Documents", "Class & Section", "Student Promotion", "Admission Enquiry & Follow-up"] },
    { title: "Fees & Attendance", count: "8+ features", items: ["Fee Structure", "Fee Collection", "Online Fee Payment", "Auto Receipts", "Due Tracking", "Late Fee & Discounts", "Student & Staff Attendance", "Leave Management"] },
    { title: "Academic & Examination", count: "8+ features", items: ["Subjects & Classes", "Timetable", "Homework & Assignments", "Exam Scheduling", "Marks Entry", "Theory & Practical Marks", "Grades", "Report Cards"] },
    { title: "Staff & Parent Communication", count: "7+ features", items: ["Teacher & Employee Management", "Payroll", "Parent Login", "Performance & Attendance", "Fee Details", "Notices", "SMS/WhatsApp Notifications"] },
    { title: "Additional Modules", count: "8+ features", items: ["Transport", "Library", "Inventory", "ID Cards", "Certificates", "School Website Integration", "Mobile App", "Reports & Cloud Backup", "WhatsApp Integration"] },
  ],
  "billing-management": [
    { title: "Billing & POS", count: "9+ features", items: ["Fast POS Billing", "GST Billing", "Invoice Generation", "Thermal Printer Support", "Barcode Billing", "Discount Management", "Multiple Payment Modes", "Credit/Due Billing", "Returns & Refunds"] },
    { title: "Inventory", count: "8+ features", items: ["Product Management", "Categories", "Stock In/Out", "Low Stock Alerts", "Expiry Management", "Barcode Management", "Stock Adjustment", "Stock Ledger"] },
    { title: "Purchase & Supplier", count: "6+ features", items: ["Supplier Management", "Purchase Entry", "Purchase Return", "Purchase Invoice", "Supplier Payments", "Purchase Reports"] },
    { title: "Customer Management", count: "5+ features", items: ["Customer Database", "Customer Credit", "Payment History", "Outstanding Management", "Customer Statements"] },
    { title: "Reports & Advanced", count: "9+ features", items: ["Sales Report", "Purchase Report", "Profit & Loss", "GST Reports", "Daily Collection", "Multi-User", "User Permissions", "Cloud Backup", "WhatsApp Invoice Sharing", "WhatsApp Integration"] },
  ],
  // PDF section "Manufacturing ERP" -> the site's ERP Software product
  "erp-software": [
    { title: "Production", count: "7+ features", items: ["Production Planning", "Production Orders", "Batch Management", "Production Entry", "Production Tracking", "Production Status", "Production Reports"] },
    { title: "BOM & Costing", count: "6+ features", items: ["Bill of Materials", "Raw Material Mapping", "Product Costing", "Labour Cost", "Production Cost", "Cost Analysis"] },
    { title: "Raw Material & Purchase", count: "8+ features", items: ["Raw Material Stock", "Material Requirement", "Material Issue & Return", "Stock Transfer", "Supplier Management", "Purchase Requisition", "Purchase Order", "Goods Receipt"] },
    { title: "Warehouse & Quality", count: "8+ features", items: ["Multiple Warehouses", "Warehouse Transfer", "Location Management", "Batch Tracking", "Raw Material QC", "Production QC", "Finished Goods QC", "Rejection Management"] },
    { title: "Sales, Dispatch & Advanced", count: "10+ features", items: ["Customer Management", "Sales Orders", "Dispatch Management", "Delivery Challan", "Invoice Generation", "Expiry", "Barcode", "Machine Maintenance", "MIS Reports", "Multi-Branch", "WhatsApp Integration"] },
  ],
  "e-commerce": [
    { title: "Customer Experience", count: "9+ features", items: ["Modern Homepage", "Product Categories", "Search & Filters", "Product Details & Gallery", "Wishlist", "Shopping Cart", "Checkout", "Customer Login", "Order History"] },
    { title: "Product & Inventory", count: "8+ features", items: ["Product Creation", "Categories & Sub-Categories", "Variants", "SKU Management", "Pricing", "Discounts & Offers", "Stock Management", "Product Images"] },
    { title: "Orders & Payments", count: "8+ features", items: ["Order Processing", "Order Status", "Cancellation", "Returns & Refunds", "Invoice Generation", "Online Payment Gateway", "COD", "Payment Status"] },
    { title: "Delivery & Admin", count: "9+ features", items: ["Shipping Management", "Delivery Charges", "Pincode Management", "Order Tracking", "Admin Dashboard", "Customer Management", "Coupons", "Reviews", "Reports"] },
    { title: "Marketing & Security", count: "9+ features", items: ["Coupon Campaigns", "Promotional Banners", "Email/SMS/WhatsApp", "SEO-Friendly URLs", "Meta Management", "Sitemap", "Mobile Responsive", "SSL", "Backup & Analytics", "WhatsApp Integration"] },
  ],
  "customer-web-development": [
    { title: "Website Types", count: "9+ features", items: ["Business Website", "Corporate Website", "School Website", "Hospital Website", "Hotel Website", "Portfolio", "E-Commerce", "Landing Page", "Custom Web Application"] },
    { title: "UI/UX & Design", count: "8+ features", items: ["Modern UI/UX", "Responsive Design", "Mobile & Tablet Friendly", "Custom Design", "Interactive Sections", "Animation & Micro Interactions", "Professional Typography", "Image & Video Integration"] },
    { title: "Business Features", count: "11+ features", items: ["Contact Forms", "Enquiry Forms", "WhatsApp Integration", "Google Maps", "Social Media Integration", "Newsletter", "Testimonials", "Gallery", "FAQ", "Blog", "Team Section"] },
    { title: "Technical Features", count: "10+ features", items: ["Fast Loading", "SEO Friendly", "Secure Development", "SSL", "Admin Panel", "CMS Integration", "Database Integration", "API Integration", "Backup", "Analytics"] },
    { title: "Advanced Development", count: "8+ features", items: ["Custom Web Applications", "API Development", "Third-Party Integrations", "Payment Gateway", "CRM Integration", "ERP Integration", "WhatsApp Integration", "Custom Dashboards"] },
  ],
  "hotel-management": [
    { title: "Front Office & Guests", count: "7+ features", items: ["Guest Registration", "Check-In/Check-Out", "Guest Profiles", "Room Allocation", "Reservation Management", "Booking History", "Guest ID/Document Management"] },
    { title: "Rooms & Reservation", count: "9+ features", items: ["Room Categories", "Room Types", "Room Status", "Room Availability", "Room Pricing", "Floor Management", "Occupancy Management", "Online Booking", "Cancellation & Rescheduling"] },
    { title: "Billing & Restaurant", count: "10+ features", items: ["Guest Billing", "Room Charges", "Food & Service Charges", "Tax & Discounts", "Advance Payments", "Final Invoice", "Restaurant POS", "Menu Management", "Table Management", "Room Service"] },
    { title: "Housekeeping & Operations", count: "6+ features", items: ["Housekeeping Tasks", "Room Cleaning Status", "Maintenance Requests", "Room Inspection", "Staff Assignment", "Hotel Operations Dashboard"] },
    { title: "Reports & Advanced", count: "10+ features", items: ["Occupancy Report", "Revenue Report", "Booking Report", "Collection Report", "Room Status Report", "GST/Tax Reports", "Multi-Property", "Role Permissions", "Payment Gateway", "WhatsApp & Email Notifications", "WhatsApp Integration"] },
  ],
  "travel-erp": [
    { title: "Customer & Packages", count: "9+ features", items: ["Customer Registration", "Travel History", "Document Management", "Follow-up Management", "Package Creation", "Destination Management", "Itinerary", "Hotel & Transport Details", "Custom Package Pricing"] },
    { title: "Bookings", count: "8+ features", items: ["Tour Booking", "Hotel Booking", "Flight Booking", "Bus Booking", "Cab Booking", "Booking Confirmation", "Cancellation", "Rescheduling"] },
    { title: "Quotation & Vendor", count: "9+ features", items: ["Travel Quotation", "Custom Quotation", "Package Costing", "Discount & Tax", "Quotation PDF", "Hotel Vendors", "Transport Vendors", "Supplier Management", "Vendor Payments"] },
    { title: "Payments & Operations", count: "10+ features", items: ["Advance Payment", "Customer Payment", "Due Payment", "Refund", "Expense Management", "Profit Calculation", "Trip Management", "Passenger Management", "Vehicle & Driver Management", "Hotel Allocation"] },
    { title: "Reports & Advanced", count: "10+ features", items: ["Booking Reports", "Sales Reports", "Payment Reports", "Outstanding Reports", "Expense Reports", "Profit Reports", "Online Booking", "Payment Gateway", "WhatsApp/Email", "Multi-User & Branch Management", "WhatsApp Integration"] },
  ],
};

// Chips highlighted in the feature boxes. WhatsApp is highlighted on every
// product; School also highlights ID Cards.
export const keyItems = {
  "school-management": ["WhatsApp Integration", "ID Cards"],
};
export const isKeyItem = (slug, item) =>
  item === "WhatsApp Integration" || (keyItems[slug] || []).includes(item);
