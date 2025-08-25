import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-nature overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Environmental Impact Analysis" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Environmental AI Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Track Your{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                AI Environmental
              </span>{" "}
              Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Analyze CO₂ emissions and water usage of AI models. Compare efficiency, 
              discover eco-friendly alternatives, and make sustainable AI choices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-eco hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => scrollToSection('calculator')}
            >
              Start Analyzing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
              onClick={() => scrollToSection('compare')}
            >
              Compare Models
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-eco rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Get instant CO₂ and water usage metrics for any AI model with precise calculations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-eco rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Comparisons</h3>
              <p className="text-muted-foreground">
                Compare multiple AI models side-by-side to find the most eco-friendly options.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-eco rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco Recommendations</h3>
              <p className="text-muted-foreground">
                Receive personalized suggestions to reduce your environmental footprint.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-counter-up">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">AI Models Tracked</div>
              </div>
              <div className="animate-counter-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Calculations Made</div>
              </div>
              <div className="animate-counter-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-accent mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Avg. CO₂ Reduction</div>
              </div>
              <div className="animate-counter-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-eco-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;