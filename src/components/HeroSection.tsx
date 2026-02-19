import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Your Trusted Financial Education Partner
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Fynance<span className="text-gradient-gold">4</span>You
        </h1>
        <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Empowering individuals with practical stock market education, investment awareness, and the confidence to make independent financial decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a href="#services" className="bg-gradient-gold text-accent-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Explore Services
          </a>
          <a href="#team" className="border border-secondary/40 text-primary-foreground font-body px-8 py-3 rounded-lg hover:bg-secondary/10 transition-colors">
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
