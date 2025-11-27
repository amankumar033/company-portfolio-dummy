"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Star, Code, Smartphone, Brain, Palette, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = siteConfig.portfolioCategories;

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Development",
      description: "Advanced financial analytics platform with real-time data visualization and AI-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "D3.js", "MongoDB"],
      rating: 5.0,
      client: "Global Bank",
      year: "2024",
      results: "300% increase in user engagement"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Apps",
      description: "Patient management system with telemedicine capabilities and secure health record storage.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "HIPAA"],
      rating: 4.9,
      client: "MedCare Solutions",
      year: "2024",
      results: "50% reduction in appointment no-shows"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "AI Solutions",
      description: "Intelligent content creation platform using GPT models with custom training and optimization.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Redis"],
      rating: 4.8,
      client: "ContentCorp",
      year: "2023",
      results: "80% faster content creation"
    },
    {
      id: 4,
      title: "E-Commerce Redesign",
      category: "UI/UX Design",
      description: "Complete UX overhaul resulting in 150% increase in conversions and improved user satisfaction.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Figma", "React", "Stripe", "Analytics"],
      rating: 5.0,
      client: "RetailPro",
      year: "2023",
      results: "150% increase in conversions"
    },
    {
      id: 5,
      title: "Smart IoT Platform",
      category: "Web Development",
      description: "Industrial IoT management system with predictive maintenance and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "AWS IoT", "InfluxDB", "Grafana"],
      rating: 4.9,
      client: "IndustryTech",
      year: "2023",
      results: "40% reduction in maintenance costs"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description: "Social fitness platform with AI-powered workout recommendations and progress tracking.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Dart", "ML Kit", "Cloud Functions"],
      rating: 4.7,
      client: "FitLife",
      year: "2024",
      results: "200% increase in user retention"
    },
    {
      id: 7,
      title: "E-Commerce Platform",
      category: "E-commerce",
      description: "Custom e-commerce solution with advanced inventory management and multi-channel integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Shopify", "React", "Stripe", "Analytics"],
      rating: 4.9,
      client: "FashionHub",
      year: "2024",
      results: "120% increase in sales"
    },
    {
      id: 8,
      title: "AI Chatbot Assistant",
      category: "AI Solutions",
      description: "Intelligent customer service chatbot with natural language processing and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "NLP", "Dialogflow", "Analytics"],
      rating: 4.8,
      client: "SupportCorp",
      year: "2023",
      results: "70% reduction in support tickets"
    },
    {
      id: 9,
      title: "Design System",
      category: "UI/UX Design",
      description: "Comprehensive design system with component library and design tokens for consistent branding.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Figma", "Storybook", "React", "Design Tokens"],
      rating: 5.0,
      client: "TechCorp",
      year: "2024",
      results: "60% faster design iterations"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return Code;
      case "Mobile Apps":
        return Smartphone;
      case "AI Solutions":
        return Brain;
      case "E-commerce":
        return ShoppingCart;
      case "UI/UX Design":
        return Palette;
      default:
        return Code;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Color Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-teal-50/30 to-cyan-50/40"></div>
        
        {/* Floating color orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional subtle gradients */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-tl from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm text-accent-blue mb-6">
            <span>Our Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
            Featured
            <span className="block gradient-text">Portfolio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how we've helped businesses across industries achieve their digital transformation goals with innovative solutions.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const IconComponent = getCategoryIcon(filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center space-x-2 ${
                  activeFilter === filter
                    ? "bg-accent-blue text-white shadow-glow"
                    : "glass-card text-foreground hover:bg-white/10 border border-white/20 backdrop-blur-sm bg-white/40"
                }`}
              >
                {filter !== "All" && <IconComponent className="h-4 w-4" />}
                <span>{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ 
                  y: -20,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group glass-card rounded-2xl overflow-hidden hover-lift hover:shadow-strong transition-all duration-400 animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40 transform-gpu hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="glass-card p-2 rounded-full">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="hero-outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6">
                  {/* Enhanced Project Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full flex items-center space-x-1">
                      <IconComponent className="h-3 w-3" />
                      <span>{project.category}</span>
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-foreground">{project.rating}</span>
                    </div>
                  </div>

                  {/* Enhanced Project Title */}
                  <motion.h3 
                    className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-accent-blue transition-colors duration-400"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Enhanced Project Description */}
                  <motion.p 
                    className="text-muted-foreground mb-4 text-sm leading-relaxed"
                    whileHover={{ 
                      y: -1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Enhanced Results */}
                  <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-xs font-medium text-green-600">Results</p>
                    <p className="text-xs text-green-700">{project.results}</p>
                  </div>

                  {/* Enhanced Project Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">{project.client}</p>
                      <p className="text-xs text-muted-foreground">{project.year}</p>
                    </div>
                    <motion.div
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                    >
                      <Button variant="ghost" size="sm" className="group-hover:text-accent-blue transition-colors duration-400">
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-400" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            <h3 className="text-2xl font-bold font-heading text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together. View our complete portfolio and get inspired.
            </p>
            <Button variant="premium" size="lg" className="group">
              {siteConfig.cta.portfolio}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;