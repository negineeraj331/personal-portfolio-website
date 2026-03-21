export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageColor: string;
  featured?: boolean;
  size?: "large" | "medium" | "small";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: "work" | "training" | "education";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
