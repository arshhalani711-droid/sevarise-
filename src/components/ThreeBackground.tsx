import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
        <pointsMaterial
        size={0.05}
        color="#0891b2"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

function GlowingOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 0.5) * 2;
    meshRef.current.position.x = Math.cos(time * 0.3) * 5;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={1}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Particles count={2000} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <GlowingOrb />
        </Float>
        
        <fog attach="fog" args={['#fcfcfc', 10, 40]} />
      </Canvas>
      
      {/* Interactive lighting overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(8, 145, 178, 0.05) 0%, transparent 40%)`
        }}
      />
    </div>
  );
}
