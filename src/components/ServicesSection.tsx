import { 
  Activity, 
  Stethoscope, 
  Heart, 
  Shield, 
  Zap, 
  Baby 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Câncer de Próstata",
    description: "Diagnóstico precoce, acompanhamento e tratamento do câncer de próstata com técnicas modernas e minimamente invasivas."
  },
  {
    icon: Stethoscope,
    title: "Hiperplasia Prostática",
    description: "Tratamento clínico e cirúrgico da próstata aumentada, incluindo procedimentos a laser de última geração."
  },
  {
    icon: Activity,
    title: "Cálculos Renais",
    description: "Tratamento de pedras nos rins e vias urinárias com litotripsia extracorpórea e cirurgia endoscópica."
  },
  {
    icon: Heart,
    title: "Disfunção Erétil",
    description: "Avaliação completa e tratamento personalizado para disfunção erétil, recuperando a qualidade de vida sexual."
  },
  {
    icon: Baby,
    title: "Infertilidade Masculina",
    description: "Investigação e tratamento da infertilidade masculina, incluindo varicocele e azoospermia."
  },
  {
    icon: Zap,
    title: "Incontinência Urinária",
    description: "Diagnóstico e tratamento da incontinência urinária em homens e mulheres com abordagem moderna."
  }
];

export const ServicesSection = () => {
  return (
    <section id="atuacao" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground font-body">
            Ofereço atendimento especializado em diversas condições urológicas, 
            com foco em tratamentos modernos, minimamente invasivos e 
            resultados efetivos para cada paciente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};