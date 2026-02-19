import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "6+" },
    { icon: GraduationCap, label: "Qualification", value: "MBA Finance" },
    { icon: Award, label: "Specialization", value: "Equity Markets" },
    { icon: Users, label: "Focus", value: "Beginners" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Guide to <span className="text-gradient-gold">Financial Literacy</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            I am an independent financial consultant with 5–6 years of experience in stock market education and broking. 
            I help individuals with simple investment concepts and guide them towards structured, practical, and easy-to-understand investment techniques.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-secondary/40 transition-colors">
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
