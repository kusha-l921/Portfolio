import { Project, SkillItem, ExperienceItem, AchievementItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Kushal',
  role: 'AI/ML Engineer',
  subtitles: ['AI/ML Engineer', 'Builder', 'Problem Solver'],
  statement: 'I build intelligent systems that solve real-world problems.',
  bio: 'I work at the intersection of machine learning, computer vision, and real-world problem solving — turning mathematical ideas into scalable, reliable production systems.',
  education: {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'DJ Sanghvi College of Engineering',
    university: 'University of Mumbai',
    period: '2022 — 2026',
    details: 'Coursework in Deep Learning, Computer Vision, Distributed Systems, Optimization, and Robotics.',
  },
  socials: {
    github: 'https://github.com/kushal-engineer',
    linkedin: 'https://linkedin.com/in/kushal-ai',
    email: 'kushal.ai.engineer@gmail.com',
  },
  terminalPrompt: 'kushal@portfolio:~$',
};

export const ABOUT_INFO = {
  biography: [
    "I'm an AI/ML engineering student at DJ Sanghvi College of Engineering, University of Mumbai. Driven by a fascination with computational systems and neural representations, I build production-ready software that solves genuine physical and engineering challenges.",
    "My focus centers on first-principles engineering: understanding the mathematics behind gradients, profiling system memory bottlenecks before scaling hardware, and creating clean architectures that make machine learning models observable and dependable.",
  ],
  focus: ['Machine Learning', 'Computer Vision', 'AI Systems'],
  learning: ['Cloud Infrastructure', 'Distributed Systems', 'Edge Deployment'],
  interests: ['Autonomous Agents', 'Open Source Software', 'Scientific Research'],
};

