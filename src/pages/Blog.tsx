import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/lib/blog";

const Blog = () => (
  <main className="pt-28 pb-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Thoughts on AI engineering, system design, and building software that matters.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/30 cursor-pointer"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <ArrowUpRight size={16} className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </main>
);

export default Blog;
