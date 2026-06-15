export interface MapLocation {
  coords: [number, number]; // [lat, lng]
  city: string;
  items: string[];
}

export const mapLocations: MapLocation[] = [
  {
    coords: [44.4056, 8.9463],
    city: 'Genoa, Italy',
    items: ['Home', 'BSc & MSc — University of Genoa', 'PhD Researcher — University of Genoa', 'Cybersecurity Consultant — CINI', 'Front-End Developer — Talos srl', 'Junior Software Developer — Aizoon'],
  },
  {
    coords: [43.8429, 10.5027],
    city: 'Lucca, Italy',
    items: ['PhD in Cybersecurity — IMT School for Advanced Studies'],
  },
  {
    coords: [59.3293, 18.0686],
    city: 'Stockholm, Sweden',
    items: ['Visiting PhD Student — KTH Royal Institute of Technology', 'KTH Workshop on the Software Supply Chain 2025'],
  },
  {
    coords: [48.1351, 11.5820],
    city: 'Munich, Germany',
    items: ['ACNS 2025 — Applied Cryptography and Network Security'],
  },
  {
    coords: [18.2528, 109.5118],
    city: 'Sanya, China',
    items: ['IEEE TrustCom 2024'],
  },
  {
    coords: [41.1171, 16.8719],
    city: 'Bari, Italy',
    items: ['ITASEC23 — Italian Conference on Cybersecurity'],
  },
  {
    coords: [48.2082, 16.3738],
    city: 'Vienna, Austria',
    items: ['Summer School on AI and Cybersecurity — TU Wien 2025'],
  },
  {
    coords: [50.8503, 4.3517],
    city: 'Belgium',
    items: ['Current base'],
  },
];

