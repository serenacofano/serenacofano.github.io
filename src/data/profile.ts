export const profile = {
  name: 'Serena Cofano',
  tagline: 'PhD in Cybersecurity · Software Engineer',
  location: 'Belgium (open to remote)',
  email: 'cofanoserena@gmail.com',
  photo: '/profile.jpeg',
  cv: '/files/cv-cofano.pdf',

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
    Programming: ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    'Frameworks & Tools': ['Angular', 'AngularJS', 'Maven', 'MongoDB', 'Git', 'Docker', 'Linux', 'Android'],
    Security: [
      'Software Supply Chain Security',
      'SBOM Generation & Analysis',
      'Vulnerability Assessment',
      'OWASP Top 10',
      'ISO 27001',
      'GDPR · NIS2 · CRA',
      'Security-by-Design',
    ],
  },

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
