import { TrendingUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-10 border-t border-gold/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-secondary" />
        <span className="font-display text-primary-foreground font-semibold">Aasish Kumar</span>
      </div>
      <p className="text-primary-foreground/40 text-sm font-body text-center">
        For educational purposes only. Not SEBI registered. No buy/sell recommendations.
      </p>
    </div>
  </footer>
);

export default Footer;
