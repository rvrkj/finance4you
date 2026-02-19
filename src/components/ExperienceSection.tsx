import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Kotak Securities",
    role: "Business Associate",
    description: "Ethical, clear financial education. Helping beginners understand markets with real-world examples.",
  },
  {
    company: "Axis Securities",
    role: "Equity Advisory",
    description: "Equity advisory and client servicing, guiding investors with research-backed insights.",
  },
  {
    company: "Motilal Oswal",
    role: "Equity Advisory",
    description: "Equity advisory, client servicing & investment communication with institutional-grade approach.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">Career</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 bg-navy-light/50 border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
              <div className="bg-gradient-gold rounded-lg w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{exp.company}</h3>
                <p className="text-secondary text-sm font-body mb-2">{exp.role}</p>
                <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
