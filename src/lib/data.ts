export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "voice-support",
    title: "Voice Support (Inbound & Outbound)",
    short: "Call center services for customer care, sales, and collections.",
    description:
      "Round-the-clock inbound and outbound call handling for domestic and international customers — customer support, telesales, appointment setting, surveys, and debt collection, delivered by trained agents in neutral and regional accents.",
    points: [
      "24/7 inbound customer support",
      "Outbound telesales & lead generation",
      "Appointment setting & follow-ups",
      "Multilingual & accent-neutral agents",
    ],
    icon: "headset",
  },
  {
    slug: "non-voice-back-office",
    title: "Non-Voice & Back Office Support",
    short: "Data processing, order management, and administrative support.",
    description:
      "Accurate, high-volume back-office operations that keep your business running behind the scenes — data entry, order processing, document management, and administrative support tailored to your workflows.",
    points: [
      "Data entry & data processing",
      "Order & catalog management",
      "Document indexing & management",
      "Administrative & virtual assistance",
    ],
    icon: "layout-list",
  },
  {
    slug: "customer-experience",
    title: "Customer Experience Outsourcing",
    short: "Omni-channel support across chat, email, and social media.",
    description:
      "A single outsourced team managing every customer touch point — live chat, email ticketing, and social media responses — so your customers get consistent, fast, and friendly service on every channel.",
    points: [
      "Live chat & email support",
      "Social media response management",
      "Help desk & ticketing (Zendesk, Freshdesk, etc.)",
      "CSAT / NPS driven quality monitoring",
    ],
    icon: "message-circle",
  },
  {
    slug: "technical-support",
    title: "Technical Support (IT Helpdesk)",
    short: "Tier 1–2 technical support for software, hardware, and SaaS.",
    description:
      "Skilled technical agents who troubleshoot software, hardware, and SaaS issues for your customers or internal staff, reducing resolution time and improving retention.",
    points: [
      "Tier 1 & Tier 2 technical helpdesk",
      "SaaS product support",
      "Remote troubleshooting",
      "Ticket triage & escalation management",
    ],
    icon: "monitor-cog",
  },
  {
    slug: "ecommerce-support",
    title: "E-commerce & Order Support",
    short: "End-to-end support for online sellers and marketplaces.",
    description:
      "Complete e-commerce operations support — order processing, returns and refunds, marketplace query handling, and catalog management for D2C brands and marketplace sellers.",
    points: [
      "Order processing & tracking",
      "Returns, refunds & dispute handling",
      "Marketplace (Amazon/Flipkart/Shopify) support",
      "Product catalog & listing management",
    ],
    icon: "shopping-cart",
  },
  {
    slug: "accounting-kpo",
    title: "Accounting & KPO Services",
    short: "Bookkeeping, payroll, and knowledge process outsourcing.",
    description:
      "Finance and knowledge-driven support for businesses that want to outsource repetitive or specialized processes without compromising on accuracy or compliance.",
    points: [
      "Bookkeeping & accounts reconciliation",
      "Payroll processing",
      "HR administration support",
      "Research & data analytics (KPO)",
    ],
    icon: "calculator",
  },
];

export type Industry = {
  name: string;
  icon: string;
};

export const industries: Industry[] = [
  { name: "E-commerce & Retail", icon: "shopping-bag" },
  { name: "Banking & Financial Services", icon: "landmark" },
  { name: "Healthcare & Wellness", icon: "heart-pulse" },
  { name: "Travel & Hospitality", icon: "plane" },
  { name: "IT & SaaS", icon: "cpu" },
  { name: "Telecom", icon: "phone" },
  { name: "Real Estate", icon: "building-2" },
  { name: "Logistics & Supply Chain", icon: "truck" },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Trained Agents", value: 150, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Hours of Support", value: 24, suffix: "/7" },
  { label: "Countries Served", value: 12, suffix: "+" },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery Call",
    description:
      "We understand your business, target customers, and support goals — domestic, international, or both.",
  },
  {
    title: "Custom Proposal",
    description:
      "You get a tailored engagement plan — team size, shift coverage, tools, and pricing — no one-size-fits-all packages.",
  },
  {
    title: "Hiring & Training",
    description:
      "We recruit and train dedicated agents on your product, tone, and processes before go-live.",
  },
  {
    title: "Go Live & Scale",
    description:
      "Your outsourced team goes live with quality monitoring in place, and scales up or down as your business needs change.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pickiworld set up our customer support desk in under two weeks. Response times dropped from hours to minutes.",
    author: "Aarav Mehta",
    role: "Founder, D2C Retail Brand (India)",
  },
  {
    quote:
      "Their night-shift team feels like an extension of our own — professional, consistent, and easy to work with across time zones.",
    author: "Sarah Whitfield",
    role: "Operations Manager, SaaS Company (UK)",
  },
  {
    quote:
      "We outsourced back-office data processing to Pickiworld and cut turnaround time by more than half.",
    author: "Daniel Kim",
    role: "COO, Logistics Firm (Canada)",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do you support both domestic (India) and international clients?",
    answer:
      "Yes. We run dedicated teams for Indian businesses as well as shift-aligned teams for international clients across the US, UK, Canada, Australia, and the Middle East.",
  },
  {
    question: "How quickly can a new support team be set up?",
    answer:
      "Most engagements go live within 2–4 weeks of the discovery call, depending on team size, training complexity, and tooling requirements.",
  },
  {
    question: "What channels of support do you offer?",
    answer:
      "Voice (inbound/outbound), live chat, email, social media, and back-office/non-voice processes — individually or as a combined omni-channel package.",
  },
  {
    question: "Is our data secure with an outsourced team?",
    answer:
      "We follow strict data-handling protocols, NDAs, restricted access controls, and secure infrastructure to keep client and customer data protected at all times.",
  },
  {
    question: "Can the team size scale up or down?",
    answer:
      "Absolutely — our staffing model is built to flex with seasonal demand, campaigns, or business growth without long lock-in periods.",
  },
];
