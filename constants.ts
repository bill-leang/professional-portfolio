
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
    description: 'As an IT Analyst, I was responsible for the smooth day-to-day IT operations. An accomplishment I am proud of was helping to provide clarity to the SLA (Service Level Agreement) performance by creating an interactive PowerBI report for the regional manager and the IT teams. I also applied planning and execution skills to successfully relocate a server room and got it up and running on the same day.'
  },
  {
    id: 2,
    role: 'IT Support Analyst',
    company: 'WebPal Pty Ltd Australia',
    yearsWorked: 'Jan 2024 - May 2024',
    description: 'As an IT Support Analyst, I was responsible for resolving level 1 and 2 tickets raised by customers in a ticketing system promptly. I also took proactive steps to monitor and troubleshoot client systems to ensure they are secured and running smoothly.'
  },
  
  {
    id: 3,
    role: 'IT Support Volunteer',
    company: 'Cambodian Association of Victoria',
    yearsWorked: 'Jun 2023 - Aug 2023',
    description: 'Supported the IT work in the association through troubleshooting issues and educating users.'
  },
  {
    id: 4,
    role: 'IT Manager',
    company: 'MSP Lubricant Services Cambodia',
    yearsWorked: 'Jan 2013 - Apr 2023',
    description: 'Managed the business and IT infrastructure of a workshop, including sales, marketing, operation, inventory management and supervision of a group of about 10 staff members.'
  },
  {
    id: 5,
    role: 'IT Analyst',
    company: 'SingTel Singapore',
    yearsWorked: 'Aug 2010 - Dec 2012',
    description: 'Developed and maintained a JEE web service-based enterprise-wide order processing application to enhance productivity through automation of orders in a team.'
  },
  {
    id: 6,
    role: 'Lab Tutor',
    company: 'National University of Singapore',
    yearsWorked: 'Jul 2009 - Aug 2010',
    description: 'Conducted lab sessions, grading for freshman programming classes.'
  },
  {
      id: 7,
      role: 'System Analyst',
      company: 'PSA Singapore',
      yearsWorked: 'Jul 2007 - Aug 2008',
      description: 'Completed two J2EE projects: a major upgrade of an operationally critical system and migration of system from Weblogic 8 to Weblogic 10.'
  }

]