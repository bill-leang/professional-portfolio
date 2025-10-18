
import { Project, Article, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Predictive Heart Health App',
    description: 'An app that uses machine learning trained on real data to predict the risk of heart attack.',
    techStack: ['Python', 'scikit-learn', 'SQL'],
    link: 'https://github.com/bill-leang/project4_group3_health_ml',
  },
  {
    id: 2,
    title: 'AI-Powered Trip Planner',
    description: 'An AI-powered travel planner that generates personalized itineraries with flights, hotels, and activities — all in one place.',
    techStack: ['Python', 'LLM', 'Tavily', 'SerpAPI'],
    link: 'https://github.com/bill-leang/tripsmith-streamlit',
  },
  {
    id: 3,
    title: 'Stock Price Visualization Dashboard',
    description: 'A dashboard to analyze stock price data from Yahoo Finance stored in a Postgres DB hosted on Neon.tech cloud service.',
    techStack: ['Plotly', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/bill-leang/stock_price_visualization',
  },
  //  {
  //   id: 4,
  //   title: 'Real-time Fraud Detection System',
  //   description: 'Built a system that processes thousands of transactions per second to detect and flag fraudulent activities with high accuracy.',
  //   techStack: ['Go', 'Kafka', 'Redis', 'Prometheus'],
  //   link: '#',
  // },
];

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Coming Soon...',
        // preview: 'Exploring the transformative impact of artificial intelligence on how we interpret data and make business decisions. A look into upcoming trends and technologies.',
        link: '#'
        // platform: 'Medium',
    },
    // {
    //     id: 2,
    //     title: 'A Practical Guide to Building Your First Neural Network',
    //     preview: 'A step-by-step tutorial for beginners on creating a simple neural network using Python and TensorFlow. No prior experience required.',
    //     link: '#',
    //     platform: 'LinkedIn',
    // },
    // {
    //     id: 3,
    //     title: 'Data Storytelling: How to Communicate Insights Effectively',
    //     preview: 'Insights are only valuable if they can be understood. This article covers key principles and techniques for turning complex data into compelling narratives.',
    //     link: '#',
    //     platform: 'Medium',
    // }
];


export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: ['LLM', 'Google Colab', 'scikit-learn']
  },
  {
    title: 'Data Science',
    skills: ['Statistical Analysis', 'Data Visualization', 'A/B Testing', 'Feature Engineering', 'SQL', 'Python (Pandas, NumPy)']
  },
  {
    title: 'Management',
    skills: ['Agile Methodologies', 'Project Management', 'Stakeholder Communication', 'Team Leadership', 'Strategic Planning']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Power BI', 'Tableau', 'Excel', 'Git']
  }
]

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 1,
    role: 'IT Analyst',
    company: 'Pall Corporation Australia',
    yearsWorked: 'Jul 2024 - Nov 2024',
    description: 'Oversaw daily IT operations and enhanced performance tracking by developing an interactive Power BI dashboard that increased SLA transparency for management. Demonstrated strong project management skills by coordinating a full server room relocation and restoring full functionality within the same day.'
  },
  {
    id: 2,
    role: 'IT Support Analyst',
    company: 'WebPal Pty Ltd Australia',
    yearsWorked: 'Jan 2024 - May 2024',
    description: 'Delivered timely resolutions for Level 1 and 2 customer tickets, improving service response times. Proactively identified and addressed system issues to enhance security and maintain smooth client operations.'
  },
  
  {
    id: 3,
    role: 'IT Support Volunteer',
    company: 'Cambodian Association of Victoria',
    yearsWorked: 'Jun 2023 - Aug 2023',
    description: 'Delivered end-user IT support by troubleshooting hardware, software, and network issues while improving staff digital literacy through one-on-one training and guidance.'
  },
  {
    id: 4,
    role: 'IT Manager',
    company: 'MSP Lubricant Services Cambodia',
    yearsWorked: 'Jan 2013 - Apr 2023',
    description: 'Led end-to-end business and IT operations for a workshop, streamlining sales, marketing, and inventory management processes. Supervised a 10-member team and drove revenue growth from zero to over $250K per year through strategic planning and operational efficiency.'
  },
  {
    id: 5,
    role: 'IT Analyst',
    company: 'SingTel Singapore',
    yearsWorked: 'Aug 2010 - Dec 2012',
    description: 'Built and supported a JEE web service–based enterprise order management system that automated manual order processes, significantly enhancing team efficiency and order turnaround time.'
  },
  {
    id: 6,
    role: 'Lab Tutor',
    company: 'National University of Singapore',
    yearsWorked: 'Jul 2009 - Aug 2010',
    description: 'Facilitated hands-on programming labs for first-year students and assessed their assignments, contributing to improved understanding of fundamental coding principles.'
  },
  {
      id: 7,
      role: 'System Analyst',
      company: 'PSA Singapore',
      yearsWorked: 'Jul 2007 - Aug 2008',
      description: 'Led the development and deployment of two J2EE initiatives: a major upgrade of an operationally critical system and a seamless migration from WebLogic 8 to WebLogic 10, enhancing reliability and maintainability.'
  }

]

import type { Education } from './types';
export const EDUCATION: Education[] = [
  {
    id: 1,
    school: "Monash University",
    degree: "Data Analytics and Visualization Bootcamp",
    yearGraduated: "2024"
  },
  {
    id: 2,
    school: "National University of Singapore",
    degree: "Master of Computing",
    yearGraduated: "2010"
  },
  {
    id: 3,
    school: "National University of Singapore",
    degree: "Bachelor of Computer Engineering (Honors)",
    yearGraduated: "2008"
  }
  
  
]