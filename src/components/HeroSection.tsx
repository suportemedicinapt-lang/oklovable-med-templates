import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-urologia.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Urologia - Dr. Ricardo Mendes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
              Urologia
            </span>
          </div>

          <h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dr. Ricardo Mendes
          </h1>

          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-up font-body"
            style={{ animationDelay: "0.3s" }}
          >
            Urologista | CRM 87654-SP | RQE 45892
          </p>

          <p 
            className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Especialista em saúde do homem e do sistema urinário, oferecendo tratamentos modernos com tecnologia de ponta e atendimento humanizado.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="xl">
              <CalendarCheck className="w-5 h-5" />
              Agendar Consulta
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              (11) 98765-4321
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};