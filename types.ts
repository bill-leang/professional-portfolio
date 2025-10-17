
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface Article {
  id: number;
  title: string;
  preview: string;
  link: string;
  platform: 'Medium' | 'LinkedIn';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WorkExperience {
  id: number;
  role: string;
  company: string;
  yeasWorked: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  yearGraduated: string;
}