export interface Project {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  duration: string;
  category: string;
  overview: string;
  impactMetrics: { label: string; value: string }[];
  keyHighlights: string[];
  techStack: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: { name: string; tag?: string }[];
}

export const personalInfo = {
  name: 'Kotturu Saikumar',
  role: 'Java Backend Developer',
  experience: '3+ Years Experience',
  location: 'Hyderabad, Telangana, India',
  email: 'kotturusaikumar7@gmail.com',
  phone: '+91 9381660617',
  github: 'https://github.com/saikumar-backend',
  linkedin: 'https://www.linkedin.com/in/saikumar-kotturu-backend',
  resumeUrl: '/Kotturu_Saikumar_Java_Backend_Developer_Resume.pdf',
  bio: 'Java Backend Developer with 3+ years of experience engineering scalable enterprise web applications using Core Java, Spring Boot, Spring Security, Hibernate, and MySQL. Proven track record in state and national ERP implementations, reducing processing times by 20% and accelerating legacy integration by 25%.',
  currentRole: 'Java Developer (Backend) at Intellect Informatics',
  availability: 'Available for Immediate Joining',
};

export const stats = [
  { value: '3+ Years', label: 'Backend Experience' },
  { value: '2 ERPs', label: 'Production Platforms' },
  { value: '20%', label: 'Processing Speedup' },
  { value: '25%', label: 'Faster ERP Integration' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Core Java',
    icon: 'Code',
    skills: [
      { name: 'Core Java', tag: 'Core' },
      { name: 'OOP Concepts', tag: 'Core' },
      { name: 'Java Collections', tag: 'Core' },
      { name: 'Exception Handling' },
      { name: 'Multithreading' },
      { name: 'SQL', tag: 'Database' },
      { name: 'JSON Parsing' },
      { name: 'Design Patterns' },
    ],
  },
  {
    title: 'Frameworks & Architecture',
    icon: 'Layers',
    skills: [
      { name: 'Spring Boot', tag: 'Expert' },
      { name: 'Spring Framework' },
      { name: 'Spring Security', tag: 'Auth & RBAC' },
      { name: 'Spring Data JPA' },
      { name: 'RESTful APIs', tag: 'Architecture' },
      { name: 'Microservices' },
      { name: 'Hibernate (ORM)', tag: 'Persistence' },
      { name: 'Data Validation' },
    ],
  },
  {
    title: 'Databases & Persistence',
    icon: 'Database',
    skills: [
      { name: 'MySQL', tag: 'Primary DB' },
      { name: 'Hibernate ORM' },
      { name: 'JPA Entity Mappings' },
      { name: 'Complex SQL Queries' },
      { name: 'Query Optimization' },
      { name: 'Transaction Boundaries' },
      { name: 'Indexing & Performance' },
    ],
  },
  {
    title: 'DevOps, Tools & Testing',
    icon: 'Terminal',
    skills: [
      { name: 'Git & GitHub', tag: 'VCS' },
      { name: 'Maven', tag: 'Build' },
      { name: 'Jenkins CI/CD', tag: 'Automation' },
      { name: 'Docker', tag: 'Containers' },
      { name: 'AWS (Basics)' },
      { name: 'JUnit & Mockito', tag: 'Testing' },
      { name: 'SonarQube' },
      { name: 'Jira (Agile/Scrum)' },
    ],
  },
];

export const experience = {
  company: 'Intellect Informatics',
  role: 'Java Developer (Backend)',
  period: '08/2023 – Present',
  location: 'Hyderabad, Telangana',
  type: 'Full-time',
  domain: 'State & National Level ERP for Primary Agricultural Credit Societies (PACS)',
  responsibilities: [
    'Develop and maintain enterprise backend modules using Java and Spring Boot for a state-level ERP program serving Primary Agricultural Credit Societies (PACS).',
    'Design and integrate secure RESTful APIs for communication between client applications and the Java back end.',
    'Implement business logic, field mapping, and data validation rules to maintain data integrity during legacy-to-ERP data migration.',
    'Persist and retrieve high-volume financial data using Spring Data JPA, Hibernate, and MySQL.',
    'Implement authentication and authorization using Spring Security (Role-Based Access Control).',
    'Optimize backend workflows and database queries, reducing overall data processing time by 20%.',
    'Write unit and integration tests using JUnit and Mockito to guarantee robust code coverage.',
    'Automate build and deployment pipelines using Maven and Jenkins CI/CD.',
    'Debug issues, fix bugs, and support live production deployments across PACS units in Andhra Pradesh.',
    'Participate in Agile sprints, peer code reviews, and provide regular status updates to stakeholders.',
  ],
  technologies: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Hibernate',
    'MySQL',
    'REST APIs',
    'JUnit',
    'Mockito',
    'Maven',
    'Jenkins',
    'Docker',
    'Git',
    'SonarQube',
    'Jira',
  ],
};

