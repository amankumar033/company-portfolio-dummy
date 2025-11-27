'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Shield, 
  Brain,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-600/10",
    borderColor: "border-cyan-500/30"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and engagement.",
    color: "from-pink-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
    borderColor: "border-pink-500/30"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-600/10",
    borderColor: "border-green-500/30"
  },
  {
    icon: Globe,
    title: "3D Web Experiences",
    description: "Immersive 3D web applications using Three.js and modern web technologies.",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/10",
    borderColor: "border-orange-500/30"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Robust security solutions to protect your digital assets and data.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-500/10 to-purple-600/10",
    borderColor: "border-indigo-500/30"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent solutions powered by artificial intelligence and machine learning.",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-600/10",
    borderColor: "border-yellow-500/30"
  }
];

export default function Services3D() {
  const router = useRouter();

  const navigateToServices = () => {
    router.push('/services');
  };

  return (
    <section id="main-content" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Simple Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-lg mb-4">
            <Sparkles className="w-5 h-5" />
            <span>Our Services</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We specialize in creating cutting-edge digital solutions that push the boundaries 
            of what's possible on the web.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              className="group relative cursor-pointer"
              whileHover={{ 
                y: -20,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className={`
                relative p-8 rounded-3xl border backdrop-blur-xl h-full
                ${service.bgColor} ${service.borderColor}
                hover:border-opacity-80 transition-all duration-400 ease-out
                overflow-hidden shadow-2xl hover:shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/50
                hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-cyan-500/20
                bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:from-white/15 hover:via-white/8 hover:to-white/15
                transform-gpu
              `}>
                {/* Enhanced Hover Effect Background */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                  group-hover:opacity-20 transition-all duration-300 ease-out
                `} />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <motion.div 
                    className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-6 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                
                {/* Enhanced Icon */}
                <div className="relative z-10 mb-6">
                  <motion.div 
                    className={`
                      w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} 
                      flex items-center justify-center text-white text-2xl
                      shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-400 ease-out
                    `}
                    whileHover={{ 
                      scale: 1.15,
                      y: -5,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <service.icon className="w-10 h-10 group-hover:scale-110 transition-all duration-300 ease-out" />
                    
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                    
                    {/* Floating Particles Around Icon */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <motion.div 
                        className="absolute -top-1 -left-1 w-1 h-1 bg-white rounded-full"
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div 
                        className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full"
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div 
                        className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full"
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      />
                      <motion.div 
                        className="absolute -bottom-1 -right-1 w-1 h-1 bg-white rounded-full"
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-all duration-400 ease-out group-hover:scale-105 transform-gpu"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-400 ease-out group-hover:scale-102 transform-gpu"
                    whileHover={{ 
                      scale: 1.02,
                      y: -1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Enhanced CTA Button */}
                  <motion.button
                    onClick={navigateToServices}
                    whileHover={{ 
                      x: 8, 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-all duration-400 ease-out group/btn font-semibold cursor-pointer"
                  >
                    <span className="group-hover/btn:scale-105 transition-transform duration-300 ease-out">Learn More</span>
                    <motion.div
                      className="w-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-out group-hover/btn:w-8"
                    />
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 ease-out" />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Enhanced Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12"
                  transition={{ duration: 1.5 }}
                  animate={{ x: ['-100%', '100%'] }}
                  style={{ transformOrigin: 'center' }}
                />
                             </div>
             </motion.div>
           ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={navigateToServices}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
