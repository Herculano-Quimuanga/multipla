import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Lightbulb,
  Settings,
  Handshake,
  Building,
  Stethoscope,
  ArrowRight,
  Target,
  Zap
} from "lucide-react";

const complementaryServices = [
  {
    icon: Lightbulb,
    title: "Consultoria de IT",
    description: "Percebemos que o Know How para implementação de projectos de IT é carente no nosso mercado. Oferecemos consultoria que vai desde o design à implementação dos projectos.",
    features: ["Design de Soluções", "Implementação", "Gestão de Projetos", "Suporte Técnico"]
  },
  {
    icon: Handshake,
    title: "We Work Together",
    description: "Com o programa WE WORK TOGETHER, é possível prestarmos um serviço a 360º integrando todos os serviços necessários.",
    features: ["Ipworld - Telecomunicações", "Virtualand - Equipamentos", "AZCloud - Cloud Services", "Serviço Integrado"]
  }
];

const implementations = [
  {
    icon: Stethoscope,
    title: "Sistemas Hospitalares",
    description: "Implementação completa de sistemas tecnológicos para unidades de saúde",
    sectors: ["Hospitais", "Clínicas", "Laboratórios", "Centro Médicos"]
  },
  {
    icon: Settings,
    title: "Soluções de IT Sectoriais",
    description: "Soluções tecnológicas adaptadas às necessidades específicas de cada setor",
    sectors: ["Educação", "Governo", "Indústria", "Serviços"]
  },
  {
    icon: Building,
    title: "Equipamentos Tecnológicos",
    description: "Fornecimento e implementação de equipamentos de última geração",
    sectors: ["Servidores", "Networking", "Storage", "Segurança"]
  }
];

const logisticSectors = [
  {
    name: "Petrolífero",
    description: "Logística especializada para o setor de petróleo e gás"
  },
  {
    name: "Serviços",
    description: "Soluções logísticas para empresas de serviços"
  },
  {
    name: "Bancário",
    description: "Gestão de equipamentos para instituições financeiras"
  }
];

const SolucoesComplementares = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/public/images/complementar.jpg')",
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Entregamos soluções
              <span className="block text-primary-glow">que o levam para o futuro</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              As soluções tecnológicas transcendem qualquer indústria.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Conhecer Soluções
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Soluções que
                <span className="block text-primary">Impulsionam o Crescimento</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As nossas soluções complementares são serviços integrados que impulsionam os negócios para o crescimento.
                Com a missão de atender às necessidades específicas dos clientes de diferentes sectores, a Multipla analisa
                os projectos, desenha e implementa todos os recursos tecnológicos necessários para uma operação de excelência.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-corporate">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Foco no Core Business
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tudo para que as empresas estejam focadas no seu core business, enquanto cuidamos de toda a infraestrutura
                    e soluções tecnológicas necessárias para o sucesso do seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Serviços
              <span className="block text-primary">Complementares</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços integrados para atender todas as suas necessidades tecnológicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {complementaryServices.map((service, index) => (
              <Card key={index} className="card-corporate group hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group text-primary hover:text-primary-foreground hover:bg-primary">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Implementações
              <span className="block text-primary">Especializadas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dentro das nossas soluções complementares, oferecemos implementações específicas para diferentes setores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementations.map((implementation, index) => (
              <Card key={index} className="card-corporate group hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <implementation.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{implementation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{implementation.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {implementation.sectors.map((sector, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted/30 rounded">
                        {sector}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl font-bold text-foreground">
                Logística e
                <span className="text-primary">Armazenamento</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Com vasta experiência no mercado, somos responsáveis também pela logística e armazenamento
                de equipamentos tecnológicos de várias empresas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {logisticSectors.map((sector, index) => (
                <Card key={index} className="card-corporate text-center">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{sector.name}</h3>
                    <p className="text-muted-foreground">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Pronto para Implementar Soluções Completas?
              </h3>
              <p className="text-xl opacity-90">
                Descubra como as nossas soluções complementares podem transformar completamente o seu negócio
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
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

export default SolucoesComplementares;