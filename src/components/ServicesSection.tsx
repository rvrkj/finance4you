import { BarChart3, Shield, Brain, TrendingUp, Target, BookOpen } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Stock Market Basics",
    description: "Learn equity fundamentals and how the stock market works from the ground up.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Investing",
    description: "Build clarity on wealth-building strategies through disciplined, long-term investing.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Understand how to manage risk effectively and protect your capital.",
  },
  {
    icon: Brain,
    title: "Investor Psychology",
    description: "Master the mental game — overcome fear, greed, and emotional decision-making.",
  },
  {
    icon: BarChart3,
    title: "Derivatives (F&O)",
    description: "Beginner-friendly introduction to Futures & Options with real-world context.",
  },
  {
    icon: Target,
    title: "Independent Thinking",
    description: "Build confidence to make your own informed investment decisions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">What I Teach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Education & <span className="text-gradient-gold">Awareness</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-gradient-gold rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
