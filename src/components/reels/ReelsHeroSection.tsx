import { Button } from "@/components/ui/button";
import { ArrowRight, Video, TrendingUp, Clock } from "lucide-react";

const ReelsHeroSection = () => {
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
              <Video size={16} />
              Reels & TikTok para negocios
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Convertí tu trabajo diario en contenido
              <br />
              <span className="text-primary">que vende.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Sin pensar ideas, sin editar, sin depender de ads. Te ayudamos a mostrar lo que ya hacés en tu negocio y lo transformamos en videos cortos consistentes, claros y alineados a ventas usando <strong className="text-foreground">build in public</strong> como sistema.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Publicás de forma constante sin perder tiempo
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Construís autoridad real en tu nicho
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Generás oportunidades de venta desde tu contenido
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Agendar llamada
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() =>
                  document
                    .getElementById("planes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver planes
              </Button>
            </div>
          </div>

          <div
            className="relative hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Main card - Video mockup */}
              <div className="bg-card rounded-3xl p-6 shadow-xl border border-border/50 max-w-sm mx-auto">
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <Video className="text-primary" size={40} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Tu negocio</p>
                      <p className="text-xs text-muted-foreground">hace 2 horas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">12.5K</p>
                    <p className="text-xs text-muted-foreground">vistas</p>
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tiempo semanal</p>
                    <p className="text-sm font-semibold text-foreground">Solo 30-60 min</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Contenido mensual</p>
                    <p className="text-sm font-semibold text-foreground">Hasta 24 videos</p>
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

export default ReelsHeroSection;