export const PROJECTS: Project[] = [
  {
    id: 'solar-flare',
    slug: 'solar-flare-prediction',
    number: '01',
    title: 'Solar Flare Early Warning System',
    tagline: 'Scientific Heliophysics Forecasting via Spatiotemporal Vision Transformers',
    category: 'AI/ML',
    featured: true,
    gridSpan: 'col-span-12',
    illustrationType: 'solar',
    overview:
      'A deep learning framework engineered to predict severe solar flares (M- and X-class) 24 to 48 hours prior to eruption using extreme ultraviolet magnetogram feeds from the NASA Solar Dynamics Observatory (SDO/AIA).',
    problem:
      'Solar storms induce coronal mass ejections that disrupt global satellite constellations, power grids, and high-frequency communication without adequate early warning intervals.',
    approach:
      'Developed a hybrid Magnetohydrodynamic (MHD) physics-informed Vision Transformer combined with temporal convolutions, tracking solar active region magnetic gradient tensions to compute probabilistic flare classifications.',
    dataset:
      'NASA SDO Helioseismic and Magnetic Imager (HMI) + Atmospheric Imaging Assembly (AIA), covering 1.4 TB of solar magnetic field data spanning Solar Cycle 24 and 25.',
    architecture: [
      'SDO UV Multi-channel Ingestion',
      'Magnetic Gradient Preprocessing',
      'Patch Embedding + Positional Encoding',
      'MHD Attention Blocks',
      'Probabilistic Flare Head (M/X Class)',
      'Real-Time Telemetry Alert API',
    ],
    model: 'SpatioTemporal ViT-MHD (38M Parameters)',
    results: [
      { metric: 'True Skill Statistic (TSS)', value: '0.84', detail: 'Outperformed NOAA SWPC baseline by 22%' },
      { metric: 'Early Warning Window', value: '36 Hours', detail: 'Sufficient lead time for orbital satellite safe-mode' },
      { metric: 'False Positive Rate', value: '< 4.1%', detail: 'Minimizes unwarranted alert fatigue' },
      { metric: 'Inference Latency', value: '18.4ms', detail: 'Optimized on NVIDIA TensorRT' },
    ],
    techStack: ['Python', 'PyTorch', 'TorchVision', 'FastAPI', 'OpenCV', 'Docker'],
    challenges: [
      'Severe class imbalance: X-class flares occur in less than 0.12% of observation timestamps.',
      'Calibrating solar limb darkening effects and instrumental degradation over multi-year satellite lifespans.',
    ],
    futureWork: [
      'Integration with ESA Solar Orbiter telemetry for 360-degree solar far-side stereoscopic coverage.',
      'Deployment of quantized INT8 edge weights on low-Earth orbit CubeSat prototypes.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/solar-flare-warning',
    demoUrl: 'https://solar-prediction.demo.ai',
  },
  {
    id: 'fleet-management',
    slug: 'autonomous-fleet-optimization',
    number: '02',
    title: 'Autonomous Fleet Telemetry & Routing',
    tagline: 'Multi-Agent Dynamic Path Planning & Predictive Maintenance for Fleets',
    category: 'Distributed Systems',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-6',
    illustrationType: 'fleet',
    overview:
      'A real-time dispatch engine for commercial electric autonomous delivery fleets. Combines graph neural networks with reinforcement learning for congestion-aware dynamic routing and battery degradation prevention.',
    problem:
      'Urban logistics fleets suffer from 34% energy waste during unpredictable peak traffic bottlenecks and uncoordinated rapid charging cycles that accelerate battery cell degradation.',
    approach:
      'Constructed a high-throughput microservices architecture ingesting 50,000 telemetry pings/sec. Integrated spatio-temporal Graph Neural Networks (ST-GNN) to forecast traffic density, coupled with multi-agent reinforcement learning for collaborative routing.',
    dataset:
      'Synthesized & anonymized telemetry logs from 400 commercial delivery vans across Mumbai and Pune road networks over 9 months.',
    architecture: [
      'High-throughput MQTT Ingest',
      'Kafka Event Streaming Pipeline',
      'Spatio-Temporal Graph Neural Network',
      'Dynamic Dijkstra / A* Routing Engine',
      'State-of-Charge (SoC) Thermal Estimator',
    ],
    model: 'Hierarchical Multi-Agent RL + ST-GNN',
    results: [
      { metric: 'Fleet Energy Reduction', value: '-19.4%', detail: 'Verified across 100 simulated vehicle test tracks' },
      { metric: 'On-Time Delivery SLA', value: '98.2%', detail: 'Maintained during peak hours' },
    ],
    techStack: ['Python', 'Go', 'PyTorch', 'Kafka', 'Redis', 'Docker'],
    challenges: [
      'Scaling graph convolution operations to 40,000 dynamic road edges in sub-second dispatch intervals.',
    ],
    futureWork: [
      'Vehicle-to-Grid (V2G) bidirectional energy arbitrage integration during grid peak price surges.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/autonomous-fleet-routing',
    demoUrl: 'https://fleet-telemetry.demo.ai',
  },
  {
    id: 'rewear-ecosystem',
    slug: 'rewear-circular-fashion-ai',
    number: '03',
    title: 'ReWear: Circular Textile AI Classifier',
    tagline: 'Automated Fabric Composition Verification & Peer-to-Peer Redistribution',
    category: 'Computer Vision',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-6',
    illustrationType: 'rewear',
    overview:
      'A sustainability intelligence platform that analyzes textile microstructures via macro camera imagery to estimate fabric fiber blends (cotton, polyester, elastane) and powers an automated circular exchange marketplace.',
    problem:
      'Over 85% of textiles end up in landfills because garment tags are missing, faded, or counterfeit, preventing industrial textile recyclers from sorting garments into pure chemical recycling streams.',
    approach:
      'Trained a lightweight Vision Transformer fine-tuned on microscopic textile weave patterns with contrastive self-supervised learning (SimCLR). Deployed on mobile devices for instant on-device composition verification.',
    dataset:
      'Curated dataset of 45,000 microscopic and macro fabric captures with certified lab chemical assay ground truth.',
    architecture: [
      'Mobile Camera Macro Lens Capture',
      'Contrastive Weave Feature Extractor',
      'Multi-Label Fiber Composition Regressor',
      'P2P Circular Exchange Routing Engine',
    ],
    model: 'MobileViT-Contrastive (8.2M Parameters)',
    results: [
      { metric: 'Composition Accuracy', value: '91.6%', detail: 'Tested on multi-blend synthetic/organic samples' },
      { metric: 'Garments Diverted', value: '12,400+', detail: 'During pilot campus exchange initiative' },
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Next.js', 'OpenCV'],
    challenges: [
      'Differentiating worn natural cotton from brushed synthetic microfibers under varied ambient lighting.',
    ],
    futureWork: [
      'Near-infrared (NIR) smartphone sensor integration for direct polymer molecular resonance detection.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/rewear-ai-ecosystem',
    demoUrl: 'https://rewear.demo.ai',
  },
  {
    id: 'edge-vision-ai',
    slug: 'edge-vision-defect-detector',
    number: '04',
    title: 'Ultra-Low Latency Edge Vision Inspector',
    tagline: 'TensorRT-Quantized Defect Detection at 240 FPS on Industrial Production Lines',
    category: 'Computer Vision',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    illustrationType: 'vision',
    overview:
      'High-speed industrial visual inspection system running quantized YOLOv9 on embedded NVIDIA Jetson Orin modules. Detects microscopic PCB soldering voids and component misalignments at conveyor belt speeds.',
    problem:
      'Manual PCB inspection is slow, fatigue-prone, and misses 6% of critical solder bridging faults that lead to catastrophic hardware failure post-assembly.',
    approach:
      'Customized YOLOv9 with RepVGG backbones, pruned 40% of non-essential convolutional channels, and applied INT8 Post-Training Quantization with calibration on defect edge distributions.',
    dataset:
      'High-resolution multi-angle industrial PCB assembly images (35,000 annotated microscopic frames).',
    architecture: [
      'Industrial Camera Frame Ingest',
      'Zero-Copy CUDA Frame Preprocessing',
      'INT8 Quantized YOLOv9 TensorRT Engine',
      'Sub-pixel Bounding Box Refinement',
    ],
    model: 'Quantized INT8 YOLOv9 (4.1ms / frame)',
    results: [
      { metric: 'Inference Throughput', value: '240 FPS', detail: 'Zero frame drop at 1080p resolution' },
      { metric: 'Defect Recall', value: '99.4%', detail: 'Meets automotive tier-1 compliance' },
    ],
    techStack: ['C++', 'CUDA', 'Python', 'TensorRT', 'OpenCV'],
    challenges: [
      'Overcoming quantization noise on microscopic specular reflections without dropping detection recall.',
    ],
    futureWork: ['Stereo photometric reconstruction for 3D solder volume measurement.'],
    githubUrl: 'https://github.com/kushal-engineer/edge-vision-tensorrt',
  },
  {
    id: 'autonomous-agent-swarm',
    slug: 'hierarchical-llm-agent-swarm',
    number: '05',
    title: 'Autonomous Multi-Agent Systems Engine',
    tagline: 'Hierarchical LLM Swarm for Automated System Synthesis & Security Auditing',
    category: 'AI/ML',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    illustrationType: 'swarm',
    overview:
      'A distributed multi-agent coordinator that orchestrates specialized LLM instances (Architect, Implementer, Fuzz Tester, Security Auditor) to generate, verify, and formally test backend microservices from natural language specs.',
    problem:
      'Single-prompt LLM code generation regularly generates brittle architectures, hallucinated APIs, and undetected security vulnerabilities like injection vectors.',
    approach:
      'Implemented a directed acyclic graph (DAG) consensus protocol where agents iteratively critique, generate unit tests, execute sandboxed code in Docker containers, and require consensus before merging solutions.',
    dataset:
      'Curated repository of 12,000 open-source microservices, CVE vulnerability databases, and synthetic unit test suites.',
    architecture: [
      'Specification Decomposer Agent',
      'Graph-of-Thought Decision Router',
      'Sandboxed Docker Execution Environment',
      'Formal Verification & Fuzzing Oracle',
    ],
    model: 'Multi-Agent Ensemble (Llama-3 + Claude + DeepSeek-Coder)',
    results: [
      { metric: 'Test Pass Rate', value: '93.2%', detail: 'Compared to 61% baseline single-agent attempts' },
      { metric: 'Security Flaw Catch Rate', value: '88.7%', detail: 'Identified vulnerabilities pre-merge' },
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'Redis', 'LangChain'],
    challenges: [
      'Preventing infinite argumentative critique loops between the Tester and Implementer agents.',
    ],
    futureWork: ['Persistent vector memory for cross-repository architectural context.'],
    githubUrl: 'https://github.com/kushal-engineer/multi-agent-system-swarm',
  },
  {
    id: 'distributed-ml-pipeline',
    slug: 'distributed-streaming-ml-pipeline',
    number: '06',
    title: 'Distributed Real-Time Feature Store & Training Pipeline',
    tagline: 'Sub-Millisecond Online Feature Serving & Ray Cluster Distributed Training',
    category: 'Distributed Systems',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    illustrationType: 'pipeline',
    overview:
      'End-to-end MLOps platform managing real-time feature transformation streams from Apache Flink to Feast feature store, orchestrating distributed PyTorch model training over multi-GPU Ray clusters.',
    problem:
      'Training-serving skew and inconsistent feature definitions between offline training datasets and online production inference engines lead to silent model degradation.',
    approach:
      'Designed a unified schema feature pipeline using Apache Arrow and Feast. Configured automated model drift detection using Wasserstein distance metrics that trigger Ray distributed fine-tuning jobs.',
    dataset:
      'High-velocity streaming financial transaction logs and tabular user interaction telemetry.',
    architecture: [
      'Kafka Event Streaming Layer',
      'Flink Real-time Windowing & Aggregation',
      'Feast Online (Redis) & Offline (Parquet) Store',
      'Ray Train Multi-Node Cluster Orchestrator',
    ],
    model: 'Distributed PyTorch DDP + Ray Train',
    results: [
      { metric: 'Online Read Latency', value: '1.2ms', detail: 'p99 latency under 20k QPS' },
      { metric: 'Training-Serving Skew', value: '0.0%', detail: 'Eliminated completely via unified Arrow schema' },
    ],
    techStack: ['Python', 'Go', 'Kafka', 'Ray', 'Redis', 'Docker'],
    challenges: [
      'Maintaining atomic cross-partition consistency during high-volume online Redis upserts.',
    ],
    futureWork: ['Serverless auto-scaling worker nodes dynamically scheduled on spot GPU instances.'],
    githubUrl: 'https://github.com/kushal-engineer/distributed-ml-pipeline',
  },
];

export const SKILL_GROUPS: { category: SkillItem['category']; skills: SkillItem[] }[] = [
  {
    category: 'Programming',
    skills: [
      {
        id: 'python',
        name: 'Python',
        category: 'Programming',
        description: 'Core language for ML research, data engineering, asynchronous servers, and algorithmic development.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Fleet Telemetry & Routing', 'ReWear: Circular Textile AI Classifier', 'Autonomous Multi-Agent Systems Engine'],
        relatedTech: ['PyTorch', 'TensorFlow', 'FastAPI', 'OpenCV'],
      },
      {
        id: 'java',
        name: 'Java',
        category: 'Programming',
        description: 'Object-oriented systems architecture, JVM profiling, and enterprise distributed services.',
        relatedProjects: ['Autonomous Fleet Telemetry & Routing'],
        relatedTech: ['Kafka', 'Docker'],
      },
      {
        id: 'go',
        name: 'Go',
        category: 'Programming',
        description: 'High-throughput microservices, concurrent goroutine worker pools, and low-latency network proxies.',
        relatedProjects: ['Autonomous Fleet Telemetry & Routing', 'Distributed Real-Time Feature Store & Training Pipeline'],
        relatedTech: ['Docker', 'Kafka', 'Linux'],
      },
      {
        id: 'cpp',
        name: 'C / C++',
        category: 'Programming',
        description: 'High-performance computing, custom CUDA memory kernels, and embedded edge inferencing runtimes.',
        relatedProjects: ['Ultra-Low Latency Edge Vision Inspector'],
        relatedTech: ['OpenCV', 'Linux'],
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Programming',
        description: 'Type-safe full-stack application development, modern frontend interfaces, and interactive tooling.',
        relatedProjects: ['ReWear: Circular Textile AI Classifier'],
        relatedTech: ['Next.js', 'React'],
      },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      {
        id: 'pytorch',
        name: 'PyTorch',
        category: 'AI / ML',
        description: 'Deep neural networks, custom autograd operators, distributed training (DDP), and TorchScript optimization.',
        relatedProjects: ['Solar Flare Early Warning System', 'Ultra-Low Latency Edge Vision Inspector', 'ReWear: Circular Textile AI Classifier'],
        relatedTech: ['Python', 'OpenCV', 'scikit-learn'],
      },
      {
        id: 'tensorflow',
        name: 'TensorFlow',
        category: 'AI / ML',
        description: 'Model graph deployment, quantization workflows (TFLite), and production serving architectures.',
        relatedProjects: ['Autonomous Fleet Telemetry & Routing'],
        relatedTech: ['Python', 'Docker'],
      },
      {
        id: 'opencv',
        name: 'OpenCV',
        category: 'AI / ML',
        description: 'Real-time video stream filtering, morphological transforms, feature descriptors, and camera calibration.',
        relatedProjects: ['Solar Flare Early Warning System', 'Ultra-Low Latency Edge Vision Inspector', 'ReWear: Circular Textile AI Classifier'],
        relatedTech: ['Python', 'C / C++', 'PyTorch'],
      },
      {
        id: 'scikit-learn',
        name: 'scikit-learn',
        category: 'AI / ML',
        description: 'Classical statistical learning, feature engineering pipelines, cross-validation, and metrics evaluation.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Fleet Telemetry & Routing'],
        relatedTech: ['Python', 'PyTorch'],
      },
    ],
  },
  {
    category: 'Web & Backend',
    skills: [
      {
        id: 'react',
        name: 'React',
        category: 'Web & Backend',
        description: 'Component architecture, responsive state machines, and performant web client interfaces.',
        relatedProjects: ['ReWear: Circular Textile AI Classifier'],
        relatedTech: ['TypeScript', 'Next.js'],
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        category: 'Web & Backend',
        description: 'Production React framework, server-side rendering, and static site generation.',
        relatedProjects: ['ReWear: Circular Textile AI Classifier'],
        relatedTech: ['React', 'TypeScript'],
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        category: 'Web & Backend',
        description: 'Asynchronous Python REST APIs, OpenAPI specifications, and sub-millisecond model inference endpoints.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Multi-Agent Systems Engine'],
        relatedTech: ['Python', 'Docker'],
      },
      {
        id: 'flask',
        name: 'Flask',
        category: 'Web & Backend',
        description: 'Lightweight WSGI services, rapid prototyping, and microservice integration hooks.',
        relatedProjects: ['ReWear: Circular Textile AI Classifier'],
        relatedTech: ['Python', 'FastAPI'],
      },
      {
        id: 'django',
        name: 'Django',
        category: 'Web & Backend',
        description: 'Full-featured web framework, ORM data modelling, authentication, and administrative tooling.',
        relatedProjects: ['Autonomous Fleet Telemetry & Routing'],
        relatedTech: ['Python'],
      },
    ],
  },
  {
    category: 'Systems & DevOps',
    skills: [
      {
        id: 'linux',
        name: 'Linux',
        category: 'Systems & DevOps',
        description: 'POSIX shell scripting, kernel profiling, systemd service daemon management, and headless server operation.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Fleet Telemetry & Routing', 'Distributed Real-Time Feature Store & Training Pipeline'],
        relatedTech: ['Docker', 'Git', 'C / C++'],
      },
      {
        id: 'docker',
        name: 'Docker',
        category: 'Systems & DevOps',
        description: 'Multi-stage container builds, reproducible runtime sandboxing, and GPU container toolkit integration.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Multi-Agent Systems Engine', 'Distributed Real-Time Feature Store & Training Pipeline'],
        relatedTech: ['Linux', 'Git'],
      },
      {
        id: 'git',
        name: 'Git',
        category: 'Systems & DevOps',
        description: 'Trunk-based version control, branch isolation, automated CI/CD GitHub workflows, and release tagging.',
        relatedProjects: ['Solar Flare Early Warning System', 'Autonomous Fleet Telemetry & Routing', 'ReWear: Circular Textile AI Classifier'],
        relatedTech: ['Linux'],
      },
      {
        id: 'kafka',
        name: 'Kafka',
        category: 'Systems & DevOps',
        description: 'High-throughput partitioned event logs, pub/sub streaming architecture, and decoupled backends.',
        relatedProjects: ['Autonomous Fleet Telemetry & Routing', 'Distributed Real-Time Feature Store & Training Pipeline'],
        relatedTech: ['Go', 'Docker', 'Linux'],
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'Systems & DevOps',
        description: 'Container orchestration, declarative ingress topologies, and GPU cluster workload scheduling.',
        relatedProjects: ['Distributed Real-Time Feature Store & Training Pipeline'],
        relatedTech: ['Docker', 'Linux'],
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-2026',
    year: '2026',
    role: 'Autonomous AI Systems Lead',
    organization: 'AI & Robotics Research Lab, DJSCE',
    location: 'Mumbai, India',
    period: 'Jan 2026 — Present',
    description:
      'Leading a research group engineering autonomous multi-agent coordination architectures and real-time edge computer vision pipelines.',
    achievements: [
      'Architected a distributed multi-agent DAG consensus protocol achieving 93.2% test validation pass rate.',
      'Benchmarked edge transformer models across embedded NVIDIA Jetson modules.',
      'Mentored 12 junior researchers in reproducible deep learning workflows.',
    ],
    technologies: ['PyTorch', 'TensorRT', 'CUDA', 'Python', 'Docker'],
  },
  {
    id: 'exp-2025',
    year: '2025',
    role: 'Machine Learning Engineering Intern',
    organization: 'HyperScale AI Labs',
    location: 'Remote / Bengaluru, India',
    period: 'May 2025 — Nov 2025',
    description:
      'Engineered streaming feature store pipelines and optimized deep neural network inference latency for production APIs serving over 2M requests daily.',
    achievements: [
      'Reduced p99 inference latency by 42% by compiling models to TensorRT and tuning CUDA memory pools.',
      'Implemented automated model drift monitoring using Wasserstein distance metrics.',
      'Configured CI/CD automated validation pipelines using GitHub Actions.',
    ],
    technologies: ['PyTorch', 'FastAPI', 'Kafka', 'Docker', 'Redis'],
  },
  {
    id: 'exp-2024',
    year: '2024',
    role: 'Computer Vision & Deep Learning Researcher',
    organization: 'Undergraduate Research Group, University of Mumbai',
    location: 'Mumbai, India',
    period: 'Jan 2024 — Dec 2024',
    description:
      'Conducted foundational research on scientific satellite imagery analysis and solar magnetic active region classification for extreme solar flare forecasting.',
    achievements: [
      'Published peer-reviewed research on spatiotemporal vision transformers for solar flare forecasting.',
      'Processed and indexed 1.4 TB of NASA SDO multi-spectral imagery into optimized tensor stores.',
      'Achieved True Skill Statistic score of 0.84, exceeding established institutional baselines.',
    ],
    technologies: ['Python', 'TorchVision', 'OpenCV', 'scikit-learn'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Smart India Hackathon Finalist & Top Innovation',
    issuer: 'Ministry of Education, Govt of India',
    date: 'Dec 2024',
    badge: 'NATIONAL FINALIST',
    description:
      'Ranked among top teams nationwide for designing an AI-driven route optimization and emergency communication system under network blackouts.',
  },
  {
    id: 'ach-2',
    title: 'Peer-Reviewed Publication: Heliophysics & Deep Learning',
    issuer: 'International Conference on Machine Learning & Signal Processing',
    date: 'Oct 2024',
    badge: 'IEEE XPLORE',
    description:
      'Co-authored paper: "Physics-Informed Spatiotemporal Vision Transformers for Multi-Hour Solar Flare Prediction."',
  },
  {
    id: 'ach-3',
    title: 'NVIDIA Deep Learning Institute Certification',
    issuer: 'NVIDIA DLI',
    date: 'July 2024',
    badge: 'VERIFIED CREDENTIAL',
    description:
      'Accelerated computing with CUDA C/C++ and fundamentals of deep learning memory hierarchy optimization.',
  },
  {
    id: 'ach-4',
    title: 'DeepLearning.AI Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'March 2024',
    badge: 'SPECIALIZATION HONORS',
    description:
      'Rigorous 5-course sequence covering Neural Networks, Hyperparameter Tuning, CNNs, Sequence Models, and Structuring ML Projects.',
  },
];
