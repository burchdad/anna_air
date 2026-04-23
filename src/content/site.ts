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
    name: "Anna's Air",
    domain: "annasair.com",
    phoneDisplay: "(000) 000-0000",
    phoneHref: "tel:+10000000000",
    email: "service@annasair.com",
    licenseNumber: "TACLB155020E",
    insuredStatus: "Fully Insured",
    ownershipBadges: [
      "Female-Owned & Operated",
      "Veteran-Owned",
      "First female owned and operated HVAC company",
    ],
    emergencyLabel: "Emergency Service Available",
    freeEstimateLabel: "Free Estimates",
    stateRegion: "Texas",
    sameDayStatement:
      "When possible, Anna's Air works hard to restore cooling the same day because Texas heat does not wait.",
  },
  seo: {
    defaultTitle: "Anna's Air | Heating and Cooling Service in Texas",
    titleTemplate: "%s | Anna's Air",
    defaultDescription:
      "Anna's Air delivers honest, responsive heating and cooling service in Texas with veteran-owned leadership, clear communication, and fast support when comfort matters most.",
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
    headline: "Reliable Heating and Cooling with a Different Standard of Care",
    subheadline:
      "Anna's Air is built on honest recommendations, professional workmanship, and fast response when your comfort is on the line.",
    supportCopy:
      "Veteran-owned leadership. Female-owned and operated service. Real urgency for Texas homes and families.",
    primaryCta: "Call Now",
    secondaryCta: "Book Appointment",
  },
  trustBarItems: [
    "Female-Owned & Operated",
    "Veteran-Owned",
    "Licensed: TACLB155020E",
    "Fully Insured",
    "Emergency Service Available",
    "Free Estimates",
  ],
  whySection: {
    heading: "Why Anna's Air",
    body: [
      "Most HVAC companies talk about service. Anna's Air is built to prove it with clear communication, fast response, and work done right.",
      "In a high-pressure moment, you need someone steady and honest. Anna's Air is known for showing up, explaining what is wrong in plain language, and helping you choose the right next step without pressure.",
      "Texas summers are brutal. When possible, Anna's Air works hard to get you cooling the same day because your family should not have to wait in the heat.",
    ],
  },
  services: [
    {
      title: "AC Repair",
      description:
        "Fast diagnostics and practical repairs for cooling systems that stop keeping up.",
      slug: "ac-repair",
    },
    {
      title: "Heating Repair",
      description:
        "Dependable heating service to restore warmth, safety, and system confidence.",
      slug: "heating-repair",
    },
    {
      title: "System Check and Maintenance",
      description:
        "Routine performance checks to reduce surprise breakdowns and protect comfort.",
      slug: "system-check-maintenance",
    },
    {
      title: "Complete Installation",
      description:
        "Thoughtful system design and replacement planning for efficient long-term comfort.",
      slug: "complete-installation",
    },
    {
      title: "Emergency HVAC Service",
      description:
        "Urgent support when your system fails and conditions become unsafe or uncomfortable.",
      slug: "emergency-hvac-service",
    },
    {
      title: "Ductwork and Airflow Performance",
      description:
        "Airflow balancing and duct improvements to help each room cool and heat more evenly.",
      slug: "ductwork-airflow-performance",
    },
  ] as ServiceItem[],
  pricing: {
    systemCheck: "$89.00 System Check",
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
    "Goodman",
    "Trane",
    "Lennox",
    "Day & Night",
    "Ruud",
    "American Standard",
  ],
  about: {
    heading: "Built to Serve with Integrity",
    mission:
      "Anna's Air exists to bring dependable comfort to Texas homes with honest guidance, responsive communication, and professional HVAC work that respects your time and budget.",
    firstFemaleClaim:
      "First female owned and operated HVAC company",
    story:
      "Anna started Anna's Air to deliver a better service experience: fast when it matters, transparent from start to finish, and grounded in real care for families under pressure.",
    values: ["Honesty", "Urgency", "Professionalism", "Respect"],
  },
  serviceAreas: {
    intro:
      "Anna's Air serves homeowners across North Texas with priority support for urgent heating and cooling needs.",
    primaryAreas: [
      "Anna",
      "McKinney",
      "Melissa",
      "Van Alstyne",
      "Sherman",
      "Denison",
      "Prosper",
      "Celina",
    ],
    expansionNote:
      "Need service nearby? Reach out. Service area updates and dedicated city pages can be added as the company grows.",
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
        "Anna's Air serves North Texas communities, including Anna, McKinney, Melissa, and nearby areas. Contact us to confirm service at your address.",
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
    emergencyHeadline: "Need Cooling Fast?",
    emergencyBody:
      "When your system fails in Texas heat, Anna's Air responds with urgency, honesty, and professional care.",
    primary: "Call Anna's Air",
    secondary: "Book Service",
  },
  legal: {
    claimNote:
      "Marketing language, including 'first female owned and operated HVAC company,' should be reviewed and adjusted as needed.",
  },
};
