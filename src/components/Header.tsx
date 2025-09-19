import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">CorpTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-corporate">
              Solicitar Proposta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Sobre Nós
              </a>
              <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
              <Button className="btn-corporate w-full mt-4">
                Solicitar Proposta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;