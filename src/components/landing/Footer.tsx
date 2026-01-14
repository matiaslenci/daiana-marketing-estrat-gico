import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">
              Daiana<span className="text-primary">.</span>
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Marketing Digital para Pymes</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hola@daiana.com"
              className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daiana Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
