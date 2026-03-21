import type { Project, Experience, Certificate, Skill } from "../types";

export const personalInfo = {
  name: "Neeraj Negi",
  roles: ["Full-Stack Developer", "Problem Solver", "Open Source Enthusiast", "Algorithm Engineer", "DSA Specialist"],
  tagline: "Building performant, beautiful web experiences.",
  bio: "I'm a Computer Science student at Lovely Professional University with a passion for building elegant solutions to complex problems. I specialize in JavaScript/TypeScript, React, and Node.js, and love working on DSA-driven projects. I've filed a patent, solved 350+ coding problems, and continuously push boundaries in tech.",
  email: "negineeraj331@gmail.com",
  github: "https://github.com/negineeraj331",
  linkedin: "https://www.linkedin.com/in/neeraj-negi07",
  mobile: "+91-9045196317",
  location: "Punjab, India",
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C++", "JavaScript (ES6+)", "Python"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    items: ["MySQL", "MongoDB", "Vercel", "Git/GitHub", "VS Code", "Postman", "Figma", "REST APIs", "HTML", "CSS"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Team Player", "Adaptability", "Critical Thinking", "Time Management"],
  },
];

export const projects: Project[] = [
  {
    id: "jeteng",
    title: "JetEng - Airport Route Planner",
    description: "An Airport Route Planner that finds optimal connections between source and destination airports using Graph Data Structures and Dijkstra's Algorithm, with dynamic SVG visualization.",
    tags: ["JavaScript", "Graph DS", "Dijkstra", "SVG", "HTML", "CSS", "Vercel"],
    githubUrl: "https://github.com/negineeraj331",
    imageColor: "from-cyan-500 to-blue-600",
    featured: true,
    size: "large",
  },
  {
    id: "cookingai",
    title: "CookingAI – Smart Culinary Web App",
    description: "A responsive Flask web application combining AI with real-time food data. Features an interactive AI Chef chatbot, recipe generation from ingredients, and smart shopping list generation.",
    tags: ["Python", "Flask", "OpenRouter API", "Spoonacular API", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/negineeraj331",
    imageColor: "from-green-500 to-emerald-600",
    featured: true,
    size: "medium",
  },
  {
    id: "dsa-training",
    title: "DSA Problem Solutions",
    description: "Solved 350+ competitive-level coding problems across LeetCode and multiple platforms, focusing on edge-case handling, algorithmic optimization, Stack, Queues, Hash Maps, BFS/DFS algorithms.",
    tags: ["C++", "DSA", "LeetCode", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/negineeraj331",
    imageColor: "from-violet-500 to-purple-600",
    featured: false,
    size: "medium",
  },
  {
    id: "patent",
    title: "AI-Powered Adaptive Exosuits",
    description: "Filed a patent for 'AI-Powered Adaptive Exosuits for Deep-Sea Exploration, Tourism, and Marine Research' — showcasing advanced innovation and technical problem-solving in deep-tech domains.",
    tags: ["AI", "Innovation", "Patent", "Deep Tech"],
    imageColor: "from-orange-500 to-red-600",
    featured: false,
    size: "small",
  },
  {
    id: "gen-ai",
    title: "Generative AI Projects",
    description: "Explored and built projects using Generative AI techniques, prompt engineering, and LLM integrations. Certified by Oracle (OCI) and Infosys Springboard.",
    tags: ["Generative AI", "LLM", "Prompt Engineering", "Oracle", "Python"],
    imageColor: "from-pink-500 to-rose-600",
    featured: false,
    size: "small",
  },
];

export const experiences: Experience[] = [
  {
    id: "edu-lpu",
    role: "B.Tech - Computer Science & Engineering",
    company: "Lovely Professional University",
    duration: "Aug 2023 – Present",
    description: ["CGPA: 7.60", "Punjab, India", "Specializing in algorithms, data structures, and full-stack web development"],
    type: "education",
  },
  {
    id: "training-dsa",
    role: "Summer Training – DSA",
    company: "Data Structures & Algorithms",
    duration: "Jun 2025 – Jul 2025",
    description: [
      "Mastered comprehensive DSA concepts from basic to complex data structures",
      "Built Airport Routing Planner using Graph theory and Dijkstra's algorithm",
      "Solved competitive-level coding problems with focus on edge-case handling",
      "Gained hands-on experience with Stack, Queues, Hash Maps, BFS/DFS algorithms",
    ],
    type: "training",
  },
  {
    id: "edu-intermediate",
    role: "Intermediate (Class XII)",
    company: "Baluni Public School",
    duration: "Apr 2021 – Mar 2022",
    description: ["Percentage: 78.8%", "Najibabad, UP"],
    type: "education",
  },
  {
    id: "edu-matric",
    role: "Matriculation (Class X)",
    company: "Baluni Public School",
    duration: "Apr 2019 – Mar 2020",
    description: ["Percentage: 93.8%", "Najibabad, UP"],
    type: "education",
  },
];

export const certificates: Certificate[] = [
  { id: "c1", title: "Generative AI Oracle Cloud Infrastructure", issuer: "Oracle", date: "Sep 2025" },
  { id: "c2", title: "Prompt Engineering", issuer: "Infosys Springboard", date: "Aug 2025" },
  { id: "c3", title: "Generative AI", issuer: "Infosys Springboard", date: "Aug 2025" },
  { id: "c4", title: "CRUD Operations", issuer: "MongoDB", date: "Jul 2025" },
  { id: "c5", title: "Cloud Computing", issuer: "NPTEL", date: "Jun 2025" },
  { id: "c6", title: "The Bits and Bytes of Computer Networking", issuer: "Google (Coursera)", date: "Oct 2024" },
];
