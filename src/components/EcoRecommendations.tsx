import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Leaf, Target, ChevronRight, Clock, DollarSign } from "lucide-react";

const recommendations = [
  {
    category: "Eco-Friendly Models",
    icon: Leaf,
    items: [
      {
        title: "Switch to GPT-3.5 Turbo",
        description: "Reduces CO₂ emissions by 75% compared to GPT-4 while maintaining excellent performance.",
        impact: "High",
        difficulty: "Easy",
        savings: "75% less CO₂",
        timeToImplement: "Immediate"
      },
      {
        title: "Use LLaMA 2 7B for Simple Tasks",
        description: "Perfect for basic queries, content generation, and simple analysis with minimal environmental impact.",
        impact: "High",
        difficulty: "Easy", 
        savings: "80% less CO₂",
        timeToImplement: "1 day"
      }
    ]
  },
  {
    category: "Usage Optimization",
    icon: Target,
    items: [
      {
        title: "Optimize Prompt Length",
        description: "Reduce prompt wordiness by 30-50% using clear, concise language without losing context.",
        impact: "Medium",
        difficulty: "Easy",
        savings: "40% less usage",
        timeToImplement: "Immediate"
      },
      {
        title: "Batch Similar Requests",
        description: "Group related queries together to reduce the overhead of multiple API calls.",
        impact: "Medium",
        difficulty: "Medium",
        savings: "25% efficiency gain",
        timeToImplement: "1 week"
      }
    ]
  },
  {
    category: "Smart Alternatives",
    icon: Lightbulb,
    items: [
      {
        title: "Use Smaller Models for Preprocessing",
        description: "Filter and prepare data with efficient models before sending to larger ones for final processing.",
        impact: "High",
        difficulty: "Medium",
        savings: "60% total reduction",
        timeToImplement: "2 weeks"
      },
      {
        title: "Implement Response Caching",
        description: "Cache common responses to avoid repeated API calls for similar queries.",
        impact: "Very High",
        difficulty: "Hard",
        savings: "70% fewer calls",
        timeToImplement: "1 month"
      }
    ]
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "Very High": return "bg-accent text-accent-foreground";
    case "High": return "bg-accent/80 text-accent-foreground";
    case "Medium": return "bg-warning text-warning-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-accent text-accent-foreground";
    case "Medium": return "bg-warning text-warning-foreground";
    case "Hard": return "bg-destructive text-destructive-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const EcoRecommendations = () => {
  return (
    <section id="recommendations" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Eco-Friendly Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover actionable strategies to reduce your AI environmental footprint while maintaining performance and quality.
          </p>
        </div>

        <div className="space-y-8">
          {recommendations.map((category, categoryIndex) => (
            <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-eco rounded-lg shadow-glow">
                  <category.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={item.title} className="shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {item.description}
                          </CardDescription>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getImpactColor(item.impact)}>
                          {item.impact} Impact
                        </Badge>
                        <Badge className={getDifficultyColor(item.difficulty)}>
                          {item.difficulty}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-accent" />
                          <span className="font-medium text-accent">{item.savings}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{item.timeToImplement}</span>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="mt-12 shadow-glow bg-gradient-earth border-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              <DollarSign className="h-5 w-5 text-accent" />
              Your Potential Impact
            </CardTitle>
            <CardDescription>
              By implementing these recommendations, you could achieve:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent animate-counter-up">60%</div>
                <div className="text-sm text-muted-foreground">CO₂ Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent animate-counter-up">45%</div>
                <div className="text-sm text-muted-foreground">Water Savings</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent animate-counter-up">70%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-gradient-eco hover:opacity-90 transition-opacity">
                Get Personalized Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EcoRecommendations;