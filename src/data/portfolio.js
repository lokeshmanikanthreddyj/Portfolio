const profile = {
  name: 'J Lokesh Manikanth Reddy',
  shortName: 'Lokesh',
  role: 'Integrated Computer Science Student',
  tagline: 'Building practical digital experiences with an eye on technology, governance, and execution.',
  location: 'Dilsukhnagar, Hyderabad, India',
  phone: '+91 7075707938',
  personalEmail: 'lokeshmanikanthreddy@gmail.com',
  collegeEmail: 'se23umcs019@mahindrauniversity.edu.in',
  address: [
    '20-107, Road Number 5',
    'Sharada Nagar, Dilsukhnagar',
    'Hyderabad, India - 500060',
  ],
  stats: [
    { label: 'CGPA', value: '6.05 / 10' },
    { label: 'Projects', value: '4' },
    { label: 'Training', value: '2025' },
  ],
};

const about = {
  intro:
    'I am a BTech Integrated Computer Science Engineering student at Mahindra University who enjoys shaping ideas into practical digital products. My work moves between software, interface design, and business-focused problem solving.',
  summary:
    'Alongside technical learning, I am pursuing the Company Secretary path, which gives me a stronger understanding of governance, compliance, and structured thinking. That mix helps me approach projects with both creativity and discipline.',
  outlook:
    'I am especially motivated by projects that solve real communication problems, improve user experience, or translate complex ideas into something clearer and easier to use.',
};

const researchInterests = [
  'Natural language applications and translation systems',
  'Human-centered web design and product experience',
  'AI-assisted tools for communication and analysis',
  'Technology for corporate governance and compliance workflows',
];

const education = [
  {
    period: 'Aug 2023 - Present',
    title: 'BTech (Integrated Computer Science Engineering)',
    place: 'Mahindra University, Hyderabad',
    detail: 'Relevant coursework: Data Structures and Algorithms, OOP, Machine Learning',
    meta: 'CGPA: 6.05 / 10 (till 5th semester)',
  },
  {
    period: 'Jun 2021 - May 2023',
    title: 'Intermediate',
    place: 'Sri Chaitanya College, Hyderabad',
    detail: 'Academic foundation in mathematics and science',
    meta: 'Percentage: 89%',
  },
  {
    period: 'May 2020 - Apr 2021',
    title: '10th Grade',
    place: "St Joseph's School (ICSE), Hyderabad",
    detail: 'Strong general academic performance',
    meta: 'Percentage: 91%',
  },
];

const credentials = [
  {
    title: 'Company Secretary Track',
    subtitle: 'Institute of Company Secretaries of India',
    text: 'Cleared CSEET 2024 and currently pursuing the CS Executive Programme.',
  },
  {
    title: 'Student Training Program (ODOP)',
    subtitle: 'Jan 2025 - Feb 2025',
    text: 'Built a practical understanding of corporate governance and professional ethics.',
  },
  {
    title: 'EY India Techathon',
    subtitle: 'Certificate of Appreciation',
    text: 'Recognized for participation and problem solving in a competitive technology environment.',
  },
];

const skills = [
  { name: 'C', category: 'Programming Fundamentals' },
  { name: 'Python', category: 'Application Development' },
  { name: 'Data Analysis', category: 'Data Interpretation' },
  { name: 'Framer', category: 'Interactive Prototyping' },
  { name: 'Figma', category: 'Interface Design' },
  { name: 'Corporate Governance', category: 'Professional Practice' },
  { name: 'Regulatory Compliance', category: 'Structured Operations' },
  { name: 'Machine Learning Basics', category: 'Emerging Technologies' },
];

const projects = [
  {
    id: '01',
    title: 'Genz - Normal English Translator',
    duration: '45 Days',
    type: 'Language Tool',
    org: 'Mahindra University, Hyderabad',
    description:
      'Developed a language translation concept that converts Gen Z slang into clear, formal English. The project explored NLP thinking and user-friendly output for better communication.',
    outcomes: ['Translation-focused idea', 'NLP exploration', 'Communication clarity'],
    githubUrl: '',
    liveUrl: '',
    note: 'GitHub repository link has not been verified from local files yet.',
  },
  {
    id: '02',
    title: 'Hira Fragrances Website',
    duration: '7 Days',
    type: 'Client Website',
    org: 'Client Project, Hyderabad',
    description:
      'Designed a polished brand website for a fragrance company with attention to presentation, structure, and a refined browsing experience.',
    outcomes: ['Brand presentation', 'Frontend design', 'Client execution'],
    githubUrl: '',
    liveUrl: '',
    note: 'Live and GitHub links can be added once the final URLs are confirmed.',
  },
  {
    id: '03',
    title: 'Quick Bot Main',
    duration: 'Independent Build',
    type: 'Automation Project',
    org: 'Local repository',
    description:
      'A Python-based quick-commerce assistant that collects pricing information from platforms like Blinkit, Zepto, and Instamart to support comparison and market awareness.',
    outcomes: ['Python scripting', 'Data collection', 'Practical automation'],
    githubUrl: 'https://github.com/ABHINAY-ReDdY1107/quick-bots',
    liveUrl: '',
    note: 'Repository URL was verified from the local git configuration.',
  },
  {
    id: '04',
    title: 'Portfolio Website',
    duration: 'Current Build',
    type: 'React Project',
    org: 'Personal Branding',
    description:
      'A responsive portfolio built with React Router, HashRouter, and NavLink to present personal details, research interests, and project work in a professional format.',
    outcomes: ['React Router', 'Responsive UI', 'GitHub Pages ready'],
    githubUrl: '',
    liveUrl: '',
    note: 'Add your portfolio repository URL after publishing the project to GitHub.',
  },
];

const personalInterests = [
  'Company Secretary and corporate law',
  'Entrepreneurship and business strategy',
  'Cricket and badminton',
  'Technology that improves everyday communication',
];

export {
  about,
  credentials,
  education,
  personalInterests,
  profile,
  projects,
  researchInterests,
  skills,
};
