import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Multipla</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            <a
              href="/industria"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Indústria
            </a>

            {/* Dropdown Serviços */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium focus:outline-none"
              >
                Serviços
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180 text-primary" : ""
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2 animate-fadeIn z-50">
                  <a
                    href="/solucoes-datacenter"
                    className="block px-4 py-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Soluções Datacenter
                  </a>
                  <a
                    href="/conectividade"
                    className="block px-4 py-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Conectividade
                  </a>
                  <a
                    href="/solucoes-complementares"
                    className="block px-4 py-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Soluções Complementares
                  </a>
                </div>
              )}
            </div>

            <a
              href="/insights"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Insights
            </a>
            <a
              href="/sobre-nos"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </a>
            <a
              href="/contactos"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contactos
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
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a
                href="/industria"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Indústria
              </a>

              {/* Dropdown Mobile */}
              <details className="group">
                <summary className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                  Serviços
                </summary>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <a
                    href="/solucoes-datacenter"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    Soluções Datacenter
                  </a>
                  <a
                    href="/conectividade"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    Conectividade
                  </a>
                  <a
                    href="/solucoes-complementares"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    Soluções Complementares
                  </a>
                </div>
              </details>

              <a
                href="/insights"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Insights
              </a>
              <a
                href="/sobre-nos"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre Nós
              </a>
              <a
                href="/contactos"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contactos
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