'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Smartphone, Brain, Palette, Megaphone, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Sparkles, Zap, Rocket, CheckCircle, ArrowUpRight, Globe, Play } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: Code,
    href: "/services/web",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"],
    badge: "Popular",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
    gradient: "from-cyan-500 to-blue-500",
    stats: { projects: "100+", clients: "50+", rating: "4.9/5" }
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    href: "/services/mobile",
    features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"],
    badge: "Trending",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    gradient: "from-purple-500 to-pink-500",
    stats: { projects: "50+", clients: "30+", rating: "4.8/5" }
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered solutions to transform your business.",
    icon: Brain,
    href: "/services/ai",
    features: ["Machine Learning", "Chatbots", "Data Analytics", "Process Automation"],
    badge: "Innovative",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    gradient: "from-green-500 to-emerald-500",
    stats: { projects: "80+", clients: "40+", rating: "4.9/5" }
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces and exceptional user experiences.",
    icon: Palette,
    href: "/services/design",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    badge: "Creative",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    gradient: "from-yellow-500 to-orange-500",
    stats: { projects: "70+", clients: "35+", rating: "4.7/5" }
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to grow your online presence.",
    icon: Megaphone,
    href: "/services/marketing",
    features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"],
    badge: "Growth",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    gradient: "from-blue-500 to-cyan-500",
    stats: { projects: "90+", clients: "45+", rating: "4.8/5" }
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    href: "/services/security",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    badge: "Secure",
    bgGradient: "from-red-500/20 to-pink-500/20",
    gradient: "from-red-500 to-pink-500",
    stats: { projects: "60+", clients: "25+", rating: "4.9/5" }
  }
];

