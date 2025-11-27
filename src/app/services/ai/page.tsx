'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap, Shield, Users, TrendingUp, Cpu, Star, Clock, Globe, Database } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models to automate and optimize your business processes with  algorithms.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Intelligent automation solutions that reduce manual work and increase operational efficiency.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting to make informed business decisions and predictions.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Chatbots & AI Assistants",
    description: "Intelligent conversational interfaces to enhance customer experience and support.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Advanced analytics and reporting to track performance and identify growth opportunities.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Tailored AI solutions designed specifically for your unique business needs and challenges.",
    color: "bg-gradient-to-br from-red-500 to-orange-600"
  }
];

const technologies = [
  { name: "TensorFlow", category: "ML Framework", color: "bg-orange-500" },
  { name: "PyTorch", category: "Deep Learning", color: "bg-red-500" },
  { name: "OpenAI GPT", category: "NLP", color: "bg-green-500" },
  { name: "AWS SageMaker", category: "Cloud ML", color: "bg-orange-600" },
  { name: "Google Cloud AI", category: "Cloud AI", color: "bg-blue-500" },
  { name: "Azure ML", category: "Cloud ML", color: "bg-blue-600" },
  { name: "Scikit-learn", category: "ML Library", color: "bg-orange-500" },
  { name: "Hugging Face", category: "NLP Models", color: "bg-yellow-500" }
];

const processSteps = [
  {
    step: "01",
    title: "AI Strategy",
    description: "Analyze your business needs and develop a comprehensive AI strategy.",
    icon: Brain
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Collect, clean, and prepare data for AI model training and deployment.",
    icon: Database
  },
  {
    step: "03",
    title: "Model Development",
    description: "Build and train custom AI models tailored to your specific requirements.",
    icon: Cpu
  },
  {
    step: "04",
    title: "Deployment & Monitoring",
    description: "Deploy AI solutions and continuously monitor performance and accuracy.",
    icon: Shield
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CTO, TechInnovate",
    content: "Their AI solutions transformed our operations. We achieved 40% efficiency gains and significant cost savings.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, DataCorp",
    content: "The predictive analytics they implemented helped us make data-driven decisions that increased revenue by 25%.",
    rating: 5
  }
];

const stats = [
  { label: "AI Models Deployed", value: 50, icon: Brain, color: "text-blue-500" },
  { label: "Efficiency Gains", value: 85, icon: Zap, color: "text-green-500" },
  { label: "Accuracy Rate", value: 95, icon: Shield, color: "text-purple-500" },
  { label: "Client Satisfaction", value: 98, icon: Star, color: "text-orange-500" }
];

export default function AISolutionsPage() {
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-8 py-4 text-green-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
                <Brain className="w-5 h-5" />
                <span>AI Solutions</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-gradient-animated">
                AI-Powered Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Transform your business with cutting-edge AI solutions. From automation to predictive analytics, 
                we help you leverage the power of artificial intelligence to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </InteractiveButton>
                <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>View Case Studies</span>
                  <Globe className="w-5 h-5 ml-3" />
                </InteractiveButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="bounce-in" delay={index * 200} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    <AnimatedCounter end={stat.value} />
                    {stat.label === "Efficiency Gains" && "%"}
                    {stat.label === "Accuracy Rate" && "%"}
                    {stat.label === "Client Satisfaction" && "%"}
              </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-3 text-green-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-green-500/30 transition-all duration-300">
                <span>Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                AI Solutions That Drive Results
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                We deliver intelligent solutions that automate processes, provide insights, and create competitive advantages.
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
                      <CardTitle className="group-hover:text-green-400 transition-colors text-white text-xl">
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
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-3 text-green-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-green-500/30 transition-all duration-300">
                <span>Tech Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                AI Technologies We Use
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                We leverage cutting-edge AI technologies and frameworks to build powerful solutions.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <ScrollAnimation key={tech.name} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${tech.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold group-hover:text-green-400 transition-colors text-white text-base">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 text-center">
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
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-3 text-green-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-green-500/30 transition-all duration-300">
                <span>Our Process</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                How We Build AI Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Our proven AI development process ensures successful implementation and measurable results.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <ScrollAnimation animation="slide-in-up" delay={index * 200}>
                    <InteractiveCard className="group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300">
                      <CardHeader>
                        <div className="mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className="w-fit mx-auto mb-2 border-green-500 text-green-400">
                          {step.step}
                        </Badge>
                        <CardTitle className="group-hover:text-green-400 transition-colors text-white text-xl">
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
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full px-6 py-3 text-green-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-green-500/30 transition-all duration-300">
                <span>Testimonials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Don't just take our word for it. Here's what our clients have to say about our AI solutions.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={testimonial.name} animation="scale-in" delay={index * 200}>
                  <InteractiveCard className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50">
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
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollAnimation animation="slide-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how AI can transform your business and create new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Get AI Consultation</span>
                  <Brain className="w-5 h-5 ml-3" />
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
