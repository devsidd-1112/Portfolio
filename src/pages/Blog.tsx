import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import { blogPosts } from "@/lib/blog";

const Blog = () => (
  <main className="relative pt-28 pb-24 overflow-hidden">
    <FloatingOrbs />
    <div className="absolute inset-0 animated-grid opacity-20" />

    <div className="container relative mx-auto px-6 max-w-3xl" style={{ zIndex: 2 }}>
      <AnimatedSection>
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Writing</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">Blog</h1>
        <p className="text-muted-foreground mb-14">
          Thoughts on AI engineering, system design, and building software that matters.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 cursor-pointer"
          >
            {/* Top glow line */}
            <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.2), transparent)" }} />

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <time>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-foreground group-hover:text-gradient-accent transition-all duration-300">
                  {post.title}
                </h2>
                <ArrowUpRight size={16} className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3 mb-5">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </main>
);

export default Blog;
