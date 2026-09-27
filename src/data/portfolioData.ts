export interface ResumeProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  tags: string[];
  period: string;
  category: 'AI/ML' | 'Computer Vision' | 'Distributed Systems';
  description: string;
  overview: string;
  problem: string;
  approach: string;
  dataset: string;
  model: string;
  highlights: string[];
  techStack: string[];
  challenges: string[];
  futureWork: string[];
  results: { metric: string; value: string; detail: string }[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  illustrationType: 'solar' | 'fleet' | 'rewear';
  featured?: boolean;
  gridSpan?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  issuer: string;
  date: string;
  award: string;
  badge: string;
  description: string;
}

export const RESUME_DATA = {
  personal: {
    name: 'Kushal',
    fullName: 'Kushal Patel',
    role: 'AI/ML Engineer',
    subtitles: ['AI/ML Engineer', 'Problem Solver', 'Builder'],
    headline: 'Building intelligent systems for a better tomorrow.',
    statement: 'I build intelligent systems that solve real-world problems.',
    bio: 'I work at the intersection of machine learning, computer vision, and real-world problem solving — turning ideas into scalable, impactful systems.',
    description:
      'I work at the intersection of machine learning, computer vision, and real-world problem solving — turning ideas into scalable, impactful systems.',
    location: 'Mumbai, India',
    email: 'kushalpatel1596@gmail.com',
    phone: '+919820604919',
    linkedin: 'https://linkedin.com/in/kushalpatel15',
    github: 'https://github.com/kusha-l921',
    resumeUrl: '/docs/Kushal_Patel_Resume.pdf',
    currentlyWorkingOn: 'Solar Flare Prediction',
    education: {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Dwarkadas J. Sanghvi College of Engineering',
      university: 'University of Mumbai',
      period: 'Expected May 2028',
      cgpa: '8.89 / 10',
      details: 'Honours in Immersive Technology. Core coursework in Deep Learning, Computer Vision, XAI, and Distributed Systems.',
    },
    socials: {
      email: 'kushalpatel1596@gmail.com',
      github: 'https://github.com/kusha-l921',
      linkedin: 'https://linkedin.com/in/kushalpatel15',
    },
  },
  education: {
    institution: 'Dwarkadas J. Sanghvi College of Engineering',
    location: 'Mumbai, India',
    degree: 'B.Tech, Artificial Intelligence and Machine Learning',
    honours: 'Honours in Immersive Technology',
    period: 'Expected May 2028',
    cgpa: '8.89 / 10',
  },
  projects: [
    {
      id: 'solar-flare',
      slug: 'solar-flare-forecasting',
      number: '01',
      title: 'Solar Flare Prediction',
      tagline: 'Deep learning based system to predict solar flares using multi-channel solar imagery from NOAA and NASA satellites.',
      tags: ['Computer Vision', 'Time Series', 'Deep Learning'],
      category: 'AI/ML' as const,
      period: 'Ongoing',
      featured: true,
      gridSpan: 'col-span-12',
      illustrationType: 'solar' as const,
      overview:
        'A deep learning framework engineered to predict severe solar flares 24 to 48 hours prior to eruption using extreme ultraviolet magnetogram feeds from the NASA SDO satellite.',
      problem:
        'Solar storms disrupt global satellite constellations, power grids, and aviation radio frequencies without adequate early warning intervals.',
      approach:
        'Custom Vision Transformer architecture with cross-attention across sequential solar frames to forecast flare occurrences.',
      dataset:
        'Extensive time-series dataset consisting of 87,600 solar images spanning over a decade of historical events.',
      architecture: ['Custom Spatiotemporal ViT', 'Cross-Attention Sequence Encoder', 'XAI Visual Attention Saliency'],
      model: 'Custom Spatiotemporal Vision Transformer + XAI',
      highlights: [
        'Curated and preprocessed an extensive time-series dataset consisting of 87,600 solar images spanning over a decade of historical events.',
        'Integrated visual attention maps into the inference pipeline for explainability, utilizing spatial focus regions to detect model drift.',
        'Engineered with Sunpy, PyTorch, and Explainable AI (XAI) attention maps.',
      ],
      techStack: ['Python', 'Vision Transformer', 'Sunpy', 'XAI', 'PyTorch'],
      challenges: [
        'Class imbalance across severe flare eruption frequencies and calibration of solar limb darkening.',
      ],
      futureWork: [
        'Stereoscopic multi-view integration with ESA Solar Orbiter telemetry data.',
      ],
      results: [
        { metric: 'Images Processed', value: '87,600', detail: 'Covering 10+ years of solar event feeds' },
        { metric: 'Attention Maps', value: 'XAI', detail: 'Spatial focus drift detection' },
        { metric: 'Architecture', value: 'ViT', detail: 'Cross-attention sequential transformer' },
      ],
      githubUrl: 'https://github.com/kusha-l921/solar-flare-forecasting',
      demoUrl: 'https://solar-prediction.demo.ai',
      image: '/images/solar_flare.jpg',
    },
    {
      id: 'fieldsight-lite',
      slug: 'fieldsight-lite',
      number: '02',
      title: 'FieldSight Lite',
      tagline: 'Unsupervised, training-free vision pipeline on low-power CPUs achieving 35.8ms latency at 27.9 FPS with 68MB RAM.',
      tags: ['Computer Vision', 'Edge Computing', 'CIELAB'],
      category: 'Computer Vision' as const,
      period: 'September 2026',
      featured: false,
      gridSpan: 'col-span-12 lg:col-span-6',
      illustrationType: 'fleet' as const,
      overview:
        'Engineered an unsupervised, training-free vision pipeline on low-power CPUs for real-time agricultural crop lesion detection.',
      problem:
        'Edge agricultural cameras have strictly constrained CPU power and cannot run heavyweight deep learning backbones.',
      approach:
        'Implemented CIELAB color modeling and Median Absolute Deviation (MAD) outlier detection.',
      dataset:
        'Multi-spectral crop lesion dataset evaluated across 5 distinct lighting regimes.',
      architecture: ['CIELAB Color Space Converter', 'MAD Statistical Outlier Estimator', 'Optical Stress Calibration Engine'],
      model: 'Unsupervised CIELAB + MAD Outlier Estimator',
      highlights: [
        'Engineered an unsupervised, training-free vision pipeline on low-power CPUs, achieving 35.8ms latency (27.9 FPS) with 68MB RAM usage.',
        'Implemented CIELAB color modeling and MAD outlier detection, outperforming classical baselines with an 83.35% Foliage IoU and +71% relative gain in lesion detection.',
        'Built an optical stress harness across 5 lighting regimes, maintaining a 62.3% LRS and bounding severity drift to just 3.07% MASD.',
      ],
      techStack: ['Computer Vision', 'Edge Computing', 'CIELAB', 'Statistical Modeling'],
      challenges: [
        'Bounding severity drift under high-glare ambient sun variations without supervised retuning.',
      ],
      futureWork: ['Microcontroller deployment on embedded ESP32-CAM and Raspberry Pi Zero.'],
      results: [
        { metric: 'Latency', value: '35.8ms', detail: '27.9 FPS on low-power CPU' },
        { metric: 'RAM Usage', value: '68 MB', detail: 'Extremely lightweight memory footprint' },
        { metric: 'Foliage IoU', value: '83.35%', detail: '+71% relative gain in lesion detection' },
      ],
      githubUrl: 'https://github.com/kusha-l921/fieldsight-lite',
      demoUrl: 'https://fieldsight.demo.ai',
      image: '/images/solar_flare.jpg',
    },
    {
      id: 'firsefile',
      slug: 'firsefile',
      number: '03',
      title: 'FirSeFile',
      tagline: 'ML forensic recovery platform integrating Swin Transformer V2 into a Rust backend to classify orphaned 4KB disk blocks.',
      tags: ['Swin Transformer', 'PyTorch', 'ONNX Runtime'],
      category: 'Distributed Systems' as const,
      period: 'September 2026',
      featured: false,
      gridSpan: 'col-span-12 lg:col-span-6',
      illustrationType: 'rewear' as const,
      overview:
        'Digital forensic recovery platform integrating deep learning carving into a high-performance Rust backend to reconstruct non-contiguous disk files.',
      problem:
        'Corrupted and fragmented disk images lose metadata headers, rendering classical carving algorithms incapable of reassembling orphaned blocks.',
      approach:
        'Built a Swin Transformer V2 model with ONNX Runtime acceleration and probabilistic graph reassembly.',
      dataset:
        'Raw binary block traces across 10+ file format specifications.',
      architecture: ['Swin Transformer V2 Backbone', 'ONNX Runtime Inference Engine', 'Probabilistic Graph Fragment Reassembler'],
      model: 'Swin Transformer V2 + ONNX Runtime',
      highlights: [
        'Collaborated on a forensic recovery platform, integrating an ML carving pipeline into a Rust backend to process raw disk images.',
        'Built a Swin Transformer V2 model achieving ~93% accuracy in classifying orphaned, headerless 4KB blocks across 10+ file formats.',
        'Exported to ONNX Runtime to achieve <8ms inference per block and used probabilistic graph reassembly to reconstruct non-contiguous fragments.',
      ],
      techStack: ['Python', 'Swin Transformer', 'PyTorch', 'ONNX Runtime', 'Rust'],
      challenges: [
        'Maintaining sub-8ms inference throughput per disk block during multi-gigabyte disk scans.',
      ],
      futureWork: ['Kernel-level eBPF memory bypass for raw NVMe block carving.'],
      results: [
        { metric: 'Accuracy', value: '~93%', detail: 'Across 10+ orphaned file format headers' },
        { metric: 'Inference', value: '<8ms', detail: 'ONNX Runtime acceleration per block' },
        { metric: 'Backend', value: 'Rust', detail: 'Zero-copy memory safety' },
      ],
      githubUrl: 'https://github.com/kusha-l921/firsefile',
      demoUrl: 'https://firsefile.demo.ai',
      image: '/images/solar_flare.jpg',
    },
  ],
  skills: {
    languages: ['Python', 'C/C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    aiml: [
      'PyTorch',
      'Computer Vision',
      'XAI',
      'Machine Learning',
      'Deep Learning',
      'Scikit-learn',
      'Pandas',
      'Numpy',
    ],
    web: ['Next.js', 'FastAPI', 'Flask', 'Django'],
    tools: ['Git', 'Github', 'Docker', 'Linux', 'ONNX Runtime'],
  },
  achievements: [
    {
      id: 'loc-8',
      title: 'Winner – Lines of Code (LOC 8.0) 2026 National-Level Hackathon',
      organizer: 'National-Level Hackathon (1000+ Participants)',
      issuer: 'National Hackathon Council',
      date: '2026',
      award: 'Winner (1st Place)',
      badge: '1ST PLACE / 1000+ PARTICIPANTS',
      description:
        'Collaborated on Exportify, designing the multi-factor scoring algorithm and trade-matching engine that ranked exporter-buyer compatibility across multi-dimensional features to automate international supplier discovery and trade risk assessment.',
    },
    {
      id: 'drishti-ai',
      title: '1st Runner-Up – Drishti AI Hackathon 2026',
      organizer: 'Dexit Global (250+ Teams)',
      issuer: 'Dexit Global',
      date: '2026',
      award: '1st Runner-Up (2nd Place)',
      badge: '2ND PLACE / 250+ TEAMS',
      description:
        'Collaborated on CopyCop, designing the behavioral risk-scoring engine and multi-person tracking pipeline to detect examination misconduct anomalies and stream real-time, privacy-preserving alerts to invigilators on edge hardware.',
    },
  ],
};

