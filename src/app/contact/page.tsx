'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FloatingGlassElements from "@/components/FloatingGlassElements";
import { 
  ScrollProgress, 
  InteractiveCard, 
  ScrollAnimation, 
  InteractiveButton,
  InteractiveInput,
  Tooltip,
  Modal
} from "@/components/InteractiveElements";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "amankumar51462@gmail.com",
    link: "mailto:amankumar51462@gmail.com",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/20 to-purple-600/20"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-500/20 to-blue-600/20"
  },
  {
    icon: MapPin,
    title: "Address",
    description: "123 Tech Street, Digital City, DC 12345",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/20 to-pink-600/20"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon - Fri: 9:00 AM - 6:00 PM",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/20 to-red-600/20"
  }
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital solutions including web development, mobile apps, AI solutions, UI/UX design, digital marketing, and cybersecurity services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally after launch."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on scope, complexity, and requirements. We provide detailed quotes after understanding your specific needs."
  }
];

export default function ContactPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const navigateToServices = () => {
    router.push('/services');
  };

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="pt-20 sm:pt-24 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pb-10">
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
              <MessageCircle className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Let's Start a</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Ready to start your next project? Let's discuss how we can help you achieve your goals 
              with innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Contact Form */}
              <ScrollAnimation animation="slide-in-left" className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                    <span>Send Message</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
                  </p>
                </div>
                
                <InteractiveCard className="overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        <Send className="w-5 h-5 mr-2 text-cyan-400" />
                        Send us a Message
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Tell us about your project and we'll create a custom solution for you.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium text-white">First Name</Label>
                          <InteractiveInput 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John" 
                            className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium text-white">Last Name</Label>
                          <InteractiveInput 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe" 
                            className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-white">Email</Label>
                        <InteractiveInput 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com" 
                          className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-white">Phone</Label>
                        <InteractiveInput 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567" 
                          className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-white">Company</Label>
                        <InteractiveInput 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company" 
                          className="bg-white/10 border border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-medium text-white">Service Interest</Label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-white/20 rounded-md bg-white/10 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="mobile">Mobile Apps</option>
                          <option value="ai">AI Solutions</option>
                          <option value="design">UI/UX Design</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="security">Cybersecurity</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm font-medium text-white">Project Budget</Label>
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-white/20 rounded-md bg-white/10 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-white">Project Details</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, goals, and requirements..." 
                          rows={5}
                          className="bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>
                      <InteractiveButton type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Message</span>
                      </InteractiveButton>
                    </form>
                  </div>
                </InteractiveCard>
              </ScrollAnimation>

              {/* Contact Info */}
              <ScrollAnimation animation="slide-in-right" delay={300} className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                    <span>Contact Info</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We're here to help you bring your ideas to life. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <ScrollAnimation key={info.title} animation="slide-in-up" delay={index * 100}>
                      <InteractiveCard className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                        <div className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <info.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-white group-hover:text-cyan-400 transition-colors">
                                {info.title}
                              </h3>
                              {info.link ? (
                                <a 
                                  href={info.link} 
                                  className="text-gray-300 hover:text-cyan-400 transition-colors block"
                                >
                                  {info.description}
                                </a>
                              ) : (
                                <p className="text-gray-300">{info.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </InteractiveCard>
                    </ScrollAnimation>
                  ))}
                </div>

                {/* Quick Response Promise */}
                <ScrollAnimation animation="slide-in-up" delay={500}>
                  <InteractiveCard className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                    <div className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 shadow-lg">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">Quick Response</h3>
                          <p className="text-gray-300 text-sm">We typically respond within 2-4 hours during business hours</p>
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </ScrollAnimation>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden bg-black">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Minimal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simple Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation animation="slide-in-up" className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-6 border border-white/20">
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about our services and process.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {faqItems.map((item, index) => (
                <ScrollAnimation key={index} animation="scale-in" delay={index * 200}>
                  <InteractiveCard className="group overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-500 shadow-lg">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2 text-cyan-400" />
                        {item.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </InteractiveCard>
                </ScrollAnimation>
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
            <ScrollAnimation animation="slide-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton 
                  onClick={navigateToServices}
                  className="text-lg px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-5 h-5 mr-2" />
                  <span>Start Your Project</span>
                </InteractiveButton>
                <InteractiveButton 
                  onClick={navigateToPortfolio}
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black flex items-center justify-center cursor-pointer"
                >
                  <Users className="w-5 h-5 mr-2" />
                  <span>Schedule a Call</span>
                </InteractiveButton>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Message Sent Successfully!"
      >
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
          </div>
          <p className="text-muted-foreground text-center">
            Your message has been sent successfully. We'll get back to you within 24 hours with a detailed response.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• We'll review your project requirements</li>
              <li>• Schedule a consultation call</li>
              <li>• Provide a detailed proposal</li>
              <li>• Start working on your project</li>
            </ul>
          </div>
        </div>
      </Modal>

    </div>
  );
}
