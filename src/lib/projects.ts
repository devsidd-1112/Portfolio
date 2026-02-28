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
    slug: "insight-ai",
    title: "InsightAI",
    tagline: "AI-powered meeting summarizer that turns conversations into action.",
    description:
      "An intelligent meeting summarizer that leverages Gemini API to extract key points, action items, and decisions from meeting transcripts. Features secure JWT authentication, role-based access, and automated PDF/CSV export capabilities.",
    category: ["Full Stack", "AI"],
    techStack: ["Java", "Spring Boot", "React", "Gemini API", "PostgreSQL", "JWT", "Docker"],
    problem:
      "Teams lose critical information from meetings due to poor note-taking. Manual summarization is time-consuming and error-prone, leading to missed action items and repeated discussions.",
    architecture:
      "Microservices architecture with a Spring Boot backend handling API orchestration and Gemini AI integration. React frontend with real-time updates. PostgreSQL for persistent storage with Redis caching layer.",
    challenges: [
      "Optimizing Gemini API response times for real-time summarization",
      "Implementing secure multi-tenant data isolation",
      "Building reliable PDF/CSV export pipeline for large transcripts",
    ],
    howItWorks:
      "Users upload or paste meeting transcripts. The system sends the content to Gemini API for AI analysis, extracting summaries, action items, and key decisions. Results are stored, searchable, and exportable in multiple formats.",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    slug: "thunai-vizhi-ai",
    title: "ThunaiVizhi-AI",
    tagline: "Offline AI mobile assistant for accessibility in Tamil & English.",
    description:
      "A Flutter-based mobile application providing AI-powered assistance entirely offline. Features OCR in Tamil and English, voice narration, and TensorFlow Lite models for on-device inference — designed for accessibility in low-connectivity regions.",
    category: ["AI", "Mobile"],
    techStack: ["Flutter", "TensorFlow Lite", "Dart", "OCR", "SQLite"],
    problem:
      "Millions of users in rural areas lack reliable internet access, making cloud-based AI tools unusable. There's a critical need for offline, multilingual AI assistance for accessibility.",
    architecture:
      "On-device architecture using TensorFlow Lite models compiled for ARM. Flutter UI layer with platform channels for native OCR integration. Local SQLite database for caching and user preferences.",
    challenges: [
      "Compressing ML models to run efficiently on low-end mobile devices",
      "Implementing accurate Tamil OCR with limited training data",
      "Achieving real-time voice narration with on-device TTS",
    ],
    howItWorks:
      "The app runs entirely on-device. Users can capture text via camera (OCR), which is processed by TensorFlow Lite models. Recognized text can be narrated aloud or translated. All processing happens locally without internet.",
    github: "https://github.com",
    featured: true,
  },
  {
    slug: "construct-assist",
    title: "ConStructAssist",
    tagline: "Construction intelligence with AR/VR visualization.",
    description:
      "An intelligent construction management platform featuring AR/VR-based site visualization, real-time worker tracking, automated cost estimation, and project timeline management. Designed for construction firms modernizing their operations.",
    category: ["Full Stack", "System Design"],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "AR/VR", "Docker", "Redis"],
    problem:
      "Construction projects suffer from poor visibility, inaccurate cost estimates, and safety tracking gaps. Traditional tools can't provide real-time site awareness or predictive analytics.",
    architecture:
      "Event-driven microservices with Spring Boot. Real-time data pipeline for worker tracking via IoT sensors. React dashboard with WebGL-based AR visualization. PostgreSQL with TimescaleDB extension for time-series worker data.",
    challenges: [
      "Real-time 3D rendering of construction sites in browser",
      "Processing high-frequency IoT sensor data for worker tracking",
      "Building accurate ML-based cost estimation models",
    ],
    howItWorks:
      "Site data is collected through IoT sensors and manual input. The platform creates a digital twin of the construction site, enabling AR/VR walkthroughs. AI models predict costs and timelines. Managers get real-time dashboards for decision-making.",
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true,
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getCategories = (): string[] => {
  const cats = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
};