export const profile = {
  name: 'Serena Cofano',
  tagline: 'PhD in Cybersecurity · Software Engineer',
  location: 'Belgium (open to remote)',
  email: 'cofanoserena@gmail.com',
  photo: '/profile.jpeg',
  cv: '/files/cofano-serena-cv-2.pdf',

  links: {
    github: 'https://github.com/serenacofano',
    linkedin: 'https://www.linkedin.com/in/serena-cofano-968716197/',
    scholar: 'https://scholar.google.com/citations?user=Udd1jsMAAAAJ&hl=en',
    tryhackme: 'https://tryhackme.com/p/cofanoserena',
  },

  bio: `I recently completed my PhD in Cybersecurity at IMT School for Advanced Studies Lucca
and the University of Genoa, where I specialized in Software Supply Chain Security.
My research focused on SBOM generation and its impact on vulnerability assessment in
Python ecosystems. I am now looking for industry roles as a security engineer or
software engineer in Belgium or remote.`,

  education: [
    {
      degree: 'PhD in Cybersecurity',
      institution: 'IMT School for Advanced Studies Lucca & University of Genoa',
      year: '2022–2025',
    },
    {
      degree: 'MSc in Computer Engineering',
      institution: 'University of Genoa',
      year: '2022',
    },
    {
      degree: 'BSc in Biomedical Engineering',
      institution: 'University of Genoa',
      year: '2019',
    },
  ],

  experience: [
    {
      role: 'Visiting PhD Student',
      org: 'KTH Royal Institute of Technology, Stockholm, Sweden',
      period: 'Oct 2024 – Jun 2025',
      description:
        'Designed and implemented a Java-based prototype to identify software dependencies at runtime. Contributed to an international research team and helped organize a workshop on software supply chains.',
    },
    {
      role: 'PhD Researcher — Software Supply Chain Security',
      org: 'IMT School for Advanced Studies Lucca & University of Genoa',
      period: 'Dec 2022 – Nov 2025',
      description:
        'Research on SBOM generation, vulnerability assessment, and software supply chain security in Python ecosystems. Published 3 papers in international peer-reviewed conferences.',
    },
    {
      role: 'Cybersecurity Consultant',
      org: 'CINI — Consorzio Interuniversitario Nazionale per l\'Informatica, Genoa',
      period: 'Sep 2023 – Nov 2023',
      description:
        'Contributed to the IT-Alert national public alerting system. Analyzed security requirements, designed a Security-by-Design pipeline, and delivered training to the development team.',
    },
    {
      role: 'Research Scholarship',
      org: 'University of Genoa',
      period: 'Jul 2022 – Nov 2022',
      description:
        'Researched Android virtualization and ART instrumentation, focusing on privacy improvement through data anonymization techniques.',
    },
    {
      role: 'Internship — Front-End Developer',
      org: 'Talos srl, Genoa',
      period: 'Mar 2021 – Dec 2021',
      description:
        'Built a web front-end for data visualization using Angular, TypeScript, and MongoDB.',
    },
    {
      role: 'Junior Software Developer',
      org: 'Aizoon Consulting, Genoa',
      period: 'May 2021 – May 2022',
      description:
        'Developed and maintained front-end and back-end enterprise applications using C#, JavaScript, and Angular in an agile team environment.',
    },
  ],

  skills: {
    Programming: [
      { name: 'Python', level: 'expert' as const, description: 'My main research language. Built SBOM generation and vulnerability analysis tools during my PhD.' },
      { name: 'Java', level: 'advanced' as const, description: 'Built Classport — a Maven plugin and Java agent for runtime dependency introspection.' },
      { name: 'C#' },
      { name: 'JavaScript' },
      { name: 'TypeScript', level: 'advanced' as const, description: 'Used for front-end work at Talos and Aizoon, and for this portfolio.' },
      { name: 'SQL' },
      { name: 'Bash' },
    ],
    'Frameworks & Tools': [
      { name: 'Angular' },
      { name: 'AngularJS' },
      { name: 'Maven', level: 'advanced' as const, description: 'Core build tool for Classport — used to inject dependency metadata into compiled Java classes at build time.' },
      { name: 'MongoDB' },
      { name: 'Git', level: 'advanced' as const },
      { name: 'Docker', level: 'advanced' as const, description: 'Used for containerized deployment in personal projects and professional experience.' },
      { name: 'Linux', level: 'advanced' as const },
      { name: 'Android' },
    ],
    'AI & Tools': [
      { name: 'AI-Assisted Development', level: 'advanced' as const, description: 'Actively use LLM tools (Claude, GitHub Copilot) to accelerate development, write better code, and explore new domains faster.' },
      { name: 'Prompt Engineering', level: 'advanced' as const, description: 'Design and iterate on prompts for code generation, research tasks, and tool integration.' },
      { name: 'LLM APIs' },
    ],
    Security: [
      { name: 'Software Supply Chain', level: 'expert' as const, description: 'My PhD research focus. Studied how dependencies flow from build time to runtime and what that means for vulnerability exposure.' },
      { name: 'SBOM Generation & Analysis', level: 'expert' as const, description: 'Researched SBOM generation for Python ecosystems and its impact on vulnerability assessment accuracy.' },
      { name: 'Vulnerability Assessment', level: 'advanced' as const, description: 'Assessed vulnerabilities in Python ecosystems as part of my PhD research, and applied it in practice during consulting at CINI.' },
      { name: 'OWASP Top 10', level: 'advanced' as const },
      { name: 'ISO 27001' },
      { name: 'GDPR · NIS2 · CRA' },
      { name: 'Security-by-Design', level: 'advanced' as const, description: 'Designed and delivered a Security-by-Design pipeline for the IT-Alert national alerting system at CINI.' },
    ],
  },

  projects: [
    {
      name: 'Classport',
      description: 'Runtime dependency introspection for Java. Embeds Maven metadata into compiled .class files, enabling vulnerability scanning and dependency tracking at runtime.',
      tags: ['Java', 'Maven', 'JVM', 'Security'],
      url: 'https://github.com/chains-project/classport',
      type: 'research' as const,
      contributor: true,
    },
    {
      name: 'Personal Website',
      description: 'This portfolio. Built with Astro and a security-first pipeline: secret scanning, SAST, dependency checks, SBOM generation, and OpenSSF Scorecard.',
      tags: ['Astro', 'TypeScript', 'GitHub Actions'],
      url: 'https://github.com/serenacofano/serenacofano.github.io',
      type: 'personal' as const,
      contributor: false,
      status: 'In development',
    },
    {
      name: 'Job Tracker',
      description: 'Job applications tracker with database migrations and Docker support for containerized deployment.',
      tags: ['Python', 'Docker', 'Alembic'],
      url: 'https://github.com/serenacofano/job-tracker',
      type: 'personal' as const,
      contributor: false,
      status: 'In development',
    },
  ],

  activities: {
    conferences: [
      {
        name: '23rd International Conference on Applied Cryptography and Network Security (ACNS 2025)',
        date: 'June 2025',
        location: 'Munich, Germany',
      },
      {
        name: '23rd IEEE International Conference on Trust, Security and Privacy (TrustCom 2024)',
        date: 'December 2024',
        location: 'Sanya, China',
      },
      {
        name: 'ITASEC23 — Italian Conference on Cybersecurity',
        date: 'May 2023',
        location: 'Bari, Italy',
      },
    ],
    workshops: [
      {
        name: '4th KTH Workshop on the Software Supply Chain 2025',
        date: 'April 2025',
        location: 'KTH, Stockholm, Sweden',
      },
    ],
    schools: [
      {
        name: 'Summer School on Artificial Intelligence and Cybersecurity',
        date: 'September 2025',
        location: 'TU Wien, Vienna, Austria',
      },
    ],
    teaching: [
      {
        course: 'Computer Security',
        program: 'MSc in Computer Engineering',
        institution: 'University of Genoa',
        period: 'November 2023 – March 2024',
      },
    ],
  },
};
