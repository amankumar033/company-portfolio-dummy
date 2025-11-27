'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Megaphone, TrendingUp, Search, Users, Target, BarChart3, Star, Clock, Zap, Globe, Cpu } from "lucide-react";
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
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic with proven SEO strategies.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage with your audience across all social media platforms with compelling content.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Target,
    title: "PPC Campaigns",
    description: "Targeted paid advertising campaigns that deliver measurable results and ROI.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Content Marketing",
    description: "Valuable content that attracts, engages, and converts your target audience.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing strategies and maximize performance.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Scalable strategies to accelerate your business growth and market expansion.",
    color: "bg-gradient-to-br from-red-500 to-orange-600"
  }
];

const technologies = [
  { name: "Google Ads", category: "PPC", color: "bg-blue-500" },
  { name: "Facebook Ads", category: "Social Media", color: "bg-blue-600" },
  { name: "Google Analytics", category: "Analytics", color: "bg-orange-500" },
  { name: "SEO Tools", category: "SEO", color: "bg-green-500" },
  { name: "Email Marketing", category: "Email", color: "bg-purple-500" },
  { name: "Content Creation", category: "Content", color: "bg-pink-500" },
  { name: "Social Media", category: "Platforms", color: "bg-indigo-500" },
  { name: "Marketing Automation", category: "Automation", color: "bg-cyan-500" }
];

const processSteps = [
  {
    step: "01",
    title: "Strategy Development",
    description: "We analyze your market and create a comprehensive marketing strategy.",
    icon: Target
  },
  {
    step: "02",
    title: "Campaign Setup",
    description: "Set up and optimize campaigns across multiple channels and platforms.",
    icon: Megaphone
  },
  {
    step: "03",
    title: "Content Creation",
    description: "Create compelling content that resonates with your target audience.",
    icon: Users
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous monitoring and optimization based on performance data.",
    icon: BarChart3
  }
];

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Marketing Director, GrowthCorp",
    content: "Their digital marketing strategies increased our online visibility by 300% and drove significant revenue growth.",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "CEO, StartupXYZ",
    content: "Professional team that delivered measurable results. Our conversion rates improved dramatically.",
    rating: 5
  }
];

const stats = [
  { label: "Campaigns Launched", value: 200, icon: Megaphone, color: "text-blue-500" },
  { label: "Traffic Increase", value: 500, icon: TrendingUp, color: "text-green-500" },
  { label: "Conversion Rate", value: 85, icon: Target, color: "text-purple-500" },
  { label: "Client Satisfaction", value: 98, icon: Star, color: "text-orange-500" }
];

export default function DigitalMarketingPage() {
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
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/40 rounded-full px-8 py-4 text-green-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
                <Megaphone className="w-5 h-5" />
                <span>Digital Marketing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient-animated">
                Drive Growth with Digital Marketing
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Drive growth and reach your target audience with our comprehensive digital marketing services. 
                From SEO to social media, we help you build a strong online presence that converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Marketing Campaign
                </InteractiveButton>
                <InteractiveButton size="lg" className="text-lg px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>View Case Studies</span>
                </InteractiveButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-modern bg-gradient-to-br from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="bounce-in" delay={index * 200} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                    <AnimatedCounter end={stat.value} />
                    {stat.label === "Conversion Rate" && "%"}
                    {stat.label === "Client Satisfaction" && "%"}
                    {stat.label === "Traffic Increase" && "%"}
              </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-modern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <Badge className="mb-4 hover-glow" variant="secondary">Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Marketing Services That Drive Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We create data-driven marketing strategies that increase visibility, engagement, and conversions.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={feature.title} animation="scale-in" delay={index * 200}>
                  <InteractiveCard className="group text-center">
                  <CardHeader>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                    </div>
                      <CardTitle className="group-hover:text-accent-blue transition-colors">
                        {feature.title}
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
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
        <section className="section-modern bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <Badge className="mb-4 hover-glow" variant="secondary">Tech Stack</Badge>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Marketing Tools & Platforms
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage the latest marketing technologies to maximize your campaign performance.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <ScrollAnimation key={tech.name} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className="group text-center">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${tech.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Megaphone className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold group-hover:text-accent-blue transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
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
        <section className="section-modern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <Badge className="mb-4 hover-glow" variant="secondary">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                How We Drive Your Marketing Success
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven marketing process ensures measurable results and continuous optimization.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <ScrollAnimation animation="slide-in-up" delay={index * 200}>
                    <InteractiveCard className="group text-center">
                      <CardHeader>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-primary mb-4 group-hover:scale-110 transition-transform">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <Badge variant="outline" className="w-fit mx-auto mb-2">
                          {step.step}
                        </Badge>
                        <CardTitle className="group-hover:text-accent-blue transition-colors">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </InteractiveCard>
                  </ScrollAnimation>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-modern bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <Badge className="mb-4 hover-glow" variant="secondary">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our marketing services.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={testimonial.name} animation="scale-in" delay={index * 200}>
                  <InteractiveCard>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                  </CardContent>
                  </InteractiveCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-modern bg-gradient-to-br from-primary via-primary to-accent-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation animation="slide-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <TrendingUp className="w-5 h-5 mr-2" />
                Get Marketing Quote
                </InteractiveButton>
              <Link href="/contact">
                  <InteractiveButton size="lg" className="text-lg px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
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
