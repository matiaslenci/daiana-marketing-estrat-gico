import felina from "@/assets/logos-clientes/felina.png";
import impeque from "@/assets/logos-clientes/impeque.png";
import isolina from "@/assets/logos-clientes/isolina.png";
import charcuteria from "@/assets/logos-clientes/charcuteria.png";
import estancia from "@/assets/logos-clientes/estancia-urbana.png";
import casaMartin from "@/assets/logos-clientes/casa-martin.png";
import hardmaq from "@/assets/logos-clientes/hardmaq.png";

const clients = [
  { src: felina, name: "Felina" },
  { src: impeque, name: "Impeque" },
  { src: isolina, name: "Isolina" },
  { src: charcuteria, name: "Charcutería" },
  { src: estancia, name: "Estancia Urbana" },
  { src: casaMartin, name: "Ferretería Casa Martín" },
  { src: hardmaq, name: "Hardmaq" },
];

const ClientsSection = () => {
  // Duplicamos la lista para lograr un marquee sin cortes
  const loop = [...clients, ...clients];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 brand-gradient-bg opacity-40" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-yellow/20 text-foreground border border-brand-yellow/40">
            Confían en mí
          </span>
          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Marcas que ya delegaron su{" "}
            <span className="text-glow-yellow">marketing</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee gap-5 md:gap-7 hover:[animation-play-state:paused]">
            {loop.map((client, i) => (
              <div
                key={i}
                className="group relative flex h-24 w-44 md:h-28 md:w-56 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-secondary to-foreground/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60 hover:shadow-[0_0_28px_hsl(var(--brand-yellow)/0.4)]"
              >
                {/* Resplandor amarillo en hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-brand-yellow/0 transition-colors duration-300 group-hover:bg-brand-yellow/5" />
                <img
                  src={client.src}
                  alt={`Logo de ${client.name}`}
                  loading="lazy"
                  className="relative max-h-14 md:max-h-16 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
