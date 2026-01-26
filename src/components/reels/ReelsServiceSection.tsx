import { Check, X, Target, Lightbulb, Video, Captions, Calendar, MessageSquare } from "lucide-react";

const includes = [
  { icon: Target, text: "Estrategia de contenido basada en build in public" },
  { icon: Lightbulb, text: "Sistema de ideas semanal" },
  { icon: Video, text: "Edición profesional de videos cortos" },
  { icon: Captions, text: "Subtítulos optimizados" },
  { icon: Calendar, text: "Entregas semanales predecibles" },
  { icon: MessageSquare, text: "Comunicación clara y ordenada" },
];

const notIncludes = [
  "No hacemos community management",
  "No respondemos mensajes",
  "No garantizamos viralidad",
  "No es edición suelta por video",
];

const ReelsServiceSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Qué incluye
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un servicio completo y con límites claros
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What's included */}
          <div className="bg-card rounded-3xl p-8 border border-primary/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Qué incluye el servicio</h3>
            </div>
            <ul className="space-y-4">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={16} />
                  </div>
                  <span className="text-foreground pt-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's NOT included */}
          <div className="bg-card rounded-3xl p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <X className="text-muted-foreground" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Límites claros</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {notIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="text-muted-foreground shrink-0 mt-0.5" size={18} />
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

export default ReelsServiceSection;
