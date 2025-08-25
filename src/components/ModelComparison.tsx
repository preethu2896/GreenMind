import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { TrendingUp, Award, Zap, Droplets } from "lucide-react";

const chartConfig = {
  co2: {
    label: "CO₂ (grams)",
    color: "hsl(var(--primary))",
  },
  water: {
    label: "Water (ml)",
    color: "hsl(var(--accent))",
  },
};

const modelComparisonData = [
  {
    name: "GPT-3.5 Turbo",
    co2: 65,
    water: 32,
    efficiency: 9,
    cost: "Low",
    performance: "High"
  },
  {
    name: "LLaMA 2 7B",
    co2: 52,
    water: 26,
    efficiency: 9,
    cost: "Very Low",
    performance: "Medium"
  },
  {
    name: "PaLM 2",
    co2: 130,
    water: 65,
    efficiency: 8,
    cost: "Medium",
    performance: "High"
  },
  {
    name: "Claude 3",
    co2: 195,
    water: 97,
    efficiency: 8,
    cost: "Medium",
    performance: "Very High"
  },
  {
    name: "GPT-4",
    co2: 260,
    water: 130,
    efficiency: 7,
    cost: "High",
    performance: "Very High"
  },
  {
    name: "LLaMA 2 70B",
    co2: 390,
    water: 195,
    efficiency: 6,
    cost: "High",
    performance: "Very High"
  }
];

const ModelComparison = () => {
  const [sortBy, setSortBy] = useState<'co2' | 'water' | 'efficiency'>('efficiency');

  const sortedData = [...modelComparisonData].sort((a, b) => {
    if (sortBy === 'efficiency') return b[sortBy] - a[sortBy];
    return a[sortBy] - b[sortBy];
  });

  const getEfficiencyBadge = (score: number) => {
    if (score >= 9) return <Badge className="bg-accent text-accent-foreground">Excellent</Badge>;
    if (score >= 8) return <Badge className="bg-accent/80 text-accent-foreground">Good</Badge>;
    if (score >= 7) return <Badge className="bg-warning text-warning-foreground">Fair</Badge>;
    return <Badge className="bg-destructive text-destructive-foreground">Poor</Badge>;
  };

  const getCostBadge = (cost: string) => {
    const colors = {
      "Very Low": "bg-accent text-accent-foreground",
      "Low": "bg-accent/80 text-accent-foreground", 
      "Medium": "bg-warning text-warning-foreground",
      "High": "bg-destructive text-destructive-foreground"
    };
    return <Badge className={colors[cost as keyof typeof colors]}>{cost}</Badge>;
  };

  return (
    <section id="compare" className="py-16 bg-gradient-nature">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Model Comparison</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare environmental impact, efficiency, and performance across popular AI models to make informed decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mb-8">
          <Button
            variant={sortBy === 'efficiency' ? 'default' : 'outline'}
            onClick={() => setSortBy('efficiency')}
            className="flex items-center justify-center gap-2 text-sm"
            size="sm"
          >
            <Award className="h-4 w-4" />
            <span className="hidden xs:inline">Sort by </span>Efficiency
          </Button>
          <Button
            variant={sortBy === 'co2' ? 'default' : 'outline'}
            onClick={() => setSortBy('co2')}
            className="flex items-center justify-center gap-2 text-sm"
            size="sm"
          >
            <Zap className="h-4 w-4" />
            <span className="hidden xs:inline">Sort by </span>CO₂
          </Button>
          <Button
            variant={sortBy === 'water' ? 'default' : 'outline'}
            onClick={() => setSortBy('water')}
            className="flex items-center justify-center gap-2 text-sm"
            size="sm"
          >
            <Droplets className="h-4 w-4" />
            <span className="hidden xs:inline">Sort by </span>Water
          </Button>
        </div>

        <div className="grid gap-8">
          {/* Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Environmental Impact Comparison
              </CardTitle>
              <CardDescription>
                CO₂ emissions and water usage per 1000 tokens across different AI models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={sortedData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="co2" fill="var(--color-co2)" name="CO₂ (grams)" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="water" fill="var(--color-water)" name="Water (ml)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Model Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedData.map((model, index) => (
              <Card key={model.name} className={`shadow-card transition-all duration-300 hover:shadow-glow ${index === 0 ? 'ring-2 ring-accent ring-offset-2 ring-offset-background' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    {index === 0 && <Badge className="bg-accent text-accent-foreground animate-eco-pulse">Best Choice</Badge>}
                  </div>
                  <CardDescription>Environmental & Performance Metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{model.co2}g CO₂</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-accent" />
                      <span>{model.water}ml H₂O</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Efficiency</span>
                      {getEfficiencyBadge(model.efficiency)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Cost</span>
                      {getCostBadge(model.cost)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Performance</span>
                      <Badge variant="outline">{model.performance}</Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Efficiency Score</span>
                      <span className="font-medium">{model.efficiency}/10</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-1">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          model.efficiency >= 9 ? 'bg-accent' : 
                          model.efficiency >= 8 ? 'bg-accent/80' : 
                          model.efficiency >= 7 ? 'bg-warning' : 'bg-destructive'
                        }`}
                        style={{ width: `${model.efficiency * 10}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;