'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, Zap, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import FloatingGlassElements from "@/components/FloatingGlassElements";
import { ScrollProgress, InteractiveCard, ScrollAnimation, InteractiveButton } from '@/components/InteractiveElements';

const features = [
  {
    icon: ShoppingCart,
    title: "Multi-Platform Selling",
    description: "Sell across multiple channels including web, mobile apps, and social media platforms.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: CreditCard,
    title: "Secure Payment Gateway",
    description: "Integrated payment solutions with PCI compliance and fraud protection.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Truck,
    title: "Inventory Management",
    description: "Real-time inventory tracking and automated reorder management.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SSL certificates and GDPR compliance.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive reporting and insights to optimize your business.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "CRM integration with customer segmentation and loyalty programs.",
    color: "bg-gradient-to-br from-teal-500 to-green-600"
  }
];

const benefits = [
  "24/7 customer support",
  "Mobile-first responsive design",
  "SEO optimization built-in",
  "Social media integration",
  "Email marketing automation",
  "Multi-language support",
  "Advanced search & filtering",
  "Wishlist & favorites",
  "Product reviews & ratings",
  "Abandoned cart recovery"
];

const pricing = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses",
    features: ["Basic e-commerce setup", "5 product categories", "Payment integration", "Basic analytics", "Email support"]
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: ["Advanced features", "Unlimited products", "Multi-language", "Advanced analytics", "Priority support", "Mobile app"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: ["Custom development", "API integration", "White-label solution", "Dedicated support", "Custom analytics", "SLA guarantee"]
  }
];

export default function EcommercePage() {
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-full px-8 py-4 text-blue-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <ShoppingCart className="w-5 h-5" />
                <span>E-commerce Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient-animated">
                Build Your Online
                <span className="block">Store Empire</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your business with our comprehensive e-commerce solutions. 
                From setup to scaling, we handle everything to make your online store successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </InteractiveButton>
                <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>View Demo</span>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Our e-commerce platform comes packed with powerful features designed to drive sales and growth.
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Benefits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Why Choose Our E-commerce Solution?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Experience the advantages that set our platform apart from the competition.
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-full px-6 py-3 text-blue-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                <span>Pricing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Choose Your Plan
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Flexible pricing options to match your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
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
                        {plan.price !== "Custom" && <span className="text-gray-400">/one-time</span>}
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
                      <Button className="w-full btn-modern hover-lift bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500">
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
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-gradient-to-b from-black to-gray-900">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Join thousands of successful businesses that trust us with their e-commerce success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <InteractiveButton size="lg" variant="secondary" className="text-lg px-10 py-4 btn-modern hover-lift bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                <span>Start Building</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </InteractiveButton>
              <InteractiveButton size="lg" variant="outline" className="text-lg px-10 py-4 btn-modern hover-lift border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <span>Schedule Demo</span>
              </InteractiveButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
