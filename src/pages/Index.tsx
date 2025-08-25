import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactCalculator from "@/components/ImpactCalculator";
import ModelComparison from "@/components/ModelComparison";
import EcoRecommendations from "@/components/EcoRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactCalculator />
        <ModelComparison />
        <EcoRecommendations />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-nature border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-eco rounded-lg">
                  <span className="text-primary-foreground font-bold text-sm">GM</span>
                </div>
                <h3 className="font-bold text-lg">GreenMind</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Making AI usage more sustainable through intelligent environmental impact analysis.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#calculator" className="block text-muted-foreground hover:text-primary transition-colors">
                  Impact Calculator
                </a>
                <a href="#compare" className="block text-muted-foreground hover:text-primary transition-colors">
                  Model Comparison
                </a>
                <a href="#recommendations" className="block text-muted-foreground hover:text-primary transition-colors">
                  Eco Recommendations
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Environmental Impact</h4>
              <div className="text-sm space-y-1">
                <p className="text-muted-foreground">🌱 Carbon neutral hosting</p>
                <p className="text-muted-foreground">💧 Water-conscious computing</p>
                <p className="text-muted-foreground">♻️ Sustainable AI practices</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GreenMind. Built with care for our planet. 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
