import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abdul Ahad",
  initials: "A",
  url: "https://www.ahadsama.tech",
  location: "India",
  locationLink: "",
  description:
    "23 year old developer",
  summary: `If you're into tech, anime, caffeine-fueled rants, or existential startup thoughts at 2am — say hi on [x.com](https://x.com/alwaysahad).  
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
  resumeUrl: "https://drive.google.com/file/d/1hNaKXEYvfD7oHlkCcoTeqiIsZhMVs7rt/view?usp=sharing",
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
      title: "Businezz",
      href: "https://businezz-seven.vercel.app/",
      dates: "January 2024 - present",
      active: true,
      description:
        "A modern, cloud-powered invoice generator application designed for small businesses and freelancers.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "Supabase",
        "PLpgSQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://businezz-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alwaysahad/Businezz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Businezz.png",
      video:
        "",
    },
    {
      title: "SenpaiGpt",
      href: "https://senpai-gpt.vercel.app/",
      dates: "September 2024 - present",
      active: true,
      description:
        "AI-powered chatbot application that uses Web Search.",
      technologies: [
        "Javascript",
        "TailwindCSS",
        "node-cache",
        "express",
        "groq-sdk"
      ],
      links: [
        {
          type: "Website",
          href: "https://senpai-gpt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alwaysahad/SenpaiGPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/senpaiGPT.png",
      video:
        "",
    },
    {
      title: "Den-Den-Mushi",
      href: "https://den-den-mushi-frontend.onrender.com/",
      dates: "August '25",
      active: true,
      description:
        "A real-time room-based chat app.",
      technologies: [
        "React.js",
        "Typescript",
        "Websockets",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://den-den-mushi-frontend.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alwaysahad/Den-Den-Mushi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/den-den-mushi.png",
      video:
        "",
    },
    {
      title: "Dapp",
      href: "https://dapp-tau-roan.vercel.app/",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "This is a starter project for building a dapp on the Solana blockchain.",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://dapp-tau-roan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alwaysahad/dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dapp.png",
      video:
        "",
    },
    {
      title: "Caribou",
      href: "https://caribou-app.vercel.app/",
      dates: "April 2024 - May 2024",
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
    }
  ],
} as const;
