import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-corporate-team.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="py-20 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-10">
                Transformamos Seus
                <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                  Desafios Corporativos
                </span>
                em Soluções Inovadoras
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Oferecemos soluções tecnológicas completas para impulsionar sua empresa ao próximo nível.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <span className="text-gray-200">Soluções personalizadas para cada necessidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <span className="text-gray-200">Suporte técnico especializado 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <span className="text-gray-200">Implementação rápida e eficiente</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-corporate group">
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline-corporate">
                Agendar Consultoria
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.5%</div>
                <div className="text-sm text-gray-300">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Equipe Corporativa Profissional"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-corporate max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certificação ISO</div>
                  <div className="text-sm text-muted-foreground">Qualidade Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;