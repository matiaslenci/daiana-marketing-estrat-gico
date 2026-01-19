import { UserCheck, Calendar, Smartphone, Scissors, Send, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Onboarding inicial",
    description: "Definimos tu oferta, público, objetivos y estilo de comunicación.",
  },
  {
    icon: Calendar,
    title: "Plan de contenido",
    description: "Creamos un sistema de ideas basado en tu trabajo real y tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Grabación simple",
    description: "Grabás con tu celular siguiendo guías claras. Sin guiones largos ni setups complejos.",
  },
  {
    icon: Scissors,
    title: "Edición y optimización",
    description: "Editamos los videos con ritmo, subtítulos y estructura pensada para retención.",
  },
  {
    icon: Send,
    title: "Entrega semanal",
    description: "Recibís tus videos listos para publicar cada semana.",
  },
  {
    icon: RefreshCw,
    title: "Ajustes continuos",
    description: "Revisamos qué funciona y ajustamos el enfoque mes a mes.",
  },
];

const ReelsProcessSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un sistema simple y predecible
          </h2>
          <p className="text-lg text-muted-foreground">
            Seis pasos para transformar tu trabajo en contenido que vende.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-foreground rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsProcessSection;
