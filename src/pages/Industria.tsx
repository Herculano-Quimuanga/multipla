import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Stethoscope,
  Landmark,
  Factory,
  Truck,
  ShoppingBag,
  ArrowRight,
  Target
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Bancário e Financeiro",
    description: "Soluções de Datacenter, Networking, NOC, Colocation e Disaster Recovery para o setor bancário.",
    services: ["Datacenter", "Networking", "NOC", "Disaster Recovery"]
  },
  {
    icon: Stethoscope,
    title: "Saúde",
    description: "Projetos integrados chave-na-mão, desde design até implementação completa de infraestrutura.",
    services: ["Datacenter", "Redes Estruturadas", "Equipamentos", "Suporte Técnico"]
  },
  {
    icon: Factory,
    title: "Petrolífero",
    description: "Logística e armazenamento de equipamentos tecnológicos para o setor petrolífero.",
    services: ["Logística", "Armazenamento", "Equipamentos", "Implementação"]
  },
  {
    icon: Building2,
    title: "Serviços",
    description: "Soluções tecnológicas adaptadas às necessidades específicas do setor de serviços.",
    services: ["Consultoria IT", "Implementação", "Suporte", "Gestão"]
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Tecnologia avançada para otimização de processos logísticos e supply chain.",
    services: ["Automação", "Tracking", "Analytics", "Integração"]
  },
  {
    icon: ShoppingBag,
    title: "Retalho",
    description: "Soluções digitais para transformação do comércio tradicional.",
    services: ["E-commerce", "POS", "Analytics", "CRM"]
  }
];

const Industria = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Um Olhar para as
              <span className="block text-primary-glow">Indústrias</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Somos o parceiro certo para a consolidação do seu negócio para o futuro.
              A Multipla nos diversos sectores do mercado.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Saiba Como
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                A Multipla nos diversos
                <span className="block text-primary">sectores do mercado</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos reconhecidos pelo profundo conhecimento tecnológico aplicado a diferentes sectores e indústrias no mercado.
                Concluímos com sucesso a implementação de projectos com o mais alto padrão de exigência (nacional e internacional),
                ajudando assim as empresas a prepararem-se para o futuro.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-corporate">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nosso Compromisso
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Multipla trabalha para que a sua empresa não pare e para que se foque no seu core business,
                    com uma equipa especializada para atender a demanda de trabalho exigida no ramo tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-start space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sectores de 
              <span className="text-primary"> Atuação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Experiência comprovada em múltiplos sectores com soluções tecnológicas adaptadas às necessidades específicas de cada indústria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-corporate group hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Serviços:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center bg-slate-900 rounded-2xl p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Pronto para Transformar o Seu Sector?
              </h3>
              <p className="text-xl opacity-90">
                Descubra como as nossas soluções tecnológicas podem revolucionar a sua indústria
              </p>
              <Button className="bg-white text-dark hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                Solicitar Consultoria
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industria;