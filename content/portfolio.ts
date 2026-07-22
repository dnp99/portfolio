export type ProjectVisualStyle = "route" | "budget" | "generic";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  type: string;
  description: string;
  proof: string[];
  stack: string;
  links: ProjectLink[];
  visual?: ProjectVisualStyle;
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
        "Time-window route optimization",
        "PHI-safe client architecture",
        "Postgres + Drizzle data model",
      ],
      stack: "React / TypeScript / Next.js / Postgres",
      links: [
        {
          label: "View source",
          href: "https://github.com/dnp99/smart-route-planning",
        },
      ],
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
      visual: "budget",
    },
  ],
};
