import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import imgHero from '/images/hero.jpg'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative py-20 min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-none mt-10">
                Juntos tornamos
                <span className="block bg-gradient-to-r from-primary-glow font-bold to-accent bg-clip-text text-transparent my-3">
                  Cada Desafio
                </span>
                em evolução
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
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;