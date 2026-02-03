import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const portfolioItems = [
    {
        id: 1,
        image: "/portfolio/portfolio-1.png",
        alt: "Santa Fe Computación",
    },
    {
        id: 2,
        image: "/portfolio/portfolio-2.png",
        alt: "Laberinto mágico pelotero",
    },
    {
        id: 3,
        image: "/portfolio/portfolio-3.png",
        alt: "Reva Consultoria",
    },
    {
        id: 4,
        image: "/portfolio/portfolio-4.png",
        alt: "Hardmaq",
    },
    {
        id: 5,
        image: "/portfolio/portfolio-5.png",
        alt: "Gimnasio Kiven",
    },
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-16 md:py-32 bg-gradient-to-b from-secondary/5 to-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 md:mb-6">
                        Nuestro trabajo
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Portfolio de clientes
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground px-2">
                        Conocé algunos de los proyectos en los que trabajamos. Cada marca tiene su identidad y estrategia única.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-2 md:px-16">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {portfolioItems.map((item) => (
                                <CarouselItem key={item.id} className="basis-full">
                                    <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl mx-1 md:mx-0">
                                        <div className="aspect-[16/10] md:aspect-video overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
                                            <p className="text-white text-sm md:text-base font-medium">{item.alt}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 md:-left-6 h-8 w-8 md:h-10 md:w-10 bg-card/90 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                        <CarouselNext className="right-2 md:-right-6 h-8 w-8 md:h-10 md:w-10 bg-card/90 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                    </Carousel>

                    {/* Indicador de swipe en móvil */}
                    <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
                        Deslizá para ver más →
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;
