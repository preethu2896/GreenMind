import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Droplets, Zap } from "lucide-react";

interface ImpactResult {
  co2: number;
  water: number;
  efficiency: number;
}

const modelData = {
  "gpt-4": { co2PerToken: 0.004, waterPerToken: 0.002, efficiency: 7 },
  "gpt-3.5-turbo": { co2PerToken: 0.001, waterPerToken: 0.0005, efficiency: 9 },
  "claude-3": { co2PerToken: 0.003, waterPerToken: 0.0015, efficiency: 8 },
  "llama-2-70b": { co2PerToken: 0.006, waterPerToken: 0.003, efficiency: 6 },
  "llama-2-7b": { co2PerToken: 0.0008, waterPerToken: 0.0004, efficiency: 9 },
  "palm-2": { co2PerToken: 0.002, waterPerToken: 0.001, efficiency: 8 }
};

const ImpactCalculator = () => {
  const [model, setModel] = useState("");
  const [promptLength, setPromptLength] = useState("");
  const [usageCount, setUsageCount] = useState("");
  const [result, setResult] = useState<ImpactResult | null>(null);

  const calculateImpact = () => {
    if (!model || !promptLength || !usageCount) return;

    const modelInfo = modelData[model as keyof typeof modelData];
    const tokens = parseInt(promptLength) * 1.3; // Approximate token count
    const usage = parseInt(usageCount);

    const co2 = modelInfo.co2PerToken * tokens * usage;
    const water = modelInfo.waterPerToken * tokens * usage;
    const efficiency = modelInfo.efficiency;

    setResult({ co2, water, efficiency });
  };

  const getEfficiencyColor = (score: number) => {
    if (score >= 8) return "text-accent";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getEfficiencyBg = (score: number) => {
    if (score >= 8) return "bg-accent/10";
    if (score >= 6) return "bg-warning/10";
    return "bg-destructive/10";
  };

  return (
    <section id="calculator" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Calculate AI Environmental Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the environmental footprint of your AI usage with precise CO₂ and water consumption metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Impact Calculator
              </CardTitle>
              <CardDescription>
                Enter your AI usage details to calculate environmental impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="model">AI Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3">Claude 3</SelectItem>
                    <SelectItem value="llama-2-70b">LLaMA 2 70B</SelectItem>
                    <SelectItem value="llama-2-7b">LLaMA 2 7B</SelectItem>
                    <SelectItem value="palm-2">PaLM 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt-length">Average Prompt Length (words)</Label>
                <Input
                  id="prompt-length"
                  type="number"
                  placeholder="e.g., 50"
                  value={promptLength}
                  onChange={(e) => setPromptLength(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="usage-count">Daily Usage Count</Label>
                <Input
                  id="usage-count"
                  type="number"
                  placeholder="e.g., 10"
                  value={usageCount}
                  onChange={(e) => setUsageCount(e.target.value)}
                />
              </div>

              <Button 
                onClick={calculateImpact} 
                className="w-full bg-gradient-eco hover:opacity-90 transition-opacity"
                disabled={!model || !promptLength || !usageCount}
              >
                Calculate Impact
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Environmental Impact
                </CardTitle>
                <CardDescription>Daily environmental footprint analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-earth">
                    <div className="text-2xl font-bold text-foreground animate-counter-up">
                      {result.co2.toFixed(2)}g
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Zap className="h-4 w-4" />
                      CO₂ Emissions
                    </div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-gradient-earth">
                    <div className="text-2xl font-bold text-foreground animate-counter-up">
                      {result.water.toFixed(3)}L
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Droplets className="h-4 w-4" />
                      Water Usage
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${getEfficiencyBg(result.efficiency)}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Efficiency Score</span>
                    <span className={`text-xl font-bold ${getEfficiencyColor(result.efficiency)}`}>
                      {result.efficiency}/10
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        result.efficiency >= 8 ? 'bg-accent' : 
                        result.efficiency >= 6 ? 'bg-warning' : 'bg-destructive'
                      }`}
                      style={{ width: `${result.efficiency * 10}%` }}
                    />
                  </div>
                </div>

                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {result.efficiency >= 8 
                      ? "🌱 Great choice! This model is environmentally efficient."
                      : result.efficiency >= 6 
                      ? "⚠️ Moderate impact. Consider eco-friendly alternatives."
                      : "🔴 High environmental impact. Check our recommendations below."
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;