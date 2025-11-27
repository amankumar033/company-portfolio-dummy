'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface RotatingImageProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
}

export default function RotatingImage({
  position = [0, 0, 0],
  scale = 1,
  speed = 1
}: RotatingImageProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [currentPhase, setCurrentPhase] = useState<'initial' | 'sprite' | 'fast-sprite' | 'react-3d'>('initial');
  const [startTime, setStartTime] = useState(0);

  // Load textures
  const initialTexture = useTexture('/Component 274.png');
  const spriteTexture = useTexture('/11.png');
  const reactTexture = useTexture('/React.png');

  // Debug texture loading
  useEffect(() => {
    console.log('React texture loaded:', reactTexture);
  }, [reactTexture]);

  // Sprite sheet properties (assuming 6 frames vertically)
  const spriteRows = 6;
  const spriteCols = 1;
  const totalFrames = spriteRows * spriteCols;
  const frameWidth = 1 / spriteCols;
  const frameHeight = 1 / spriteRows;

  useEffect(() => {
    setStartTime(Date.now());
    
    // Phase 1: After 4 seconds, transition to sprite
    const spriteTimer = setTimeout(() => {
      setCurrentPhase('sprite');
    }, 4000);

    // Phase 2: After 7 seconds, start fast sprite animation
    const fastSpriteTimer = setTimeout(() => {
      setCurrentPhase('fast-sprite');
    }, 7000);

    // Phase 3: After 10 seconds, show 3D rotating React icon
    const reactTimer = setTimeout(() => {
      setCurrentPhase('react-3d');
    }, 10000);

    return () => {
      clearTimeout(spriteTimer);
      clearTimeout(fastSpriteTimer);
      clearTimeout(reactTimer);
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const elapsedTime = (Date.now() - startTime) / 1000; // Time in seconds
      const time = state.clock.elapsedTime * speed;

      // Keep the image fixed at its position
      meshRef.current.position.x = position[0];
      meshRef.current.position.y = position[1];
      meshRef.current.position.z = position[2];

      // Handle different phases
      if (currentPhase === 'initial') {
        // Gradual speed increase for initial phase
        const rotationSpeed = 0.5 + (elapsedTime / 4) * 5.5;
        meshRef.current.rotation.z = time * rotationSpeed;
      } else if (currentPhase === 'sprite' || currentPhase === 'fast-sprite') {
        // Very fast rotation for sprite phases
        meshRef.current.rotation.z = time * 4.0;
      } else if (currentPhase === 'react-3d') {
        // 3D rotation for React icon - left side moves left-to-right, right side moves right-to-left
        meshRef.current.rotation.y = time * 1.2; // Y-axis rotation for 3D effect
        meshRef.current.rotation.x = Math.sin(time * 0.8) * 0.3; // Subtle X-axis wobble
        meshRef.current.rotation.z = 0; // Reset Z rotation for 3D effect
      }

      // Subtle scale pulsing for breathing effect
      const pulse = 1 + Math.sin(time * 0.8) * 0.03;
      meshRef.current.scale.setScalar(scale * pulse);

      // Handle sprite animation
      if (currentPhase === 'sprite' || currentPhase === 'fast-sprite') {
        const child = meshRef.current.children[0] as THREE.Mesh;
        const material = child?.material as THREE.MeshBasicMaterial;
        if (material && material.map) {
          // Calculate frame speed based on phase
          const frameSpeed = currentPhase === 'fast-sprite' ? 0.02 : 0.1; // Very fast vs moderate
          const frameIndex = Math.floor(state.clock.elapsedTime / frameSpeed) % totalFrames;

          // Calculate UV offset for the current frame
          const col = frameIndex % spriteCols;
          const row = Math.floor(frameIndex / spriteCols);

          // Set UV transform for the material
          material.map = spriteTexture;
          material.map.offset.x = col * frameWidth;
          material.map.offset.y = 1 - (row + 1) * frameHeight;
          material.map.repeat.set(frameWidth, frameHeight);
          material.needsUpdate = true;
        }
      } else if (currentPhase === 'react-3d') {
        // Ensure React texture is applied
        const child = meshRef.current.children[0] as THREE.Mesh;
        const material = child?.material as THREE.MeshStandardMaterial;
        if (material && reactTexture) {
          material.map = reactTexture;
          material.needsUpdate = true;
        }
      }
    }
  });

  // Create 3D React icon
  const createReact3DIcon = () => {
    return (
      <group>
        {/* React icon as 3D plane */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            map={reactTexture}
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Glow effect */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial
            color="#61DAFB"
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>
    );
  };

  return (
    <group ref={meshRef} position={position}>
      {currentPhase === 'react-3d' ? (
        // 3D React icon
        createReact3DIcon()
      ) : (
        // 2D image phases
        <mesh>
          <planeGeometry args={[7, 7]} />
          <meshBasicMaterial
            map={initialTexture}
            transparent
            opacity={0.9}
          />
        </mesh>
      )}
    </group>
  );
}
