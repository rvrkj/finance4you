import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Finance4You" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-body">
          <a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-colors">About</a>
          <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">Services</a>
          <a href="#team" className="text-primary-foreground/70 hover:text-secondary transition-colors">Team</a>
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
