import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Calendar, Target } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#120e1c] via-[#0d0b13] to-[#1a0f1e]" />
      <div className="absolute inset-0 brand-gradient-bg opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-hotpink/25 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-lavender/25 rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/3 w-40 h-40 bg-brand-yellow/15 rounded-full blur-3xl" />
      {/* Fundido inferior hacia la sección clara siguiente */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 border border-brand-yellow/40 rounded-full text-sm font-medium text-white glow-yellow">
              <Target size={16} className="text-glow-yellow" />
              Marketing estratégico para pymes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Delegá tu marketing.
              <br />
              <span
                className="text-brand-hotpink"
                style={{ textShadow: "0 0 32px hsl(var(--grad-hotpink) / 0.5)" }}
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
              <Button variant="ctaGlow" size="xl" onClick={scrollToContact}>
                Agendar llamada gratuita
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
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
            className="relative hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/[0.06] rounded-2xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-hotpink/15 rounded-xl flex items-center justify-center">
                      <BarChart3 className="text-brand-hotpink" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">
                        Crecimiento mensual
                      </p>
                      <p className="text-2xl font-bold text-white">
                        +127%
                      </p>
                    </div>
                  </div>

                  <div className="h-32 flex items-end gap-2">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 110].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-brand-hotpink to-brand-hotpink/40 rounded-t transition-all hover:from-brand-hotpink hover:to-brand-hotpink/60"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-[#17131f]/90 rounded-xl p-4 shadow-lg border border-white/10 backdrop-blur animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-hotpink/15 rounded-lg flex items-center justify-center">
                    <Calendar className="text-brand-hotpink" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Esta semana</p>
                    <p className="text-sm font-semibold text-white">
                      12 publicaciones
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute -right-4 bottom-8 bg-[#17131f]/90 rounded-xl p-4 shadow-lg border border-white/10 backdrop-blur animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-yellow/15 rounded-lg flex items-center justify-center">
                    <Target className="text-brand-yellow" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Alcance</p>
                    <p className="text-sm font-semibold text-white">
                      +45K personas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
