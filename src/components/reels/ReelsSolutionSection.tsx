import { Lightbulb, Video, MessageSquare, Target, CheckCircle2 } from "lucide-react";

const ReelsSolutionSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Lightbulb size={16} />
            La solución
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Build in public aplicado a
            <br />
            <span className="text-primary">negocios reales</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                No se trata de bailar, ni de viralidad forzada. Se trata de mostrar <strong>procesos, decisiones, aprendizajes y casos reales</strong> de tu negocio.
              </p>
              <p className="text-muted-foreground">
                Este servicio toma lo que ya hacés cada semana y lo convierte en contenido.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-4 border border-primary/20 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-foreground">Bajamos ideas claras</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-primary/20 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Video className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-foreground">Editamos los videos</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-primary/20 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <p className="text-sm font-medium text-foreground">Ordenamos el mensaje</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-accent-foreground rounded-3xl p-8 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Tu único rol</h3>
            </div>
            <p className="text-xl font-semibold mb-6">
              Vos solo grabás.<br />
              El sistema se encarga del resto.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>Consistencia</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>Claridad</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span>Foco en negocio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSolutionSection;
