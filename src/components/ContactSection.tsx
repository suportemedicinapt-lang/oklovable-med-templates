import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-muted-foreground font-body">
            Entre em contato para agendar sua avaliação urológica. Atendimento 
            personalizado e ambiente acolhedor para cuidar da sua saúde.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Endereço</h4>
                <p className="text-muted-foreground">
                  Rua Oscar Freire, 2250 - Sala 801
                </p>
                <p className="text-muted-foreground">
                  Jardins, São Paulo - SP, 05409-011
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Telefone / WhatsApp</h4>
                <p className="text-muted-foreground">(11) 3456-7890</p>
                <p className="text-muted-foreground">(11) 98765-4321 - WhatsApp</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">E-mail</h4>
                <p className="text-muted-foreground">contato@drricardomendez.com.br</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                <p className="text-muted-foreground">Segunda a Sexta: 08h - 19h</p>
                <p className="text-muted-foreground">Sábado: 08h - 13h</p>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <h4 className="font-heading font-semibold text-foreground mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center hover:bg-primary group transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
                <p className="text-sm text-muted-foreground self-center">
                  @drricardomendez.uro
                </p>
              </div>
            </div>
          </div>

          {/* Map / CTA Card */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <h3 className="font-heading text-2xl text-foreground mb-6">
              Localização
            </h3>
            
            {/* Map Placeholder */}
            <div className="aspect-video bg-muted rounded-xl mb-8 flex items-center justify-center overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975791265!2d-46.67390768502156!3d-23.56509298468104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sRua%20Oscar%20Freire%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1645000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>

            <div className="space-y-4">
              <Button variant="hero" size="xl" className="w-full">
                <Phone className="w-5 h-5" />
                Agendar por WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};