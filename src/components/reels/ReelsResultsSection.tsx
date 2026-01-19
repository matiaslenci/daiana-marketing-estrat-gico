import { Calendar, TrendingUp, Award } from "lucide-react";

const results = [
  {
    icon: Calendar,
    period: "En 30 días",
    result: "Contenido ordenado y presencia constante",
  },
  {
    icon: TrendingUp,
    period: "En 60 días",
    result: "Mayor claridad de mensaje y reconocimiento",
  },
  {
    icon: Award,
    period: "En 90 días",
    result: "Más confianza, autoridad y conversaciones de venta",
  },
];

const ReelsResultsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Resultados esperables
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qué podés esperar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary-foreground" size={28} />
              </div>
              <p className="text-sm text-primary font-semibold mb-2">{item.period}</p>
              <p className="text-lg font-medium text-foreground">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-6 border border-primary/20">
            <p className="text-muted-foreground mb-2">
              No prometemos números.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Prometemos un sistema que se sostiene.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsResultsSection;
