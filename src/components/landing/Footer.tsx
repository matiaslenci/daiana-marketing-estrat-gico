import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden bg-[#0d0b13] border-t border-white/10">
      {/* Fondo oscuro con gradientes de marca */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#160f22] to-[#0d0b13]" />
      <div className="pointer-events-none absolute inset-0 brand-gradient-bg opacity-15" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-64 bg-brand-yellow/10 rounded-full blur-3xl" />
      {/* Línea de brillo superior */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Daiana<span className="text-glow-yellow">.</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-sm text-white/60">
              Marketing Digital para Pymes
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-brand-yellow hover:border-brand-yellow/50 hover:glow-yellow transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-brand-yellow hover:border-brand-yellow/50 hover:glow-yellow transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hola@daiana.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-brand-yellow hover:border-brand-yellow/50 hover:glow-yellow transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Daiana Marketing. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
