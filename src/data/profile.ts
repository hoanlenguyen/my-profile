export interface Experience {
  id: string
  company: string
  companyUrl?: string
  location: string
  role: string
  startDate: string
  endDate: string | null
  remote: boolean
  products?: string
  domain: string
  technologies: string[]
  achievements: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string | null
  note: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  summary: string
  experience: Experience[]
  education: Education[]
  skillGroups: SkillGroup[]
  languages: { name: string; level: string }[]
}

export const profile: Profile = {
  name: 'Le Nguyen Han Hoan',
  title: 'Full Stack Developer',
  email: 'lenguyenhanhoan@gmail.com',
  phone: '+84 985 358 948',
  location: 'Ho Chi Minh City, Vietnam',
  linkedin: 'linkedin.com/in/lenguyenhanhoan',
  summary:
    'Full Stack Developer with over six years of experience in web application development, specializing in the .NET ecosystem and Vue.js. Demonstrated ability to deliver end-to-end features across enterprise-grade SaaS products in international HR management and e-commerce domains. Committed to continuous professional development, currently pursuing a Master\'s degree in Software Engineering at the University of Oulu, Finland. Proficient in Agile methodologies, cloud infrastructure on Microsoft Azure, and AI-assisted development workflows.',

  experience: [
    {
      id: 'tes-schrole',
      company: 'Tes (UK) / Schrole Group (Australia)',
      companyUrl: 'https://www.tes.com',
      location: 'Remote',
      role: 'Full Stack Developer',
      startDate: '2023-05',
      endDate: null,
      remote: true,
      products: 'Schrole Cover & Schrole Connect',
      domain: 'HR management software for the international education sector',
      technologies: [
        '.NET 8', 'ASP.NET MVC', 'Vue 3', 'SQL Server 2019',
        'Azure Blobs', 'SignalR', 'Bootstrap 5', 'xUnit', 'Playwright',
        'Jira', 'Bitbucket',
      ],
      achievements: [
        'Developed full-stack features for profile management, vacancy management, and application management modules serving international teacher candidates and school administrators.',
        'Designed and implemented RESTful APIs using .NET 8 with middleware pipelines for request validation, authentication, and response transformation.',
        'Contributed to a large-scale codebase modernization initiative, improving maintainability and supporting the migration of legacy components to .NET 8 and Vue 3 while delivering new product features in parallel.',
        'Maintained test coverage standards by authoring unit and end-to-end tests with xUnit and Playwright.',
        'Developed the admin interface using ASP.NET MVC and Bootstrap 5, accelerating internal operations workflows.',
        'Authored and optimized SQL Server stored procedures, views, and functions to support reporting and data migration tasks.',
        'Integrated Claude (Anthropic API) and GitHub Copilot into personal development workflow, reducing boilerplate generation time and accelerating code review cycles.',
      ],
    },
    {
      id: 'saigon-tech',
      company: 'Saigon Technology',
      companyUrl: 'https://saigontechnology.com',
      location: 'Ho Chi Minh City',
      role: 'Full Stack Developer',
      startDate: '2022-02',
      endDate: '2023-04',
      remote: false,
      domain: 'Internal enterprise tooling for a Singapore-based client',
      technologies: ['.NET 6', 'MySQL', 'Dapper', 'EPPlus', 'Azure Blobs', 'SignalR', 'Vue.js'],
      achievements: [
        'Designed and implemented a bulk CSV import pipeline capable of processing large-scale employee and customer datasets',
        'Built a time-off management system with employee record creation and period summarization, adopted by approximately 200 internal users.',
        'Deployed application infrastructure to Azure App Service, establishing the team\'s first cloud-hosted production environment.',
        'Authored SQL Server stored procedures and Dapper-based data access layers, ensuring consistent query performance under concurrent load.',
      ],
    },
    {
      id: 'yoong',
      company: 'Yoong Solutions',
      companyUrl: 'https://www.yoong.vn',
      location: 'Ho Chi Minh City',
      role: 'Software Developer',
      startDate: '2018-08',
      endDate: '2022-01',
      remote: false,
      domain: 'Human resource management, customer data management — Fanfan (e-commerce)',
      technologies: [
        '.NET Core', 'Vue.js', 'SQL Server', 'Azure Functions',
        'Azure Queue Storage', 'Azure Web Apps', 'Redis Cache', 'EPPlus', 'JWT',
      ],
      achievements: [
        'Delivered CMS features for product management and order management modules serving a retail client.',
        'Architected and deployed Azure Functions-based microservice background jobs for scheduled data processing.',
        'Implemented Redis Cache for search result caching.',
        'Applied JWT-based authentication and authorization across mobile and web API layers, satisfying security requirements for a multi-tenant platform.',
        'Managed database schema evolution using .NET Entity Framework migrations on SQL Server.',
      ],
    },
  ],

  education: [
    {
      id: 'oulu',
      degree: 'Master of Science in Software Engineering and Information Systems',
      institution: 'University of Oulu',
      location: 'Finland',
      startDate: '2025-09',
      endDate: null,
      note: '',
    },
    {
      id: 'hcmus',
      degree: 'Bachelor of IT Service Science',
      institution: 'Ho Chi Minh City University of Science',
      location: 'Vietnam',
      startDate: '2017-01',
      endDate: '2020-12',
      note: 'In collaboration with University of Auckland, NZ. International program combining applied IT with service science principles.',
    },
  ],

  skillGroups: [
    { label: 'Languages', skills: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'Python'] },
    { label: 'Frameworks', skills: ['.NET 8', 'ASP.NET MVC', '.NET Core', 'Vue.js 3', 'React.js'] },
    { label: 'APIs & Auth', skills: ['RESTful API', 'JWT', 'Middleware Pipelines', 'SignalR'] },
    { label: 'Databases', skills: ['SQL Server 2019', 'MySQL', 'Redis Cache', 'Cosmos DB', 'Dapper', 'Entity Framework'] },
    { label: 'Cloud & Infra', skills: ['Azure App Service', 'Azure Functions', 'Azure Queue Storage', 'Azure Blobs', 'Docker'] },
    { label: 'Testing', skills: ['xUnit', 'Playwright', 'Unit Testing', 'E2E Testing'] },
    { label: 'AI Tools', skills: ['Claude API', 'GitHub Copilot', 'ChatGPT', 'Prompt Engineering'] },
    { label: 'DevOps', skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Trello', 'Agile/Scrum'] },
  ],

  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'IELTS 6.5 (Jan 2025)' },
  ],
}
