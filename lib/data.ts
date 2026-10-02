// All editable content lives here. Swap in your real projects, links and photos.

export const SOCIAL = {
  github: "https://github.com/katdev",
  email: "mailto:hello@katdev.dev",
};

export const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Git",
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "taskpulse",
    title: "Team Task Board",
    description:
      "Realtime kanban board for small teams. Drag a card to another column and everyone sees it move instantly.",
    tags: ["Next.js", "TypeScript", "Socket.IO", "PostgreSQL"],
    github: "https://github.com/katdev/taskpulse",
    demo: "https://taskpulse.example.dev",
  },
  {
    slug: "pocket-ledger",
    title: "Budget Tracker",
    description:
      "Expense tracker with monthly budgets, category charts and CSV export. Made for people who dislike spreadsheets.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/katdev/pocket-ledger",
    demo: "https://pocket-ledger.example.dev",
  },
  {
    slug: "shelflife",
    title: "My Reading List",
    description:
      "Reading list manager with search, ratings and a public profile page to share what you are reading.",
    tags: ["Next.js", "Prisma", "Tailwind CSS"],
    github: "https://github.com/katdev/shelflife",
    demo: "https://shelflife.example.dev",
  },
  {
    slug: "pingboard",
    title: "Website Checker",
    description:
      "Uptime monitor that checks your endpoints on a schedule and sends a message the moment one goes down.",
    tags: ["Node.js", "TypeScript", "Redis", "Docker"],
    github: "https://github.com/katdev/pingboard",
    demo: "https://pingboard.example.dev",
  },
  {
    slug: "snippet-vault",
    title: "Code Notes",
    description:
      "Personal library for code snippets with syntax highlighting, tags and instant fuzzy search.",
    tags: ["React", "Vite", "Tailwind CSS", "IndexedDB"],
    github: "https://github.com/katdev/snippet-vault",
    demo: "https://snippet-vault.example.dev",
  },
  {
    slug: "quietly",
    title: "Offline Notes",
    description:
      "Distraction-free markdown notes that work offline and sync as soon as you reconnect.",
    tags: ["Next.js", "PWA", "Supabase"],
    github: "https://github.com/katdev/quietly",
    demo: "https://quietly.example.dev",
  },
];

export const SKILLS = [
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 78 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 72 },
  { name: "PostgreSQL", level: 65 },
  { name: "Git and GitHub", level: 80 },
];

export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const EDUCATION: TimelineEntry[] = [
  {
    period: "In progress",
    title: "BS Information Technology",
    place: "Holy Cross College of Davao",
    description:
      "Software engineering, databases, web systems and a team capstone project.",
  },
  {
    period: "Self-paced",
    title: "Full-stack web development",
    place: "Online courses and documentation",
    description:
      "TypeScript, React, Next.js, Node.js and SQL, learned by building and breaking small projects.",
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    period: "Ongoing",
    title: "Freelance web developer",
    place: "Independent",
    description:
      "Landing pages and small business sites, from layout to deployment.",
  },
  {
    period: "Team project",
    title: "Capstone developer",
    place: "Team of five",
    description:
      "Built features across the front end and back end of a web platform, wrote documentation and presented to a panel.",
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  name: string;
  alt: string;
  w: number;
  h: number;
};

// Mixed aspect ratios give the masonry layout its rhythm
export const GALLERY: GalleryImage[] = [
  { id: "khyle-01", src: "/images/gallery-01.jpg", name: "B42D8973.jpg", alt: "A moment from Khyle's gallery", w: 828, h: 1472 },
  { id: "khyle-02", src: "/images/gallery-02.jpg", name: "IMG_0809.jpg", alt: "A moment from Khyle's gallery", w: 3024, h: 4032 },
  { id: "khyle-03", src: "/images/gallery-03.jpg", name: "IMG_2428.jpg", alt: "A moment from Khyle's gallery", w: 3024, h: 4032 },
  { id: "khyle-04", src: "/images/gallery-04.jpg", name: "IMG_2502.jpg", alt: "A moment from Khyle's gallery", w: 3024, h: 4032 },
  { id: "khyle-05", src: "/images/gallery-05.jpg", name: "IMG_5156.jpg", alt: "A moment from Khyle's gallery", w: 1620, h: 2880 },
  { id: "khyle-06", src: "/images/gallery-06.jpg", name: "IMG_5286.jpg", alt: "A moment from Khyle's gallery", w: 2268, h: 4032 },
];
