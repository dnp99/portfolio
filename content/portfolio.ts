export type ProjectVisualStyle = "route" | "budget" | "generic";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
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
  visual?: ProjectVisualStyle;
}

export interface PortfolioExperience {
  period: string;
  company: string;
  role: string;
  summary: string;
  achievements: string[];
}

interface PortfolioContent {
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
  resume: {
    label: "Resume",
    fileName: "Deep-Patel-Resume.pdf",
  },
  contact: {
    email: "pateldeep1001@gmail.com",
    linkedIn: "https://www.linkedin.com/in/deep-patel4283/",
    github: "https://github.com/dnp99",
  },
  projectsIntro:
    "Personal projects that explore scheduling and money through the lens of reliable engineering.",
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
      ],
      stack: "React / TypeScript / Next.js / Postgres",
      links: [
        {
          label: "View source",
          href: "https://github.com/dnp99/smart-route-planning",
        },
      ],
      screenshot: {
        src: "/projects/routefy-overview.png",
        alt: "Routefy route planner showing an anonymized visit timeline and optimized route map",
      },
      visual: "route",
    },
    {
      slug: "sprout",
      name: "Sprout",
      type: "Personal finance, without the friction",
      description:
        "A mobile-first budgeting product with safe-to-spend guidance, duplicate-safe CSV imports, and expense capture from Siri or WhatsApp.",
      proof: [
        "Natural-language expense capture",
        "Integer-cents money model",
        "AI-assisted CSV categorization",
      ],
      stack: "Next.js / React / Neon / Vitest",
      links: [
        { label: "Live product", href: "https://www.sprout-money.ca" },
        { label: "View source", href: "https://github.com/dnp99/sprout" },
      ],
      screenshot: {
        src: "/projects/sprout-overview.png",
        alt: "Sprout budgeting overview showing safe-to-spend guidance and recent transactions",
      },
      visual: "budget",
    },
  ],
  experience: [
    {
      period: "2021 - Present",
      company: "Openlane Inc.",
      role: "Senior Software Engineer",
      summary:
        "Building high-scale automotive marketplace systems across Java, Spring Boot, React, .NET, and cloud infrastructure.",
      achievements: [
        "Shipped 5+ Java and Spring Boot microservices and owned Watchlist, Lost Tab, and Sold Tab from design through production",
        "Reduced production incidents by 20-30% through proactive debugging and service stabilization",
        "Cut deployment time from hours to minutes using Terraform, Azure DevOps, and CI/CD automation",
        "Built search and bid-history APIs handling datasets of 10K-100K+ records while improving performance and reducing UAT defects",
        "Delivered the Carfax RIMS integration across React, .NET, authentication, and infrastructure",
      ],
    },
    {
      period: "2019 - 2021",
      company: "Performance Auto Group",
      role: "Software Developer",
      summary:
        "Replaced manual operational workflows with web products, Spring Boot services, relational data models, and real-time React dashboards.",
      achievements: [
        "Saved 300+ hours of manual work annually",
        "Delivered scalable internal tools end to end",
      ],
    },
  ],
};
