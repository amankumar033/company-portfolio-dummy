'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position?: [number, number, number];
  size?: number;
  color?: string;
  speed?: number;
  distort?: number;
}

export default function AnimatedSphere({
  position = [0, 0, 0],
  size = 1,
  color = '#ff6b6b',
  speed = 1,
  distort = 0.4
}: AnimatedSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.y += 0.01 * speed;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[size, 100, 200]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}
