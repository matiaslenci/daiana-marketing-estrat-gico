import { ArrowRight, Mail, MessageCircle } from "lucide-react";
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
              className="group hover:text-white"
              onClick={() => window.open("https://wa.me/", "_blank")}
            >
              <MessageCircle size={20} />
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
              onClick={() => window.open("mailto:hola@daiana.com", "_blank")}
            >
              <Mail size={20} />
              Enviame un email
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/50 rounded-full" />
              Respuesta en menos de 24 hs
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/50 rounded-full" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/50 rounded-full" />
              Primera llamada gratuita
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
