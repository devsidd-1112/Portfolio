import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const count = isMobile ? 150 : 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const speed = isMobile ? 0.02 : 0.03;
    const xSpeed = isMobile ? 0.015 : 0.02;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * xSpeed) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#5b8cf7"
        size={isMobile ? 0.03 : 0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={isMobile ? 0.5 : 0.6}
      />
    </Points>
  );
}

const ParticleScene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        frameloop="always"
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: isMobile ? "default" : "high-performance"
        }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleScene;
