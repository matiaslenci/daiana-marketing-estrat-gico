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
        alt: "Gimnasio Kiven",
    },
    {
        id: 2,
        image: "/portfolio/portfolio-2.png",
        alt: "Santa Fe Computación",
    },
    {
        id: 3,
        image: "/portfolio/portfolio-3.png",
        alt: "Reva Consultoria",
    },
    {
        id: 4,
        image: "/portfolio/portfolio-4.png",
        alt: "Laberinto mágico pelotero",
    },
    {
        id: 5,
        image: "/portfolio/portfolio-5.png",
        alt: "Hardmaq",
    },
];

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Nuestro trabajo
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Portfolio de clientes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Conocé algunos de los proyectos en los que trabajamos. Cada marca tiene su identidad y estrategia única.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-16">
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
                                    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                                        <div className="aspect-video overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-6 h-10 w-10 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                        <CarouselNext className="-right-4 md:-right-6 h-10 w-10 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
                    </Carousel>
                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;
