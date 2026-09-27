import { Project, SkillCategory, Achievement } from '../types';

export const PERSONAL_DATA = {
  name: 'Kushal',
  fullName: 'Kushal Patel',
  role: 'AI/ML Engineer',
  terminalPrompt: '> whoami / kushal-patel',
  subtitles: 'AI/ML Engineer · Problem Solver · Systems Builder',
  headline: 'Building intelligent systems for a better tomorrow.',
  emphasisWord: 'intelligent systems',
  supportingParagraph:
    'I work at the intersection of machine learning, computer vision, and real-world problem solving — turning research ideas into practical systems.',
  location: 'Mumbai, India',
  college: 'DJ Sanghvi College of Engineering',
  degree: 'B.Tech AI/ML',
  fullDegree: 'B.Tech — Artificial Intelligence and Machine Learning',
  honours: 'Honours in Immersive Technology',
  cgpa: '8.89 / 10',
  period: '2024 — 2028',
  expectedGraduation: 'Expected May 2028',
  university: 'University of Mumbai',
  email: 'kushalpatel1596@gmail.com',
  phone: '+919820604919',
  linkedinUrl: 'https://linkedin.com/in/kushalpatel15',
  githubUrl: 'https://github.com/kusha-l921',
  resumeUrl: '/docs/Kushal_Patel_Resume.pdf',
  
  // Hero right side personal.meta
  currentlyBuilding: 'Solar Flare Prediction',
  specialization: 'Vision Transformers & Edge AI',
  devLoop: 'learn() → build() → improve()',
  metaVersion: 'v2026.09',
  animeArtwork: '/images/inverted_pfp.jpeg',
  avatarImage: '/images/character_illustration.jpg',
  quote: 'A better version of myself, everyday.',
  dailyLog: [
    '> learn()',
    '> build()',
    '> improve()',
    '> repeat()',
    '// progress... 78%',
  ],
  goals: [
    { text: 'Build impactful projects', completed: true },
    { text: 'Grow in AI/ML', completed: true },
    { text: 'Stay consistent', completed: true },
    { text: 'Make a positive impact', completed: false },
  ],
};

export const ABOUT_DATA = {
  bioParagraph1:
    "I'm an AI/ML engineer passionate about building intelligent systems that solve real-world problems. I enjoy working across machine learning, computer vision, and scalable systems — from research ideas to practical, production-ready solutions.",
  bioParagraph2:
    "My focus centers on efficient architectures: designing spatiotemporal vision models, deploying training-free edge vision pipelines, and integrating machine learning into low-latency systems. When building, I prioritize clean algorithmic formulation, rigorous empirical benchmarking, and mathematical explainability.",
  focus: ['Machine Learning', 'Computer Vision', 'Systems Engineering'],
  currentlyLearning: ['Transformers', 'Computer Vision', 'Edge AI'],
  location: 'Mumbai, India',
  education: "B.Tech AI/ML '28 · DJ Sanghvi COE",
  interests: ['Heliophysics Forecasting', 'Autonomous Edge Perception', 'Forensic Machine Learning'],
};