// Aliases for backward compatibility across all routes:
export const PERSONAL_INFO = RESUME_DATA.personal;
export const PROJECTS = RESUME_DATA.projects;
export const ACHIEVEMENTS = RESUME_DATA.achievements;
export const EXPERIENCES = [
  {
    id: 'exp-1',
    year: '2026',
    role: 'AI / ML Engineer & Researcher',
    organization: 'DJSCE Immersive Tech Lab',
    location: 'Mumbai, India',
    period: '2024 — Present',
    description: RESUME_DATA.personal.description,
    achievements: [
      'Published research on Spatiotemporal Vision Transformers for solar flare early forecasting.',
      'Developed low-power edge vision pipelines achieving 27.9 FPS on constrained hardware.',
    ],
    technologies: ['PyTorch', 'Computer Vision', 'XAI', 'Python', 'ONNX Runtime'],
  },
  {
    id: 'exp-2',
    year: '2026',
    role: 'National Hackathon Champion',
    organization: 'Lines of Code (LOC 8.0)',
    location: 'Mumbai, India',
    period: '2026',
    description: 'Winner out of 1000+ participants for Exportify trade-matching algorithm.',
    achievements: [
      'Engineered multi-factor scoring algorithm across multi-dimensional supplier features.',
      'Automated trade risk assessment and supplier discovery pipeline.',
    ],
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'PostgreSQL'],
  },
];

