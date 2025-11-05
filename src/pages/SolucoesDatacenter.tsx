import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server,
  Cloud,
  Shield,
  Monitor,
  HardDrive,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const datacenterServices = [
  {
    icon: Server,
    title: "Colocation",
    description: "Com um Datacenter Tier III, as empresas podem alojar os seus equipamentos e aplicações – MainSite ou o seu Disaster Recovery em óptimas condições.",
    features: ["Datacenter Tier III", "Monitorização 24/7", "Máxima Disponibilidade", "NOC Especializado"]
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Soluções completas de computação em nuvem com alta disponibilidade e escalabilidade para o seu negócio.",
    features: ["Escalabilidade", "Alta Disponibilidade", "Backup Automático", "Gestão Completa"]
  },
  {
    icon: Shield,
    title: "Disaster Recovery",
    description: "Protecção completa dos seus dados e sistemas com planos de recuperação de desastres eficientes e testados.",
    features: ["Backup Seguro", "Recuperação Rápida", "Testes Regulares", "Conformidade"]
  },
  {
    icon: Monitor,
    title: "NOC - Network Operations Center",
    description: "Centro de operações de rede com monitorização 24/7 para garantir a máxima disponibilidade dos seus sistemas.",
    features: ["Monitorização 24/7", "Resposta Rápida", "Análise Proativa", "Relatórios Detalhados"]
  }
];

const infrastructure = [
  "Climatização",
  "Monitorização",
  "Vigilância",
  "Acesso físico e lógico controlado",
  "Serviços de gestão",
  "Administração de sistemas",
  "Storage e Backup"
];

const SolucoesDatacenter = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('/images/datacenter.jpg')",
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Soluções de
              <span className="block text-primary-glow">Datacenter</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Um passo para o futuro. O Primeiro Datacenter Privado Preparado para a Terceirização.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Visite as soluções AZCloud
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>


      {/* About Datacenter */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Somos o parceiro ideal para
                <span className="block text-primary">soluções tecnológicas</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Em 2013, a Multipla lançou o serviço de outsourcing de Datacenter no país e com o passar do tempo as empresas
                reconhecem o benefício da terceirização de Datacenter, para além de ser económico, escalável e flexível
                a terceirização de serviços especializados mitiga riscos.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-corporate">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Infraestrutura Preparada
              </h3>
              <p className="text-muted-foreground mb-6">
                As nossas infraestruturas estão preparadas com todos os requisitos tecnológicos obrigatórios:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {infrastructure.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-primary rounded-2xl p-8 text-white">
              <p className="text-lg">
                A Multipla actualmente já montou datacenters com dimensão
                <span className="font-bold"> Tier III </span>
                dentro das nossas infraestruturas e fora delas, através dos serviços tecnológicos integrados especiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos Serviços de
              <span className="block text-primary">Datacenter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas e integradas para todas as necessidades de infraestrutura tecnológica da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {datacenterServices.map((service, index) => (
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

      {/* Benefits Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-4xl font-bold text-foreground">
                Benefícios da
                <span className="text-primary">Terceirização</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <HardDrive className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Económico</h3>
                  <p className="text-muted-foreground">Reduza custos operacionais com nossa infraestrutura partilhada</p>
                </CardContent>
              </Card>

              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Escalável</h3>
                  <p className="text-muted-foreground">Cresça conforme suas necessidades sem investimentos iniciais</p>
                </CardContent>
              </Card>

              <Card className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seguro</h3>
                  <p className="text-muted-foreground">Mitigue riscos com nossa experiência e infraestrutura</p>
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
                Pronto para Migrar para o Datacenter?
              </h3>
              <p className="text-xl opacity-90">
                Descubra como as nossas soluções de datacenter podem transformar a infraestrutura da sua empresa
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                Solicitar Consultoria Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolucoesDatacenter;