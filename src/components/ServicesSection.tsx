import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Palette, 
  ShoppingCart, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { siteConfig } from "@/lib/config";

const ServicesSection = () => {
  const iconMap = {
    Code,
    Smartphone,
    Brain,
    Palette,
    ShoppingCart,
    Cloud
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Color Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        
        {/* Floating color orbs */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional subtle gradients */}
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-gradient-to-tl from-red-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm text-accent-blue mb-6">
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
            We Craft Solutions That
            <span className="block gradient-text">Drive Business Growth</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to deployment, we provide end-to-end digital services that transform your business and drive sustainable growth.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const colors = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500", 
              "from-green-500 to-emerald-500",
              "from-orange-500 to-red-500",
              "from-indigo-500 to-blue-500",
              "from-gray-600 to-gray-800"
            ];
            
            return (
              <div 
                key={service.id}
                className="group glass-card p-8 rounded-2xl hover-lift hover:shadow-strong transition-all duration-500 animate-fade-up border border-white/20 backdrop-blur-sm bg-white/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Service Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Enhanced Service Content */}
                <h3 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-accent-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Enhanced Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Enhanced CTA */}
                <Button variant="ghost" className="group-hover:text-accent-blue transition-colors duration-300 p-0 h-auto font-semibold">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            <h3 className="text-2xl font-bold font-heading text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your unique requirements and create a tailored solution that perfectly fits your business needs.
            </p>
            <Button variant="premium" size="lg" className="group">
              {siteConfig.cta.consultation}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;