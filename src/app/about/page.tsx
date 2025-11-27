'use client';

import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Rocket, Zap, Shield, Star, ArrowRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  AnimatedCounter, 
  InteractiveButton,
  Tooltip,
  Modal
} from "@/components/InteractiveElements";
import { PageLayout, SectionBadge, GlassCard, SectionHeader, BackgroundPattern } from "@/components/ui";

const stats = [
  { label: "Projects Completed", value: 500, unit: "+", icon: Target, color: "from-cyan-500 to-blue-500" },
  { label: "Happy Clients", value: 200, unit: "+", icon: Users, color: "from-purple-500 to-pink-500" },
  { label: "Team Members", value: 50, unit: "+", icon: Users, color: "from-green-500 to-emerald-500" },
  { label: "Years Experience", value: 8, unit: "+", icon: Star, color: "from-orange-500 to-red-500" }
];

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    icon: Rocket,
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    title: "Quality",
    description: "We deliver exceptional results that exceed expectations and drive real business value.",
    icon: Award,
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to understand their needs and deliver tailored solutions.",
    icon: Users,
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of professionalism and ethical business practices.",
    icon: Shield,
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "👩‍💼",
    description: "Visionary leader with 15+ years in tech",
    skills: ["Leadership", "Strategy", "Innovation"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "👨‍💻",
    description: "Technical expert and innovation driver",
    skills: ["Architecture", "AI/ML", "Cloud"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "👩‍🎨",
    description: "Creative genius behind our beautiful interfaces",
    skills: ["UI/UX", "Design Systems", "Prototyping"]
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "👨‍🔧",
    description: "Full-stack wizard and problem solver",
    skills: ["Full-Stack", "DevOps", "Performance"]
  }
];

export default function AboutPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigateToContact = () => {
    router.push('/contact');
  };

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageLayout theme="dark">
      
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <BackgroundPattern className="relative min-h-[80vh] flex items-center justify-center pt-10 pb-20">
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
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <SectionBadge className="mb-8" icon={<Zap className="w-4 h-4" />}>
                    About Us
              </SectionBadge>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
                <span className="text-white">About</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  aman kumar
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
                We are a passionate team of innovators, designers, and developers dedicated to transforming businesses through cutting-edge technology solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <InteractiveButton 
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center cursor-pointer"
                onClick={navigateToContact}
              >
                <Rocket className="w-5 h-5 mr-2" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </InteractiveButton>
              
              <InteractiveButton 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black flex items-center justify-center cursor-pointer"
                onClick={navigateToPortfolio}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span>View Our Work</span>
              </InteractiveButton>
            </motion.div>
          </div>
        </BackgroundPattern>

        {/* Floating Icons Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:rotate-12 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Innovation</h3>
            </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-rotate-12 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Speed</h3>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:rotate-12 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Security</h3>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-rotate-12 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Quality</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <BackgroundPattern className="py-6 sm:py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/20">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
                </h2>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
                  Numbers that speak for our success and commitment to excellence
                </p>
              </div>
            </motion.div>
            
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:rotate-12 group">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {stat.value}{stat.unit}
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                      {stat.label === "Projects Completed" ? "Projects" :
                       stat.label === "Happy Clients" ? "Clients" :
                       stat.label === "Team Members" ? "Team" :
                       stat.label === "Years Experience" ? "Years" : stat.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundPattern>

                {/* Mission Section */}
        <BackgroundPattern className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <SectionBadge>
                    Our Mission
                  </SectionBadge>
                  </div>
                  
                <GlassCard>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Empowering Businesses Through <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span>
                    </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                      At aman kumar, we believe that technology should be a catalyst for business growth and innovation. 
                      Our mission is to help businesses of all sizes leverage the power of digital solutions to achieve 
                      their goals and stay competitive in today&apos;s rapidly evolving market.
                    </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      We combine technical expertise with creative thinking to deliver solutions that not only meet 
                      current needs but also scale for future growth. Our team of experienced professionals is dedicated 
                      to providing exceptional service and building long-term partnerships with our clients.
                    </p>
                      <InteractiveButton 
                    className="text-lg px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center cursor-pointer"
                        onClick={navigateToContact}
                      >
                    <Rocket className="w-5 h-5 mr-2" />
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                      </InteractiveButton>
                </GlassCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard hover={true}>
                  <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 text-center">🚀</div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">Why Choose Us?</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Expert team with years of experience</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Cutting-edge technology stack</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Proven track record of success</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Dedicated support and maintenance</span>
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </BackgroundPattern>

        {/* Values Section */}
        <BackgroundPattern className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <GlassCard>
                <SectionBadge className="mb-4 sm:mb-6">
                  Our Values
                </SectionBadge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  What Drives Us <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Forward</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                  Our core values shape everything we do and guide us in delivering exceptional results for our clients.
                </p>
              </GlassCard>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <GlassCard hover={true}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform ${value.color}`}>
                      <value.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white group-hover:animate-bounce" />
                  </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundPattern>

        {/* Team Section */}
        <BackgroundPattern className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <GlassCard>
                <SectionBadge className="mb-4 sm:mb-6">
                  Our Team
                </SectionBadge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Meet the <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experts</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                  Our talented team of professionals brings together diverse expertise to deliver outstanding results.
              </p>
              </GlassCard>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {teamMembers.map((member, index) => (
                <motion.div
                    key={member.name} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div 
                    className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => {
                      setSelectedMember(member);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                      {member.image}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-medium mb-3 sm:mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <Tooltip key={skill} content={`Expert in ${skill}`}>
                          <Badge variant="outline" className="text-xs cursor-help bg-white/10 text-gray-300 border-white/30">
                            {skill}
                          </Badge>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundPattern>

        {/* Enhanced CTA Section */}
        <BackgroundPattern className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <GlassCard className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Work <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Together?</span>
            </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0">
                  Let&apos;s discuss how we can help you achieve your goals with innovative technology solutions.
                </p>
              </GlassCard>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <InteractiveButton 
                    size="lg" 
                    variant="secondary" 
                  className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                    onClick={navigateToContact}
                  >
                  <Rocket className="w-5 h-5 mr-2" />
                  <span>Start a Project</span>
                  </InteractiveButton>
                  <InteractiveButton 
                    size="lg" 
                    variant="outline" 
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black flex items-center justify-center cursor-pointer"
                    onClick={navigateToPortfolio}
                  >
                  <BookOpen className="w-5 h-4 mr-2" />
                  <span>View Our Work</span>
                  </InteractiveButton>
              </div>
            </motion.div>
          </div>
        </BackgroundPattern>
      </main>

      {/* Team Member Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{selectedMember.image}</div>
            <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
            <p className="text-gray-400">{selectedMember.role}</p>
          </div>
          <p className="text-gray-300">{selectedMember.description}</p>
          <div>
            <h4 className="font-semibold mb-2 text-white">Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedMember.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Modal>

    </PageLayout>
  );
}
