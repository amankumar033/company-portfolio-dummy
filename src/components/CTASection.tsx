import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle, Star, Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Color Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-violet-50/40 via-purple-50/30 to-indigo-50/40"></div>
        
        {/* Floating color orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-violet-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional subtle gradients */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tl from-purple-400/10 to-violet-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full text-sm text-accent-blue mb-8 border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            <span>Ready to Transform Your Business?</span>
          </div>

          {/* Enhanced Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
            Let's Build Something
            <span className="block gradient-text">Amazing Together</span>
          </h2>

          {/* Enhanced Description */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Ready to take your business to the next level? Our team of experts is here to help you create innovative digital solutions that drive real results.
          </p>

          {/* Enhanced CTA Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-8 rounded-2xl hover-lift border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong group">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Free Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Get expert advice on your project requirements and discover the best solutions for your business.
              </p>
              <Button variant="outline" className="w-full group-hover:border-accent-blue group-hover:text-accent-blue transition-colors duration-300">
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Get a Quote</h3>
              <p className="text-muted-foreground mb-6">
                Receive a detailed project proposal with timeline, cost breakdown, and deliverables.
              </p>
              <Button variant="outline" className="w-full group-hover:border-green-500 group-hover:text-green-500 transition-colors duration-300">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-6">
                Speak directly with our team to discuss your project and get immediate answers to your questions.
              </p>
              <Button variant="outline" className="w-full group-hover:border-purple-500 group-hover:text-purple-500 transition-colors duration-300">
                Call Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Enhanced Primary CTA */}
          <div className="glass-card p-8 rounded-3xl mb-16 border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
            <Button variant="premium" size="lg" className="group text-lg px-12 py-6">
              {siteConfig.cta.primary}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <p className="text-muted-foreground mt-4">
              No commitment required • Free initial consultation
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.projectsCompleted}+</div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.successRate}%</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{siteConfig.stats.yearsExperience}+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>

          {/* Enhanced Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl text-center border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <h4 className="text-lg font-bold text-primary mb-3">24/7 Support</h4>
              <p className="text-muted-foreground text-sm">
                Round-the-clock technical support and maintenance for all our solutions.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <h4 className="text-lg font-bold text-primary mb-3">Agile Development</h4>
              <p className="text-muted-foreground text-sm">
                Fast, iterative development process with regular updates and feedback loops.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border border-white/20 backdrop-blur-sm bg-white/40 shadow-strong">
              <h4 className="text-lg font-bold text-primary mb-3">Post-Launch Care</h4>
              <p className="text-muted-foreground text-sm">
                Ongoing optimization, updates, and support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;