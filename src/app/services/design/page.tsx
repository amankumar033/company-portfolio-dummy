'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Users, Eye, Zap, Smartphone, Layers, Star, Clock, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import { 
  ScrollProgress, 
  InteractiveCard, 
  ScrollAnimation, 
  InteractiveButton,
  Tooltip,
  AnimatedCounter
} from "@/components/InteractiveElements";

const features = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Beautiful, modern interfaces that capture your brand essence and create lasting impressions.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Users,
    title: "User Research",
    description: "In-depth user research to understand your audience and their needs, behaviors, and pain points.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "User Experience",
    description: "Intuitive user flows and interactions that delight users and drive engagement.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Interactive prototypes to test and validate design concepts before development.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Designs that work seamlessly across all devices and screen sizes for optimal user experience.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Comprehensive design systems for consistent brand experiences across all touchpoints.",
    color: "bg-gradient-to-br from-red-500 to-orange-600"
  }
];

const technologies = [
  { name: "Figma", category: "Design Tool", color: "bg-purple-500" },
  { name: "Adobe XD", category: "Prototyping", color: "bg-blue-500" },
  { name: "Sketch", category: "Design Tool", color: "bg-yellow-500" },
  { name: "InVision", category: "Prototyping", color: "bg-pink-500" },
  { name: "Principle", category: "Animation", color: "bg-green-500" },
  { name: "Framer", category: "Prototyping", color: "bg-indigo-500" },
  { name: "Adobe Creative Suite", category: "Design Tools", color: "bg-red-500" },
  { name: "Zeplin", category: "Handoff", color: "bg-cyan-500" }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "Understand your business goals, users, and market landscape.",
    icon: Users
  },
  {
    step: "02",
    title: "Design Strategy",
    description: "Create design concepts and user experience strategies.",
    icon: Eye
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description: "Build beautiful interfaces and interactive prototypes.",
    icon: Palette
  },
  {
    step: "04",
    title: "Testing & Iteration",
    description: "Test with users and refine designs based on feedback.",
    icon: Zap
  }
];

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Product Manager, DesignCorp",
    content: "The UI/UX design they created for our app is absolutely stunning. Our user engagement increased by 200%.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "CEO, StartupHub",
    content: "Professional design team that truly understands user experience. The results exceeded our expectations.",
    rating: 5
  }
];

const stats = [
  { label: "Design Projects", value: 150, icon: Palette, color: "text-blue-500" },
  { label: "User Satisfaction", value: 95, icon: Users, color: "text-green-500" },
  { label: "Design Awards", value: 12, icon: Star, color: "text-purple-500" },
  { label: "Client Retention", value: 98, icon: Eye, color: "text-orange-500" }
];

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ScrollProgress />
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-8 py-4 text-yellow-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
                <Palette className="w-5 h-5" />
                <span>UI/UX Design</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-gradient-animated">
                Beautiful User Experiences
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                We create stunning, user-centered designs that not only look beautiful but also provide 
                exceptional user experiences that drive engagement and conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Start Design Project</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </InteractiveButton>
                <InteractiveButton size="lg" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>View Portfolio</span>
                  <Globe className="w-5 h-5 ml-3" />
                </InteractiveButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="bounce-in" delay={index * 200} className="text-center group">
                  <div className={`mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    <AnimatedCounter end={stat.value} />
                    {stat.label === "User Satisfaction" && "%"}
                    {stat.label === "Client Retention" && "%"}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
                <span>Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Design Services That Deliver
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                We combine creativity with user-centered design principles to create experiences that users love.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={feature.title} animation="scale-in" delay={index * 200}>
                  <InteractiveCard className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                  <CardHeader>
                      <div className={`mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                    </div>
                      <CardTitle className="group-hover:text-yellow-400 transition-colors text-white text-xl">
                        {feature.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-gray-300 leading-relaxed text-center">
                      {feature.description}
                      </p>
                    </CardContent>
                  </InteractiveCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
                <span>Tech Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Design Tools & Technologies
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                We use industry-leading design tools to create exceptional user experiences.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <ScrollAnimation key={tech.name} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${tech.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold group-hover:text-yellow-400 transition-colors text-white">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        {tech.category}
                      </p>
                    </CardContent>
                  </InteractiveCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
                <span>Our Process</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                How We Create Amazing Designs
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Our proven design process ensures user-centered solutions that drive results.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <ScrollAnimation animation="slide-in-up" delay={index * 200}>
                    <InteractiveCard className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                      <CardHeader>
                        <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 mb-4 group-hover:scale-110 transition-transform">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className="w-fit mx-auto mb-2 bg-yellow-500/20 border-yellow-500/40 text-yellow-400">
                          {step.step}
                        </Badge>
                        <CardTitle className="group-hover:text-yellow-400 transition-colors text-white text-xl">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 leading-relaxed text-center">
                          {step.description}
                        </p>
                      </CardContent>
                    </InteractiveCard>
                  </ScrollAnimation>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-3 text-yellow-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
                <span>Testimonials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Don't just take our word for it. Here's what our clients have to say about our design services.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={testimonial.name} animation="scale-in" delay={index * 200}>
                  <InteractiveCard className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                  </CardContent>
                  </InteractiveCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollAnimation animation="slide-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Experiences?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Let's design beautiful, user-friendly interfaces that your customers will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Get Design Quote</span>
                  <Palette className="w-5 h-5 ml-3" />
                </InteractiveButton>
              <Link href="/contact">
                  <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </InteractiveButton>
              </Link>
            </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

    </div>
  );
}
