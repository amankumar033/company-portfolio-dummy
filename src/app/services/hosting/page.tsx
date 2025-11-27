'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Shield, Zap, Globe, Database, Cloud, ArrowRight, CheckCircle, Star, Clock } from "lucide-react";
import Link from "next/link";
import FloatingGlassElements from "@/components/FloatingGlassElements";
import { ScrollProgress, InteractiveCard, ScrollAnimation, InteractiveButton } from '@/components/InteractiveElements';

const features = [
  {
    icon: Server,
    title: "High-Performance Servers",
    description: "Enterprise-grade hardware with SSD storage and optimized configurations for maximum speed.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "DDoS protection, SSL certificates, firewall management, and regular security updates.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "99.9% Uptime Guarantee",
    description: "Reliable hosting with guaranteed uptime and 24/7 monitoring and support.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network for lightning-fast loading times worldwide.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: Database,
    title: "Managed Databases",
    description: "Automated backups, optimization, and scaling for your database needs.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Auto-scaling capabilities to handle traffic spikes and growth seamlessly.",
    color: "bg-gradient-to-br from-teal-500 to-green-600"
  }
];

const benefits = [
  "24/7 technical support",
  "Automated daily backups",
  "One-click app installations",
  "Free SSL certificates",
  "Email hosting included",
  "Advanced analytics dashboard",
  "Git deployment integration",
  "Staging environments",
  "Performance monitoring",
  "Security scanning"
];

const plans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    description: "Perfect for small websites",
    features: ["10GB SSD Storage", "Unlimited Bandwidth", "5 Email Accounts", "Free SSL", "Daily Backups", "24/7 Support"]
  },
  {
    name: "Professional",
    price: "$24.99",
    period: "/month",
    description: "Ideal for growing businesses",
    features: ["50GB SSD Storage", "Unlimited Bandwidth", "Unlimited Emails", "Free SSL", "Daily Backups", "Priority Support", "CDN Included", "Staging Environment"]
  },
  {
    name: "Enterprise",
    price: "$49.99",
    period: "/month",
    description: "For high-traffic websites",
    features: ["200GB SSD Storage", "Unlimited Bandwidth", "Unlimited Emails", "Free SSL", "Hourly Backups", "Dedicated Support", "Advanced CDN", "Load Balancing"]
  }
];

export default function HostingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <FloatingGlassElements />
      <ScrollProgress />
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full px-8 py-4 text-blue-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <Server className="w-5 h-5" />
                <span>Cloud Hosting Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient-animated">
                Lightning-Fast
                <span className="block">Cloud Hosting</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Experience blazing-fast performance with our enterprise-grade cloud hosting solutions. 
                Built for speed, security, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </InteractiveButton>
                <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>View Plans</span>
                </InteractiveButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Our hosting platform is built with the latest technology to ensure maximum performance and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={feature.title} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className="card-modern hover-lift group bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="text-center flex flex-col items-center">
                      <div className={`mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-blue-400 transition-colors text-white text-xl text-center">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-1 flex flex-col justify-center">
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

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Benefits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Why Choose Our Hosting?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Get more than just hosting with our comprehensive platform and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-12 relative bg-gradient-to-b from-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Pricing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Choose Your Hosting Plan
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Flexible hosting plans designed to grow with your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <ScrollAnimation key={plan.name} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className={`card-modern hover-lift group bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 ${index === 1 ? 'ring-2 ring-blue-400 scale-105' : ''}`}>
                    <CardHeader className="text-center">
                      {index === 1 && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white border-0">
                          Most Popular
                        </Badge>
                      )}
                      <CardTitle className="text-2xl mb-2 text-white">{plan.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full btn-modern hover-lift bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500">
                        Get Started
                      </Button>
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Lightning-Fast Hosting?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Join thousands of websites that trust us with their hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                <span>Start Hosting</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </InteractiveButton>
              <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <span>Contact Sales</span>
              </InteractiveButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
 