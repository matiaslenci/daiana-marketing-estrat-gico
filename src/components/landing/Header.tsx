import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // El header es transparente sobre el hero oscuro y pasa a barra clara
  // sólida al salir del hero (o al abrir el menú móvil).
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector("main > section");
      const threshold = hero
        ? (hero as HTMLElement).offsetHeight - 90
        : window.innerHeight - 90;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const solid = scrolled || isMenuOpen;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const linkClass = cn(
    "text-sm font-medium transition-colors",
    solid
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/80 hover:text-white"
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        solid
          ? "bg-background/80 backdrop-blur-md border-border/50"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={cn(
              "text-xl md:text-2xl font-bold transition-colors",
              solid ? "text-foreground" : "text-white"
            )}
          >
            Daiana
            <span className={solid ? "text-primary" : "text-glow-yellow"}>.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("portfolio")} className={linkClass}>
              Portfolio
            </button>
            <button onClick={() => scrollToSection("servicios")} className={linkClass}>
              Servicios
            </button>
            <button onClick={() => scrollToSection("paquetes")} className={linkClass}>
              Paquetes
            </button>
            <button onClick={() => scrollToSection("proceso")} className={linkClass}>
              Proceso
            </button>
            <Button variant="ctaGlow" size="default" onClick={() => scrollToSection("contacto")}>
              Agendar llamada
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              solid ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
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
              <Button variant="ctaGlow" size="default" onClick={() => scrollToSection("contacto")}>
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
