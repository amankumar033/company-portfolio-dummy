'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Tube, Torus, Ring } from '@react-three/drei';
import * as THREE from 'three';

interface AbstractVortexProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
}

export default function AbstractVortex({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 1 
}: AbstractVortexProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Create complex rosette spiral paths
  const rosettePaths = useMemo(() => {
    const paths: THREE.CatmullRomCurve3[] = [];
    
    // Create multiple layers of spiral paths with rosette pattern
    for (let layer = 0; layer < 12; layer++) {
      const points: THREE.Vector3[] = [];
      const segments = 200;
      const baseRadius = 0.5 + layer * 0.15;
      const height = 2;
      const twists = 6 + layer * 0.3;
      const rosettePetals = 8 + layer % 4;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = t * Math.PI * 2 * twists;
        
        // Create rosette pattern
        const rosetteAngle = angle * rosettePetals;
        const rosetteRadius = baseRadius * (1 + 0.3 * Math.sin(rosetteAngle));
        
        // Spiral effect
        const spiralRadius = rosetteRadius * (1 - t * 0.7);
        const x = Math.cos(angle) * spiralRadius;
        const y = (t - 0.5) * height;
        const z = Math.sin(angle) * spiralRadius;
        
        // Add wave variation for more organic feel
        const wave = Math.sin(t * Math.PI * 12 + layer) * 0.05;
        points.push(new THREE.Vector3(x + wave, y, z + wave));
      }
      
      paths.push(new THREE.CatmullRomCurve3(points));
    }
    
    return paths;
  }, []);

  // Create additional curved bands for complexity
  const curvedBands = useMemo(() => {
    const bands: THREE.CatmullRomCurve3[] = [];
    
    for (let i = 0; i < 8; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 150;
      const radius = 1.2 + i * 0.2;
      const height = 1.5;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = t * Math.PI * 2 * 4;
        
        // Create figure-8 pattern
        const figure8Radius = radius * Math.sin(t * Math.PI * 2);
        const x = Math.cos(angle) * figure8Radius;
        const y = Math.sin(t * Math.PI * 3) * height;
        const z = Math.sin(angle) * figure8Radius;
        
        points.push(new THREE.Vector3(x, y, z));
      }
      
      bands.push(new THREE.CatmullRomCurve3(points));
    }
    
    return bands;
  }, []);

  // Create central core elements
  const coreElements = useMemo(() => {
    const elements: Array<{ geometry: THREE.BufferGeometry; position: [number, number, number]; rotation: [number, number, number]; scale: number }> = [];
    
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 0.3;
      
      elements.push({
        geometry: new THREE.TorusGeometry(0.1, 0.02, 8, 16),
        position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius],
        rotation: [Math.PI / 2, 0, angle],
        scale: 1
      });
    }
    
    return elements;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime * speed;
      
      // Complex rotation pattern
      groupRef.current.rotation.y = time * 0.4;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      groupRef.current.rotation.z = Math.cos(time * 0.15) * 0.05;
      
      // Subtle pulsing scale
      const pulse = 1 + Math.sin(time * 1.5) * 0.03;
      groupRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Rosette spiral bands */}
      {rosettePaths.map((path, index) => (
        <Tube
          key={`rosette-${index}`}
          args={[path, 80, 0.03 - index * 0.001, 12, false]}
        >
          <meshStandardMaterial
            color={index % 3 === 0 ? '#4ecdc4' : index % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
            metalness={0.95}
            roughness={0.05}
            transparent
            opacity={0.9}
            emissive={index % 3 === 0 ? '#4ecdc4' : index % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
            emissiveIntensity={0.3}
          />
        </Tube>
      ))}
      
      {/* Curved figure-8 bands */}
      {curvedBands.map((path, index) => (
        <Tube
          key={`curve-${index}`}
          args={[path, 60, 0.025 - index * 0.002, 8, false]}
        >
          <meshStandardMaterial
            color={index % 2 === 0 ? '#a855f7' : '#3b82f6'}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
            emissive={index % 2 === 0 ? '#a855f7' : '#3b82f6'}
            emissiveIntensity={0.25}
          />
        </Tube>
      ))}
      
      {/* Central core rings */}
      <Ring
        args={[0.2, 0.25, 32]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0}
          emissive="#4ecdc4"
          emissiveIntensity={0.6}
        />
      </Ring>
      
      <Ring
        args={[0.15, 0.2, 24]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.8}
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </Ring>
      
      {/* Core torus elements */}
      {coreElements.map((element, index) => (
        <mesh
          key={`core-${index}`}
          position={element.position}
          rotation={element.rotation}
          scale={element.scale}
        >
          <primitive object={element.geometry} />
          <meshStandardMaterial
            color="#4ecdc4"
            metalness={0.9}
            roughness={0.1}
            emissive="#4ecdc4"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0}
          emissive="#4ecdc4"
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Enhanced glow effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 16, 16]} />
        <meshBasicMaterial
          color="#4ecdc4"
          transparent
          opacity={0.05}
        />
      </mesh>
      
      {/* Additional glow layers */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.03}
        />
      </mesh>
      
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.04}
        />
      </mesh>
    </group>
  );
}
