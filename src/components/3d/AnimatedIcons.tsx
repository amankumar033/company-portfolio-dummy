'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedIconProps {
  position: [number, number, number];
  iconType: 'react' | 'next' | 'three' | 'node' | 'typescript' | 'tailwind';
  color: string;
  speed?: number;
}

const iconConfigs = {
  react: { color: '#61DAFB', text: '⚛️', name: 'React' },
  next: { color: '#000000', text: 'N', name: 'Next.js' },
  three: { color: '#049EF4', text: '3', name: 'Three.js' },
  node: { color: '#339933', text: 'N', name: 'Node.js' },
  typescript: { color: '#3178C6', text: 'TS', name: 'TypeScript' },
  tailwind: { color: '#06B6D4', text: 'T', name: 'Tailwind' }
};

export default function AnimatedIcon({ position, iconType, color, speed = 1 }: AnimatedIconProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const config = iconConfigs[iconType];

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed;
      
      // Rotation on multiple axes
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
      meshRef.current.rotation.y = time * 0.8;
      meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.2;
      
      // Hover effect
      if (hovered) {
        meshRef.current.scale.setScalar(1.3);
        meshRef.current.position.y = position[1] + 0.2;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.position.y = position[1];
      }
      
      // Transformation effect
      if (isTransformed) {
        meshRef.current.rotation.y += 0.02;
      }
    }
  });

  useEffect(() => {
    const handleTransformEvent = () => {
      setIsTransformed(!isTransformed);
    };

    window.addEventListener('transformIcons', handleTransformEvent);
    return () => window.removeEventListener('transformIcons', handleTransformEvent);
  }, [isTransformed]);

  const handleClick = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Base shape that transforms */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={isTransformed ? config.color : color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Icon text when transformed */}
      {isTransformed && (
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {config.text}
        </Text>
      )}
      
      {/* Glow effect */}
      <mesh position={[0, 0, -0.1]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial
          color={config.color}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Hover label */}
      {hovered && (
        <Text
          position={[0, -1, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {config.name}
        </Text>
      )}
    </group>
  );
}
