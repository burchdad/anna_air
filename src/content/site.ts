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
    phoneDisplay: "210-895-1122",
    phoneHref: "tel:+12108951122",
    email: "Annahoward60@gmail.com",
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
      "Anna's Air delivers honest, responsive heating and cooling service in San Antonio and surrounding Hill Country with veteran-owned, female-operated leadership and same-day urgency.",
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
    headline: "When Your AC Goes Down in Texas Heat, We Show Up Fast",
    subheadline:
      "Same-day cooling restoration. Licensed, insured, veteran-owned. Emergency calls prioritized.",
    supportCopy:
      "Your family shouldn't suffer in the heat. We do whatever it takes to get you cooling again the same day.",
    primaryCta: "Call Now — 210-895-1122",
    secondaryCta: "Book Service",
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
    heading: "Why Customers Trust Anna's Air",
    subheading: "In Anna's own words:",
    body: [
      "I am Honest. You get straightforward recommendations and clear pricing — no pressure, no surprises. I explain what needs to happen in plain language so you can make the right decision for your family.",
      "The summers in Texas are brutal. I will do whatever I need to do to get you cooling the same day. When your AC fails, waiting isn't an option — we prioritize emergency calls and move fast.",
      "Respect matters. I treat your home like it's mine. Veteran discipline + female-owned care = service that shows up when it matters and gets the job done right the first time.",
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
  whyCustomersTrust: {
    heading: "Why Customers Trust Anna's Air",
    values: [
      "I am Honest",
      "The summers in Texas are brutal, so I will do whatever I need to do to get you cooling the same day",
    ],
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
    emergencyHeadline: "Your AC Stopped. We Show Up Fast.",
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
      {
        title: "Restore Comfort",
        description:
          "Repairs or system updates are completed professionally, with same-day cooling effort when possible.",
      },
    ],
  },
  heroProof: [
    "Veteran-Owned",
    "Female-Owned & Operated",
    "Licensed: TACLB155020E",
    "Fully Insured",
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