export const projects: Project[] = [
  {
    id: 'dct-project',
    title: 'Data Capturing Tool (DCT) – AP State ERP Project',
    subtitle: 'State-wide Legacy Data Migration & ERP Ingestion Engine',
    organization: 'Intellect Informatics, Hyderabad',
    duration: '2023 – Present',
    category: 'Enterprise Data Migration / Government ERP',
    overview: 'Part of the Andhra Pradesh State ERP initiative to digitize PACS records previously maintained in physical books. The tool captures legacy records and migrates them into the state ERP system with accurate field mapping, schema validation, and high data integrity.',
    impactMetrics: [
      { label: 'Integration Turnaround', value: '25% Faster' },
      { label: 'Data Processing Time', value: '20% Reduced' },
      { label: 'Deployment Scope', value: 'State-wide (AP)' },
      { label: 'Data Accuracy', value: '100% Validated' },
    ],
    keyHighlights: [
      'Developed and maintained backend modules in Java and Spring Boot to capture legacy PACS records.',
      'Implemented data validation and field-mapping logic to reduce entry errors and maintain data integrity.',
      'Collaborated with senior developers to integrate the tool with the State ERP, cutting integration turnaround by 25%.',
      'Optimized backend workflows and database queries, reducing data processing time by 20%.',
      'Supported production deployments across PACS units in Andhra Pradesh and improved post-deployment stability.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate',
      'RESTful APIs',
      'MySQL',
      'JUnit',
      'Mockito',
      'Jenkins',
      'Docker',
      'Git',
    ],
  },
  {
    id: 'nlps-project',
    title: 'Enterprise Resource Planning (ERP) – NLPS',
    subtitle: 'National Level PACS Software for Cooperative Banking & Operations',
    organization: 'Intellect Informatics, Hyderabad',
    duration: '2023 – Present',
    category: 'Cooperative Banking ERP / National Initiative',
    overview: 'Deployment of National Level PACS Software (NLPS) to digitize operations of Primary Agricultural Credit Societies, covering financial accounting, loan disbursement, and procurement processes in line with national standards.',
    impactMetrics: [
      { label: 'Core Modules', value: 'Finance, Loans & Procurement' },
      { label: 'Compliance', value: 'National Standards' },
      { label: 'Security Model', value: 'Spring Security RBAC' },
      { label: 'Testing Standard', value: 'JUnit & Mockito' },
    ],
    keyHighlights: [
      'Developed backend components using Java and Spring Boot for core PACS operations.',
      'Built and integrated clean RESTful APIs between client applications and the back end.',
      'Managed high-volume data storage and retrieval using Spring Data JPA and MySQL.',
      'Implemented authentication and authorization with Spring Security for multi-tier user roles.',
      'Wrote comprehensive unit and integration tests using JUnit and Mockito to ensure zero calculation defects.',
      'Automated build, test verification, and deployment cycles using Jenkins CI/CD.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Spring Security',
      'RESTful APIs',
      'MySQL',
      'Git',
      'JUnit',
      'Mockito',
      'Jenkins',
    ],
  },
];

export const keyImpacts = [
  {
    metric: '25%',
    title: 'Faster ERP Integration',
    summary: 'Eliminated manual errors and data mismatches when converting physical book ledgers to digital State ERP schemas through an automated validation engine.',
  },
  {
    metric: '20%',
    title: 'Data Processing Speedup',
    summary: 'Optimized MySQL query execution, resolved Hibernate collection fetching bottlenecks, and streamlined service layer workflows.',
  },
  {
    metric: '100%',
    title: 'Role-Based Security Coverage',
    summary: 'Enforced method-level security and strict role boundaries between field operators, managers, and state auditors via Spring Security.',
  },
];

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'Jawaharlal Nehru Technological University (JNTU)',
  location: 'Vizianagaram, Andhra Pradesh',
  year: '2022',
};

export const certification = {
  title: 'Java Full Stack Developer Certification',
  issuer: 'Sathya Technologies',
  duration: '7 Months Intensive Training',
  skills: 'Core Java, Advanced Java, Spring Boot, Hibernate, RESTful Web Services, MySQL, Web Development',
};
