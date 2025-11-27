"use client";

import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight, Award, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1-5c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "aman kumar transformed our entire digital presence. Their team's expertise in AI solutions helped us automate 70% of our customer service operations, resulting in significant cost savings and improved customer satisfaction.",
      project: "AI Customer Service Platform",
      results: "70% automation, 40% cost reduction",
      category: "AI Solutions"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "FinanceFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The mobile app they developed exceeded all our expectations. The user experience is phenomenal, and we've seen a 300% increase in user engagement. Their attention to detail and commitment to quality is unmatched.",
      project: "FinTech Mobile Application",
      results: "300% user engagement increase",
      category: "Mobile Apps"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director", 
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with aman kumar was a game-changer for our e-commerce platform. Their design and development expertise resulted in a 150% increase in conversions and dramatically improved our brand perception.",
      project: "E-commerce Platform Redesign",
      results: "150% conversion increase",
      category: "E-commerce"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Their healthcare platform development was exceptional. They understood the complexity of HIPAA compliance and delivered a secure, scalable solution that our patients love using.",
      project: "Telemedicine Platform",
      results: "HIPAA compliant, 95% patient satisfaction",
      category: "Web Development"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Product Manager",
      company: "DesignCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The UI/UX design work aman kumar delivered was outstanding. They created a design system that not only looks beautiful but also improved our user experience metrics by 200%.",
      project: "Design System & UI/UX",
      results: "200% improvement in UX metrics",
      category: "UI/UX Design"
    },
    {
      id: 6,
      name: "Alex Martinez",
      position: "Operations Director",
      company: "CloudTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Their cloud hosting and infrastructure solutions are top-notch. We've experienced 99.9% uptime and their 24/7 support team is always there when we need them.",
      project: "Cloud Infrastructure",
      results: "99.9% uptime, 24/7 support",
      category: "Hosting & Cloud"
    }
  ];

  const clientLogos = [
    { name: "TechStart", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=TechStart" },
    { name: "FinanceFlow", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=FinanceFlow" },
    { name: "RetailMax", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=RetailMax" },
    { name: "HealthTech", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=HealthTech" },
    { name: "InnovaCorp", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=InnovaCorp" },
    { name: "DataDriven", logo: "https://via.placeholder.com/120x60/f0f0f0/666?text=DataDriven" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Color Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-red-50/40"></div>
        
        {/* Floating color orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-amber-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional subtle gradients */}
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-bl from-yellow-400/10 to-amber-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-gradient-to-tr from-red-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm text-accent-blue mb-6">
            <span>Client Success</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
            What Our Clients
            <span className="block gradient-text">Say About Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about their experience working with us.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center glass-card p-6 rounded-2xl animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-accent-blue" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.happyClients}+</div>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.projectsCompleted}+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.awardsWon}+</div>
            <p className="text-sm text-muted-foreground">Awards Won</p>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.successRate}%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>

        {/* Enhanced Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden animate-fade-in border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            {/* Enhanced Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="h-24 w-24 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Enhanced Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Enhanced Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-center text-foreground font-medium leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Enhanced Project & Results */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-4 bg-secondary/50 rounded-full px-6 py-3">
                  <span className="text-sm font-medium text-primary">
                    {testimonials[currentTestimonial].project}
                  </span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm text-accent-blue font-medium">
                    {testimonials[currentTestimonial].results}
                  </span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">
                    {testimonials[currentTestimonial].category}
                  </span>
                </div>
              </div>

              {/* Enhanced Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover shadow-medium"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-primary">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="hover:shadow-medium transition-shadow duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {/* Enhanced Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-accent-blue shadow-glow" 
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="hover:shadow-medium transition-shadow duration-300"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Client Logos */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by industry leaders worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={client.name} 
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;