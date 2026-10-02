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
  id: string; // also used as the picsum seed so images stay stable
  name: string;
  alt: string;
  w: number;
  h: number;
};

// Mixed aspect ratios give the masonry layout its rhythm
export const GALLERY: GalleryImage[] = [
  { id: "kat-01", name: "frame_01.jpg", alt: "Gallery photo 1", w: 800, h: 1000 },
  { id: "kat-02", name: "frame_02.jpg", alt: "Gallery photo 2", w: 800, h: 600 },
  { id: "kat-03", name: "frame_03.jpg", alt: "Gallery photo 3", w: 800, h: 800 },
  { id: "kat-04", name: "frame_04.jpg", alt: "Gallery photo 4", w: 800, h: 1100 },
  { id: "kat-05", name: "frame_05.jpg", alt: "Gallery photo 5", w: 800, h: 650 },
  { id: "kat-06", name: "frame_06.jpg", alt: "Gallery photo 6", w: 800, h: 900 },
  { id: "kat-07", name: "frame_07.jpg", alt: "Gallery photo 7", w: 800, h: 700 },
  { id: "kat-08", name: "frame_08.jpg", alt: "Gallery photo 8", w: 800, h: 1000 },
  { id: "kat-09", name: "frame_09.jpg", alt: "Gallery photo 9", w: 800, h: 600 },
];

// Swap this helper for your own image URLs when you have real photos
export const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
