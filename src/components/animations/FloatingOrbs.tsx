import { motion } from "framer-motion";

const orbs = [
  { size: 500, x: "15%", y: "20%", color: "hsl(230 85% 62% / 0.1)", delay: 0 },
  { size: 400, x: "75%", y: "60%", color: "hsl(270 80% 60% / 0.08)", delay: 2 },
  { size: 350, x: "50%", y: "80%", color: "hsl(175 70% 50% / 0.06)", delay: 4 },
  { size: 300, x: "85%", y: "15%", color: "hsl(330 80% 60% / 0.05)", delay: 1 },
];

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          y: [0, -30, 0, 20, 0],
          x: [0, 15, -10, 5, 0],
          scale: [1, 1.05, 0.98, 1.02, 1],
        }}
        transition={{
          duration: 12 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: orb.delay,
        }}
      />
    ))}
  </div>
);

export default FloatingOrbs;
