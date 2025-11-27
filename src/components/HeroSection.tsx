import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/assets/hero-illustration.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-primary rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm text-white/90 animate-fade-up">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>Award-Winning Tech Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Transform Your
              <span className="block gradient-text">Digital Vision</span>
              Into Reality
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
              We craft cutting-edge digital solutions that drive growth, enhance user experiences, and revolutionize how businesses connect with their customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="hero" size="xl" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Users className="h-5 w-5 text-accent-blue" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <p className="text-white/70 text-sm">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <p className="text-white/70 text-sm">Awards Won</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Zap className="h-5 w-5 text-green-400" />
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <p className="text-white/70 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="glass-card p-8 rounded-3xl hover-lift">
                <Image 
                  src="/assets/hero-image.webp" 
                  alt="Tech Innovation" 
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-strong"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 glass-card p-4 rounded-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Project Delivered</p>
                    <p className="text-white/70 text-xs">On Time & Budget</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">5.0 Rating</p>
                    <p className="text-white/70 text-xs">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;