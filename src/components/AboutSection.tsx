'use client';

import { motion } from 'framer-motion';
import Card3D from '@/components/3DCard';
import { Users, Target, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Users, number: "50+", label: "Team Members", description: "Expert developers, designers, and strategists" },
    { icon: Target, number: "500+", label: "Projects Delivered", description: "Successfully completed across various industries" },
    { icon: Award, number: "15+", label: "Industry Awards", description: "Recognition for excellence and innovation" },
    { icon: Clock, number: "8+", label: "Years Experience", description: "Deep expertise in digital transformation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ons</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a forward-thinking digital agency that transforms ideas into exceptional digital experiences. 
            Our team combines creativity with technical expertise to deliver solutions that drive business growth.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
            >
              <Card3D
                delay={index * 0.2}
                className="text-center h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-cyan-500/50 transition-all duration-500`}>
                  <stat.icon className="w-8 h-8 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                </div>
                
                <div className="text-4xl font-black text-white mb-2 group-hover:scale-125 group-hover:text-cyan-400 transition-all duration-500">
                  {stat.number}
                </div>
                
                <div className="text-white font-bold text-lg mb-2 group-hover:scale-110 transition-all duration-500">
                  {stat.label}
                </div>
                
                <div className="text-gray-400 text-sm group-hover:text-white group-hover:scale-105 transition-all duration-500">
                  {stat.description}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 text-center group hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer"
          whileHover={{ 
            y: -5, 
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <motion.h3
            className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto group-hover:text-white transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To empower businesses through innovative digital solutions that create meaningful connections, 
            drive engagement, and deliver measurable results. We believe in the power of technology to 
            transform how people interact with brands and products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
