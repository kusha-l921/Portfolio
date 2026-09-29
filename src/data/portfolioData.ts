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
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning & Neural Networks',
    'Computer Vision & Image Processing',
    'Operating Systems & Systems Programming',
    'Linear Algebra & Calculus',
    'Probability & Statistics',
    'Database Management Systems',
    'Distributed Systems',
  ],
  researchFocus: [
    'Spatiotemporal Vision Transformers for solar event forecasting',
    'Lightweight training-free vision pipelines on low-power CPUs',
    'Deep learning block classification for forensic data recovery',
  ],
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'loc-8-exportify',
    number: '01',
    projectName: 'Exportify',
    title: 'Lines of Code (LOC 8.0) — National-Level Hackathon',
    competition: 'Lines of Code (LOC 8.0) National-Level Hackathon',
    award: '1st Place Winner',
    organizer: 'National-Level Hackathon (1000+ Participants)',
    date: '2026',
    badge: '1ST PLACE / 1000+ PARTICIPANTS',
    collapsedSummary: 'AI-driven B2B trade platform for intelligent buyer–exporter matching.',
    description: 'AI-driven B2B trade platform for intelligent buyer–exporter matching.',
    whatWeBuilt:
      'Exportify is an AI-driven B2B trade platform designed to automate international commerce by pairing global buyers/demanders with verified exporters/suppliers.',
    whatWeBuiltBullets: [
      'Compatibility assessment across multi-dimensional criteria',
      'Logistics feasibility & fulfillment timeline validation',
      'Comprehensive risk profiling to support intelligent international trade matching',
    ],
    technicalSections: [
      {
        heading: 'Technical Architecture',
        subsections: [
          {
            title: 'Backend & Business Logic',
            content:
              'Python-based full-stack architecture handling request routing, data processing, and trade intelligence.',
          },
          {
            title: 'Database (PostgreSQL)',
            content:
              'Used for structured information storage and high-integrity transactional records:',
            bullets: [
              'Supplier catalogs and verification credentials',
              'Buyer requests and order specifications',
              'Trade compliance records and customs requirements',
            ],
          },
        ],
      },
      {
        heading: 'Matching & Optimization Engine',
        subsections: [
          {
            title: 'Operations Research / Mathematical Optimization',
            content:
              'Supplier-demander allocation engine that mathematically evaluates allocation solutions against strict real-world limits:',
            bullets: [
              'Supplier capacity constraints and quota allocations',
              'Minimum order quantities (MOQs)',
              'Delivery deadlines and production lead times',
            ],
          },
          {
            title: 'Multi-Factor Scoring Engine',
            content:
              'Evaluates compatibility across multiple weighted dimensions:',
            bullets: [
              'Product specifications and technical standards',
              'International trade certifications and compliance',
              'Pricing tolerances and currency stability',
              'Historical fulfillment reliability and score tracking',
            ],
          },
        ],
      },
      {
        heading: 'Trade & Logistics Risk Engine',
        description:
          'Evaluates end-to-end supply chain risk before trade recommendations are finalized:',
        bullets: [
          'Transit lead times and multi-modal freight reliability',
          'Geopolitical and shipping-lane disruption risk indexing',
          'Cross-border regulatory compliance and tariff variance',
        ],
      },
    ],
    resultSummary: '1st Place / 1000+ Participants',
    resultBullets: [
      '1st Place Winner at Lines of Code (LOC 8.0) National-Level Hackathon',
      'Selected as top solution among 1000+ registered engineering participants',
    ],
  },
  {
    id: 'drishti-ai-copycop',
    number: '02',
    projectName: 'CopyCop / Dexit AI',
    title: 'Drishti AI Hackathon 2026',
    competition: 'Drishti AI Hackathon 2026',
    award: '1st Runner-Up (2nd Place)',
    organizer: 'Organized by Dexit Global (250+ Teams)',
    date: '2026',
    badge: '1ST RUNNER-UP / 250+ TEAMS',
    collapsedSummary: 'Real-time computer-vision monitoring system for behavioral risk and anomaly detection.',
    description: 'Real-time computer-vision monitoring system for behavioral risk and anomaly detection.',
    whatWeBuilt:
      'CopyCop / Dexit AI is a computer-vision surveillance system designed to continuously understand activity in CCTV footage and generate real-time behavioral risk signals rather than simply detecting individual objects.',
    pipeline: [
      'CCTV Camera',
      'Video Stream',
      'Frame Processing',
      'Person Detection',
      'Multi-Person Tracking',
      'Behavioral Features',
      'Risk Assessment',
      'Real-Time Alert',
    ],
    technicalSections: [
      {
        heading: 'Person Detection & Multi-Person Tracking',
        subsections: [
          {
            title: 'Person Detection',
            content:
              'The system identifies people in the camera feed across variable lighting, angles, and occlusions.',
          },
          {
            title: 'Multi-Person Tracking',
            content:
              'Maintains consistent identities across video frames so activity can be analyzed over time rather than treating every frame independently in isolation:',
            bullets: [
              'Temporal identity continuity: Person #17 → Frame 100 → Frame 101 → Frame 102 → Frame 103',
              'Preserves trajectories and positional sequences essential for downstream behavioral analysis',
            ],
          },
        ],
      },
      {
        heading: 'Behavioral Risk Scoring & Anomaly Detection',
        subsections: [
          {
            title: 'Continuous Behavioral Risk Scoring',
            content:
              'Instead of a brittle binary flag (SUSPICIOUS = TRUE), the system computes a continuous behavioral risk gradient:',
            bullets: [
              'Continuous scale: Risk Score 0 (Normal) ─────────────────────── 100 (High Risk)',
              'Monitored signals: movement patterns, interaction patterns, temporal behavior, and tracked activity',
            ],
          },
          {
            title: 'Anomaly / Misconduct Detection',
            content:
              'Identifies activities that statistically deviate from expected behavioral baselines:',
            bullets: [
              'Evaluation flow: Normal activity → Expected behavior → Observed behavior → Deviation → Risk assessment',
              'Flags sudden trajectory anomalies, irregular proximity clustering, and non-compliant activity',
            ],
          },
        ],
      },
      {
        heading: 'Real-Time Alerts & Privacy-Preserving Edge Architecture',
        subsections: [
          {
            title: 'Real-Time Event Surfacing',
            content:
              'Detection → Tracking → Behavior analysis → Risk threshold → Alert. Surfaces critical events requiring immediate attention instead of requiring an operator to continuously monitor every camera feed.',
          },
          {
            title: 'Privacy / Edge Angle',
            content:
              'Engineered around privacy-preserving edge execution: Camera → Local / Edge processing → Detection + tracking → Behavioral analysis → Alert / metadata. Raw video frames remain localized on-device while only anonymized metadata and alerts are transmitted.',
          },
        ],
      },
    ],
    resultSummary: '1st Runner-Up / 250+ Teams',
    resultBullets: [
      '1st Runner-Up (2nd Place) at Drishti AI Hackathon 2026',
      'Recognized among 250+ competing teams for real-time edge computer vision architecture',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'prometheus',
    number: '01',
    title: 'PROMETHEUS',
    tagline: 'Browser-based prompt intelligence system that analyzes messy user prompts, extracts requirements, and reconstructs structured prompts.',
    tags: ['TypeScript', 'Vite', 'Chrome Extension APIs', 'Shadow DOM', 'NLP'],
    category: 'AI / ML',
    period: '2026',
    githubUrl: 'https://github.com/kusha-l921/prometheus',
    overview:
      'A browser-based prompt intelligence system designed to analyze messy user prompts, extract intent and requirements, remove noise and redundancy, preserve constraints, and reconstruct a stronger structured prompt.',
    problem:
      'Raw human prompts sent to foundation models are frequently unstructured, conversational, and redundant, leading to hallucinations, degraded generation quality, and wasted context tokens.',
    approach:
      'Engineered local client-side processing using TypeScript, Vite, Chrome Extension APIs, Content Scripts, and Shadow DOM injection with dual-mode prompt reconstruction.',
    architecture: [
      'Prompt Detection & Requirement Extraction',
      'Constraint Scoring & Deduplication Engine',
      'Shadow DOM Browser Extension Architecture',
    ],
    results: [
      { metric: 'Processing', value: 'Local/Client', detail: 'Zero-latency browser-side processing' },
      { metric: 'Reconstruction', value: 'Dual Mode', detail: 'Optimized analytical & Caveman execution' },
      { metric: 'Architecture', value: 'Shadow DOM', detail: 'Platform-specific adapters & content scripts' },
    ],
    highlights: [
      'Engineered a browser-based prompt intelligence system to analyze messy prompts, extract intent and constraints, and remove redundancy.',
      'Implemented requirement extraction, constraint detection, importance scoring, and deduplication locally without server latency.',
      'Built a resilient Chrome Extension architecture with Content Scripts, Shadow DOM styling isolation, and platform-specific adapters.',
    ],
  },
  {
    id: 'llm-council',
    number: '02',
    title: 'LLM Council',
    tagline: 'Multi-agent reasoning system orchestrating specialized agents to generate, challenge, refine, and evaluate solutions before final response.',
    tags: ['Python', 'LangGraph', 'Groq', 'Pydantic', 'Streamlit'],
    category: 'AI / ML',
    period: '2026',
    githubUrl: 'https://github.com/kusha-l921/llm-council',
    overview:
      'A multi-agent reasoning system that uses specialized agents to generate, challenge, refine, and evaluate solutions before producing a final verified response.',
    problem:
      'Single-pass LLM completions suffer from unverified assumptions, cognitive bias, and inability to self-correct complex analytical tasks without structured adversarial evaluation.',
    approach:
      'Architected a stateful multi-agent DAG in LangGraph orchestrating Proponent → Adversary → Refiner → Robustness Evaluator → Judge with shared state and conditional routing.',
    architecture: [
      'Proponent → Adversary → Refiner Pipeline',
      'Robustness Evaluator & Judge Layer',
      'LangGraph Stateful Multi-Agent DAG',
    ],
    results: [
      { metric: 'Orchestration', value: 'LangGraph DAG', detail: 'Multi-agent stateful conditional routing' },
      { metric: 'Pipeline', value: '5 Agents', detail: 'Proponent, Adversary, Refiner, Evaluator, Judge' },
      { metric: 'Inference', value: 'Groq LPU', detail: 'High-throughput LLM reasoning inference' },
    ],
    highlights: [
      'Architected a multi-agent reasoning system where specialized agents collaboratively generate, challenge, refine, and evaluate solutions before final response generation.',
      'Orchestrated a 5-stage pipeline: Proponent generation, Adversarial critique, Refiner reconciliation, Robustness evaluation, and Judge arbitration.',
      'Configured conditional routing, shared state propagation, and early termination on high-confidence solutions with Pydantic validation.',
    ],
  },
  {
    id: 'solar-flare',
    number: '03',
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
    number: '04',
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
    number: '05',
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
    number: '06',
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
