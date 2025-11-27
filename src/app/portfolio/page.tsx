'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Star, Sparkles, Zap, Rocket, CheckCircle, ArrowUpRight, Globe, Play, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring advanced product management, payment integration, and analytics dashboard.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/project1.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Featured",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
    stats: { users: "10K+", revenue: "$2M+", rating: "4.9/5" },
    features: ["Payment Integration", "Analytics Dashboard", "Product Management", "User Authentication"]
  },
  {
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.",
    category: "Mobile Apps",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    image: "/project2.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Popular",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    stats: { users: "50K+", transactions: "1M+", rating: "4.8/5" },
    features: ["Biometric Auth", "Real-time Transactions", "Financial Analytics", "Security Features"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "An intelligent analytics platform that provides real-time insights, predictive analytics, and automated reporting for business intelligence.",
    category: "AI Solutions",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "/project3.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Innovative",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    stats: { insights: "100K+", accuracy: "95%", rating: "4.9/5" },
    features: ["Predictive Analytics", "Real-time Insights", "Automated Reports", "ML Models"]
  },
  {
    title: "Design System & UI Kit",
    description: "A comprehensive design system with reusable components, design tokens, and documentation for consistent brand experiences.",
    category: "UI/UX Design",
    technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
    image: "/project4.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Creative",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    stats: { components: "200+", downloads: "5K+", rating: "4.7/5" },
    features: ["Reusable Components", "Design Tokens", "Documentation", "Brand Consistency"]
  },
  {
    title: "Digital Marketing Platform",
    description: "An all-in-one digital marketing platform with SEO tools, social media management, and campaign analytics.",
    category: "Digital Marketing",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image: "/project5.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Growth",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    stats: { campaigns: "500+", reach: "10M+", rating: "4.8/5" },
    features: ["SEO Tools", "Social Media Management", "Campaign Analytics", "Automation"]
  },
  {
    title: "Cybersecurity Monitoring System",
    description: "A comprehensive security monitoring system with real-time threat detection, incident response, and compliance reporting.",
    category: "Cybersecurity",
    technologies: ["Python", "Elasticsearch", "React", "Docker"],
    image: "/project6.jpg",
    liveUrl: "#",
    githubUrl: "#",
    badge: "Secure",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-500/20 to-pink-500/20",
    stats: { threats: "1K+", incidents: "50+", rating: "4.9/5" },
    features: ["Threat Detection", "Incident Response", "Compliance Reporting", "Real-time Monitoring"]
  }
];

const categories = [
  { name: "All", icon: Star, count: projects.length },
  { name: "Web Development", icon: Globe, count: 2 },
  { name: "Mobile Apps", icon: Target, count: 1 },
  { name: "AI Solutions", icon: TrendingUp, count: 1 },
  { name: "UI/UX Design", icon: Users, count: 1 },
  { name: "Digital Marketing", icon: Zap, count: 1 },
  { name: "Cybersecurity", icon: Rocket, count: 1 }
];

