export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  slug: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteContent = {
  business: {
    name: "Anna's Air LLC",
    domain: "annasair.com",
    phoneDisplay: "210-895-1122",
    phoneHref: "tel:+12108951122",
    bookingHref: "/contact",
    bookingLabel: "Book Service",
    email: "Annahoward60@gmail.com",
    licenseNumber: "TACLB155020E",
    insuredStatus: "Licensed and Fully Insured",
    ownershipBadges: [
      "Female Veteran Owned and Operated",
      "Licensed and Fully Insured",
      "TACLB155020E",
    ],
    emergencyLabel: "Emergency Service Available",
    freeEstimateLabel: "Free Estimates",
    stateRegion: "Texas",
    sameDayStatement:
      "When possible, Anna's Air works hard to restore cooling the same day because Texas heat does not wait.",
  },
  seo: {
    defaultTitle: "Anna's Air | San Antonio HVAC Service",
    titleTemplate: "%s | Anna's Air",
    defaultDescription:
      "Anna's Air delivers fast, honest HVAC service across San Antonio and the Hill Country with female veteran-owned leadership, same-day urgency, and emergency support.",
    ogImage: "/images/og-annas-air.svg",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  hero: {
    headline: "She believed she could, so she did.",
    subheadline: "Female Veteran Owned and Operated",
    supportCopy: "Licensed and Fully Insured",
    primaryCta: "Call Now",
    secondaryCta: "Book Service",
    urgencyChecks: [
      "No cool air or weak airflow",
      "System not turning on",
      "Home getting hotter by the hour",
    ],
  },
  trustBarItems: [
    "Female Veteran Owned and Operated",
    "Financing Available",
    "TACLB155020E",
    "Licensed and Insured",
    "Emergency Service Available",
    "Free Estimates",
  ],
  whySection: {
    heading: "Why Anna's Air",
    subheading: "",
    body: [
      "Anna started Anna's Air to deliver an honest, better service experience with a fast response time, along with reasonable and fair pricing.",
    ],
    bullets: [],
  },
  services: [
    {
      title: "AC Repair",
      description:
        "No cool air, weak airflow, or a system that cannot keep up? Get fast diagnostics and practical repairs.",
      slug: "ac-repair",
    },
    {
      title: "System Check and Maintenance",
      description:
        "Seasonal checkups help prevent breakdowns, keep your system running more efficiently, and help your HVAC equipment last longer than unserviced equipment.",
      slug: "system-check-maintenance",
    },
    {
      title: "Complete Installation",
      description:
        "Replace outdated equipment with a high-efficiency system that comes with a 10-year warranty and rebates. Anna's Air LLC carries all brands of equipment.",
      slug: "complete-installation",
    },
    {
      title: "Ductwork and Airflow Performance",
      description:
        "Fix hot rooms, weak vents, and uneven comfort with ductwork improvements and airflow balancing.",
      slug: "ductwork-airflow-performance",
    },
  ] as ServiceItem[],
  pricing: {
    systemCheck: "$89.00 System Check",
    freeEstimates: "Free Estimates Available",
  },
  testimonials: [
    {
      quote:
        "Our system stopped cooling with a newborn at home. Anna got here in about 30 minutes and had us cooling again in around 15 minutes. We were so relieved.",
      name: "Local Homeowner",
      context: "Emergency cooling service for a family with a newborn",
    },
    {
      quote:
        "Anna gave us a great price to replace damaged ductwork, and now the house cools more evenly and much faster than before.",
      name: "Texas Homeowner",
      context: "Ductwork replacement and airflow improvement",
    },
  ] as Testimonial[],
  brandsServiced: [
    "Carrier",
    "Day and Night",
    "Lennox",
    "Ruud",
    "Goodman",
    "American Standard",
    "etc.",
  ],
  about: {
    heading: "Built to Serve with Integrity",
    mission:
      "Anna's Air exists to bring dependable comfort to Texas homes with honest guidance, responsive communication, and professional HVAC work that respects your time and budget.",
    firstFemaleClaim:
      "First Veteran Female Owned and Operated HVAC Company",
    story:
      "Anna started Anna's Air to deliver an honest, better service experience with a fast response time, along with reasonable and fair pricing.",
    values: ["Honesty", "Urgency", "Professionalism", "Respect"],
  },
  serviceAreas: {
    intro:
      "Anna's Air serves homeowners across San Antonio and the surrounding Hill Country with priority support for urgent heating and cooling needs. All areas from San Antonio to Comfort, Texas — if you need Anna's Air, I will be there.",
    primaryAreas: [
      "San Antonio",
      "Leon Valley",
      "Helotes",
      "Boerne",
      "Bulverde",
      "Spring Branch",
      "Canyon Lake",
      "Converse",
      "Schertz",
      "Universal City",
      "Live Oak",
      "Comfort",
    ],
    expansionNote:
      "Need service nearby? Call us anytime. Anna's Air is a 24/7 company — reach out and we will confirm coverage.",
  },
  faq: [
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes. Anna's Air offers free estimates so you can understand your options before making a decision.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "All areas from San Antonio to Comfort, Texas. If you need Anna's Air, I will be there. Call us anytime — Anna's Air is a 24/7 company.",
    },
    {
      question: "How much is a system check?",
      answer: "The current system check rate is $89.00.",
    },
    {
      question: "Are you available for emergencies?",
      answer:
        "Yes. Emergency HVAC service is available, and Anna's Air prioritizes urgent no-cooling and no-heat situations.",
    },
  ] as FAQItem[],
  ctas: {
    emergencyHeadline: "Emergency Services 24/7 - Call Now or Book Service",
    emergencyBody:
      "Don't wait in the Texas heat. Call Anna's Air for same-day cooling restoration or emergency HVAC service.",
    primary: "Call Now",
    secondary: "Book Service",
  },
  conversionFlow: {
    heading: "How Service Works",
    steps: [
      {
        title: "Call or Request Service",
        description:
          "Tell Anna's Air what is happening and how urgent it feels. Emergency no-cooling calls are prioritized.",
      },
      {
        title: "Get Clear Diagnostics",
        description:
          "Receive straightforward findings, practical options, and transparent recommendations before work begins.",
      },
    ],
  },
  heroProof: [
    "First Veteran Female Owned and Operated HVAC Company",
    "Licensed and Fully Insured",
    "TACLB155020E",
  ],
  testimonialHighlights: [
    "Arrived in about 30 minutes",
    "Cooling restored in about 15 minutes",
    "Improved whole-home airflow and comfort",
  ],
  legal: {
    claimNote:
      "Marketing language, including 'first female owned and operated HVAC company,' should be reviewed and adjusted as needed.",
  },
};
