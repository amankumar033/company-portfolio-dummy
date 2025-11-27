export const siteConfig = {
  // Brand Information
  name: "aman kumar",
  description: "Building Cutting-Edge Software & Digital Solutions for Businesses Worldwide",
  tagline: "We specialize in Web, Mobile, AI, E-commerce, and Cloud Hosting",
  url: "https://aman kumar.com",
  
  // Contact Information
  contact: {
    email: "amankumar51462@gmail.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, Silicon Valley, CA 94025",
    hours: "Mon-Fri: 9AM-6PM PST"
  },
  
  // Social Media
  social: {
    twitter: "https://twitter.com/aman kumar",
    linkedin: "https://linkedin.com/company/aman kumar",
    github: "https://github.com/aman kumar",
    instagram: "https://instagram.com/aman kumar",
    facebook: "https://facebook.com/aman kumar"
  },
  
  // Services
  services: [
    {
      id: "web-development",
      title: "Web Development",
      description: "Full-stack solutions with modern frameworks",
      icon: "Code",
      features: ["React/Next.js", "Node.js", "Laravel", "Performance Optimization"],
      cta: "Request a Web Project"
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: "Smartphone",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      cta: "Build Your App"
    },
    {
      id: "ai-solutions",
      title: "AI & Automation",
      description: "Intelligent automation and machine learning solutions",
      icon: "Brain",
      features: ["Chatbots", "Predictive Analytics", "Machine Learning", "Data Insights"],
      cta: "Explore AI Solutions"
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Custom stores and platform integrations",
      icon: "ShoppingCart",
      features: ["Custom Stores", "Shopify/WooCommerce", "Payment Integration", "Inventory Management"],
      cta: "Start Your Store"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Modern, responsive, and intuitive designs",
      icon: "Palette",
      features: ["Wireframes", "Prototypes", "Design Systems", "Usability Testing"],
      cta: "Request Design Consultation"
    },
    {
      id: "hosting-cloud",
      title: "Hosting & Cloud",
      description: "Secure, scalable cloud infrastructure",
      icon: "Cloud",
      features: ["Managed Hosting", "Security", "Scalable Infrastructure", "24/7 Support"],
      cta: "Secure Your Hosting"
    }
  ],
  
  // Portfolio Categories
  portfolioCategories: [
    "All",
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "E-commerce",
    "UI/UX Design"
  ],
  
  // Company Stats
  stats: {
    projectsCompleted: 500,
    happyClients: 300,
    awardsWon: 50,
    successRate: 99,
    teamMembers: 25,
    yearsExperience: 8
  },
  
  // Theme Colors
  colors: {
    primary: "hsl(213 60% 16%)",
    accent: "hsl(216 100% 57%)",
    gradient: {
      start: "hsl(189 100% 50%)",
      end: "hsl(216 100% 57%)"
    }
  },
  
  // CTA Text
  cta: {
    primary: "Get Started",
    secondary: "Contact Us",
    consultation: "Schedule Consultation",
    portfolio: "View Our Work",
    about: "Learn More"
  },
  
  // SEO
  seo: {
    title: "aman kumar - Premium Tech Agency | Web, Mobile, AI Solutions",
    description: "Leading tech agency specializing in web development, mobile apps, AI solutions, e-commerce, and cloud hosting. Transform your digital vision into reality.",
    keywords: "web development, mobile apps, AI solutions, e-commerce, cloud hosting, UI/UX design, tech agency, software development",
    ogImage: "/og-image.jpg"
  }
};

export type SiteConfig = typeof siteConfig;
