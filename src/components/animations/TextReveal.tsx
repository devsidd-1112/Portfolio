import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const words = text.split(" ");

  // Simplified animation for mobile
  if (isMobile) {
    return (
      <motion.span 
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        {text}
      </motion.span>
    );
  }

  // Full animation for desktop
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
