import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Clientes Atendidos",
    description: "Empresas confiam em nossas soluções"
  },
  {
    icon: Award,
    number: "99.8%",
    label: "Taxa de Satisfação",
    description: "Clientes recomendam nossos serviços"
  },
  {
    icon: TrendingUp,
    number: "15+",
    label: "Anos de Experiência",
    description: "Expertise consolidada no mercado"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Suporte Disponível",
    description: "Atendimento quando você precisar"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-right" data-aos-delay="200">
            Resultados que Falam por Si
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-aos="fade-left" data-aos-delay="250">
            Nossa trajetória é marcada por números que demonstram a qualidade e confiabilidade de nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 150}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-lg font-semibold text-primary-glow">{stat.label}</div>
                <div className="text-sm text-gray-200">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-primary-glow" />
            <span className="text-white font-medium">Certificação ISO 9001:2015 - Qualidade Garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;