export default function PortfolioPage() {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 });

  const navigateToContact = () => {
    router.push('/contact');
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

  const navigateToServices = () => {
    router.push('/services');
  };

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

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden ultra-smooth-scroll fast-scroll">

      {/* Main Content with Responsive Top Padding */}
      <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40">
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
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-cyan-400 text-sm sm:text-base lg:text-lg font-bold backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 ease-out cursor-pointer group"
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
                  <span className="text-xs sm:text-sm lg:text-base group-hover:font-extrabold transition-all duration-300 ease-out">Creative Portfolio</span>
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
                className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-none"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4 }}
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
                  Showcasing
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
                  Innovation
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Explore our diverse portfolio of cutting-edge projects that demonstrate our expertise in creating innovative digital solutions that drive real business results.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
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
                  <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-3xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-4 shadow-2xl hover:shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 ease-out relative overflow-hidden">
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out">View Projects</span>
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
                      <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 ease-out" />
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
                  <Button className="group bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 text-purple-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-3xl text-base sm:text-lg font-bold hover:bg-purple-500/30 hover:border-purple-400/80 hover:text-purple-200 transition-all duration-300 ease-out backdrop-blur-xl flex items-center gap-2 sm:gap-4 shadow-lg hover:shadow-purple-500/20">
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

          {/* Category Filter */}
          <section className="py-16 relative bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-8">
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-out flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 1,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300 ease-out" />
                    <span>{category.name}</span>
                    <Badge className="ml-1 sm:ml-2 bg-white/20 text-xs">{category.count}</Badge>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                layout
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -20,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="group relative cursor-pointer"
                  >
                    <div className="relative p-8 rounded-3xl border backdrop-blur-xl h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:from-white/15 hover:via-white/8 hover:to-white/15 border-white/20 hover:border-white/50 transition-all duration-400 ease-out overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transform-gpu hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-cyan-500/20">
                    {/* Simple Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-20 transition-all duration-300 ease-out`} />
                    
                    {/* Simple Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 z-10">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-2 sm:px-3 py-1 text-xs font-bold group-hover:scale-110 transition-transform duration-300 ease-out shadow-lg`}>
                        {project.badge}
                      </Badge>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 z-10">
                      <Badge className="bg-white/20 text-white border-0 px-2 sm:px-3 py-1 text-xs font-bold backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Icon */}

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold mt-8 text-white mb-4 group-hover:text-cyan-300 transition-all duration-400 ease-out group-hover:scale-105 transform-gpu"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-400 ease-out group-hover:scale-102 transform-gpu"
                        whileHover={{ 
                          scale: 1.02,
                          y: -1,
                          transition: { duration: 0.4, ease: "easeOut" }
                        }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Simple Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 ease-out"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300 ease-out" />
                            <span className="truncate group-hover:font-semibold transition-all duration-300 ease-out">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Simple Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all duration-300 ease-out">
                        <div className="text-center">
                          <div className="text-xl font-bold text-cyan-400 group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300 ease-out">{project.stats.users}</div>
                          <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 ease-out">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-400 group-hover:scale-125 group-hover:text-green-400 transition-all duration-300 ease-out">{project.stats.revenue}</div>
                          <div className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 ease-out">Revenue</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-purple-400 group-hover:scale-125 group-hover:text-pink-400 transition-all duration-300 ease-out">{project.stats.rating}</div>
                          <div className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors duration-300 ease-out">Rating</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={tech} className="bg-white/10 text-white border-0 text-xs font-bold group-hover:bg-white/20 transition-all duration-300 ease-out">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Simple CTA Button */}
                      <motion.button
                        whileHover={{ x: 8, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-all duration-300 ease-out group/btn font-semibold cursor-pointer"
                      >
                        <span className="group-hover/btn:scale-105 transition-transform duration-300 ease-out">View Project</span>
                        <motion.div
                          className="w-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-out group-hover/btn:w-8"
                        />
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 ease-out" />
                        </motion.div>
                      </motion.button>
                    </div>
                    
                    {/* Simple Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12"
                      transition={{ duration: 1.5 }}
                      animate={{ x: ['-100%', '100%'] }}
                      style={{ transformOrigin: 'center' }}
                    />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 relative bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-2 text-green-400 text-sm font-bold backdrop-blur-sm mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Ready to Create
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Something Amazing?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss your project and create a custom solution that drives real results for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={navigateToContact}
                      className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-3xl text-xl font-bold flex items-center justify-center gap-4 shadow-2xl hover:shadow-cyan-500/30 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 ease-out relative overflow-hidden cursor-pointer"
                    >
                      <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 ease-out">Start Your Project</span>
                      <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <Button className="group bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 text-green-300 px-12 py-6 rounded-3xl text-xl font-bold hover:bg-green-500/30 hover:border-green-400/80 hover:text-green-200 transition-all duration-300 ease-out backdrop-blur-xl flex items-center gap-4 shadow-lg hover:shadow-green-500/20">
                        <Globe className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out" />
                        <span className="group-hover:scale-110 transition-transform duration-300 ease-out">Contact Us</span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
}
