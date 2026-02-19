import { Phone, Mail, TrendingUp } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-3">Get Started</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Talk <span className="text-gradient-gold">Finance</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Ready to start your investment journey? Reach out for a simple, no-pressure conversation about your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9036392178"
              className="inline-flex items-center justify-center gap-3 bg-gradient-gold text-accent-foreground font-body font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              Call: 9036392178
            </a>
            <a
              href="mailto:learn@fynanc4you.in"
              className="inline-flex items-center justify-center gap-3 border border-border text-foreground font-body font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-colors"
            >
              <Mail className="h-5 w-5" />
              learn@fynanc4you.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
