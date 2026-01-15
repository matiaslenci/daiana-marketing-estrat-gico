import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Estrategia personalizada para tu negocio",
  "Contenido profesional y coherente",
  "Planificación mensual completa",
  "Medición y optimización constante",
  "Un solo punto de contacto",
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-primary-foreground" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Marketing Externo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Servicio integral para pymes
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Análisis",
                    "Estrategia",
                    "Contenido",
                    "Publicación",
                    "Resultados",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                        {i + 1}
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent-foreground rounded-full transition-all duration-1000"
                          style={{ width: `${(i + 1) * 20}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground w-24">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm font-medium">Vos delegás, yo ejecuto</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              La solución
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Tu departamento de
              <br />
              <span className="text-primary">marketing.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Me encargo de todo: desde pensar la estrategia hasta medir los
              resultados. Vos solo te ocupás de atender a los clientes que
              llegan.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver cómo funciona
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