export const EDUCATION_DATA = {
  institution: 'Dwarkadas J. Sanghvi College of Engineering',
  location: 'Mumbai, India',
  degree: 'B.Tech — Artificial Intelligence and Machine Learning',
  honours: 'Honours in Immersive Technology',
  period: '2024 — 2028',
  expected: 'Expected May 2028',
  cgpa: '8.89 / 10',
  university: 'University of Mumbai',
  highlights: [
    'Deep Learning, Computer Vision, Explainable AI (XAI), and Distributed Systems coursework.',
    'Honours specialization in Immersive Technology and High-Performance Spatial Computing.',
    'Undergraduate research focusing on spatiotemporal Vision Transformers and Edge AI algorithms.',
  ],
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'loc-8',
    title: 'Winner – Lines of Code (LOC 8.0) 2026 National-Level Hackathon',
    award: '1st Place Winner',
    organizer: 'National-Level Hackathon (1000+ Participants)',
    date: '2026',
    badge: '1ST PLACE / 1000+ PARTICIPANTS',
    description:
      'Collaborated on Exportify, designing the multi-factor scoring algorithm and trade-matching engine that ranked exporter-buyer compatibility across multi-dimensional features to automate international supplier discovery and trade risk assessment.',
  },
  {
    id: 'drishti-ai',
    title: '1st Runner-Up – Drishti AI Hackathon 2026',
    award: '1st Runner-Up (2nd Place)',
    organizer: 'Organized by Dexit Global (250+ Teams)',
    date: '2026',
    badge: '2ND PLACE / 250+ TEAMS',
    description:
      'Collaborated on CopyCop, designing the behavioral risk-scoring engine and multi-person tracking pipeline to detect examination misconduct anomalies and stream real-time, privacy-preserving alerts to invigilators on edge hardware.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'solar-flare',
    number: '01',
    title: 'Solar Flare Prediction',
    tagline: 'Deep learning based system to predict solar flares using multi-channel solar imagery from NOAA and NASA satellites.',
    tags: ['Vision Transformer', 'Sunpy', 'XAI', 'PyTorch', 'Time Series'],
    category: 'AI / ML',
    period: 'Ongoing',
    image: '/images/solar_flare.jpg',
    githubUrl: 'https://github.com/kusha-l921/solar-flare-forecasting',
    overview:
      'A deep learning framework engineered to predict severe solar flares 24 to 48 hours prior to eruption using extreme ultraviolet magnetogram feeds from the NASA SDO satellite.',
    problem:
      'Solar storms disrupt global satellite constellations, power grids, and aviation radio frequencies without adequate early warning intervals.',
    approach:
      'Custom Vision Transformer architecture with cross-attention across sequential solar frames to forecast flare occurrences.',
    dataset:
      'Extensive time-series dataset consisting of 87,600 solar images spanning over a decade of historical events.',
    architecture: [
      'Custom Spatiotemporal ViT Backbone',
      'Cross-Attention Sequence Encoder',
      'XAI Visual Attention Saliency Monitor',
    ],
    results: [
      { metric: 'Dataset', value: '87,600', detail: 'Curated solar frames spanning 10+ years' },
      { metric: 'Attention', value: 'XAI Maps', detail: 'Spatial focus for model drift detection' },
      { metric: 'Architecture', value: 'ViT', detail: 'Cross-attention sequential transformer' },
    ],
    highlights: [
      'Collaborated within a team to implement a custom Vision Transformer architecture with cross-attention across sequential solar frames to forecast flare occurrences.',
      'Curated and preprocessed an extensive time-series dataset consisting of 87,600 solar images spanning over a decade of historical events.',
      'Integrated visual attention maps into the inference pipeline for explainability, utilizing spatial focus regions to detect model drift.',
    ],
  },
  {
    id: 'fieldsight-lite',
    number: '02',
    title: 'FieldSight Lite',
    tagline: 'Unsupervised, training-free vision pipeline on low-power CPUs achieving 35.8ms latency at 27.9 FPS with 68MB RAM.',
    tags: ['Computer Vision', 'Edge Computing', 'CIELAB', 'Statistical Modeling'],
    category: 'Computer Vision',
    period: 'September 2026',
    githubUrl: 'https://github.com/kusha-l921/fieldsight-lite',
    overview:
      'Engineered an unsupervised, training-free vision pipeline on low-power CPUs for real-time agricultural crop lesion detection on embedded devices.',
    problem:
      'Edge agricultural cameras have strictly constrained CPU power and cannot run heavyweight deep learning backbones without overheating and battery depletion.',
    approach:
      'Implemented CIELAB color modeling and Median Absolute Deviation (MAD) outlier detection, outperforming classical baselines.',
    dataset:
      'Multi-spectral crop lesion dataset evaluated across 5 distinct lighting regimes.',
    architecture: [
      'CIELAB Color Space Transformation',
      'MAD Statistical Outlier Estimator',
      'Optical Stress Calibration Engine',
    ],
    results: [
      { metric: 'Latency', value: '35.8ms', detail: '27.9 FPS on low-power CPU hardware' },
      { metric: 'Memory', value: '68 MB', detail: 'Extremely lightweight memory footprint' },
      { metric: 'Foliage IoU', value: '83.35%', detail: '+71% relative gain in lesion detection' },
    ],
    highlights: [
      'Engineered an unsupervised, training-free vision pipeline on low-power CPUs, achieving 35.8ms latency (27.9 FPS) with 68MB RAM usage.',
      'Implemented CIELAB color modeling and MAD outlier detection, outperforming classical baselines with an 83.35% Foliage IoU and +71% relative gain in lesion detection.',
      'Built an optical stress harness across 5 lighting regimes, maintaining a 62.3% LRS and bounding severity drift to just 3.07% MASD.',
    ],
  },
  {
    id: 'firsefile',
    number: '03',
    title: 'FirSeFile',
    tagline: 'ML forensic recovery platform integrating Swin Transformer V2 into a Rust backend to classify orphaned 4KB disk blocks.',
    tags: ['Python', 'Swin Transformer', 'PyTorch', 'ONNX Runtime', 'Rust'],
    category: 'Systems',
    period: 'September 2026',
    githubUrl: 'https://github.com/kusha-l921/firsefile',
    overview:
      'Digital forensic recovery platform integrating deep learning carving into a high-performance Rust backend to reconstruct non-contiguous disk files.',
    problem:
      'Corrupted and fragmented disk images lose metadata headers, rendering classical carving algorithms incapable of reassembling orphaned blocks.',
    approach:
      'Built a Swin Transformer V2 model with ONNX Runtime acceleration and probabilistic graph reassembly.',
    dataset:
      'Raw binary block traces across 10+ file format specifications.',
    architecture: [
      'Rust Zero-Copy Disk Reader',
      'Swin Transformer V2 Backbone',
      'ONNX Runtime Inference Engine',
      'Probabilistic Graph Fragment Reassembler',
    ],
    results: [
      { metric: 'Accuracy', value: '~93%', detail: 'Across 10+ orphaned file format headers' },
      { metric: 'Inference', value: '<8ms', detail: 'ONNX Runtime acceleration per 4KB block' },
      { metric: 'Backend', value: 'Rust', detail: 'Zero-copy memory safety & high throughput' },
    ],
    highlights: [
      'Collaborated on a forensic recovery platform, integrating an ML carving pipeline into a Rust backend to process raw disk images.',
      'Built a Swin Transformer V2 model achieving ~93% accuracy in classifying orphaned, headerless 4KB blocks across 10+ file formats.',
      'Exported to ONNX Runtime to achieve <8ms inference per block and used probabilistic graph reassembly to reconstruct non-contiguous fragments.',
    ],
  },
  {
    id: 'rewear',
    number: '04',
    title: 'ReWear',
    tagline: 'Automated fabric composition verification and circular textile redistribution powered by lightweight Vision Transformers.',
    tags: ['MobileViT', 'Computer Vision', 'PyTorch', 'ONNX Runtime'],
    category: 'Computer Vision',
    period: '2025',
    githubUrl: 'https://github.com/kusha-l921',
    overview:
      'A sustainability intelligence platform that analyzes textile microstructures via macro camera imagery to estimate fabric fiber blends and powers automated circular sorting.',
    problem:
      'Over 85% of textiles end up in landfills because garment tags are missing, faded, or counterfeit, preventing recyclers from sorting garments into pure streams.',
    approach:
      'Trained a lightweight Vision Transformer fine-tuned on microscopic textile weave patterns with contrastive self-supervised learning (SimCLR).',
    dataset:
      'Curated microscopic and macro fabric captures with certified lab chemical assay ground truth.',
    architecture: [
      'Mobile Camera Macro Lens Capture',
      'Contrastive Weave Feature Extractor',
      'Multi-Label Fiber Composition Regressor',
      'ONNX Mobile Runtime',
    ],
    results: [
      { metric: 'Accuracy', value: '91.6%', detail: 'Tested on multi-blend synthetic/organic samples' },
      { metric: 'Inference', value: '24ms', detail: 'On-device inference via ONNX Runtime' },
      { metric: 'Model Size', value: '8.2M', detail: 'Parameters optimized for edge mobile devices' },
    ],
    highlights: [
      'Trained a lightweight Vision Transformer fine-tuned on microscopic textile weave patterns with contrastive self-supervised learning.',
      'Achieved 91.6% fabric composition accuracy across multi-blend samples with on-device inference at 24ms via ONNX Runtime.',
      'Built an automated verification pipeline to assess circular garment durability without destructive testing.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Deep Learning', 'XAI', 'Statistical Modeling'],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    skills: ['OpenCV', 'Vision Transformers (ViT)', 'Swin Transformer', 'Image Processing', 'CIELAB Modeling', 'Spatial Attention'],
  },
  {
    id: 'dev',
    title: 'Development',
    skills: ['Python', 'C/C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    id: 'web',
    title: 'Web & APIs',
    skills: ['Next.js', 'FastAPI', 'Flask', 'Django', 'REST APIs'],
  },
  {
    id: 'tools',
    title: 'Tools & Systems',
    skills: ['Git', 'GitHub', 'Linux / Bash', 'Docker', 'ONNX Runtime', 'Sunpy', 'VS Code'],
  },
];

export const QUICK_NAV_CARDS = [
  {
    number: '01',
    title: 'ABOUT',
    description: 'Get to know me, my interests and what I do.',
    target: '#about',
  },
  {
    number: '02',
    title: 'EDUCATION',
    description: 'My academic background and verified honors.',
    target: '#education',
  },
  {
    number: '03',
    title: 'PROJECTS',
    description: 'Explore my featured work and systems.',
    target: '#projects',
  },
  {
    number: '04',
    title: 'SKILLS',
    description: 'Tools and technologies I work with.',
    target: '#skills',
  },
  {
    number: '05',
    title: 'CONTACT',
    description: "Let's build something amazing together.",
    target: '#contact',
  },
];
