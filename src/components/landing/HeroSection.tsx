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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Target size={16} />
              Marketing estratégico para pymes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Delegá tu marketing.
              <br />
              <span className="text-primary">Enfocate en tu negocio.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Soy tu departamento de marketing externo. Me encargo de pensar,
              ejecutar y medir tu comunicación digital mientras vos te ocupás de
              lo que mejor sabés hacer: hacer crecer tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Agendar llamada gratuita
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Con estrategia real
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
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
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="text-destructive" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Crecimiento mensual
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        +127%
                      </p>
                    </div>
                  </div>

                  <div className="h-32 flex items-end gap-2">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 110].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-destructive to-destructive/50 rounded-t transition-all hover:from-destructive hover:to-destructive/70"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Calendar className="text-destructive" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Esta semana</p>
                    <p className="text-sm font-semibold text-foreground">
                      12 publicaciones
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute -right-4 bottom-8 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Target className="text-destructive" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Alcance</p>
                    <p className="text-sm font-semibold text-foreground">
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
