import { motion } from "framer-motion";

interface GradientRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const GradientReveal = ({ text, className = "", delay = 0 }: GradientRevealProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {text}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 1.2,
          delay: delay + 0.3,
          ease: "easeInOut",
        }}
        style={{ mixBlendMode: "overlay" }}
      />
    </motion.span>
  );
};

export default GradientReveal;
