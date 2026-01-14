import { CheckCircle2, XCircle } from "lucide-react";

const idealFor = [
  "Pymes que quieren delegar su marketing digital",
  "Negocios que entienden el valor de la comunicación",
  "Emprendedores que buscan orden y estrategia",
  "Empresas que quieren resultados medibles",
  "Dueños que prefieren enfocarse en su negocio",
];

const notFor = [
  "Quienes buscan resultados inmediatos sin proceso",
  "Negocios que ven el marketing como un gasto",
  "Quienes no están dispuestos a invertir en comunicación",
];

const TargetSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            ¿Es para vos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Para quién es este servicio
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparencia desde el primer momento. Así sabés si somos el match perfecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 border border-primary/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Es para vos si...</h3>
            </div>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <XCircle className="text-muted-foreground" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">No es para vos si...</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-muted-foreground shrink-0 mt-0.5" size={18} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
