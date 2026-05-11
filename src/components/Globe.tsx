import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function Globe() {
  const globeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    globeRef.current.rotation.y = time * 0.15;
    ringRef.current.rotation.z = time * 0.1;
    ringRef.current.rotation.x = time * 0.05;
    particlesRef.current.rotation.y = time * 0.05;
    particlesRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <group scale={1.5}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Core Globe - Deep Blue */}
        <mesh ref={globeRef}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            color="#1A237E"
            emissive="#FF9933"
            emissiveIntensity={0.2}
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Outer Glow Sphere - Saffron */}
        <Sphere args={[2.02, 64, 64]}>
          <MeshDistortMaterial
            color="#FF9933"
            emissive="#FF9933"
            emissiveIntensity={0.6}
            transparent
            opacity={0.15}
            distort={0.3}
            speed={1.5}
          />
        </Sphere>

        {/* Orbital Ring - Gold */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.2, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#D4AF37"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Secondary Ring - Maroon */}
        <mesh rotation={[Math.PI / 1.5, Math.PI / 4, 0]}>
          <torusGeometry args={[3.5, 0.01, 16, 100]} />
          <meshStandardMaterial
            color="#800000"
            emissive="#800000"
            emissiveIntensity={1.5}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Floating Petal Particles */}
        <group ref={particlesRef}>
          {Array.from({ length: 40 }).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            >
              <coneGeometry args={[0.04, 0.12, 4]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#FF9933" : "#D4AF37"} transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Warm Point Lights */}
      <pointLight intensity={3} distance={12} color="#FF9933" position={[2, 2, 2]} />
      <pointLight intensity={2} distance={12} color="#D4AF37" position={[-2, -2, -2]} />
    </group>
  );
}
