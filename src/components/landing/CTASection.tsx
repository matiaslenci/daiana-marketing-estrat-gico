import {
  ArrowRight,
  MessageCircle,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent-foreground" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Delegá tu marketing con tranquilidad
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Agendemos una llamada sin compromiso para conocer tu negocio y ver
            cómo puedo ayudarte a comunicar mejor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="xl"
              className="group bg-white text-primary shadow-lg hover:bg-white/90 hover:text-primary"
              onClick={() =>
                window.open(
                  "https://wa.me/5493424625118?text=Hola%20Dai!%20Vi%20tu%20web%20y%20quiero%20que%20gestiones%20las%20redes%20de%20mi%20negocio",
                  "_blank"
                )
              }
            >
              <MessageCircle size={20} className="text-[#25d366]" />
              Escribime por WhatsApp
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/daiana-paret-7b178a338",
                  "_blank"
                )
              }
            >
              <Linkedin size={20} />
              Conectemos en LinkedIn
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() =>
                window.open("https://www.instagram.com/daiparet.cm", "_blank")
              }
            >
              <Instagram size={20} />
              Sígueme en Instagram
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow)/0.9)]" />
              Respuesta en menos de 24 hs
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow)/0.9)]" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow)/0.9)]" />
              Primera llamada gratuita
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
