'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Globe, Zap, Shield, Smartphone, Database, Cpu, CheckCircle, Star, Users, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Websites that look perfect on all devices and screen sizes.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with modern development practices.",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and robust error handling.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Mobile-optimized experiences that drive engagement.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "Built with the latest technologies and frameworks.",
    color: "bg-gradient-to-br from-red-500 to-orange-600"
  }
];

const technologies = [
  { name: "React", category: "Frontend", color: "bg-blue-500" },
  { name: "Next.js", category: "Framework", color: "bg-black" },
  { name: "TypeScript", category: "Language", color: "bg-blue-600" },
  { name: "Node.js", category: "Backend", color: "bg-green-500" },
  { name: "MongoDB", category: "Database", color: "bg-green-600" },
  { name: "PostgreSQL", category: "Database", color: "bg-blue-700" },
  { name: "AWS", category: "Cloud", color: "bg-orange-500" },
  { name: "Docker", category: "DevOps", color: "bg-blue-500" }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap."
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "We create wireframes and interactive prototypes for your approval."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your application with clean, maintainable code and thorough testing."
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "We deploy your application and provide ongoing support and maintenance."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    text: "ons delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched."
  },
  {
    name: "Michael Chen",
    company: "Digital Solutions",
    rating: 5,
    text: "The team at ons transformed our online presence. The website they built is fast, beautiful, and drives real business results."
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-12">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full px-8 py-4 text-cyan-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
                <Code className="w-5 h-5" />
                <span>Web Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-none">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Modern Web
                </span>
                <br />
                <span className="text-white">
                  Development
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                We build fast, scalable, and beautiful web applications that drive business growth. 
                From simple websites to complex web applications, we deliver exceptional digital experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center text-white">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="ghost" className="text-lg px-8 py-3 border-2 border-white/30 text-white hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>View Portfolio</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Why Choose Our
                </span>
                <br />
                <span className="text-white">Web Development</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                We combine cutting-edge technology with exceptional design to create web applications that deliver real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  <Card className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 h-full flex flex-col hover:scale-105 transition-all duration-300">
                    <CardHeader className="text-center flex flex-col items-center">
                      <div className={`mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-cyan-400 transition-colors text-white text-xl text-center">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-1 flex flex-col justify-center">
                      <p className="text-gray-300 leading-relaxed text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Technologies We
                </span>
                <br />
                <span className="text-white">Use</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                We leverage the latest technologies and frameworks to build robust, scalable web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  <Card className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${tech.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                        {tech.name}
                      </h3>
                      <div className="text-sm text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors duration-300 ease-out">
                        {tech.category}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Development
                </span>
                <br />
                <span className="text-white">Process</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                We follow a proven development process to ensure your project is delivered on time and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  <Card className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 h-full flex flex-col hover:scale-105 transition-all duration-300">
                    <CardHeader className="text-center flex flex-col items-center">
                      <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <Badge variant="outline" className="w-fit mx-auto mb-2 border-cyan-500 text-cyan-400">
                        {step.step}
                      </Badge>
                      <CardTitle className="group-hover:text-cyan-400 transition-colors text-white text-xl text-center">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-1 flex flex-col justify-center">
                      <p className="text-gray-300 leading-relaxed text-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  What Our Clients
                </span>
                <br />
                <span className="text-white">Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  <Card className="hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Build Your
                </span>
                <br />
                <span className="text-white">Next Web Application?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
                Let's discuss your project and create a custom solution that drives real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="text-lg px-10 py-4 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center text-white">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-4 hover:scale-105 transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Schedule a Call</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}