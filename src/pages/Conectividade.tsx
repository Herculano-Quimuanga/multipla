import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Network,
  Wifi,
  Globe,
  Phone,
  Router,
  Zap,
  ArrowRight,
  Users
} from "lucide-react";

const connectivityServices = [
  {
    icon: Network,
    title: "Networking",
    description: "Com as soluções de networking, conseguimos assegurar a conectividade contínua entre sistemas de TI, pessoas e projectos.",
    features: ["Redes Estruturadas", "Ligações Ponto-a-Ponto", "Serviços ISP", "Redundância"]
  },
  {
    icon: Globe,
    title: "Internet e Circuitos Dedicados",
    description: "Conectividade de alta velocidade e confiabilidade para garantir que seu negócio esteja sempre online.",
    features: ["Alta Velocidade", "Circuitos Dedicados", "SLA Garantido", "Suporte 24/7"]
  },
  {
    icon: Router,
    title: "Conectividade entre Sites",
    description: "Interconexão segura e eficiente entre diferentes localidades da sua empresa.",
    features: ["VPN Empresarial", "MPLS", "SD-WAN", "Segurança Avançada"]
  },
  {
    icon: Phone,
    title: "Serviços de Voz",
    description: "Soluções completas de comunicação de voz para empresas de todos os tamanhos.",
    features: ["VoIP", "PBX Virtual", "Call Center", "Conferências"]
  }
];

const ecosystemFeatures = [
  "Conectividade entre sites",
  "Rede",
  "Redes de Entrega de Conteúdo",
  "Serviços IP",
  "Serviços de Voz"
];

const Conectividade = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Conectamos pessoas
              <span className="block text-primary-glow">aos negócios e vice-versa</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Alcance a máxima confiança com as nossas ofertas de conectividade de rede.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Conheça as Soluções
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Connectivity */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Conectividade de
                <span className="block text-primary">Alta Performance</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Graças à parceria com a Ipworld, a Multipla garante alta velocidade devido aos PoP,
                com uma rede robusta que permite rotear o tráfego, garantindo serviços de conectividade altamente satisfatórios.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-corporate">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Prontos para o Digital
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Quando o assunto é conectividade e interconexões, estamos preparados para atender às necessidades prontas
                    para uso digital dos requisitos de negócio, mesmo que os mesmos estejam em constante mudança.
                  </p>
                  <h4 className="font-semibold text-foreground mb-3">Com o ecossistema de conectividade fornecemos:</h4>
                  <ul className="space-y-2">
                    {ecosystemFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Soluções de
              <span className="block text-primary">Conectividade</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um ecossistema completo de soluções de conectividade para manter sua empresa sempre conectada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {connectivityServices.map((service, index) => (
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

      {/* Partnership Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl font-bold text-foreground">
                Parceria
                <span className="text-primary"> Ipworld</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Alta Velocidade</h3>
                  <p className="text-muted-foreground">PoP otimizados para máximo desempenho de rede</p>
                </CardContent>
              </Card>

              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Rede Robusta</h3>
                  <p className="text-muted-foreground">Infraestrutura que permite roteamento inteligente de tráfego</p>
                </CardContent>
              </Card>

              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Conectividade Global</h3>
                  <p className="text-muted-foreground">Acesso a redes internacionais e locais</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Pronto para Conectar o Futuro?
              </h3>
              <p className="text-xl opacity-90">
                Descubra como as nossas soluções de conectividade podem acelerar o crescimento da sua empresa
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conectividade;