import { Phone, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-secondary" />
          <span className="font-display text-xl text-primary-foreground font-semibold">
            Fynance4You
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-body">
          <a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-colors">About</a>
          <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">Services</a>
          <a href="#experience" className="text-primary-foreground/70 hover:text-secondary transition-colors">Experience</a>
          <a href="#contact" className="text-primary-foreground/70 hover:text-secondary transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:9036392178" className="hidden sm:flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
            <Phone className="h-4 w-4" />
            <span>9036392178</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
