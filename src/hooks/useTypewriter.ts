import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
}

interface UseTypewriterReturn {
  text: string;
  isDeleting: boolean;
  isTyping: boolean;
  currentPhraseIndex: number;
}

/**
 * Premium typewriter hook with human-like typing rhythm
 * Uses requestAnimationFrame for smooth performance
 * Randomizes delays per character type for natural feel
 */
export function useTypewriter({
  phrases,
  typingSpeed = 45,
  deletingSpeed = 20,
  pause = 1500,
  loop = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const delayRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  /**
   * Calculate natural delay based on character type
   * Mimics human typing rhythm with varied speeds
   */
  const getCharacterDelay = (char: string, baseSpeed: number): number => {
    const random = (min: number, max: number) => 
      Math.floor(Math.random() * (max - min + 1)) + min;

    // Punctuation pauses
    if (char === ",") return random(180, 250);
    if (char === ".") return random(250, 350);
    if (char === "&") return random(150, 200);
    if (char === ":") return random(180, 220);
    
    // Space - quick
    if (char === " ") return random(20, 30);
    
    // Numbers - slightly slower
    if (/\d/.test(char)) return random(35, 60);
    
    // Uppercase - more deliberate
    if (/[A-Z]/.test(char)) return random(45, 70);
    
    // Lowercase letters - base speed with variance
    return random(baseSpeed - 20, baseSpeed + 10);
  };

  useEffect(() => {
    // If reduced motion, show complete phrase immediately
    if (prefersReducedMotion.current) {
      setText(phrases[currentPhraseIndex]);
      setIsTyping(false);
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const isComplete = text === currentPhrase;
    const isEmpty = text === "";

    const animate = (currentTime: number) => {
      // Initialize timestamp
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = currentTime - lastTimeRef.current;

      // Handle pauses
      if (pauseTimeRef.current > 0) {
        if (elapsed >= pauseTimeRef.current) {
          pauseTimeRef.current = 0;
          lastTimeRef.current = currentTime;
        }
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      // Check if enough time has passed for next character
      if (elapsed < delayRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTimeRef.current = currentTime;

      // TYPING PHASE
      if (!isDeleting && !isComplete) {
        const nextChar = currentPhrase[text.length];
        setText(currentPhrase.slice(0, text.length + 1));
        
        // Calculate next delay based on character type
        delayRef.current = getCharacterDelay(nextChar, typingSpeed);
        setIsTyping(true);
        
        rafRef.current = requestAnimationFrame(animate);
      }
      // PAUSE AFTER TYPING
      else if (!isDeleting && isComplete) {
        setIsTyping(false);
        pauseTimeRef.current = pause;
        setIsDeleting(true);
        rafRef.current = requestAnimationFrame(animate);
      }
      // DELETING PHASE
      else if (isDeleting && !isEmpty) {
        setText(currentPhrase.slice(0, text.length - 1));
        delayRef.current = deletingSpeed + Math.random() * 10;
        rafRef.current = requestAnimationFrame(animate);
      }
      // PAUSE AFTER DELETING
      else if (isDeleting && isEmpty) {
        setIsDeleting(false);
        pauseTimeRef.current = 250; // Brief pause before next phrase
        
        // Move to next phrase or stop if not looping
        if (loop || currentPhraseIndex < phrases.length - 1) {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
        
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup animation frame on unmount
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [text, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pause, loop]);

  return {
    text,
    isDeleting,
    isTyping,
    currentPhraseIndex,
  };
}
