import { Project, SkillNode, ExperienceItem, AchievementItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'KUSHAL',
  fullName: 'Kushal',
  terminalPrompt: 'kushal@portfolio:~$',
  role: 'AI/ML Engineer & Systems Builder',
  headline: 'Building intelligent systems for a better tomorrow.',
  subheadline:
    'I work at the intersection of machine learning, computer vision, and real-world problem solving — turning ideas into scalable, impactful systems.',
  currentlyWorkingOn: {
    project: 'Solar Flare Prediction',
    model: 'MHD-Informed Spatiotemporal Transformer',
    status: 'ACTIVE_TRAINING_EPOCH_84',
    latency: '14.2ms',
    accuracy: '94.8% ROC-AUC',
  },
  education: {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Dwarkadas J. Sanghvi College of Engineering (DJSCE)',
    affiliation: 'University of Mumbai',
    period: '2022 — 2026',
    gpa: '9.42 / 10.0',
    coursework: [
      'Deep Learning & Neural Networks',
      'Computer Vision & Image Processing',
      'Distributed Systems & Cloud Computing',
      'Natural Language Processing',
      'Reinforcement Learning & Robotics',
      'Statistical Learning & Optimization',
    ],
  },
  socials: {
    github: 'https://github.com/kushal-engineer',
    linkedin: 'https://linkedin.com/in/kushal-ai',
    email: 'kushal.ai.engineer@gmail.com',
    twitter: 'https://x.com/kushal_builds',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'solar-flare',
    slug: 'solar-flare-prediction',
    title: 'Solar Flare Early Warning System',
    tagline: 'Scientific Heliophysics Forecasting via Spatiotemporal Vision Transformers',
    category: 'AI/ML',
    featured: true,
    gridSpan: 'col-span-12',
    sceneType: 'solar',
    overview:
      'A deep learning framework engineered to predict severe solar flares (M- and X-class) 24 to 48 hours prior to eruption using extreme ultraviolet magnetogram feeds from the NASA Solar Dynamics Observatory (SDO/AIA).',
    problem:
      'Solar storms induce coronal mass ejections that disrupt global satellite constellations, power grids, and aviation radio frequencies, causing billions in damage without adequate early warning intervals.',
    approach:
      'Developed a hybrid Magnetohydrodynamic (MHD) physics-informed Vision Transformer combined with bidirectional temporal convolutions. The system ingests 10 distinct UV wavelengths, tracks solar active region magnetic gradient tensions, and computes probabilistic flare classifications.',
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
    techStack: ['Python', 'PyTorch', 'TorchVision', 'CUDA', 'OpenCV', 'FastAPI', 'Three.js', 'Docker'],
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
    stats: [
      { label: 'Forecast Horizon', value: '36 hrs' },
      { label: 'SDO Data Ingested', value: '1.4 TB' },
      { label: 'TSS Score', value: '0.84' },
    ],
  },
  {
    id: 'fleet-management',
    slug: 'autonomous-fleet-optimization',
    title: 'Autonomous Fleet Telemetry & Routing',
    tagline: 'Multi-Agent Dynamic Path Planning & Predictive Maintenance for Electric Fleets',
    category: 'Distributed Systems',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-6',
    sceneType: 'fleet',
    overview:
      'A real-time digital twin and dispatch engine for commercial electric autonomous delivery fleets. Combines graph neural networks with reinforcement learning for congestion-aware dynamic routing and battery degradation prevention.',
    problem:
      'Urban logistics fleets suffer from 34% energy waste during unpredictable peak traffic bottlenecks and uncoordinated rapid charging cycles that accelerate battery cell degradation.',
    approach:
      'Constructed a high-throughput microservices architecture ingesting 50,000 telemetry pings/sec. Integrated spatio-temporal Graph Neural Networks (ST-GNN) to forecast traffic density 45 minutes ahead, coupling it with multi-agent reinforcement learning for collaborative routing.',
    dataset:
      'Synthesized & anonymized telemetry logs from 400 commercial delivery vans across Mumbai and Pune metropolitan road networks over 9 months.',
    architecture: [
      'High-throughput MQTT Telemetry Ingest',
      'Kafka Event Streaming Pipeline',
      'Spatio-Temporal Graph Neural Network',
      'Dynamic Dijkstra / A* Routing Engine',
      'State-of-Charge (SoC) Thermal Estimator',
      'Interactive 3D Digital Twin GUI',
    ],
    model: 'Hierarchical Multi-Agent RL + ST-GNN',
    results: [
      { metric: 'Fleet Energy Reduction', value: '-19.4%', detail: 'Verified across 100 simulated vehicle test tracks' },
      { metric: 'On-Time Delivery SLA', value: '98.2%', detail: 'Maintained during monsoon flooding peak hours' },
      { metric: 'Battery Lifespan Extension', value: '+14%', detail: 'Through temperature-aware regenerative braking paths' },
    ],
    techStack: ['Python', 'Go', 'PyTorch', 'Apache Kafka', 'Redis', 'Docker', 'PostgreSQL', 'Deck.gl'],
    challenges: [
      'Scaling graph convolution operations to 40,000 dynamic road edges in sub-second dispatch intervals.',
      'Handling intermittent cellular dead-zones with local vehicle edge failover heuristics.',
    ],
    futureWork: [
      'Vehicle-to-Grid (V2G) bidirectional energy arbitrage integration during grid peak price surges.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/autonomous-fleet-routing',
    demoUrl: 'https://fleet-telemetry.demo.ai',
    stats: [
      { label: 'Telemetry Throughput', value: '50k/sec' },
      { label: 'Energy Saved', value: '19.4%' },
      { label: 'SLA Reliability', value: '98.2%' },
    ],
  },
  {
    id: 'rewear-ecosystem',
    slug: 'rewear-circular-fashion-ai',
    title: 'ReWear: Circular Textile AI Ecosystem',
    tagline: 'Automated Fabric Composition Verification & Peer-to-Peer Textile Redistribution',
    category: 'Computer Vision',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-6',
    sceneType: 'rewear',
    overview:
      'A sustainability intelligence platform that analyzes textile microstructures via macro camera imagery to estimate fabric fiber blends (cotton, polyester, elastane) and powers an automated circular exchange marketplace.',
    problem:
      'Over 85% of textiles end up in landfills because garment tags are missing, faded, or counterfeit, preventing industrial textile recyclers from sorting garments into pure chemical recycling streams.',
    approach:
      'Trained a lightweight Vision Transformer fine-tuned on microscopic textile weave patterns with contrastive self-supervised learning (SimCLR). Deployed on mobile devices for instant on-device garment composition verification and circular swap value estimation.',
    dataset:
      'Curated dataset of 45,000 microscopic and macro fabric captures with certified lab chemical assay ground truth.',
    architecture: [
      'Mobile Camera Macro Lens Capture',
      'Contrastive Weave Feature Extractor',
      'Multi-Label Fiber Composition Regressor',
      'Lifecycle Environmental Footprint Calculator',
      'Decentralized Peer-to-Peer Swap Matching Engine',
    ],
    model: 'MobileViT-Contrastive (8.2M Parameters)',
    results: [
      { metric: 'Composition Accuracy', value: '91.6%', detail: 'Tested on multi-blend synthetic/organic samples' },
      { metric: 'Garments Diverted', value: '12,400+', detail: 'During pilot campus exchange initiative' },
      { metric: 'On-Device Inference', value: '24ms', detail: 'Runs smoothly on standard smartphones via ONNX Runtime' },
    ],
    techStack: ['Python', 'PyTorch', 'ONNX', 'FastAPI', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
    challenges: [
      'Differentiating worn natural cotton from brushed synthetic microfibers under varied ambient lighting.',
    ],
    futureWork: [
      'Near-infrared (NIR) smartphone sensor integration for direct polymer molecular resonance detection.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/rewear-ai-ecosystem',
    demoUrl: 'https://rewear.demo.ai',
    stats: [
      { label: 'Blend Precision', value: '91.6%' },
      { label: 'Items Diverted', value: '12.4k' },
      { label: 'Model Footprint', value: '16 MB' },
    ],
  },
  {
    id: 'edge-vision-ai',
    slug: 'edge-vision-defect-detector',
    title: 'Ultra-Low Latency Edge Vision Inspector',
    tagline: 'TensorRT-Quantized Defect Detection at 240 FPS on Industrial Production Lines',
    category: 'Computer Vision',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    sceneType: 'vision',
    overview:
      'High-speed industrial visual inspection system running quantized YOLOv9 on embedded NVIDIA Jetson Orin modules. Detects microscopic PCB soldering voids, surface fissures, and component misalignments at conveyor belt speeds.',
    problem:
      'Manual PCB and silicon inspection is slow, fatigue-prone, and misses 6% of critical solder bridging faults that lead to catastrophic hardware failure post-assembly.',
    approach:
      'Customized YOLOv9 with RepVGG backbones, pruned 40% of non-essential convolutional channels, and applied INT8 Post-Training Quantization with calibration on defect edge distributions.',
    dataset:
      'High-resolution multi-angle industrial PCB assembly images (35,000 annotated microscopic frames).',
    architecture: [
      'GigE Vision High-Speed Camera Capture',
      'Zero-Copy CUDA Frame Preprocessing',
      'INT8 Quantized YOLOv9 TensorRT Engine',
      'Sub-pixel Bounding Box Refinement',
      'OPC-UA Industrial PLC Pneumatic Reject Signal',
    ],
    model: 'Quantized INT8 YOLOv9-Custom (4.1ms / frame)',
    results: [
      { metric: 'Inference Throughput', value: '240 FPS', detail: 'Zero frame drop at 1080p resolution' },
      { metric: 'Defect Recall', value: '99.4%', detail: 'Crucial for zero-defect automotive tier-1 compliance' },
      { metric: 'Power Consumption', value: '14.2W', detail: 'Operates within fanless Jetson thermal envelope' },
    ],
    techStack: ['C++', 'CUDA', 'Python', 'TensorRT', 'OpenCV', 'ROS2', 'NVIDIA Jetson'],
    challenges: [
      'Overcoming quantization noise on microscopic specular reflections without dropping detection recall.',
    ],
    futureWork: [
      'Integration of 3D stereo photometric cameras for depth map solder volume computation.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/edge-vision-tensorrt',
    stats: [
      { label: 'Throughput', value: '240 FPS' },
      { label: 'Recall', value: '99.4%' },
      { label: 'Latency', value: '4.1ms' },
    ],
  },
  {
    id: 'autonomous-agent-swarm',
    slug: 'hierarchical-llm-agent-swarm',
    title: 'Autonomous Multi-Agent Systems Engine',
    tagline: 'Hierarchical LLM Swarm for Automated System Synthesis & Static Security Auditing',
    category: 'AI/ML',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    sceneType: 'swarm',
    overview:
      'A distributed multi-agent coordinator that orchestrates specialized LLM instances (Architect, Implementer, Fuzz Tester, Security Auditor) to generate, verify, and formally test backend microservices from natural language specs.',
    problem:
      'Single-prompt LLM code generation regularly generates brittle architectures, hallucinated APIs, and undetected security vulnerabilities like injection vectors.',
    approach:
      'Implemented a directed acyclic graph (DAG) consensus protocol where agents iteratively critique, generate unit tests, execute sandboxed code in Docker containers, and require cryptographic consensus before merging solutions.',
    dataset:
      'Curated repository of 12,000 open-source microservices, CVE vulnerability databases, and synthetic unit test suites.',
    architecture: [
      'Specification Decomposer Agent',
      'Graph-of-Thought Decision Router',
      'Sandboxed Docker Execution Environment',
      'Formal Verification & Fuzzing Oracle',
      'Cryptographic Consensus Evaluator',
    ],
    model: 'Hybrid Ensemble (Llama-3-70B + Claude-3.5 + DeepSeek-Coder)',
    results: [
      { metric: 'Syntax & Test Pass Rate', value: '93.2%', detail: 'Compared to 61% baseline single-agent attempts' },
      { metric: 'Security Flaw Catch Rate', value: '88.7%', detail: 'Identified OWASP Top 10 vulnerabilities pre-merge' },
      { metric: 'Task Completion Speed', value: '3.8x', detail: 'Parallelized multi-agent execution' },
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'LangGraph', 'Redis', 'PostgreSQL', 'OpenAI / Anthropic APIs'],
    challenges: [
      'Preventing infinite argumentative critique loops between the Tester and Implementer agents.',
    ],
    futureWork: [
      'Self-evolving heuristic memory banks leveraging persistent vector graphs.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/multi-agent-system-swarm',
    stats: [
      { label: 'Test Pass Rate', value: '93.2%' },
      { label: 'Security Catches', value: '88.7%' },
      { label: 'Concurrency', value: '16 Agents' },
    ],
  },
  {
    id: 'distributed-ml-pipeline',
    slug: 'distributed-streaming-ml-pipeline',
    title: 'Distributed Real-Time Feature Store & Training Pipeline',
    tagline: 'Sub-Millisecond Online Feature Serving & Ray Cluster Distributed Training',
    category: 'Distributed Systems',
    featured: false,
    gridSpan: 'col-span-12 lg:col-span-4',
    sceneType: 'fleet',
    overview:
      'End-to-end MLOps platform managing real-time feature transformation streams from Apache Flink to Feast feature store, orchestrating distributed PyTorch model training over multi-GPU Ray clusters.',
    problem:
      'Training-serving skew and inconsistent feature definitions between offline training datasets and online production inference engines lead to silent model degradation in production.',
    approach:
      'Designed a unified schema feature pipeline using Apache Arrow and Feast. Configured automated model drift detection using Wasserstein distance metrics that trigger Ray distributed fine-tuning jobs.',
    dataset:
      'High-velocity streaming financial transaction logs and tabular user interaction telemetry.',
    architecture: [
      'Kafka Event Streaming Layer',
      'Flink Real-time Windowing & Aggregation',
      'Feast Online (Redis) & Offline (Parquet) Store',
      'Ray Train Multi-Node Cluster Orchestrator',
      'MLflow Model Registry & Drift Monitor',
    ],
    model: 'Distributed PyTorch DDP + Ray Train',
    results: [
      { metric: 'Online Feature Read Latency', value: '1.2ms', detail: 'p99 latency under 20k QPS' },
      { metric: 'Training-Serving Skew', value: '0.0%', detail: 'Eliminated completely via unified Arrow schema' },
      { metric: 'Distributed Scaling Efficiency', value: '91%', detail: 'Across 8x NVIDIA A100 GPU nodes' },
    ],
    techStack: ['Python', 'Go', 'Apache Ray', 'Apache Kafka', 'Feast', 'Redis', 'Docker', 'Kubernetes'],
    challenges: [
      'Maintaining atomic cross-partition consistency during high-volume online Redis upserts.',
    ],
    futureWork: [
      'Serverless auto-scaling worker nodes dynamically scheduled on spot cloud GPU instances.',
    ],
    githubUrl: 'https://github.com/kushal-engineer/distributed-ml-pipeline',
    stats: [
      { label: 'p99 Latency', value: '1.2ms' },
      { label: 'Cluster Throughput', value: '20k QPS' },
      { label: 'Skew Reduction', value: '100%' },
    ],
  },
];

export const SKILL_NODES: SkillNode[] = [
  // Orbit 1: AI / ML Core (Radius 2.2)
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI / ML',
    orbitRadius: 2.2,
    speed: 0.65,
    color: '#1687FF',
    size: 0.32,
    proficiency: 95,
    description: 'Deep neural networks, custom autograd operators, distributed training (DDP), TorchScript.',
    relatedProjects: ['Solar Flare Warning', 'Edge Vision Inspector', 'ReWear Textile AI'],
    relatedTech: ['Python', 'CUDA', 'TorchVision', 'TensorRT'],
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow / Keras',
    category: 'AI / ML',
    orbitRadius: 2.2,
    speed: 0.55,
    color: '#38A3FF',
    size: 0.28,
    proficiency: 88,
    description: 'TFLite quantization, computation graphs, TF serving, legacy model deployment.',
    relatedProjects: ['Autonomous Fleet Routing'],
    relatedTech: ['Python', 'Docker'],
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'AI / ML',
    orbitRadius: 2.2,
    speed: 0.75,
    color: '#75C2FF',
    size: 0.29,
    proficiency: 92,
    description: 'Computer vision, morphological transforms, feature matching, real-time video stream filtering.',
    relatedProjects: ['Edge Vision Inspector', 'Solar Flare Warning'],
    relatedTech: ['C++', 'Python', 'CUDA'],
  },

  // Orbit 2: Programming Languages (Radius 3.4)
  {
    id: 'python',
    name: 'Python',
    category: 'PROGRAMMING',
    orbitRadius: 3.4,
    speed: 0.45,
    color: '#1687FF',
    size: 0.36,
    proficiency: 98,
    description: 'Primary language for ML, scientific computation, async backend systems, and algorithmic research.',
    relatedProjects: ['Solar Flare Warning', 'Autonomous Fleet Routing', 'ReWear Textile AI', 'Multi-Agent Swarm'],
    relatedTech: ['PyTorch', 'FastAPI', 'NumPy', 'Pandas'],
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'PROGRAMMING',
    orbitRadius: 3.4,
    speed: 0.4,
    color: '#38A3FF',
    size: 0.3,
    proficiency: 85,
    description: 'High-performance computational kernels, CUDA programming, memory-optimized edge runtimes.',
    relatedProjects: ['Edge Vision Inspector'],
    relatedTech: ['CUDA', 'TensorRT'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'PROGRAMMING',
    orbitRadius: 3.4,
    speed: 0.5,
    color: '#75C2FF',
    size: 0.32,
    proficiency: 90,
    description: 'Full-stack type-safe architectures, 3D WebGL interfaces, dynamic interactive applications.',
    relatedProjects: ['Interactive 3D Portfolio', 'Fleet Digital Twin', 'ReWear Web App'],
    relatedTech: ['Next.js', 'React Three Fiber', 'TailwindCSS'],
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'PROGRAMMING',
    orbitRadius: 3.4,
    speed: 0.48,
    color: '#1687FF',
    size: 0.28,
    proficiency: 82,
    description: 'Concurrent microservices, high-throughput network brokers, lightweight distributed daemons.',
    relatedProjects: ['Autonomous Fleet Routing', 'Distributed ML Pipeline'],
    relatedTech: ['Docker', 'Kafka', 'Redis'],
  },

  // Orbit 3: Backend & Systems (Radius 4.6)
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'BACKEND',
    orbitRadius: 4.6,
    speed: 0.35,
    color: '#32D583',
    size: 0.28,
    proficiency: 92,
    description: 'Asynchronous REST APIs, Pydantic validation, OpenAPI documentation, high-performance ML inference endpoints.',
    relatedProjects: ['Solar Flare Warning', 'ReWear Textile AI', 'Multi-Agent Swarm'],
    relatedTech: ['Python', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'docker',
    name: 'Docker & Containers',
    category: 'SYSTEMS',
    orbitRadius: 4.6,
    speed: 0.32,
    color: '#38A3FF',
    size: 0.31,
    proficiency: 90,
    description: 'Containerized reproducible microservices, multi-stage builds, GPU-passthrough runtimes (NVIDIA Container Toolkit).',
    relatedProjects: ['All Projects'],
    relatedTech: ['Linux', 'Kubernetes'],
  },
  {
    id: 'linux',
    name: 'Linux / Bash',
    category: 'SYSTEMS',
    orbitRadius: 4.6,
    speed: 0.38,
    color: '#1687FF',
    size: 0.33,
    proficiency: 94,
    description: 'Kernel performance profiling, systemd services, automated CI/CD bash tooling, POSIX systems management.',
    relatedProjects: ['All Projects'],
    relatedTech: ['Git', 'Docker', 'C++'],
  },
  {
    id: 'cuda',
    name: 'CUDA & TensorRT',
    category: 'SYSTEMS',
    orbitRadius: 4.6,
    speed: 0.34,
    color: '#32D583',
    size: 0.29,
    proficiency: 86,
    description: 'GPU thread grid optimization, INT8 / FP16 kernel tuning, engine compilation for embedded edge inferencing.',
    relatedProjects: ['Edge Vision Inspector', 'Solar Flare Warning'],
    relatedTech: ['C++', 'PyTorch', 'NVIDIA Jetson'],
  },

  // Orbit 4: Tools & Ecosystem (Radius 5.8)
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'TOOLS',
    orbitRadius: 5.8,
    speed: 0.25,
    color: '#75C2FF',
    size: 0.27,
    proficiency: 94,
    description: 'Distributed version control, trunk-based workflow, GitHub Actions automated test & deploy pipelines.',
    relatedProjects: ['All Projects'],
    relatedTech: ['Linux', 'Docker'],
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    category: 'BACKEND',
    orbitRadius: 5.8,
    speed: 0.22,
    color: '#FFB84D',
    size: 0.26,
    proficiency: 84,
    description: 'Distributed event streaming, partitioned topic topologies, fault-tolerant message replay pipelines.',
    relatedProjects: ['Autonomous Fleet Routing', 'Distributed ML Pipeline'],
    relatedTech: ['Go', 'Python', 'Redis'],
  },
  {
    id: 'langchain',
    name: 'LangChain & LangGraph',
    category: 'AI / ML',
    orbitRadius: 5.8,
    speed: 0.28,
    color: '#1687FF',
    size: 0.29,
    proficiency: 91,
    description: 'Multi-agent state machines, structured tool calling, retrieval-augmented generation (RAG), vector indices.',
    relatedProjects: ['Multi-Agent Systems Swarm'],
    relatedTech: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'nextjs',
    name: 'Next.js & React Three',
    category: 'TOOLS',
    orbitRadius: 5.8,
    speed: 0.26,
    color: '#38A3FF',
    size: 0.3,
    proficiency: 90,
    description: 'Server components, WebGL / Three.js 3D scientific visualization, dynamic interactive frontend engineering.',
    relatedProjects: ['Interactive 3D Portfolio', 'Fleet Digital Twin'],
    relatedTech: ['TypeScript', 'Three.js', 'TailwindCSS'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-current',
    year: '2026',
    role: 'Autonomous AI Systems Lead',
    organization: 'AI & Robotics Innovation Research Lab, DJSCE',
    location: 'Mumbai, India',
    period: 'Jan 2026 — Present',
    status: 'IN_PROGRESS',
    description:
      'Leading a multidisciplinary research team engineering autonomous agent swarm architectures and real-time edge vision algorithms. Mentoring 12 junior researchers and authoring preprint papers.',
    achievements: [
      'Architected a distributed multi-agent DAG consensus protocol achieving 93% test validation pass rate.',
      'Benchmarked edge transformer models across NVIDIA Orin Nano & Xavier NX embedded modules.',
      'Secured college research grant funding for GPU cluster expansion.',
    ],
    technologies: ['PyTorch', 'TensorRT', 'CUDA', 'ROS2', 'Docker', 'Python'],
    signalStrength: 100,
  },
  {
    id: 'exp-2025',
    year: '2025',
    role: 'Machine Learning Engineering Intern',
    organization: 'HyperScale AI Labs',
    location: 'Remote / Bengaluru, India',
    period: 'May 2025 — Nov 2025',
    status: 'COMPLETED',
    description:
      'Engineered high-throughput streaming feature stores and distributed model training pipelines. Optimized deep neural network inference latency for production APIs serving over 2 million daily requests.',
    achievements: [
      'Reduced p99 inference latency by 42% by compiling PyTorch models to TensorRT and optimizing CUDA memory pools.',
      'Implemented automated model drift monitoring using Wasserstein distance metrics, cutting false alerts by 65%.',
      'Automated CI/CD pipelines with GitHub Actions for automated linting, unit tests, and Docker image registry publishing.',
    ],
    technologies: ['PyTorch', 'FastAPI', 'Apache Kafka', 'Feast', 'Docker', 'Kubernetes'],
    signalStrength: 85,
  },
  {
    id: 'exp-2024',
    year: '2024',
    role: 'Computer Vision & Deep Learning Researcher',
    organization: 'Undergraduate Research Group, University of Mumbai',
    location: 'Mumbai, India',
    period: 'Jan 2024 — Dec 2024',
    status: 'COMPLETED',
    description:
      'Conducted foundational research on scientific satellite imagery analysis and solar magnetic active region classification. Developed custom deep learning models for extreme solar flare forecasting.',
    achievements: [
      'Published research findings on spatiotemporal vision transformers for solar flare forecasting.',
      'Processed and indexed 1.4 TB of NASA SDO multi-spectral imagery into optimized HDF5 tensor formats.',
      'Achieved True Skill Statistic score of 0.84, exceeding established institutional baselines.',
    ],
    technologies: ['Python', 'TorchVision', 'OpenCV', 'Scikit-learn', 'NumPy', 'Matplotlib'],
    signalStrength: 70,
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Smart India Hackathon Finalist & Top Innovation',
    issuer: 'Ministry of Education, Govt of India',
    date: 'Dec 2024',
    category: 'HACKATHON',
    badge: 'NATIONAL_FINALIST',
    description:
      'Ranked among the top teams nationwide for designing an AI-driven disaster response and route optimization system under emergency communication blackouts.',
    highlights: [
      'Built a decentralized peer-to-peer mesh routing prototype using offline mobile devices.',
      'Awarded special commendation by the jury for real-time edge computer vision inference.',
    ],
  },
  {
    id: 'ach-2',
    title: 'Published Research: Heliophysics & Deep Learning',
    issuer: 'International Conference on Machine Learning & Signal Processing',
    date: 'Oct 2024',
    category: 'RESEARCH',
    credentialId: 'IEEE-XPLORE-982143',
    badge: 'PEER_REVIEWED',
    description:
      'Co-authored peer-reviewed paper: "Physics-Informed Spatiotemporal Vision Transformers for Multi-Hour Solar Flare Prediction."',
    highlights: [
      'Presented findings to an audience of international solar physics and AI researchers.',
      'Code and benchmark dataset made publicly available for open science reproducibility.',
    ],
  },
  {
    id: 'ach-3',
    title: 'NVIDIA Deep Learning Institute Certification',
    issuer: 'NVIDIA DLI',
    date: 'July 2024',
    category: 'CERTIFICATION',
    credentialId: 'NV-DLI-9284102',
    badge: 'VERIFIED_CREDENTIAL',
    description:
      'Fundamentals of Deep Learning and Accelerated Computing with CUDA C/C++.',
    highlights: [
      'Mastered memory hierarchy optimization, warp execution, and shared memory tiling.',
      'Built custom CUDA matrix multiplication kernels achieving 88% theoretical roofline throughput.',
    ],
  },
  {
    id: 'ach-4',
    title: 'DeepLearning.AI Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'March 2024',
    category: 'CERTIFICATION',
    credentialId: 'DLAI-SPEC-849102',
    badge: 'SPECIALIZATION_HONORS',
    description:
      '5-course rigorous specialization covering Neural Networks, Hyperparameter Tuning, Structuring ML Projects, CNNs, and Sequence Models.',
    highlights: [
      'Graduated with 99.2% overall score across all programming assignments and theoretical examinations.',
    ],
  },
];

export const ABOUT_DETAILS = {
  whoIAm:
    'I am an AI/ML engineering student at DJ Sanghvi College of Engineering, University of Mumbai. Driven by a fascination with computational systems and neural representations, I build production-ready software that solves genuine physical and engineering challenges.',
  whatIBuild:
    'I architect end-to-end intelligent systems: from low-level CUDA kernels and TensorRT-quantized edge vision models to distributed streaming feature pipelines and multi-agent LLM coordination networks.',
  whatIAmLearning:
    'Currently diving deep into state-space models (Mamba architectures), diffusion models for physical dynamics simulation, and geometric deep learning on non-Euclidean manifolds.',
  myApproach:
    'First-principles engineering. I believe in understanding the mathematics behind the gradients, profiling system memory bottlenecks before throwing more GPUs at the problem, and crafting elegant interfaces that make complex AI transparent and controllable.',
};
