import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  "name": "Amine Firdawsi",
  "initials": "AF",
  "url": "https://aminefirdawsi.com",
  "location": "Casablanca, Morocco",
  "locationLink": "https://www.google.com/maps/place/Casablanca",
  "description": "Future Industrial Engineer | AI & Data Science Enthusiast | Competitive Programmer",
  "summary": "I'm a passionate engineering student at ENSAM-Meknès, specializing in Artificial Intelligence and Data Science. With a strong foundation in front-end and back-end technologies, I focus on designing scalable, user-centric solutions that integrate AI for real-world applications. I've also competed in national and international hackathons and programming contests, achieving significant accolades.",
  "avatarUrl": "/assets/me.jpg",
  "skills": [
    "TypeScript",
    "Python",
    "Java",
    "Rust",
    "C++",
    "Go",
    "React",
    "Next.js",
    "Django",
    "FastAPI",
    "LLMs (Large Language Models)",
    "PyTorch",
    "OpenCV",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Git & GitHub",
    "TailwindCSS",
    "Flask",
    "Scikit-learn",
    "TensorFlow",
    "NGINX",
    "MongoDB",
    "Pocketbase",
    "Pandas"
  ],
  "navbar": [
    // { "href": "/", "icon": "HomeIcon", "label": "Home" },
    // { "href": "/blog", "icon": "NotebookIcon", "label": "Blog" },
    // { "href": "/projects", "icon": "CodeIcon", "label": "Projects" },
    // { "href": "/contact", "icon": "MailIcon", "label": "Contact" }
  ],
  "contact": {
    "email": "aminefirdawsi@gmail.com",
    "tel": "+212 648-248592",
    "social": {
      "GitHub": {
        "name": "GitHub",
        "url": "https://github.com/aminef0",
        "icon": "github",
        "navbar": false
      },
      "LinkedIn": {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/aminefirdawsi",
        "icon": "linkedin",
        "navbar": false
      },
      "Codeforces": {
        "name": "Codeforces",
        "url": "https://codeforces.com/profile/AmineF0",
        "icon": "code",
        "navbar": false
      },
      "LeetCode": {
        "name": "LeetCode",
        "url": "https://leetcode.com/u/AmineF0",
        "icon": "leetcode",
        "navbar": false
      },
      "email": {
        "name": "Email",
        "url": "mailto:aminefirdawsi@gmail.com",
        "icon": "mail",
        "navbar": false
      }
    }
  },
  "work": [
    {
      "company": "University of Quebec at Rimouski",
      "href": "https://uqar.ca",
      "location": "Rimouski, Canada",
      "title": "Software Development Intern",
      "logoUrl": "/assets/work/uqar.png",
      "start": "Oct 2023",
      "end": "Present",
      "description": "Developed real-time IoT platforms for data logging and visualization. Utilized Python, InfluxDB, Docker, and Unreal Engine for robust system architecture."
    },
    {
      "company": "Gloowon",
      "location": "Casablanca, Morocco",
      "title": "Full Stack Developer",
      "logoUrl": "/assets/work/gloowon.png",
      "start": "Feb 2023",
      "end": "Oct 2023",
      "description": "Built scalable platforms using the MERN Stack and integrated S3 for efficient storage management."
    },
    {
      "company": "Cosumar Group",
      "location": "Casablanca, Morocco",
      "title": "Industrial Engineering Intern",
      "logoUrl": "/assets/work/cosumar.png",
      "start": "Jul 2023",
      "end": "Aug 2023",
      "description": "Analyzed production line efficiency and proposed optimizations for better operational output."
    },
    // {
    //   "company": "DRC",
    //   "location": "Casablanca, Morocco",
    //   "title": "Freelance Frontend Developer",
    //   "logoUrl": "/assets/work/drc.png",
    //   "start": "Jun 2024",
    //   "end": "Dec 2024",
    //   "description": "Designed and developed websites using React and Angular. Built a demo backend with Flask for secure user management."
    // }
  ],
  "education": [
    {
      "school": "University of Moulay Ismail - ENSAM-Meknes",
      "href": "http://www.ensam-umi.ac.ma/?lang=en",
      "degree": "Engineering Degree in Artificial Intelligence & Data Science",
      "logoUrl": "/assets/education/ensam.png",
      "start": "2020",
      "end": "2025"
    }
  ],
  "projects": [
    {
      "title": "Fault-Tolerant Distributed Systems with Kafka & ZooKeeper",
      "dates": "Oct 2024 - Jan 2025",
      "active": false,
      "description": "Built a distributed system with fault-tolerance, ensuring high availability for real-time data streaming.",
      "technologies": ["Kafka", "ZooKeeper", "Docker", "Python"],
      "links": []
    },
    {
      "title": "AI Mental Health Dashboard",
      "dates": "Sep 2024 - Jan 2025",
      "active": true,
      "description": "Developed a real-time monitoring system using AI for workplace mental health assessment.",
      "technologies": ["Python", "Spark", "React", "Kafka"],
      "links": []
    },
    {
      "title": "AI Initiation: Factory Safety System",
      "dates": "Oct 2023 - Jan 2024",
      "active": false,
      "description": "Developed an AI system for detecting inappropriate behaviors in factories, enhancing safety protocols.",
      "technologies": ["Python", "Next.js"],
      "links": []
    },
    {
      "title": "SchoolApp Bell",
      "dates": "Jan 2021 - Jan 2022",
      "active": false,
      "description": "Android application developed with Flutter for students to track grades and attendance.",
      "technologies": ["Flutter", "Dart"],
      "links": []
    }
  ],
  "hackathons": [
    {
      "title": "ThinkAI Hackathon",
      "dates": "May 16th - 19th, 2024",
      "location": "Ben Guerir, Morocco",
      "description": "Developed LGuide-AI, a virtual guide for tourists powered by generative AI and geolocation.",
      "links": []
    },
    {
      "title": "Moroccan National Programming Contest",
      "dates": "2022 & 2023",
      "location": "Morocco",
      "description": "Achieved 6th place in MNPC 2022 and 13th place in MNPC 2023."
    },
    {
      "title": "Bot Programming Contest",
      "dates": "2022",
      "location": "UM6P, Morocco",
      "description": "Secured 2nd place for a bot programming challenge focused on AI optimization.",
      "links": []
    },
    {
      "title": "UPF Programming Contest",
      "dates": "2022 & 2024",
      "location": "Morocco",
      "description": "Won 1st place in 2024 and 3rd place in 2022."
    }
  ]
} as const;
