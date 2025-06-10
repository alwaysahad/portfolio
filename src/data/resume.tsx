import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abdul Ahad",
  initials: "A",
  url: "https://www.ahadsama.tech",
  location: "India",
  locationLink: "",
  description:
    "22 year old developer",
  summary: `I write code like it's fanfiction for servers, read startup blogs like they're gossip columns, brew coffee strong enough to wake Saitama, and religiously follow the adventures of a stretchy pirate and his overpowered crew.  
    
  If you're into tech, anime, caffeine-fueled rants, or existential startup thoughts at 2am — say hi on [x.com](https://x.com/alwaysahad).  
  I'll probably reply faster than ChatGPT on a fiber connection.`,
        

  avatarUrl: "/img.jpg",
  skills: [
    "Next.js",
    "React.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "FastAPI",
    "Python"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "theahadoo7@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alwaysahad",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alwaysahad/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/alwaysahad",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Dr. A.P.J. Abdul Kalam Technical University",
      href: "https://www.linkedin.com/school/aktuofficial/",
      degree: "Bachelors of Technology (CSE)",
      logoUrl: "/unilogo.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Caribou",
      href: "https://caribou-app.vercel.app/",
      dates: "April 2025 - present",
      active: true,
      description:
        "CRUD application for storing files online.",
      technologies: [
        "Next.js",
        "Typescript",
        "Zustand",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
        "React-dropzone"
      ],
      links: [
        {
          type: "Website",
          href: "https://caribou-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alwaysahad/caribou-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/caribou.png",
      video:
        "",
    },
    // {
    //   title: "Batch0",
    //   href: "https://batch-0.vercel.app/",
    //   dates: "April 2025",
    //   active: true,
    //   description:
    //     "Connect with early users for your startup, easiest way to collect and manage beta user requests for your startup",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://batch-0.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/aayushk9/zerobatch",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/batch0.png",
    //   video:
    //     "",
    // },
    // {
    //   title: "Wordbook",
    //   href: "https://wordbook-one.vercel.app/",
    //   dates: "April 2025",
    //   active: true,
    //   description:
    //     "Learn a new word every day with context, examples and usecase. Build your vocabulary effortlessly with WordBook.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://wordbook-one.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/aayushk9/wordbook",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/wordbook.png",
    //   video: "",
    // },
    // {
    //   title: "Human Kind",
    //   href: "https://humankind-space.vercel.app/",
    //   dates: "April 2025",
    //   active: true,
    //   description:
    //     "Human connection has features such as dailylogs, gratitude, knowledge and zen",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://humankind-space.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/aayushk9/humankind",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/kind.png",
    //   video: "",
    // },
    // {
    //   title: "BigBrain",
    //   href: "https://bigbrain-bb.vercel.app/",
    //   dates: "March 2025",
    //   active: true,
    //   description:
    //     "BigBrain helps you find research papers, crypto whitepapers and the latest news on crypto and startups.",
    //   technologies: [
    //     "React.js",
    //     "Express",
    //     "MongoDB",
    //     "Node.js",
    //     "TailwindCSS",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://bigbrain-bb.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/aayushk9/BigBrain",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/bigb.png",
    //   video:
    //     "",
    // },
  ],
} as const;
