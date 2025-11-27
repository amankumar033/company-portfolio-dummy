'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedCubeProps {
  position?: [number, number, number];
  size?: [number, number, number];
  color?: string;
  speed?: number;
  wireframe?: boolean;
}

export default function AnimatedCube({
  position = [0, 0, 0],
  size = [1, 1, 1],
  color = '#4ecdc4',
  speed = 1,
  wireframe = false
}: AnimatedCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.5;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach(mat => mat.opacity = 0.8);
        } else {
          meshRef.current.material.opacity = 0.8;
        }
      } else {
        meshRef.current.scale.setScalar(1);
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach(mat => mat.opacity = 0.6);
        } else {
          meshRef.current.material.opacity = 0.6;
        }
      }
    }
  });

  return (
    <Box
      ref={meshRef}
      args={size}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        wireframe={wireframe}
        roughness={0.2}
        metalness={0.8}
      />
    </Box>
  );
}