export const SKILL_GROUPS = [
  {
    category: 'Programming',
    skills: RESUME_DATA.skills.languages.map((s) => ({
      id: s.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: s,
      category: 'Programming' as const,
      description: 'Production language proficiency for systems & software development.',
      relatedProjects: ['Solar Flare Prediction', 'FirSeFile'],
      relatedTech: ['PyTorch', 'Git'],
    })),
  },
  {
    category: 'AI / ML',
    skills: RESUME_DATA.skills.aiml.map((s) => ({
      id: s.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: s,
      category: 'AI / ML' as const,
      description: 'Applied machine learning, deep learning, computer vision, and explainable models.',
      relatedProjects: ['Solar Flare Prediction', 'FieldSight Lite'],
      relatedTech: ['Python', 'Sunpy'],
    })),
  },
  {
    category: 'Web',
    skills: RESUME_DATA.skills.web.map((s) => ({
      id: s.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: s,
      category: 'Web' as const,
      description: 'Modern full-stack web and high-performance API frameworks.',
      relatedProjects: ['Solar Flare Prediction'],
      relatedTech: ['Python', 'Next.js'],
    })),
  },
  {
    category: 'Tools',
    skills: RESUME_DATA.skills.tools.map((s) => ({
      id: s.toLowerCase().replace(/[^a-z0-9]/g, ''),
      name: s,
      category: 'Tools' as const,
      description: 'Systems, version control, containerization, and edge inference runtimes.',
      relatedProjects: ['FirSeFile', 'FieldSight Lite'],
      relatedTech: ['Git', 'Linux'],
    })),
  },
];

export const ABOUT_INFO = {
  biography: [
    RESUME_DATA.personal.description,
    `Pursuing ${RESUME_DATA.education.degree} at ${RESUME_DATA.education.institution} (${RESUME_DATA.education.honours}), with CGPA of ${RESUME_DATA.education.cgpa}. Expected graduation ${RESUME_DATA.education.period}.`,
  ],
  focus: ['Machine Learning', 'Computer Vision', 'Deep Learning & XAI'],
  learning: ['Swin Transformers', 'Edge Computing', 'Rust Backend Integration'],
  interests: ['Heliophysics Forecasting', 'Autonomous Systems', 'National Hackathons'],
};
