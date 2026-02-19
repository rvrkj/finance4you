import { Briefcase, GraduationCap, Building2, Rocket } from "lucide-react";

const teamMembers = [
  {
    name: "Aasish Kumar",
    role: "Co-Founder & Financial Consultant",
    qualification: "MBA in Finance",
    experience: "6+ Years in Stock Market Education & Broking",
    highlights: [
      "Motilal Oswal — Equity advisory & investment communication",
      "Axis Securities — Equity advisory & client servicing",
      "Kotak Securities (BA) — Beginner-friendly financial education",
    ],
    specialization: "Stock market education, risk management & investor psychology",
    icon: GraduationCap,
  },
  {
    name: "Rajeev Jaiswal",
    role: "Co-Founder & Market Strategist",
    qualification: "Indian School of Business | Co-founded STOCKR",
    experience: "Stock Market Research & Strategy",
    highlights: [
      "Co-founded STOCKR — a stock market research initiative",
      "Equity research & technical analysis expertise",
      "Building tools & frameworks for smarter investing",
    ],
    specialization: "Market strategy, equity research & fintech innovation",
    icon: Rocket,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">Our Team</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Meet the <span className="text-gradient-gold">Founders</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-navy-light/50 border border-gold/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-gold rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <member.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{member.name}</h3>
                  <p className="text-secondary text-sm font-body">{member.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm font-body">{member.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/70 text-sm font-body">{member.experience}</span>
                </div>

                <div className="border-t border-gold/10 pt-4 mt-4">
                  <p className="text-secondary text-xs tracking-[0.15em] uppercase mb-3 font-body">Career Highlights</p>
                  <ul className="space-y-2">
                    {member.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Building2 className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/60 text-sm font-body leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gold/10 rounded-lg p-3 mt-4">
                  <p className="text-primary-foreground/80 text-sm font-body">
                    <span className="text-secondary font-semibold">Focus: </span>
                    {member.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
