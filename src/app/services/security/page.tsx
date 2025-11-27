'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, CheckCircle, Star, Clock, Zap, Database, Cpu } from "lucide-react";
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
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments to identify vulnerabilities and risks in your systems.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description: "Simulated attacks to test your security defenses and identify potential weaknesses.",
    color: "bg-gradient-to-br from-green-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Compliance & Governance",
    description: "Ensure compliance with industry standards and regulatory requirements like GDPR, HIPAA.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response and recovery services for security incidents and data breaches.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Employee training programs to build security awareness and best practices.",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Security Monitoring",
    description: "24/7 monitoring and threat detection to protect your digital assets proactively.",
    color: "bg-gradient-to-br from-red-500 to-orange-600"
  }
];

const technologies = [
  { name: "Firewall", category: "Network Security", color: "bg-blue-500" },
  { name: "SIEM", category: "Monitoring", color: "bg-green-500" },
  { name: "EDR", category: "Endpoint Security", color: "bg-purple-500" },
  { name: "IAM", category: "Access Control", color: "bg-orange-500" },
  { name: "Encryption", category: "Data Protection", color: "bg-indigo-500" },
  { name: "VPN", category: "Network Security", color: "bg-red-500" },
  { name: "MFA", category: "Authentication", color: "bg-cyan-500" },
  { name: "Backup", category: "Data Recovery", color: "bg-pink-500" }
];

const processSteps = [
  {
    step: "01",
    title: "Security Assessment",
    description: "We conduct a comprehensive analysis of your current security posture.",
    icon: Eye
  },
  {
    step: "02",
    title: "Vulnerability Analysis",
    description: "Identify and prioritize security vulnerabilities and potential threats.",
    icon: AlertTriangle
  },
  {
    step: "03",
    title: "Implementation",
    description: "Deploy security solutions and establish monitoring systems.",
    icon: Shield
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Continuous monitoring, updates, and incident response services.",
    icon: CheckCircle
  }
];

const testimonials = [
  {
    name: "Robert Wilson",
    role: "CTO, SecureCorp",
    content: "Their cybersecurity services helped us identify critical vulnerabilities we didn't know existed. Highly professional team.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    role: "Security Director, TechBank",
    content: "Comprehensive security assessment and implementation. Our security posture has never been stronger.",
    rating: 5
  }
];

const stats = [
  { label: "Security Audits", value: 150, icon: Shield, color: "text-blue-500" },
  { label: "Threats Blocked", value: 10000, icon: Lock, color: "text-green-500" },
  { label: "Compliance Certifications", value: 25, icon: CheckCircle, color: "text-purple-500" },
  { label: "Incident Response Time", value: 15, icon: Clock, color: "text-orange-500" }
];

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent-blue py-20 particle-bg">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="slide-in-up" className="text-center">
              <Badge className="mb-6 hover-glow" variant="secondary">
                <Shield className="w-4 h-4 mr-2" />
                Cybersecurity
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient-animated">
                Secure Your Digital Future
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                Protect your business with comprehensive cybersecurity solutions. From security audits to 
                incident response, we help you build a robust security posture that adapts to evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Security Assessment
                </InteractiveButton>
                <InteractiveButton size="lg" className="text-lg px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Learn More</span>
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
                    {stat.label === "Incident Response Time" && "min"}
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
                Comprehensive Security Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end cybersecurity solutions to protect your business from evolving threats.
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
                Security Technologies We Use
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage cutting-edge security technologies to provide comprehensive protection.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <ScrollAnimation key={tech.name} animation="slide-in-up" delay={index * 100}>
                  <InteractiveCard className="group text-center">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${tech.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Shield className="w-6 h-6 text-white" />
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
                How We Secure Your Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven security process ensures comprehensive protection and continuous monitoring.
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
                Don't just take our word for it. Here's what our clients have to say about our cybersecurity services.
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's assess your security posture and implement robust protection for your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
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
