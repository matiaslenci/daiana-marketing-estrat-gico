import { AlertTriangle, Brain, Clock, BarChart, XCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Grabás algo de vez en cuando",
    description: "No sabés si sirve y lo terminás dejando",
  },
  {
    icon: Brain,
    title: "Pensar ideas te drena energía",
    description: "Cada vez que querés publicar, empezás de cero",
  },
  {
    icon: AlertTriangle,
    title: "Editar te consume horas",
    description: "Tiempo que no tenés y que podrías usar en tu negocio",
  },
  {
    icon: BarChart,
    title: "Publicás sin una lógica clara",
    description: "No ves resultados de negocio porque no hay estrategia",
  },
];

const ReelsProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
            <XCircle size={16} />
            El problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sabés que deberías estar en Reels y TikTok,
            <br />
            <span className="text-destructive">pero no lo sostenés</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="text-destructive" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 border border-border/50">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              No es falta de ganas.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Es falta de sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsProblemSection;
