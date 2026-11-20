export type ProjectVisualStyle = "route" | "budget" | "generic";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position?: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  type: string;
  description: string;
  proof: string[];
  stack: string;
  links: ProjectLink[];
  screenshot?: ProjectScreenshot;
  screenshots?: ProjectScreenshot[];
  darkScreenshots?: ProjectScreenshot[];
  visual?: ProjectVisualStyle;
}

export interface PortfolioExperience {
  period: string;
  company: string;
  role: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    location: string;
    headline: string;
    about: string[];
    availability: string;
  };
  resume: {
    label: string;
    fileName: string;
  };
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  projectsIntro: string;
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
}

export const portfolio: PortfolioContent = {
  profile: {
    name: "Deep Patel",
    role: "Senior Software Engineer",
    location: "Toronto, Canada",
    headline:
      "I build dependable systems and thoughtful products for complex, real-world workflows.",
    about: [
      "I’m a senior software engineer with 5+ years of experience delivering full-stack applications and distributed systems using Java, .NET, React, PostgreSQL, and AWS. My work spans API design, cloud infrastructure, production reliability, and end-to-end product delivery.",
      "At Openlane, I build automotive marketplace systems, from Java and Spring Boot microservices to React interfaces and a full-stack CARFAX integration. I also designed and delivered a SignalR-based solution that refreshes marketplace configuration without hard reloads.",
      "Outside of work, I build Routefy and Sprout to explore healthcare scheduling, route optimization, and personal finance. In Sprout, I’m developing LLM-assisted natural-language search that maps user requests into structured queries and filters.",
    ],
    availability: "Open to senior engineering roles",
  },
  resume: {
    label: "Resume",
    fileName: "Deep_Patel_Resume.pdf",
  },
  contact: {
    email: "pateldeep1001@gmail.com",
    linkedIn: "https://www.linkedin.com/in/deep-patel4283/",
    github: "https://github.com/dnp99",
  },
  projectsIntro:
    "Personal projects exploring scheduling, money management, and LLM-assisted natural-language search.",
  projects: [
    {
      slug: "routefy",
      name: "Routefy",
      type: "Healthcare route intelligence",
      description:
        "A planning workspace for care workers that turns recurring visits, time windows, and travel constraints into a practical day plan.",
      proof: [
        "Optimizes recurring visits against time windows and travel constraints",
        "Models recurring schedules and PHI-safe client data boundaries",
        "Persists healthcare scheduling data with PostgreSQL and Drizzle",
        "Produces practical daily routes for real care-worker workflows",
        "Used by 4-5 live users in real care-planning workflows",
      ],
      stack: "React / TypeScript / Next.js / Postgres",
      links: [
        {
          label: "Visit site",
          href: "https://routefy.ca/",
        },
        {
          label: "View source",
          href: "https://github.com/dnp99/smart-route-planning",
        },
      ],
      screenshot: {
        src: "/projects/routefy-overview.png",
        alt: "Routefy route planner showing an anonymized visit timeline and optimized route map",
      },
      screenshots: [
        {
          src: "/projects/routefy-overview.png",
          alt: "Routefy route planner showing an anonymized visit timeline and optimized route map",
          width: 1770,
          height: 889,
        },
        {
          src: "/projects/routefy-clients.png",
          alt: "Routefy clients screen showing active clients, visit windows, durations, and scheduling actions",
          width: 2900,
          height: 1614,
        },
        {
          src: "/projects/routefy-planner.png",
          alt: "Routefy smart route planner showing selected clients ordered into an optimized route",
          width: 2912,
          height: 1612,
        },
        {
          src: "/projects/routefy-dashboard.png",
          alt: "Routefy home dashboard showing onboarding progress, daily operations, and client coverage",
          width: 2906,
          height: 1600,
        },
      ],
      visual: "route",
    },
    {
      slug: "sprout",
      name: "Sprout",
      type: "Personal finance, without the friction",
      description:
        "A personal and group expense-tracking product with transaction categorization, filtering, and interactive spending insights. I’m developing LLM-assisted search that turns natural-language requests into structured queries and filters.",
      proof: [
        "Personal and group expense-tracking workflows",
        "LLM-assisted natural-language search in development",
        "Transaction categorization, filtering, and interactive spending insights",
        "Integer-cents money model",
        "AI-assisted CSV categorization",
        "Used by 4-5 live users for everyday money management",
      ],
      stack: "Next.js / React / Neon / Vitest",
      links: [
        { label: "Visit site", href: "https://www.sprout-money.ca/" },
        { label: "View source", href: "https://github.com/dnp99/sprout" },
      ],
      screenshot: {
        src: "/projects/sprout-overview.png",
        alt: "Sprout budgeting overview showing safe-to-spend guidance and recent transactions",
      },
      screenshots: [
        {
          src: "/projects/sprout-overview.png",
          alt: "Sprout budgeting overview showing safe-to-spend guidance and recent transactions",
          width: 2914,
          height: 1450,
        },
        {
          src: "/projects/sprout-transactions.png",
          alt: "Sprout transactions screen showing categorized merchants, dates, and amounts",
          width: 2928,
          height: 1454,
        },
        {
          src: "/projects/sprout-budget.png",
          alt: "Sprout budget screen showing monthly allocation, spending, and category progress",
          width: 2940,
          height: 1440,
        },
        {
          src: "/projects/sprout-trends.png",
          alt: "Sprout trends screen showing cash flow, savings rate, income, and expenses",
          width: 2920,
          height: 1444,
        },
        {
          src: "/projects/sprout-import-export.png",
          alt: "Sprout import and export screen showing CSV upload and transaction mapping workflow",
          width: 2916,
          height: 1460,
        },
        {
          src: "/projects/sprout-settings.png",
          alt: "Sprout account settings screen showing profile, appearance, integrations, and categorization rules",
          width: 2922,
          height: 1464,
        },
      ],
      darkScreenshots: [
        {
          src: "/projects/sprout-overview-dark.png",
          alt: "Sprout dark-mode budgeting overview showing safe-to-spend guidance and recent transactions",
          width: 2912,
          height: 1458,
        },
        {
          src: "/projects/sprout-transactions-dark.png",
          alt: "Sprout dark-mode transactions screen showing categorized merchants, dates, and amounts",
          width: 2918,
          height: 1458,
        },
        {
          src: "/projects/sprout-budget-dark.png",
          alt: "Sprout dark-mode budget screen showing monthly allocation, spending, and category progress",
          width: 2894,
          height: 1472,
        },
        {
          src: "/projects/sprout-trends-dark.png",
          alt: "Sprout dark-mode trends screen showing cash flow, savings rate, income, and expenses",
          width: 2908,
          height: 1472,
        },
        {
          src: "/projects/sprout-import-export-dark.png",
          alt: "Sprout dark-mode import and export screen showing CSV upload and transaction mapping workflow",
          width: 2904,
          height: 1476,
        },
        {
          src: "/projects/sprout-settings-dark.png",
          alt: "Sprout dark-mode account settings screen showing profile, appearance, integrations, and categorization rules",
          width: 2908,
          height: 1472,
        },
      ],
      visual: "budget",
    },
  ],
  experience: [
    {
      period: "Jun 2021 - Present",
      company: "Openlane Inc.",
      role: "Senior Software Engineer",
      summary:
        "Owning full-stack automotive marketplace features, distributed services, external integrations, and production reliability across Java, Spring Boot, React, .NET, PostgreSQL, and AWS.",
      achievements: [
        "Designed and deployed 5+ Java/Spring Boot microservices for auction and inventory management platforms",
        "Owned Watchlist, Lost Tab, and Sold Tab from design through production, building React interfaces and integrating backend APIs",
        "Built search and bid-history APIs supporting datasets of 10K-100K+ records, addressing performance bottlenecks and improving reliability",
        "Delivered a full-stack CARFAX integration using .NET, React, PostgreSQL, and AWS, including external APIs, RSA-encrypted credential storage, and infrastructure configuration",
        "Designed and delivered a production SignalR solution to refresh marketplace configuration without hard reloads; evaluated alternatives and presented the approach to Product and Engineering",
        "Built a non-production React micro-frontend proof of concept for marketplace browsing and seller workflows, handling dealership context, session state, navigation, and theme isolation",
        "Diagnosed and resolved production memory bottlenecks, API performance issues, and recurring service failures",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        ".NET",
        "PostgreSQL",
        "AWS",
        "SignalR",
        "Terraform",
        "Azure DevOps",
      ],
    },
    {
      period: "Oct 2019 - Jun 2021",
      company: "Performance Auto Group",
      role: "Software Developer",
      summary:
        "Replaced manual operational workflows with web products, Spring Boot services, relational data models, and real-time React dashboards.",
      achievements: [
        "Saved 300+ hours of manual work annually",
        "Developed Spring Boot services and relational data models, with real-time dashboards and React interfaces",
      ],
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    },
  ],
};
