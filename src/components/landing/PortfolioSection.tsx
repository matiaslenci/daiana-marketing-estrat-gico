import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import reel1 from "@/assets/videos-portfolio/reel-1.mp4";
import reel2 from "@/assets/videos-portfolio/reel-2.mp4";
import reel3 from "@/assets/videos-portfolio/reel-3.mp4";
import reel4 from "@/assets/videos-portfolio/reel-4.mp4";
import reel5 from "@/assets/videos-portfolio/reel-5.mp4";
import reel6 from "@/assets/videos-portfolio/reel-6.mp4";
import reel7 from "@/assets/videos-portfolio/reel-7.mp4";

const slides = [reel1, reel2, reel3, reel4, reel5, reel6, reel7];

const PortfolioSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true, skipSnaps: false, containScroll: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));

  const handleVideoLoaded = (index: number) => {
    setLoaded((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // El video activo suena (si el audio está habilitado); los cercanos se
  // reproducen en silencio y los lejanos se pausan para no saturar recursos.
  useEffect(() => {
    const total = slides.length;
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      video.muted = !audioEnabled || index !== selectedIndex;
      const dist = Math.min(
        Math.abs(index - selectedIndex),
        total - Math.abs(index - selectedIndex)
      );
      if (dist <= 1) {
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [selectedIndex, audioEnabled]);

  const toggleAudio = () => setAudioEnabled((prev) => !prev);

  return (
    <section
      id="portfolio"
      className="relative py-20 md:py-32 overflow-hidden bg-[#0d0b13]"
    >
      {/* Gradientes de fondo de marca */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0b13] via-[#160f22] to-[#0d0b13]" />
      <div className="pointer-events-none absolute inset-0 brand-gradient-bg opacity-25" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-yellow/20 text-white border border-brand-yellow/40 glow-yellow">
            <Sparkles size={16} className="text-glow-yellow" />
            Portfolio
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Contenido que hace que tu marca{" "}
            <span
              className="text-brand-hotpink"
              style={{ textShadow: "0 0 32px hsl(var(--grad-hotpink) / 0.5)" }}
            >
              se vea real.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70">
            Estos son algunos de los reels que produzco para mis clientes.
            Historias reales, marcas que conectan.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Bordes difuminados */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-24 z-10 bg-gradient-to-r from-[#0d0b13] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-24 z-10 bg-gradient-to-l from-[#0d0b13] to-transparent" />

          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
            <div className="flex">
              {slides.map((src, i) => {
                const isActive = i === selectedIndex;
                return (
                  <div
                    key={i}
                    className={`flex-[0_0_66%] sm:flex-[0_0_44%] md:flex-[0_0_32%] lg:flex-[0_0_24%] px-2 md:px-3 ${
                      isActive ? "z-10" : "z-0"
                    } relative`}
                  >
                    <div
                      className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-[transform,opacity,box-shadow] duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100 shadow-[0_24px_70px_-18px_hsl(var(--brand-yellow)/0.6)]"
                          : "scale-[0.9] opacity-55"
                      }`}
                    >
                      {/* Anillo amarillo con brillo en el activo */}
                      <div
                        className={`absolute -inset-[2.5px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-brand-yellow via-primary/60 to-brand-yellow transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-secondary/10">
                        {/* Skeleton mientras carga */}
                        <div
                          className={`absolute inset-0 z-10 aspect-[9/16] transition-opacity duration-500 ${
                            loaded[i] ? "opacity-0 pointer-events-none" : "opacity-100"
                          }`}
                        >
                          <div className="h-full w-full animate-pulse bg-gradient-to-b from-white/5 via-white/10 to-white/5" />
                        </div>
                        <video
                          ref={(el) => {
                            videoRefs.current[i] = el;
                          }}
                          src={src}
                          className="w-full aspect-[9/16] object-cover select-none pointer-events-none"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onCanPlay={() => handleVideoLoaded(i)}
                        />
                        {isActive && (
                          <button
                            onClick={toggleAudio}
                            className="absolute bottom-3 right-3 z-20 p-2 rounded-full bg-foreground/60 backdrop-blur-sm text-background hover:bg-foreground/80 transition-colors"
                            aria-label={audioEnabled ? "Silenciar" : "Activar sonido"}
                          >
                            {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flechas */}
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/15 shadow-lg text-white hover:text-brand-yellow hover:border-brand-yellow/60 hover:glow-yellow transition-all"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Siguiente"
            className="hidden md:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-card/90 backdrop-blur border border-border shadow-lg text-foreground hover:text-primary hover:border-brand-yellow/60 hover:glow-yellow transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-8 h-3 bg-brand-yellow shadow-[0_0_14px_hsl(var(--brand-yellow)/0.8)]"
                  : "w-3 h-3 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-white/50 mt-6 md:hidden">
          Deslizá para ver más →
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
