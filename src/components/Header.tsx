import { Leaf, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-nature backdrop-blur supports-[backdrop-filter]:bg-gradient-nature/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-eco rounded-lg shadow-glow">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
              GreenMind
            </h1>
            <p className="text-xs text-muted-foreground">AI Impact Analyzer</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#calculator" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Calculator
          </a>
          <a href="#compare" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Compare
          </a>
          <a href="#recommendations" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Recommendations
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;