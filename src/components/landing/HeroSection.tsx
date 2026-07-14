import { Button } from "@/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import InstagramProfileCard from "@/components/landing/InstagramProfileCard";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0d0b13]">
      {/* Fondo oscuro con gradientes de marca */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160f22] via-[#0d0b13] to-[#210f26]" />
      <div className="absolute inset-0 brand-gradient-bg opacity-50" />
      <div className="absolute top-1/4 right-0 w-[28rem] h-[28rem] bg-brand-hotpink/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/3 w-56 h-56 bg-brand-yellow/25 rounded-full blur-3xl" />
      {/* Fundido inferior para unir sin cortes con el portfolio oscuro */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0d0b13]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 border border-brand-yellow/40 rounded-full text-sm font-medium text-white glow-yellow">
              <Target size={16} className="text-glow-yellow" />
              Marketing estratégico para pymes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Delegá tu marketing.
              <br />
              <span
                className="text-brand-hotpink"
                style={{
                  textShadow: "0 0 32px hsl(var(--grad-hotpink) / 0.5)",
                }}
              >
                Enfocate en tu negocio.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Soy tu departamento de marketing externo. Me encargo de pensar,
              ejecutar y medir tu comunicación digital mientras vos te ocupás de
              lo que mejor sabés hacer: hacer crecer tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="ctaGlow"
                size="xl"
                className="w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Agendar llamada gratuita
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
                onClick={() =>
                  document
                    .getElementById("servicios")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conocer servicios
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow)/0.8)]" />
                Con estrategia real
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-2 h-2 bg-brand-yellow rounded-full shadow-[0_0_10px_hsl(var(--brand-yellow)/0.8)]" />
                Resultados medibles
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <InstagramProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
