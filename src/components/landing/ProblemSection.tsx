import { AlertCircle, Clock, Shuffle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Redes cuando se puede",
    description: "Publicás cuando tenés tiempo, sin consistencia ni planificación. Tu audiencia nunca sabe cuándo esperar contenido.",
  },
  {
    icon: Shuffle,
    title: "Sin coherencia visual",
    description: "Cada publicación parece de una marca diferente. No hay identidad ni línea de comunicación clara.",
  },
  {
    icon: TrendingDown,
    title: "Resultados inconsistentes",
    description: "A veces funciona, a veces no. Sin estrategia, es imposible saber qué está dando resultados.",
  },
  {
    icon: AlertCircle,
    title: "Marketing como extra",
    description: "Lo ves como un gasto estético y no como inversión estratégica. Siempre queda para después.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
            El problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-muted-foreground">
            El problema no es publicar poco. El problema es no tener una estrategia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="text-destructive" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
