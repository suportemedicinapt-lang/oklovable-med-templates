import { CheckCircle } from "lucide-react";

const differentials = [
  {
    title: "Cirurgia Robótica",
    description: "Procedimentos com tecnologia robótica da Vinci para maior precisão e recuperação mais rápida."
  },
  {
    title: "Atendimento Humanizado",
    description: "Consultas com tempo adequado para ouvir, entender e esclarecer todas as dúvidas do paciente."
  },
  {
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos para diagnóstico preciso e tratamentos minimamente invasivos."
  },
  {
    title: "Abordagem Integral",
    description: "Cuidado que considera não apenas a doença, mas a saúde geral e qualidade de vida do paciente."
  }
];

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Por que me escolher
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Diferenciais do <br />
              <span className="text-primary">Atendimento</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Meu compromisso é oferecer o que há de mais moderno na urologia, 
              combinando tecnologia avançada com um cuidado genuíno e respeitoso. 
              Cada paciente é único e merece uma abordagem personalizada.
            </p>

            <div className="space-y-6">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-hero rounded-3xl p-10 md:p-12 text-primary-foreground shadow-glow">
            <h3 className="font-heading text-2xl md:text-3xl mb-10">
              Números que refletem dedicação
            </h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  +15
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Anos de experiência
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  +8.000
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Pacientes atendidos
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  +2.500
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Cirurgias realizadas
                </p>
              </div>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  99%
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Satisfação
                </p>
              </div>
            </div>

            <p className="mt-10 text-xs text-primary-foreground/60">
              * Conforme Lei de Publicidade Médica (CFM), os dados apresentados são meramente informativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};