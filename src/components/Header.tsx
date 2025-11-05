import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll e alterna o estado do header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/industria", label: "Indústria" },
    { href: "/insights", label: "Insights" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/contactos", label: "Contactos" },
  ];

  const dropdownLinks = [
    { href: "/solucoes-datacenter", label: "Soluções Datacenter" },
    { href: "/conectividade", label: "Conectividade" },
    { href: "/solucoes-complementares", label: "Soluções Complementares" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-slate-900 backdrop-blur-md shadow-sm"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Header principal */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Multipla Logo" className="w-9 h-9" />
            <span className="text-xl font-bold text-white">Multipla</span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 1).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {label}
              </a>
            ))}

            {/* Dropdown Serviços */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium focus:outline-none"
              >
                Serviços
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180 text-primary" : ""
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-slate-900 rounded-lg shadow-lg py-2 animate-fadeIn z-50">
                  {dropdownLinks.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-white hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botão principal */}
          <div className="hidden md:block">
            <Button className="btn-corporate">Solicitar Proposta</Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {label}
                </a>
              ))}

              {/* Dropdown Mobile */}
              <details className="group">
                <summary className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer">
                  Serviços
                </summary>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {dropdownLinks.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </details>

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