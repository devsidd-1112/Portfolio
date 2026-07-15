import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
  cursor?: boolean;
  className?: string;
}

/**
 * Premium typewriter component with natural human-like typing
 * Features:
 * - Randomized character delays for realistic rhythm
 * - Smart pauses after punctuation
 * - Smooth blinking cursor
 * - Respects prefers-reduced-motion
 * - Optimized with requestAnimationFrame
 */
export default function Typewriter({
  phrases,
  typingSpeed = 45,
  deletingSpeed = 20,
  pause = 1500,
  loop = true,
  cursor = true,
  className = "",
}: TypewriterProps) {
  const { text } = useTypewriter({
    phrases,
    typingSpeed,
    deletingSpeed,
    pause,
    loop,
  });

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-block ${className}`}
    >
      {/* Preserve whitespace and prevent layout shift */}
      <span className="whitespace-pre-wrap">{text}</span>
      
      {/* Premium blinking cursor */}
      {cursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle animate-blink"
          aria-hidden="true"
        />
      )}
    </motion.span>
  );
}
