import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, Shield, Users, Download, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Single codebase for iOS and Android platforms."
  },
  {
    icon: Zap,
    title: "Native Performance",
    description: "Optimized for speed and smooth user experience."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and robust architecture."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces that users love to interact with."
  },
  {
    icon: Download,
    title: "App Store Ready",
    description: "Optimized for app store guidelines and approval."
  },
  {
    icon: Star,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your app current."
  }
];

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full px-8 py-4 text-purple-400 text-lg font-bold backdrop-blur-sm mb-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
                <Smartphone className="w-5 h-5" />
                <span>Mobile Apps</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-gradient-animated">
                Mobile App Development
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                We create powerful, user-friendly mobile applications that engage users and drive business growth. 
                From concept to app store, we handle every aspect of mobile app development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3 btn-modern hover-lift bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                  Start Your App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" className="text-lg px-8 py-3 btn-modern hover-lift border-2 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300">
                  View Portfolio
                </Button>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full px-6 py-3 text-purple-400 text-sm font-bold backdrop-blur-sm mb-6 shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                <span>Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
                Why Choose Our Mobile Development?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                We deliver high-quality mobile applications that users love and businesses rely on.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="card-modern hover-lift group text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/50">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
