import { ArrowRight, BarChart, Calendar, Lightbulb, Megaphone, PenTool, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análisis",
    description: "Estudiamos tu marca, competencia y audiencia para entender el panorama completo.",
  },
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Definimos objetivos, mensajes clave y el enfoque que guiará toda la comunicación.",
  },
  {
    icon: Calendar,
    title: "Planificación",
    description: "Creamos el calendario de contenidos con fechas, temas y formatos definidos.",
  },
  {
    icon: PenTool,
    title: "Producción",
    description: "Diseñamos, redactamos y preparamos todo el material visual y textual.",
  },
  {
    icon: Megaphone,
    title: "Publicación",
    description: "Gestionamos las redes, publicamos en horarios óptimos y respondemos interacciones.",
  },
  {
    icon: BarChart,
    title: "Seguimiento",
    description: "Analizamos métricas, evaluamos resultados y optimizamos la estrategia.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Proceso de trabajo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Método y orden en cada paso
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso claro que garantiza resultados consistentes y medibles.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground/30">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-8 py-6 border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Ciclo continuo de mejora</p>
                <p className="text-sm text-muted-foreground">Cada mes optimizamos basándonos en datos reales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
