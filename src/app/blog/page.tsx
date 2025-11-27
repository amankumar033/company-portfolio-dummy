'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  InteractiveCard, 
  ScrollAnimation, 
  InteractiveButton, 
  Modal,
  AnimatedCounter 
} from '@/components/InteractiveElements';
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, Filter, Eye, Heart, Users, Target, Rocket, Star } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends and technologies that are shaping the future of web development, from AI-powered tools to advanced frameworks.",
    category: "Web Development",
    author: "Tech Team",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    views: "2.5k",
    likes: "128",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Building Scalable Mobile Apps: Best Practices",
    excerpt: "Learn the essential strategies and best practices for creating mobile applications that can scale with your business growth.",
    category: "Mobile Development",
    author: "Mobile Team",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    views: "1.8k",
    likes: "95",
    color: "from-green-500 to-blue-600"
  },
  {
    title: "AI in Business: Transforming Operations with Machine Learning",
    excerpt: "Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and efficiency.",
    category: "AI Solutions",
    author: "AI Team",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    views: "3.2k",
    likes: "156",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt: "Learn how to build and maintain design systems that ensure consistency across all your digital products and platforms.",
    category: "UI/UX Design",
    author: "Design Team",
    date: "Dec 8, 2024",
    readTime: "6 min read",
    views: "1.5k",
    likes: "87",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Stay ahead of the competition with these proven digital marketing strategies that drive results in the current market landscape.",
    category: "Digital Marketing",
    author: "Marketing Team",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    views: "2.1k",
    likes: "112",
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Protect your business with these essential cybersecurity practices and stay ahead of evolving digital threats.",
    category: "Cybersecurity",
    author: "Security Team",
    date: "Dec 3, 2024",
    readTime: "10 min read",
    views: "2.8k",
    likes: "134",
    color: "from-red-500 to-orange-600"
  }
];

const categories = [
  { name: "All", count: 6, active: true, color: "from-cyan-500 to-blue-500" },
  { name: "Web Development", count: 1, color: "from-cyan-500 to-blue-500" },
  { name: "Mobile Development", count: 1, color: "from-purple-500 to-pink-500" },
  { name: "AI Solutions", count: 1, color: "from-green-500 to-emerald-500" },
  { name: "UI/UX Design", count: 1, color: "from-orange-500 to-red-500" },
  { name: "Digital Marketing", count: 1, color: "from-indigo-500 to-blue-500" },
  { name: "Cybersecurity", count: 1, color: "from-red-500 to-orange-500" }
];

const featuredPost = {
  title: "The Complete Guide to Modern Web Development in 2024",
  excerpt: "A comprehensive overview of the latest technologies, frameworks, and best practices that every web developer should know in 2024.",
  category: "Web Development",
  author: "Tech Team",
  date: "Dec 18, 2024",
  readTime: "12 min read",
  views: "5.2k",
  likes: "234"
};

const stats = [
  { label: "Projects Completed", value: 500, unit: "+", icon: Target, color: "from-cyan-500 to-blue-500", bgColor: "from-cyan-500/20 to-blue-500/20" },
  { label: "Happy Clients", value: 200, unit: "+", icon: Users, color: "from-purple-500 to-pink-500", bgColor: "from-purple-500/20 to-pink-500/20" },
  { label: "Team Members", value: 50, unit: "+", icon: Users, color: "from-green-500 to-emerald-500", bgColor: "from-green-500/20 to-emerald-500/20" },
  { label: "Years Experience", value: 8, unit: "+", icon: Star, color: "from-orange-500 to-red-500", bgColor: "from-orange-500/20 to-red-500/20" }
];

export default function BlogPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  const navigateToContact = () => {
    router.push('/contact');
  };

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="pt-20 sm:pt-24 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-cyan-400 mb-8 border border-white/20">
              <BookOpen className="w-4 h-4" />
              <span>Our Blog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Insights</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                & Updates
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Insights, tips, and industry updates from our team of technology experts. 
              Stay informed about the latest trends and best practices.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-300 mb-6 border border-white/30">
                <span>Our Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Numbers That <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Matter</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-3 sm:p-5 lg:p-8 rounded-xl sm:rounded-2xl border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    
                    <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                      <span>{stat.value}{stat.unit}</span>
                    </div>
                    
                    <div className="text-gray-300 font-semibold text-xs sm:text-base lg:text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation>
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="secondary">Featured</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Latest from <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Team</span>
                </h2>
              </div>
              <InteractiveCard className="overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-48 sm:h-56 lg:h-64 xl:h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-white/20">📝</div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {featuredPost.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {featuredPost.likes}
                        </div>
                      </div>
                      <InteractiveButton className="flex items-center justify-center px-6 py-3 whitespace-nowrap">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </InteractiveButton>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </ScrollAnimation>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-300 mb-6 border border-white/30">
                <Filter className="w-4 h-4" />
                <span>Filter by Category</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Browse Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Content</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={`cursor-pointer px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    category.active 
                      ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg` 
                      : 'bg-gradient-to-br from-white/20 to-white/10 text-gray-300 border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm shadow-lg'
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {blogPosts.map((post, index) => (
                <InteractiveCard key={post.title} className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className={`relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${post.color} flex items-center justify-center overflow-hidden`}>
                    {/* Placeholder for actual blog post images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 opacity-80"></div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-400 group-hover:scale-110 transition-transform">📝</div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Clock className="w-3 h-3 text-purple-400" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1 text-cyan-400" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 mr-1 text-pink-400" />
                          {post.likes}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        by {post.author}
                      </div>
                    </div>
                    <InteractiveButton className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                      <span>Read Article</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </InteractiveButton>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6">
            <InteractiveCard className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Stay Updated</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                    Get the latest insights, tips, and industry updates delivered directly to your inbox. 
                    Never miss out on important technology trends and best practices.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-sm sm:text-base"
                    />
                    <InteractiveButton type="submit" variant="secondary" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center text-sm sm:text-base">
                      <span className="font-medium">Subscribe</span>
                    </InteractiveButton>
                  </form>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                Ready to Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Together?</span>
              </h2>
              <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto">
                Let&apos;s discuss how we can help you achieve your goals with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
                <InteractiveButton 
                  size="lg" 
                  variant="secondary" 
                  className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white flex items-center justify-center"
                  onClick={navigateToContact}
                >
                  <Rocket className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2" />
                  <span>Start a Project</span>
                </InteractiveButton>
                <InteractiveButton 
                  size="lg" 
                  variant="outline" 
                  className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-white text-white hover:bg-white hover:text-black flex items-center justify-center"
                  onClick={navigateToPortfolio}
                >
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2" />
                  <span>View Our Work</span>
                </InteractiveButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Successfully Subscribed!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for subscribing to our newsletter. You&apos;ll receive the latest insights and updates directly in your inbox.
          </p>
          <InteractiveButton onClick={() => setIsModalOpen(false)}>
            Close
          </InteractiveButton>
        </div>
      </Modal>
    </div>
  );
}
