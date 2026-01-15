import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Esencial",
    price: "170.000",
    description: "Ideal para empezar con presencia profesional",
    featured: false,
    features: [
      "4 posts mensuales",
      "2 días de historias por semana (2-3 por día)",
      "1 sesión de contenido mensual (2 hs)",
      "Redacción de copys",
      "Seguimiento de redes",
    ],
  },
  {
    name: "Crecimiento",
    price: "270.000",
    description: "Para negocios que buscan escalar su presencia",
    featured: true,
    features: [
      "8 posts mensuales",
      "3 días de historias por semana (3-5 por día)",
      "2 sesiones de contenido mensuales (2 hs)",
      "Redacción de copys",
      "Redacción de biografía",
      "Seguimiento de redes",
    ],
  },
  {
    name: "Premium",
    price: "370.000",
    description: "Máxima presencia y contenido constante",
    featured: false,
    features: [
      "12 posts mensuales",
      "4 días de historias por semana (3-5 por día)",
      "2 sesiones de contenido mensuales (2 hs)",
      "Redacción de copys",
      "Redacción de biografía",
      "Seguimiento de redes",
    ],
  },
];

const PackagesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paquetes" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Paquetes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elegí el plan que mejor se adapte
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos los paquetes son personalizables según las necesidades de tu
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? "bg-gradient-to-b from-primary to-primary/90 text-primary-foreground shadow-2xl scale-105"
                  : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent-foreground text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                  <Star size={14} fill="currentColor" />
                  Más elegido
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    pkg.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${
                      pkg.featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    $
                  </span>
                  <span
                    className={`text-4xl font-bold ${
                      pkg.featured
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.featured
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
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pkg.featured
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
                      className={`text-sm ${
                        pkg.featured
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
                Elegir {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          <strong className="text-foreground">
            ¿Necesitás algo diferente?
          </strong>{" "}
          Todos los paquetes son 100% personalizables. Conversemos sobre lo que
          tu negocio necesita.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
