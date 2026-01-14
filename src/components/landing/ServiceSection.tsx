import { 
  BarChart3, 
  FileText, 
  Image, 
  MessageSquare, 
  Search, 
  Share2,
  TrendingUp,
  Award,
  Shield
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

const results = [
  {
    icon: TrendingUp,
    title: "Mejor posicionamiento",
    description: "Tu marca gana visibilidad y reconocimiento en el mercado.",
  },
  {
    icon: Award,
    title: "Mayor credibilidad",
    description: "Una comunicación profesional genera confianza en tus clientes.",
  },
  {
    icon: Shield,
    title: "Crecimiento comercial",
    description: "Las redes bien trabajadas acompañan el crecimiento de tu negocio.",
  },
];

const ServiceSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Servicio principal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Manejo integral de redes sociales
          </h2>
          <p className="text-lg text-muted-foreground">
            No se trata solo de publicar. Es planificar, ejecutar y medir para que tus redes trabajen por tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cuando las redes se trabajan profesionalmente
            </h3>
            <p className="text-muted-foreground">Los resultados hablan por sí solos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <result.icon className="text-primary-foreground" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {result.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
