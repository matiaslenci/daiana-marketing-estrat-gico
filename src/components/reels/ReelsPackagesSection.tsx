import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Base",
    subtitle: "Para empezar a construir presencia",
    price: "200.000",
    featured: false,
    features: [
      "8 videos al mes",
      "Soporte por mensaje",
      "Entrega semanal",
    ],
  },
  {
    name: "Crecimiento",
    subtitle: "Para negocios que quieren consistencia real",
    price: "350.000",
    featured: true,
    features: [
      "16 videos al mes",
      "Soporte prioritario",
      "Ajustes estratégicos mensuales",
    ],
  },
  {
    name: "Autoridad",
    subtitle: "Para quienes quieren posicionarse fuerte en su nicho",
    price: "530.000",
    featured: false,
    features: [
      "24 videos al mes",
      "Soporte directo",
      "Revisión estratégica continua",
    ],
  },
];

const ReelsPackagesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planes" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Planes y precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elegí el plan que mejor se adapte
          </h2>
          <p className="text-lg text-muted-foreground">
            Planes claros, sin sorpresas. Cancelá cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${pkg.featured
                  ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-2xl scale-105"
                  : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl"
                }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-destructive text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                  <Star size={14} fill="currentColor" />
                  Más elegido
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-xl font-bold mb-2 ${pkg.featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                >
                  Plan {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${pkg.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                    }`}
                >
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${pkg.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                      }`}
                  >
                    $
                  </span>
                  <span
                    className={`text-4xl font-bold ${pkg.featured
                        ? "text-primary-foreground"
                        : "text-foreground"
                      }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${pkg.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                      }`}
                  >
                    /mes
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.featured
                          ? "bg-primary-foreground/20"
                          : "bg-primary/10"
                        }`}
                    >
                      <Check
                        className={
                          pkg.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        }
                        size={12}
                      />
                    </div>
                    <span
                      className={`text-sm ${pkg.featured
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.featured ? "secondary" : "hero"}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                Contratar plan {pkg.name.toLowerCase()}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsPackagesSection;
