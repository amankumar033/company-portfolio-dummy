'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Zap, Heart, Shield, Star, ArrowRight, Briefcase, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import FloatingGlassElements from "@/components/FloatingGlassElements";
import { 
  ScrollProgress, 
  InteractiveCard, 
  ScrollAnimation, 
  InteractiveButton,
  AnimatedCounter
} from '@/components/InteractiveElements';

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $120k",
    description: "We're looking for an experienced frontend developer to join our team and help build amazing user experiences.",
    requirements: ["React", "TypeScript", "Next.js", "5+ years experience"],
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20"
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    salary: "$70k - $100k",
    description: "Join our design team to create beautiful and intuitive user interfaces for web and mobile applications.",
    requirements: ["Figma", "User Research", "Prototyping", "3+ years experience"],
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/20 to-pink-600/20"
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Help us build and maintain scalable infrastructure and deployment pipelines for our applications.",
    requirements: ["AWS", "Docker", "Kubernetes", "4+ years experience"],
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-500/20 to-blue-600/20"
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "On-site",
    type: "Full-time",
    salary: "$60k - $85k",
    description: "Drive our digital marketing efforts and help grow our client base through strategic campaigns.",
    requirements: ["SEO", "Social Media", "Analytics", "2+ years experience"],
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/20 to-red-600/20"
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    color: "from-red-500 to-pink-600",
    bgColor: "from-red-500/20 to-pink-600/20"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote work options and flexible hours",
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-500/20 to-orange-600/20"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with regular team events",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20"
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Attractive salary packages with performance bonuses",
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-500/20 to-blue-600/20"
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous learning opportunities and career development",
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-500/20 to-indigo-600/20"
  },
  {
    icon: Shield,
    title: "Work-Life Balance",
    description: "Generous PTO and work-life balance policies",
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-500/20 to-blue-600/20"
  }
];

const cultureValues = [
  {
    title: "Innovation First",
    description: "We encourage creative thinking and innovative solutions",
    icon: Zap,
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-500/20 to-blue-600/20"
  },
  {
    title: "Collaboration",
    description: "Teamwork and open communication drive our success",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/20 to-pink-600/20"
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do",
    icon: Star,
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-500/20 to-orange-600/20"
  },
  {
    title: "Growth Mindset",
    description: "Continuous learning and personal development",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/20 to-emerald-600/20"
  }
];

const stats = [
  {
    icon: Users,
    value: 50,
    unit: "+",
    label: "Team Members",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20"
  },
  {
    icon: Star,
    value: 4.8,
    unit: "",
    label: "Team Satisfaction",
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-500/20 to-blue-600/20"
  },
  {
    icon: GraduationCap,
    value: 100,
    unit: "+",
    label: "Training Hours",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/20 to-pink-600/20"
  },
  {
    icon: Heart,
    value: 95,
    unit: "%",
    label: "Retention Rate",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/20 to-red-600/20"
  }
];

export default function CareersPage() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
             <main className="pt-16 sm:pt-20 md:pt-24 lg:pt-[120px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pb-10 pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-cyan-400 mb-8 border border-white/20">
              <Briefcase className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 pt-10">
              <span className="text-white">Build the Future</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Be part of a dynamic team that&apos;s shaping the future of technology. 
              We&apos;re looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center"
                onClick={() => scrollToSection('open-positions')}
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </InteractiveButton>
              <InteractiveButton 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black flex items-center justify-center"
                onClick={() => navigateToPage('/portfolio')}
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </InteractiveButton>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                <span>Our Culture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why You&apos;ll Love
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Working Here
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We foster a culture of innovation, collaboration, and continuous growth where every team member can thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {cultureValues.map((value, index) => (
                <InteractiveCard key={value.title} className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                <span>Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perks & Benefits
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks that support your well-being and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <InteractiveCard key={benefit.title} className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="open-positions" className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                <span>Open Positions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Current Opportunities
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join our team and help us build innovative solutions that make a difference.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {jobOpenings.map((job, index) => (
                <InteractiveCard key={job.title} className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${job.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-medium">
                        {job.type}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center justify-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg">
                        <MapPin className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{job.location}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg">
                        <Clock className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{job.department}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg">
                        <DollarSign className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm text-white">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="outline" className="text-xs bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors px-3 py-1 flex items-center justify-center">
                            <span className="whitespace-nowrap">{req}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <InteractiveButton 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 flex items-center justify-center"
                      onClick={() => navigateToPage('/contact')}
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </InteractiveButton>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-cyan-400 mb-4 sm:mb-6 border border-white/20">
                <span>Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Growing Together
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Join a team that's passionate about technology and making a positive impact.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    
                    <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center">
                      <span className="inline">
                        {stat.value}
                        {stat.unit}
                      </span>
                    </div>
                    
                    <div className="text-gray-300 font-semibold text-xs sm:text-base lg:text-lg text-center">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white flex items-center justify-center"
                onClick={() => scrollToSection('open-positions')}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                <span>View All Positions</span>
              </InteractiveButton>
              <InteractiveButton 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black flex items-center justify-center"
                onClick={() => navigateToPage('/contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Send Resume</span>
              </InteractiveButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
