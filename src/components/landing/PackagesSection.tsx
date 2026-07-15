import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Esencial",
    description: "Ideal para empezar con presencia profesional",
    featured: false,
    features: [
      "4 posts mensuales",
      "2 días de historias por semana (2-3 por día)",
      "1 sesión de contenido mensual (2 hs)",
      "Redacción de copys",
      "Seguimiento de redes",
    ],
    price: "200.000",
  },
  {
    name: "Crecimiento",
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
    price: "300.000",
  },
  {
    name: "Premium",
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
    price: "370.000",
  },
];

const PackagesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="paquetes"
      className="relative py-20 md:py-32 overflow-hidden bg-[#0d0b13]"
    >
      {/* Fondo oscuro con gradientes de marca (base compartida para unir sin cortes) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0b13] via-[#160f22] to-[#0d0b13]" />
      <div className="pointer-events-none absolute inset-0 brand-gradient-bg opacity-20" />
      <div className="pointer-events-none absolute top-1/4 -right-24 w-96 h-96 bg-brand-lavender/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -left-24 w-[28rem] h-[28rem] bg-brand-hotpink/20 rounded-full blur-3xl" />

      {/* Línea-gradiente que atraviesa la sección */}
      <div className="pointer-events-none absolute top-1/2 inset-x-0 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-yellow/60 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 inset-x-0 -translate-y-1/2 h-px blur-sm bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-yellow/20 text-white border border-brand-yellow/40 glow-yellow">
            <Star size={14} className="text-glow-yellow" fill="currentColor" />
            Paquetes
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Elegí el plan que{" "}
            <span
              className="text-brand-hotpink"
              style={{ textShadow: "0 0 32px hsl(var(--grad-hotpink) / 0.5)" }}
            >
              mejor se adapte
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Todos los paquetes son personalizables según las necesidades de tu
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? "bg-white/[0.07] border border-brand-yellow/50 glow-yellow scale-[1.03] md:scale-105"
                  : "bg-white/5 border border-white/10 hover:border-brand-yellow/30"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gradient-to-r from-brand-yellow to-[hsl(96_90%_66%)] text-brand-yellow-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-[0_0_22px_hsl(var(--brand-yellow)/0.55)]">
                  <Star size={14} fill="currentColor" />
                  Más elegido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {pkg.name}
                </h3>
                <p className="text-sm mb-6 text-white/60">{pkg.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-white/60">$</span>
                  <span
                    className={`text-4xl font-bold ${
                      pkg.featured ? "text-glow-yellow" : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-sm text-white/60">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        pkg.featured
                          ? "bg-brand-yellow/20 border-brand-yellow/40"
                          : "bg-white/5 border-white/15"
                      }`}
                    >
                      <Check
                        className={pkg.featured ? "text-glow-yellow" : "text-brand-yellow"}
                        size={12}
                      />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.featured ? "ctaGlow" : "heroOutline"}
                size="lg"
                className={`w-full ${
                  pkg.featured
                    ? ""
                    : "border-white/30 text-white hover:bg-white/10 hover:text-white"
                }`}
                onClick={scrollToContact}
              >
                Elegir {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/60 mt-12 max-w-2xl mx-auto">
          <strong className="text-white">¿Necesitás algo diferente?</strong>{" "}
          Todos los paquetes son 100% personalizables. Conversemos sobre lo que
          tu negocio necesita.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
