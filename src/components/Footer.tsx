export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">R</span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-primary-foreground">
                  Dr. Ricardo Mendes
                </p>
              </div>
            </div>
            <p className="text-muted text-sm">
              Urologia
            </p>
            <p className="text-muted text-sm mt-1">
              CRM 87654-SP | RQE 45892
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-muted text-sm hover:text-primary-foreground transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-muted text-sm hover:text-primary-foreground transition-colors">
              Sobre
            </a>
            <a href="#atuacao" className="text-muted text-sm hover:text-primary-foreground transition-colors">
              Áreas de Atuação
            </a>
            <a href="#contato" className="text-muted text-sm hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted text-xs">
              © {currentYear} Todos os direitos reservados.
            </p>
            <p className="text-muted text-xs">
              Este site segue as normas de publicidade médica do CFM (Resolução CFM nº 2.336/2023).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};