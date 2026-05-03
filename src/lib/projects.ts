export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string[];
  techStack: string[];
  problem: string;
  architecture: string;
  challenges: string[];
  howItWorks: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "cashpilot",
    title: "CashPilot – AI Cash Flow Management",
    tagline: "Predictive cash flow engine that prevents business insolvency.",
    description:
      "An intelligent cash flow management system for small businesses that predicts liquidity crises and prescribes optimal payment strategies. Features deterministic runway calculations, linear programming optimization, and AI-powered negotiation drafts.",
    category: ["Full Stack", "AI"],
    techStack: ["Python", "NumPy", "Pandas", "SciPy", "Linear Programming", "Gemini API", "Plaid", "Stripe", "OCR"],
    problem:
      "Small businesses manage cash flow reactively based on current balances rather than upcoming obligations. 82% of business failures are linked to poor cash flow management, yet existing tools only report history without prescribing actions.",
    architecture:
      "Omni-channel data ingestion normalizes API and receipt data into unified JSON. Deterministic runway engine calculates daily solvency using pure Python math. Linear programming optimizer computes optimal payment strategies. AI agents draft negotiation emails and generate actionable recommendations.",
    challenges: [
      "Building deterministic financial calculations with zero AI hallucinations",
      "Implementing bi-directional liquidity optimization (delay outflows, accelerate inflows)",
      "Creating multi-agent negotiation system for automated payment term discussions",
    ],
    howItWorks:
      "System ingests data from bank APIs, receipts (OCR), and invoices. Runway engine calculates exact daily solvency and identifies liquidity gaps. Linear programming optimizer determines optimal payment routing under constraints. AI generates negotiation drafts and micro-installment proposals. Human-in-the-loop approval ensures control before execution.",
    github: "https://github.com/devsidd-1112/CashPilot",
    featured: true,
  },
  {
    slug: "scalable-ecommerce-microservices",
    title: "Scalable E-Commerce Microservices Platform",
    tagline: "Distributed microservices architecture with event-driven communication.",
    description:
      "A production-grade e-commerce platform built with microservices architecture. Features independent services for Auth, Product, Cart, Order, Payment, and Inventory with Kafka-based async communication, Redis-powered resilience patterns, and full observability stack.",
    category: ["Full Stack", "System Design"],
    techStack: ["Java", "Spring Boot", "Kafka", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana", "Jaeger"],
    problem:
      "Monolithic e-commerce systems struggle with scalability, single points of failure, and deployment bottlenecks. Need for independent service scaling and fault tolerance.",
    architecture:
      "Distributed microservices with Kafka for event-driven async communication. Circuit breaker pattern for resilience, rate limiting with Redis. Containerized with Docker, orchestrated via Kubernetes. Full observability with Prometheus metrics, Grafana dashboards, and Jaeger distributed tracing.",
    challenges: [
      "Implementing distributed transaction patterns across microservices",
      "Building resilient communication with circuit breakers and retry mechanisms",
      "Setting up comprehensive observability and monitoring stack",
    ],
    howItWorks:
      "Each service operates independently with its own database. Kafka handles async events between services. Redis provides caching and rate limiting. Circuit breakers prevent cascading failures. CI/CD pipeline with GitHub Actions automates testing and deployment to Kubernetes clusters.",
    github: "https://github.com/devsidd-1112/E-Commerce",
    featured: true,
  },
  {
    slug: "ai-developer-copilot",
    title: "AI Developer Copilot",
    tagline: "Intelligent GitHub repository analyzer with AI-powered insights.",
    description:
      "An AI-powered developer assistant that analyzes GitHub repositories, provides semantic code search, debugging support, and generates intelligent documentation. Features OAuth 2.0 authentication and LLM-powered code insights.",
    category: ["AI", "Full Stack"],
    techStack: ["Python", "TypeScript", "React", "LLMs", "OAuth 2.0", "JWT", "Vector DB"],
    problem:
      "Developers spend significant time understanding unfamiliar codebases, debugging issues, and maintaining documentation. Need for intelligent code analysis and automated insights.",
    architecture:
      "Backend API with OAuth 2.0 GitHub integration for secure repository access. Vector embeddings for semantic code search. LLM integration for code analysis and documentation generation. JWT-based authentication with secure token management.",
    challenges: [
      "Building accurate semantic search across large codebases",
      "Optimizing LLM prompts for relevant code insights",
      "Implementing secure OAuth flow with GitHub API",
    ],
    howItWorks:
      "Users authenticate via GitHub OAuth. The system clones and indexes repositories using vector embeddings. Semantic search enables natural language queries. LLMs analyze code patterns, suggest improvements, and generate documentation. AI debugging assistant provides context-aware solutions.",
    github: "https://github.com/devsidd-1112/CodeBase-Copilot",
    featured: true,
  },
  {
    slug: "unieat-campus-food-ordering",
    title: "UniEat – Campus Food Ordering App",
    tagline: "Real-time food ordering system with group ordering capabilities.",
    description:
      "A mobile food ordering platform designed for campus environments. Features real-time order tracking, group ordering with split payments, Firestore-based concurrency handling, and integrated payment pipeline with Razorpay.",
    category: ["Mobile", "Full Stack"],
    techStack: ["React Native", "Expo", "Firebase Firestore", "Firebase Auth", "Razorpay", "Node.js"],
    problem:
      "Campus food ordering lacks coordination for group orders and real-time tracking. Manual payment splitting is cumbersome and error-prone.",
    architecture:
      "React Native mobile app with Expo for cross-platform deployment. Firebase Firestore for real-time data sync and optimistic concurrency control. Firebase Auth for user management. Node.js backend for payment processing with Razorpay integration.",
    challenges: [
      "Handling concurrent group order modifications with Firestore transactions",
      "Implementing reliable payment splitting and revenue distribution",
      "Building real-time order status updates across multiple users",
    ],
    howItWorks:
      "Users browse menus and create individual or group orders. Group members can add items collaboratively with real-time sync. Payment is processed via Razorpay with automatic splitting. Vendors receive orders instantly with revenue tracking. Real-time notifications keep users updated on order status.",
    github: "https://github.com/devsidd-1112",
    featured: false,
  },
  {
    slug: "insight-ai",
    title: "InsightAI – Meeting Summarizer",
    tagline: "AI-powered meeting analysis with automated task extraction.",
    description:
      "An intelligent meeting summarizer that extracts key points, action items with priorities, and deadlines from meeting transcripts. Built with Spring Boot backend and PostgreSQL for persistent storage.",
    category: ["AI", "Full Stack"],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Gemini API", "React", "JWT"],
    problem:
      "Teams lose critical information from meetings due to poor note-taking. Manual task extraction is time-consuming and action items often get missed.",
    architecture:
      "Spring Boot REST API with Gemini API integration for AI-powered analysis. PostgreSQL database for storing meetings and extracted tasks. React frontend for transcript upload and results visualization. JWT authentication for secure access.",
    challenges: [
      "Extracting structured action items with accurate priority levels",
      "Identifying and parsing deadline information from natural language",
      "Optimizing API costs while maintaining response quality",
    ],
    howItWorks:
      "Users upload meeting transcripts or recordings. The system processes content through Gemini API to extract summaries, identify action items, assign priorities, and detect deadlines. Results are stored in PostgreSQL and displayed in an organized dashboard with filtering and export capabilities.",
    github: "https://github.com/devsidd-1112/InsightAI",
    featured: false,
  },
  {
    slug: "santorini-ai",
    title: "Santorini AI – Strategic Board Game",
    tagline: "3D board game with AI opponent using Minimax algorithm.",
    description:
      "A 3D implementation of the abstract strategy board game Santorini with AI opponent. Features Minimax algorithm with Alpha-Beta pruning, 3D visualization with castle-themed models, and configurable AI difficulty levels.",
    category: ["AI", "System Design"],
    techStack: ["Godot 4.4", "GDScript", "3D Modeling", "Minimax", "Alpha-Beta Pruning"],
    problem:
      "Creating an engaging digital version of Santorini with intelligent AI that provides challenging gameplay while maintaining fast response times.",
    architecture:
      "Built with Godot Engine 4.4. Game state management handles placement, movement, and building phases. AI agent implements Minimax search with Alpha-Beta pruning for efficient decision-making. 3D rendering with castle-themed models and worker highlighting.",
    challenges: [
      "Optimizing Minimax search depth for real-time gameplay",
      "Implementing effective state evaluation heuristics",
      "Balancing AI difficulty levels for different player skills",
    ],
    howItWorks:
      "Players place workers on a 6×6 grid and take turns moving and building. AI evaluates game states using height advantage and winning positions. Minimax algorithm explores game tree to specified depth (1-4 ply based on difficulty). Alpha-Beta pruning eliminates 60-80% of branches for faster decisions.",
    github: "https://github.com/devsidd-1112/Santorini",
    featured: false,
  },
  {
    slug: "sahayak-voice",
    title: "Sahayak Voice – Health Data Collection",
    tagline: "Voice-first health app for India's rural healthcare workers.",
    description:
      "An offline-first mobile health application enabling ASHA workers to record maternal and child health data using natural speech in Hindi/English. Features automatic entity extraction, voice confirmation, and opportunistic sync.",
    category: ["Mobile", "AI"],
    techStack: ["React Native", "TypeScript", "SQLite", "Spring Boot", "MongoDB", "Speech Recognition", "NLP"],
    problem:
      "ASHA workers in rural India face low digital literacy, poor connectivity, and time constraints when recording health data. Paper-based records are easily lost.",
    architecture:
      "React Native mobile app with on-device speech recognition. Lightweight NLP for entity extraction (names, BP, symptoms). SQLite for offline storage. Spring Boot backend with MongoDB for synced records. JWT authentication with 7-day tokens for offline scenarios.",
    challenges: [
      "Building accurate entity extraction without cloud LLMs",
      "Handling Hindi and English speech recognition offline",
      "Implementing reliable offline-first sync with conflict resolution",
    ],
    howItWorks:
      "Workers speak visit details naturally. Speech-to-text converts voice to text on-device. Entity extractor identifies patient names, blood pressure, symptoms, and dates. TTS reads back extracted data for confirmation. Records stored locally in SQLite and sync to backend when online.",
    github: "https://github.com/devsidd-1112/Sahayak-voice",
    featured: false,
  },
  {
    slug: "zenie-productivity",
    title: "Zenie – AI-Powered Productivity App",
    tagline: "Adaptive productivity companion that learns your study patterns.",
    description:
      "An intelligent productivity app for students with mood-based UI adaptation, smart task scheduling, Pomodoro focus sessions, sentiment-analyzed diary, and exam preparation features. Built with React and Firebase.",
    category: ["Full Stack", "AI"],
    techStack: ["React", "TypeScript", "Firebase", "Firestore", "Cloud Functions", "IndexedDB", "Sentiment Analysis"],
    problem:
      "Students struggle with productivity due to varying energy levels, poor task prioritization, and lack of adaptive study tools that understand their emotional state.",
    architecture:
      "React frontend with Zustand state management. Firebase backend with Firestore for real-time sync. IndexedDB for offline caching. Cloud Functions for AI features (sentiment analysis, task generation, productivity scoring). Adaptive Personality Engine adjusts UI based on mood and schedule.",
    challenges: [
      "Building mood-aware UI that adapts in real-time",
      "Implementing intelligent task breakdown and scheduling algorithms",
      "Creating offline-first architecture with conflict resolution",
    ],
    howItWorks:
      "App analyzes user mood from diary entries and adjusts UI tone/colors. Smart scheduler recommends tasks based on energy levels and deadlines. Pomodoro timer tracks focus with distraction detection. AI generates daily plans, micro-tasks for lazy mode, and revision schedules. Real-time sync with offline support.",
    github: "https://github.com/devsidd-1112/Zenie",
    featured: false,
  },
  {
    slug: "virtuwear",
    title: "VirtuWear – Virtual Dress Fitting Platform",
    tagline: "E-commerce platform with 3D virtual try-on technology.",
    description:
      "An innovative online dress shopping platform that uses 3D modeling to let users visualize how dresses will look on them. Features PIFu-based 3D model generation from user photos and Three.js rendering.",
    category: ["Full Stack", "AI"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Three.js", "PIFu", "OpenPose", "OpenCV", "Blender"],
    problem:
      "Online shoppers face uncertainty about fit and style when buying clothes. Traditional e-commerce lacks the try-before-you-buy experience of physical stores.",
    architecture:
      "React frontend with Three.js for 3D rendering. Node.js/Express backend for API and product management. MongoDB for user accounts and product catalog. PIFu generates 3D models from 2D photos. OpenPose detects body keypoints. OpenCV overlays dresses on models.",
    challenges: [
      "Generating accurate 3D body models from single front-facing photos",
      "Applying dress textures realistically to 3D models",
      "Rendering interactive 3D models in real-time on web browsers",
    ],
    howItWorks:
      "Users browse dress catalog and select items. Upload front-facing photo for 3D model generation. PIFu creates 3D body model, OpenPose detects keypoints for proper fitting. Selected dress is textured and mapped onto the model using Blender. Three.js renders interactive 3D view in browser for real-time visualization.",
    github: "https://github.com/devsidd-1112",
    featured: false,
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getCategories = (): string[] => {
  const cats = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
};
