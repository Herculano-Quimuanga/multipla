import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* 404 Animation */}
        <div className="space-y-4">
          <div className="text-8xl md:text-9xl font-bold text-white/20 animate-pulse">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Página Não Encontrada
          </h1>
          <p className="text-xl text-gray-200 max-w-lg mx-auto">
            Ops! A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Search className="w-5 h-5" />
            <span className="text-sm">Caminho tentado: {location.pathname}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
          <a href="/">
            <Button className="border-2 border-white text-white bg-transparent font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all group">
              <Home className="w-4 h-4 mr-2" />
              Página Inicial
            </Button>
          </a>
        </div>

        {/* Help Text */}
        <p className="text-gray-300 text-sm">
          Se você acredita que isso é um erro, entre em contato conosco em{" "}
          <a href="mailto:sales@multipla.co.ao" className="text-primary-glow hover:underline">
            sales@multipla.co.ao
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
