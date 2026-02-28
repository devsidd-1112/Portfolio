export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "integrating-gemini-api-spring-boot",
    title: "Integrating Gemini API in Spring Boot",
    excerpt:
      "A deep dive into connecting Google's Gemini API with a Spring Boot backend — handling authentication, streaming responses, and building production-grade AI features.",
    date: "2025-12-15",
    readTime: "8 min read",
    tags: ["Spring Boot", "Gemini API", "AI", "Java"],
  },
  {
    slug: "building-offline-ai-systems-accessibility",
    title: "Building Offline AI Systems for Accessibility",
    excerpt:
      "How I built ThunaiVizhi-AI — an offline mobile assistant using TensorFlow Lite, on-device OCR, and voice narration for underserved communities.",
    date: "2025-11-28",
    readTime: "12 min read",
    tags: ["TensorFlow Lite", "Flutter", "Accessibility", "Mobile"],
  },
];
