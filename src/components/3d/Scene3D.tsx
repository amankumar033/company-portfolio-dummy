'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import AbstractVortex from './AbstractVortex';
import EnhancedLightPlatform from './EnhancedLightPlatform';
import FloatingParticles from './FloatingParticles';
import PlatformParticles from './PlatformParticles';

export default function Scene3D() {
  return (
    <div className="h-screen w-full absolute top-0 left-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 15], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
        shadows
      >
        <ambientLight intensity={0.2} />
        
        {/* Background stars */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating particles */}
        <FloatingParticles count={300} speed={0.15} />
        
        {/* Enhanced light platform that casts dramatic shadows */}
        <EnhancedLightPlatform position={[0, -4, 0]} size={[12, 0.8, 12]} />
        
        {/* Platform particles that emanate from the platform */}
        <PlatformParticles count={400} platformPosition={[0, -4, 0]} />
        
        {/* Abstract 3D Vortex - the main focal point */}
        <AbstractVortex position={[0, 2, 0]} scale={1.2} speed={0.8} />
        
        {/* Additional smaller vortex elements for depth */}
        <AbstractVortex position={[-3, 1, -2]} scale={0.6} speed={1.2} />
        <AbstractVortex position={[3, 0.5, 1]} scale={0.4} speed={1.5} />
        
        {/* Environment and controls */}
        <Environment preset="night" />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
          maxDistance={25}
          minDistance={10}
        />
      </Canvas>
    </div>
  );
}
