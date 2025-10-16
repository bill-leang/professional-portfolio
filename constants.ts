
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
