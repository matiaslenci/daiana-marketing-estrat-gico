import {
  BarChart3,
  FileText,
  Image,
  MessageSquare,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Análisis de marca",
    description: "Estudio tu negocio, competencia y audiencia para definir la mejor estrategia.",
  },
  {
    icon: MessageSquare,
    title: "Línea de comunicación",
    description: "Definimos el tono, estilo y mensajes clave que conectan con tu cliente ideal.",
  },
  {
    icon: FileText,
    title: "Planificación de contenidos",
    description: "Calendario mensual con todos los contenidos organizados y aprobados.",
  },
  {
    icon: Image,
    title: "Creación y edición",
    description: "Diseño gráfico, redacción de copys y producción de material visual.",
  },
  {
    icon: Share2,
    title: "Publicación en redes",
    description: "Gestión completa de tus perfiles con publicación en horarios óptimos.",
  },
  {
    icon: BarChart3,
    title: "Seguimiento y análisis",
    description: "Reportes mensuales con métricas claras y recomendaciones de mejora.",
  },
];

const ServiceSection = () => {
  return (
    <section
      id="servicios"
      className="relative py-20 md:py-32 overflow-hidden bg-[#0d0b13]"
    >
      {/* Fondo oscuro con gradientes de marca (mismo base que el resto para unir sin cortes) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0b13] via-[#160f22] to-[#0d0b13]" />
      <div className="pointer-events-none absolute inset-0 brand-gradient-bg opacity-20" />
      <div className="pointer-events-none absolute top-1/3 -left-24 w-96 h-96 bg-brand-lavender/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-24 w-[28rem] h-[28rem] bg-brand-hotpink/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-yellow/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-yellow/20 text-white border border-brand-yellow/40 glow-yellow">
            <Sparkles size={16} className="text-glow-yellow" />
            Servicio principal
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Manejo integral de{" "}
            <span
              className="text-brand-hotpink"
              style={{ textShadow: "0 0 32px hsl(var(--grad-hotpink) / 0.5)" }}
            >
              redes sociales
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            No se trata solo de publicar. Es planificar, ejecutar y medir para
            que tus redes trabajen por tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 bg-[#161022] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40"
            >
              {/* Resplandor amarillo sutil al hacer hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_-8px_hsl(var(--brand-yellow)/0.35)]" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-brand-yellow/15 border border-brand-yellow/30 group-hover:glow-yellow transition-all duration-300">
                  <service.icon className="text-glow-yellow" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
