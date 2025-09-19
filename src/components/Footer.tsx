import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">CorpTech</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformamos desafios corporativos em soluções tecnológicas inovadoras. 
              Sua parceira estratégica para o futuro digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Soluções em Nuvem</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Segurança Corporativa</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Gestão de Dados</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Desenvolvimento Mobile</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Consultoria Digital</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Empresa</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary-glow transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                <div>
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP, 01310-100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <span>contato@corptech.com.br</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>&copy; 2024 CorpTech. Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-glow transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-primary-glow transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-primary-glow transition-colors">Cookies</a>
              </div>
            </div>
            
            <Button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full p-0"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;