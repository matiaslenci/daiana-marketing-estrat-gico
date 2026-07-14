import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold text-foreground">
            Daiana<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("paquetes")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Paquetes
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Proceso
            </button>
            <Button variant="ctaGlow" size="default" onClick={() => scrollToSection("contacto")}>
              Agendar llamada
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("paquetes")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Paquetes
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Proceso
              </button>
              <Button variant="hero" size="default" onClick={() => scrollToSection("contacto")}>
                Agendar llamada
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