const technologies = [
  { name: "React", icon: "⚛️", category: "Frontend", color: "cyan" },
  { name: "Next.js", icon: "▲", category: "Framework", color: "blue" },
  { name: "Node.js", icon: "🟢", category: "Backend", color: "green" },
  { name: "Python", icon: "🐍", category: "AI/ML", color: "yellow" },
  { name: "TypeScript", icon: "📘", category: "Language", color: "blue" },
  { name: "AWS", icon: "☁️", category: "Cloud", color: "orange" },
  { name: "Docker", icon: "🐳", category: "DevOps", color: "blue" },
  { name: "Figma", icon: "🎨", category: "Design", color: "purple" },
  { name: "MongoDB", icon: "🍃", category: "Database", color: "green" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", color: "blue" },
  { name: "Redis", icon: "🔴", category: "Cache", color: "red" },
  { name: "GraphQL", icon: "🔷", category: "API", color: "purple" }
];

export default function ServicesPage() {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 });

  const navigateToContact = () => {
    router.push('/contact');
  };

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  // Handle window dimensions for SSR safety
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrolled / maxScroll) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden ultra-smooth-scroll fast-scroll">

      {/* Main Content with Responsive Top Padding */}
      <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40"> {/* Responsive padding for mobile */}
      <main>
        {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                animate={{ 
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                  scale: [1, 0.9, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              />
        </div>
        
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                animate={{
                  x: [0, Math.random() * windowDimensions.width],
                  y: [0, Math.random() * windowDimensions.height],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Hero Content */}
            <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="mb-8"
              >
                                 <motion.div 
                   className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full px-8 py-4 text-cyan-400 text-lg font-bold backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 ease-out cursor-pointer group"
                   whileHover={{ 
                     scale: 1.1,
                     rotate: 2,
                     transition: { duration: 0.3, ease: "easeOut" }
                   }}
                   animate={{
                     y: [0, -2, 0],
                     scale: [1, 1.02, 1]
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   <motion.div
                     animate={{
                       rotate: [0, 360]
                     }}
                     transition={{
                       duration: 8,
                       repeat: Infinity,
                       ease: "linear"
                     }}
                   >
                     <Star className="w-5 h-5 fill-current group-hover:scale-125 transition-transform duration-300 ease-out" />
                   </motion.div>
                   <span className="text-sm sm:text-base lg:text-lg group-hover:font-extrabold transition-all duration-300 ease-out">Advanced Digital Services</span>
                   <motion.div
                     animate={{
                       rotate: [0, -360]
                     }}
                     transition={{
                       duration: 8,
                       repeat: Infinity,
                       ease: "linear"
                     }}
                   >
                     <Star className="w-5 h-5 fill-current group-hover:scale-125 transition-transform duration-300 ease-out" />
                   </motion.div>
                 </motion.div>
              </motion.div>

                             <motion.h1 
                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-none"
                 initial={{ opacity: 0, y: 100 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
               >
                 <motion.span 
                   className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer inline-block"
                   whileHover={{ 
                     scale: 1.1,
                     rotate: 2,
                     transition: { duration: 0.3, ease: "easeOut" }
                   }}
                   animate={{
                     y: [0, -3, 0],
                     rotate: [0, 1, 0]
                   }}
                   transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   Complete
                 </motion.span>
                 <br />
                 <motion.span 
                   className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer inline-block"
                   whileHover={{ 
                     scale: 1.1,
                     rotate: -2,
                     transition: { duration: 0.3, ease: "easeOut" }
                   }}
                   animate={{
                     y: [0, -3, 0],
                     rotate: [0, -1, 0]
                   }}
                   transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 0.5
                   }}
                 >
                   Digital Solutions
                 </motion.span>
               </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                From cutting-edge web development to advanced AI solutions, we deliver comprehensive digital services that transform businesses and drive sustainable growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                                 <motion.div
                   whileHover={{ scale: 1.05, rotate: 1 }}
                   whileTap={{ scale: 0.95, rotate: -1 }}
                   animate={{
                     y: [0, -2, 0],
                     scale: [1, 1.01, 1]
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   <Button 
                     onClick={navigateToContact}
                     className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-3xl text-lg font-bold flex items-center justify-center gap-4 shadow-2xl hover:shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 ease-out relative overflow-hidden cursor-pointer"
                   >
                     <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out">Get Started Today</span>
                     <motion.div
                       animate={{
                         x: [0, 3, 0]
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 ease-out" />
                     </motion.div>
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                   </Button>
                 </motion.div>
                
                                 <motion.div
                   whileHover={{ scale: 1.05, rotate: -1 }}
                   whileTap={{ scale: 0.95, rotate: 1 }}
                   animate={{
                     y: [0, -2, 0],
                     scale: [1, 1.01, 1]
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 0.5
                   }}
                 >
                   <Button 
                     onClick={navigateToPortfolio}
                     className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-3xl text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 ease-out shadow-lg flex items-center gap-4 cursor-pointer"
                   >
                     <motion.div
                       animate={{
                         rotate: [0, 10, 0, -10, 0]
                       }}
                       transition={{
                         duration: 3,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     >
                       <Play className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out" />
                     </motion.div>
                     <span className="group-hover:scale-110 transition-transform duration-300 ease-out">Watch Demo</span>
                   </Button>
                 </motion.div>
              </motion.div>
        </div>
      </section>

        {/* Services Grid */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
                <motion.div
                  className="text-center mb-12 sm:mb-16 md:mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  style={{ willChange: "transform, opacity" }}
                >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full px-4 sm:px-6 py-2 text-cyan-400 text-xs sm:text-sm font-bold backdrop-blur-sm mb-4 sm:mb-6">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Our Expertise</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 transform-gpu">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 transform-gpu">
                  Comprehensive digital solutions designed to elevate your business and drive innovation.
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    className="group relative cursor-pointer"
                    onHoverStart={() => setHoveredService(index)}
                    onHoverEnd={() => setHoveredService(null)}
                    whileHover={{ 
                      y: -20,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <div className="relative p-8 rounded-3xl border backdrop-blur-xl h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:from-white/15 hover:via-white/8 hover:to-white/15 border-white/20 hover:border-white/50 transition-all duration-400 ease-out overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transform-gpu hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-cyan-500/20">
                    {/* Simple Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 transition-all duration-300 ease-out`} />
                    
                    {/* Simple Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                    
                    {/* Playful Floating Animation */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        y: [0, -8, 0, -4, 0],
                        rotate: [0, 1, 0, -0.5, 0],
                        scale: [1, 1.02, 1, 1.01, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />

                    {/* Background Effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-out`}></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                    
                    {/* Optimized Particle Effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute bottom-4 left-6 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                      <div className="absolute bottom-6 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                      </div>

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 px-3 py-1 text-xs font-bold transition-all duration-200 ease-out shadow-lg`}>
                          {service.badge}
                        </Badge>
                    </div>

                    {/* Playful Icon */}
                    <motion.div 
                      className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 ease-out z-10`}
                       whileHover={{ 
                         transition: { duration: 0.15, ease: "easeOut" }
                       }}
                      animate={{
                        y: [0, -2, 0],
                        rotate: [0, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <service.icon className="w-10 h-10 text-white transition-all duration-200 ease-out relative z-10" />
                      </motion.div>
                      
                      {/* Playful Icon Effects */}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-purple-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out blur-sm"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                       <h3 
                         className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 ease-out"
                       >
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ease-out">{service.description}</p>

                                          {/* Playful Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 ease-out"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 group-hover:text-yellow-400 transition-colors duration-200 ease-out" />
                          <span className="truncate group-hover:font-semibold transition-all duration-200 ease-out">{feature}</span>
                        </div>
                      ))}
                    </div>

                                          {/* Playful Stats */}
                    <motion.div 
                      className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all duration-300 ease-out"
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      animate={{
                        y: [0, -2, 0],
                        scale: [1, 1.01, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          y: [0, -1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0
                        }}
                      >
                        <div className="text-xl font-bold text-cyan-400 group-hover:text-yellow-400 transition-colors duration-200 ease-out">{service.stats.projects}</div>
                        <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 ease-out">Projects</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{
                          y: [0, -1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <div className="text-xl font-bold text-blue-400 group-hover:text-green-400 transition-colors duration-200 ease-out">{service.stats.clients}</div>
                        <div className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 ease-out">Clients</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          y: [0, -1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <div className="text-xl font-bold text-purple-400 group-hover:text-pink-400 transition-colors duration-200 ease-out">{service.stats.rating}</div>
                        <div className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors duration-300 ease-out">Rating</div>
                      </motion.div>
                    </motion.div>

                      {/* CTA */}
                    <Link href={service.href}>
                        <div>
                          <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 ease-out relative overflow-hidden">
                            <span className="relative z-10 transition-all duration-200 ease-out">Explore Service</span>
                            <ArrowUpRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                      </Button>
                        </div>
                    </Link>
                    </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-12 sm:mb-16 md:mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full px-4 sm:px-6 py-2 text-purple-400 text-xs sm:text-sm font-bold backdrop-blur-sm mb-4 sm:mb-6">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Tech Stack</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Technologies
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                  We leverage cutting-edge technologies to deliver exceptional digital solutions.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/20 hover:border-white/50 hover:shadow-cyan-500/20 transition-all duration-200 ease-out cursor-pointer text-center relative overflow-hidden transform-gpu"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" }
                    }}
                  >
                                         {/* Playful Floating Animation */}
                     <motion.div
                       className="absolute inset-0"
                       animate={{
                         y: [0, -6, 0, -3, 0],
                         rotate: [0, 2, 0, -1, 0],
                         scale: [1, 1.03, 1, 1.01, 1]
                       }}
                       transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut",
                         delay: index * 0.2
                       }}
                     />

                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${tech.color}-500/10 to-${tech.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out`}></div>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-${tech.color}-500 to-${tech.color}-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out`}></div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${tech.color}-500/20 to-${tech.color}-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-xl`}></div>
                    
                                         <motion.div 
                       className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300 ease-out relative z-10"
                       whileHover={{ 
                         scale: 1.4,
                         rotate: 15,
                         transition: { duration: 0.4, ease: "easeOut" }
                       }}
                       animate={{
                         rotate: [0, 5, 0, -5, 0],
                         scale: [1, 1.05, 1, 1.02, 1]
                       }}
                       transition={{
                         duration: 6,
                         repeat: Infinity,
                         ease: "easeInOut",
                         delay: index * 0.3
                       }}
                     >
                       {tech.icon}
                     </motion.div>
                    <motion.div 
                      className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 ease-out relative z-10 mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.div>
                    <div className="text-sm text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors duration-300 ease-out">
                      {tech.category}
                    </div>
                    
                    {/* Optimized Particle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                      <div className="absolute top-3 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Booking Quick Form Section */}
        <section className="py-20 lg:py-32 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="max-w-4xl mx-auto"
              >
              <div className="text-center mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-4 sm:px-6 py-2 text-green-400 text-sm font-bold backdrop-blur-sm mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 lg:mb-8">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Ready to Transform
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Your Business?
                  </span>
            </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss your project and create a custom solution that drives real results for your business.
                </p>
              </div>
                
              {/* Service Booking Form */}
                  <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl"
              >
                <form className="space-y-6 lg:space-y-8">
                  {/* First Row - Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Second Row - Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Third Row - Service Type */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800 text-white">Select a service</option>
                      <option value="web" className="bg-gray-800 text-white">Web Development</option>
                      <option value="mobile" className="bg-gray-800 text-white">Mobile Apps</option>
                      <option value="ai" className="bg-gray-800 text-white">AI Solutions</option>
                      <option value="design" className="bg-gray-800 text-white">UI/UX Design</option>
                      <option value="marketing" className="bg-gray-800 text-white">Digital Marketing</option>
                      <option value="security" className="bg-gray-800 text-white">Cybersecurity</option>
                      <option value="custom" className="bg-gray-800 text-white">Custom Solution</option>
                    </select>
                  </div>

                  {/* Fourth Row - Project Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                    />
                  </div>

                  {/* Fifth Row - Budget Range */}
                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800 text-white">Select budget range</option>
                      <option value="5k-10k" className="bg-gray-800 text-white">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-gray-800 text-white">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-gray-800 text-white">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-gray-800 text-white">$50,000 - $100,000</option>
                      <option value="100k+" className="bg-gray-800 text-white">$100,000+</option>
                      <option value="discuss" className="bg-gray-800 text-white">Let's discuss</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                  <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <Button 
                        type="submit"
                        className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/30 hover:scale-105 hover:from-green-400 hover:to-emerald-500 transition-all duration-300 ease-out relative overflow-hidden w-full sm:w-auto"
                      >
                        <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out">
                          Get Free Consultation
                        </span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                      </Button>
                      
                      <Button 
                        type="button"
                        variant="ghost"
                        className="group border-2 border-white/30 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-bold hover:border-white/50 transition-all duration-300 ease-out w-full sm:w-auto"
                      >
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out" />
                        <span>View Portfolio</span>
                    </Button>
                  </motion.div>
            </div>
                </form>
              </motion.div>
              </motion.div>
          </div>
        </section>
      </main>
      </div>

    </div>
  );
}
