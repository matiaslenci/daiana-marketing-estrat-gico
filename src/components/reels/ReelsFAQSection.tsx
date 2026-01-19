import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia frente a cámara?",
    answer: "No. Te guiamos para grabar simple y natural. No necesitás ser experto ni tener habilidades especiales.",
  },
  {
    question: "¿Cuánto tiempo me lleva grabar?",
    answer: "Entre 30 y 60 minutos por semana. Es todo lo que necesitás invertir de tu tiempo.",
  },
  {
    question: "¿Funciona para cualquier nicho?",
    answer: "Funciona mejor para servicios y negocios digitales. Si vendés un servicio o producto online, es ideal para vos.",
  },
  {
    question: "¿Cuándo voy a ver resultados?",
    answer: "Depende de tu punto de partida, pero la constancia marca la diferencia. En 30 días ya tenés presencia ordenada, en 90 días empezás a ver autoridad.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sí. Es mensual, sin permanencia. Podés cancelar cuando quieras sin ningún problema.",
  },
];

const ReelsFAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ReelsFAQSection;
