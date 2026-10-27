// ============================================================================
// BLOG DATA — articles published on the Xlligent Softwares website.
// Each post needs this shape; the Blog list page and BlogDetail page render
// it automatically:
//
// {
//   slug: "unique-url-slug",
//   title: "Post title",
//   category: "Category label",
//   icon: "erp" | "school" | "hospital" | "code" | "pharmacy" | "realestate" | "ai",
//   date: "YYYY-MM-DD",
//   author: "Author name",
//   readTime: "X min read",
//   excerpt: "1-2 sentence summary shown on the blog list card.",
//   seoTitle / seoDescription: optional overrides for the page <title>/meta.
//   content: [ { heading: "Section heading", paragraphs: ["...", "..."] } ]
// }
// ============================================================================

export const blogPosts = [
  {
    slug: "why-every-growing-business-needs-erp-software",
    title: "Why Every Growing Business Needs an ERP System",
    category: "ERP & Operations",
    icon: "erp",
    date: "2026-08-18",
    author: "Xlligent Softwares Team",
    readTime: "6 min read",
    excerpt:
      "Spreadsheets work fine for a small team. Once sales, inventory, and accounts start growing at different speeds, they start costing you money. Here's how an ERP system fixes that.",
    seoTitle: "Why Every Growing Business Needs an ERP System | Xlligent Softwares",
    seoDescription:
      "Learn why growing businesses outgrow spreadsheets and how an ERP system connects sales, inventory, procurement, and accounting into one reliable system.",
    content: [
      {
        heading: "The spreadsheet ceiling",
        paragraphs: [
          "Almost every business starts the same way — a sales spreadsheet here, an inventory register there, invoices tracked in a separate folder. It works when the team is small and everyone can just ask the person next to them for an update.",
          "The trouble starts when the business grows. Orders increase, stock moves across more than one location, and finance needs numbers that match what the warehouse and the sales team are actually seeing. At that point, spreadsheets stop being a convenience and start being a risk — one wrong formula, one un-synced copy of a file, and decisions get made on outdated numbers.",
        ],
      },
      {
        heading: "What an ERP actually changes",
        paragraphs: [
          "An ERP (Enterprise Resource Planning) system isn't just 'accounting software with more tabs'. It connects sales, procurement, inventory, and accounting into one shared system, so a sale recorded at 10 a.m. is already reflected in stock levels and revenue reports by 10:01 a.m. — not at the end of the week when someone finally updates the sheet.",
          "That single source of truth changes how decisions get made. Instead of asking three departments for three different numbers and reconciling them manually, a manager can open one dashboard and see exactly where the business stands right now.",
        ],
      },
      {
        heading: "Where AI fits in",
        paragraphs: [
          "Modern ERP platforms go a step further by using AI to watch the data continuously — flagging unusual spending, sudden stock movement, or a slowdown in a specific product line before it becomes a bigger problem. It won't replace the judgment of your finance or operations team, but it does make sure nothing important slips through simply because no one had time to look.",
        ],
      },
      {
        heading: "Signs it's time to move on from spreadsheets",
        paragraphs: [
          "If your team spends more time reconciling numbers between departments than acting on them, if stock discrepancies keep showing up between what's recorded and what's on the shelf, or if closing the books each month takes days instead of hours — those are all signs that the business has outgrown manual tracking.",
          "At Xlligent, we build ERP software around how a business actually operates rather than forcing it into a fixed template, with AI-driven forecasting and anomaly detection built in from day one.",
        ],
      },
    ],
  },
  {
    slug: "5-signs-your-school-needs-management-software",
    title: "5 Signs Your School Needs Management Software",
    category: "Education",
    icon: "school",
    date: "2026-07-30",
    author: "Xlligent Softwares Team",
    readTime: "5 min read",
    excerpt:
      "Registers, spreadsheets, and phone calls home can only take a school so far. Here are five practical signs it's time to move to a proper school management platform.",
    seoTitle: "5 Signs Your School Needs Management Software | Xlligent Softwares",
    seoDescription:
      "Discover the practical warning signs that indicate your school is ready for AI-powered school management software for admissions, attendance, and fees.",
    content: [
      {
        heading: "1. Fee follow-ups eat up your admin team's week",
        paragraphs: [
          "If your office staff spend hours every month manually tracking which parents have paid, sending reminder calls, and reconciling receipts by hand, that's time that should be going toward students, not paperwork. Automated fee tracking and reminders alone can free up a meaningful chunk of admin time.",
        ],
      },
      {
        heading: "2. You find out a student is struggling too late",
        paragraphs: [
          "Attendance registers and grade books usually live in different places, which means a pattern — a student missing Mondays, or grades slipping over a few weeks — often isn't noticed until a report card or a parent-teacher meeting. By then, the gap has already widened.",
          "A system that tracks attendance and academics together, with AI watching for early warning patterns, means staff can step in during the first signs of trouble instead of after the fact.",
        ],
      },
      {
        heading: "3. Admission season feels chaotic every single year",
        paragraphs: [
          "If admissions still run through paper forms, physical files, and manual data entry into a register, every admission season becomes a scramble. Digital admissions with searchable, centralized records remove that yearly chaos for good.",
        ],
      },
      {
        heading: "4. Teachers and admin staff aren't seeing the same information",
        paragraphs: [
          "When class teachers keep their own records separate from what the front office has, small mismatches build up — a student marked present in one place and absent in another, or fee status that isn't visible to the teacher who's following up with a parent. A shared platform keeps everyone looking at the same, current data.",
        ],
      },
      {
        heading: "5. You're managing everything through phone calls and messaging apps",
        paragraphs: [
          "WhatsApp groups and phone calls are fine for quick updates, but they're a poor system of record. If your school's institutional memory lives in chat threads rather than a searchable system, it's a sign that the school has outgrown informal tools.",
          "Xlligent's school management platform brings admissions, attendance, academics, and fee collection into one AI-enabled system — built to adapt to how your school already runs, not the other way around.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-is-changing-hospital-operations",
    title: "How AI Is Changing Hospital Operations",
    category: "Healthcare",
    icon: "hospital",
    date: "2026-07-14",
    author: "Xlligent Softwares Team",
    readTime: "6 min read",
    excerpt:
      "AI in healthcare isn't about replacing doctors — it's about giving hospital staff advance warning on the operational problems that quietly cost time and money.",
    seoTitle: "How AI Is Changing Hospital Operations | Xlligent Softwares",
    seoDescription:
      "See how AI-powered hospital management software helps predict no-shows, highlight bottlenecks, and improve patient care without adding complexity for staff.",
    content: [
      {
        heading: "The everyday operational problems hospitals face",
        paragraphs: [
          "Talk to any hospital administrator and you'll hear the same recurring problems: patients who book an appointment and never show up, diagnostic centers that get overloaded at certain hours, and bed occupancy numbers that are only truly understood in hindsight. None of these are dramatic emergencies — they're small, everyday inefficiencies that add up over a month.",
        ],
      },
      {
        heading: "Where AI genuinely helps",
        paragraphs: [
          "This is exactly the kind of pattern AI is good at catching. By looking at historical appointment data, AI can flag which upcoming appointments are statistically likely to be no-shows, giving staff a chance to confirm or reschedule in advance instead of losing that slot entirely.",
          "The same approach applies to operational load — AI can highlight when diagnostics or the ER are trending toward a bottleneck based on current patient flow, so staff can redistribute resources before things back up rather than after patients are already waiting.",
        ],
      },
      {
        heading: "It's a support tool, not a replacement",
        paragraphs: [
          "None of this replaces clinical judgment. AI in hospital management software works at the operational layer — registration, scheduling, resource planning — freeing up clinical staff to focus on patient care instead of administrative firefighting.",
        ],
      },
      {
        heading: "What to look for in hospital management software",
        paragraphs: [
          "If you're evaluating a hospital management system, look past the buzzword. Ask specifically how the AI features work — what data they use, how alerts are surfaced to staff, and whether the system adapts to your hospital's departments or forces a generic workflow.",
          "Xlligent's hospital management software handles patient registration, diagnostics coordination, and performance tracking in one place, with AI trained to flag no-shows and operational bottlenecks as they emerge.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-software-development-partner",
    title: "How to Choose the Right Software Development Partner",
    category: "Software Development",
    icon: "code",
    date: "2026-06-22",
    author: "Xlligent Softwares Team",
    readTime: "7 min read",
    excerpt:
      "Picking a development partner is a long-term decision, not just a project. Here's a practical checklist to evaluate one before you sign anything.",
    seoTitle: "How to Choose the Right Software Development Partner | Xlligent Softwares",
    seoDescription:
      "A practical checklist for evaluating a custom software or web development partner — from technical fit to communication and long-term support.",
    content: [
      {
        heading: "Start with the problem, not the technology",
        paragraphs: [
          "It's tempting to start a conversation with a development partner by naming a tech stack you've heard is popular. A better starting point is describing the actual business problem — what's slow, what's manual, what's costing money — and seeing whether the partner asks good questions back before proposing a solution.",
        ],
      },
      {
        heading: "Ask to see how they think, not just what they've built",
        paragraphs: [
          "A portfolio shows what a team has delivered before, but it doesn't tell you how they'll handle your specific constraints — your timeline, your budget, your existing systems. Ask how they'd approach your project specifically, and see whether the answer is thoughtful or generic.",
        ],
      },
      {
        heading: "Clarify ownership and support upfront",
        paragraphs: [
          "Who owns the code once the project is delivered? What happens when you need a bug fixed six months later? Reliable partners are upfront about post-launch support, maintenance costs, and code ownership before the contract is signed — not after a problem shows up.",
        ],
      },
      {
        heading: "Custom doesn't have to mean slow or expensive",
        paragraphs: [
          "There's a common belief that custom software takes forever and costs a fortune compared to a template. Modern development practices — including AI-assisted coding and testing — have narrowed that gap considerably, letting teams deliver tailored solutions on realistic timelines.",
          "At Xlligent, our web and product development work starts with understanding the actual workflow we're replacing, and we stay involved after launch rather than disappearing once the invoice is paid.",
        ],
      },
    ],
  },
];
