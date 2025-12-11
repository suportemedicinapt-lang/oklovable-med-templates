import { GraduationCap, Award, Users } from "lucide-react";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={doctorPlaceholder} 
                alt="Dr. Ricardo Mendes - Urologista" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-card max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    +15 anos
                  </p>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre o Médico
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Conheça Dr. Ricardo Mendes
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Sou médico urologista dedicado à saúde do sistema urinário e reprodutor 
                masculino. Há mais de 15 anos, atuo com o compromisso de oferecer 
                tratamentos modernos, minimamente invasivos, sempre priorizando o 
                bem-estar e a qualidade de vida dos meus pacientes.
              </p>
              <p>
                Acredito que cada paciente merece um atendimento personalizado, com 
                escuta atenta e explicações claras sobre seu diagnóstico e as opções 
                de tratamento disponíveis. Meu objetivo é proporcionar segurança e 
                confiança em cada etapa do cuidado.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Formação</h4>
                  <p className="text-sm text-muted-foreground">
                    Graduação em Medicina pela UNIFESP. Residência em Urologia no 
                    Hospital das Clínicas - FMUSP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Especializações</h4>
                  <p className="text-sm text-muted-foreground">
                    Título de Especialista pela SBU (Sociedade Brasileira de Urologia). 
                    Fellowship em Cirurgia Robótica pela Cleveland Clinic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Associações</h4>
                  <p className="text-sm text-muted-foreground">
                    Membro da Sociedade Brasileira de Urologia (SBU), 
                    American Urological Association (AUA) e Confederação Americana de Urologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};