'use client';

import { useState } from 'react';
import { 
  ScrollProgress, 
  InteractiveCard, 
  ScrollAnimation, 
  InteractiveButton, 
  Tooltip, 
  Modal,
  AnimatedCounter 
} from '@/components/InteractiveElements';
import { 
  Headphones, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  FileText, 
  Users, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  MessageSquare
} from 'lucide-react';

const supportCategories = [
  {
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    features: ["24/7 availability", "Expert technicians", "Remote assistance"]
  },
  {
    title: "Account Support",
    description: "Manage your account and billing questions",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    features: ["Account management", "Billing support", "Security assistance"]
  },
  {
    title: "Product Support",
    description: "Learn how to use our products effectively",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    features: ["User guides", "Tutorials", "Best practices"]
  },
  {
    title: "General Inquiries",
    description: "Questions about our services and company",
    icon: HelpCircle,
    color: "from-orange-500 to-red-500",
    features: ["Service information", "Company details", "Partnership inquiries"]
  }
];

const faqs = [
  {
    question: "How do I contact technical support?",
    answer: "You can reach our technical support team 24/7 through live chat, email, or phone. Our average response time is under 2 hours."
  },
  {
    question: "What are your support hours?",
    answer: "We provide 24/7 support for all technical issues. Account and billing support is available Monday-Friday, 9 AM - 6 PM EST."
  },
  {
    question: "How long does it take to resolve issues?",
    answer: "Most technical issues are resolved within 4-6 hours. Complex issues may take 24-48 hours, but we keep you updated throughout the process."
  },
  {
    question: "Do you offer remote support?",
    answer: "Yes, we offer secure remote desktop support for technical issues that require direct system access. All sessions are encrypted and secure."
  },
  {
    question: "What information should I provide when contacting support?",
    answer: "Please provide your account number, detailed description of the issue, any error messages, and steps you've already tried to resolve it."
  },
  {
    question: "Is there a cost for support services?",
    answer: "Basic support is included with all our service plans. Premium support with faster response times is available as an add-on service."
  }
];

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    responseTime: "2-5 minutes",
    availability: "24/7"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message and get a response",
    icon: Mail,
    color: "from-purple-500 to-pink-500",
    responseTime: "2-4 hours",
    availability: "24/7"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our support specialists",
    icon: Phone,
    color: "from-green-500 to-emerald-500",
    responseTime: "Immediate",
    availability: "24/7"
  },
  {
    title: "Help Center",
    description: "Browse our comprehensive knowledge base",
    icon: FileText,
    color: "from-orange-500 to-red-500",
    responseTime: "Instant",
    availability: "24/7"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    company: "TechCorp Inc.",
    content: "The support team at ons is exceptional. They resolved our critical system issue in under 2 hours, saving us from significant downtime.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Solutions",
    content: "Professional, knowledgeable, and always available when we need them. The 24/7 support gives us peace of mind.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "System Administrator",
    company: "InnovateTech",
    content: "The remote support feature is fantastic. They can quickly diagnose and fix issues without us having to explain everything over the phone.",
    rating: 5,
    avatar: "ER"
  }
];

const stats = [
  { label: "Average Response Time", value: 2.3, unit: "hours", icon: Clock },
  { label: "Customer Satisfaction", value: 98.5, unit: "%", icon: Star },
  { label: "Issues Resolved", value: 15000, unit: "+", icon: CheckCircle },
  { label: "Support Team Members", value: 25, unit: "", icon: Users }
];

export default function SupportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setContactForm({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="particle-bg absolute inset-0"></div>
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-gradient-animated">Support</span> Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need, when you need it.
            </p>
            <InteractiveButton 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4"
            >
              Get Help Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </InteractiveButton>
          </div>
        </ScrollAnimation>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <InteractiveCard key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-gradient-animated" />
                  </div>
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2} 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                  />
                  <p className="text-gray-400">{stat.unit}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Can We <span className="text-gradient-animated">Help You?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support category that best matches your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportCategories.map((category, index) => (
                <InteractiveCard key={index} className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multiple Ways to <span className="text-gradient-animated">Connect</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <InteractiveCard key={index} className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-400 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Response:</span>
                      <span className="text-white">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Available:</span>
                      <span className="text-white">{channel.availability}</span>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="text-gradient-animated">Questions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Find quick answers to common questions
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="p-6 cursor-pointer bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <ArrowRight 
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        selectedFAQ === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                  {selectedFAQ === index && (
                    <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-gradient-animated">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <InteractiveCard key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need <span className="text-gradient-animated">Help?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Send us a message and we'll get back to you as soon as possible
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InteractiveCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone Support</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm">24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email Support</p>
                      <p className="text-gray-400">support@vectorvista.com</p>
                      <p className="text-gray-500 text-sm">Response within 2-4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Live Chat</p>
                      <p className="text-gray-400">Available on website</p>
                      <p className="text-gray-500 text-sm">Instant response</p>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
              
              <InteractiveCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      name="category"
                      value={contactForm.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a category</option>
                      <option value="technical">Technical Support</option>
                      <option value="account">Account Support</option>
                      <option value="product">Product Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please provide detailed information about your issue..."
                    />
                  </div>
                  <InteractiveButton type="submit" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </InteractiveButton>
                </form>
              </InteractiveCard>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Success Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for contacting us. We'll get back to you within 2-4 hours with a response.
          </p>
          <InteractiveButton onClick={() => setIsModalOpen(false)}>
            Close
          </InteractiveButton>
        </div>
      </Modal>
    </div>
  );
}




