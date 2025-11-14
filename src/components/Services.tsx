import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Shield,
  Database,
  Settings,
  Smartphone,
  BarChart3,
  ArrowRight,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Migração e gestão completa de infraestrutura em nuvem, garantindo escalabilidade e segurança para sua empresa.",
    features: ["AWS/Azure/GCP", "Migração Segura", "Monitoramento 24/7", "Backup Automático"]
  },
  {
    icon: Shield,
    title: "Segurança Corporativa",
    description: "Proteção avançada contra ameaças digitais com soluções de cibersegurança de última geração.",
    features: ["Firewall Avançado", "Antivírus Corporativo", "Compliance", "Auditoria de Segurança"]
  },
  {
    icon: Database,
    title: "Gestão de Dados",
    description: "Organização, análise e proteção de dados corporativos com tecnologias de Big Data e BI.",
    features: ["Business Intelligence", "Data Analytics", "Data Lake", "Machine Learning"]
  },
  {
    icon: Settings,
    title: "Automação de Processos",
    description: "Otimização e automatização de processos empresariais para maior eficiência operacional.",
    features: ["RPA", "Workflows", "Integração de Sistemas", "APIs Customizadas"]
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description: "Aplicativos móveis corporativos nativos e híbridos para iOS e Android.",
    features: ["Apps Nativos", "PWA", "Integração Backend", "UX/UI Design"]
  },
  {
    icon: BarChart3,
    title: "Consultoria Digital",
    description: "Consultoria estratégica para transformação digital e otimização de processos tecnológicos.",
    features: ["Análise Estratégica", "Roadmap Digital", "Change Management", "Treinamento"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-aos="fade-up">
            Soluções Tecnológicas
            <span className="block text-primary">Completas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="250">
            Oferecemos um portfólio abrangente de serviços tecnológicos para atender todas as necessidades da sua empresa,
            desde infraestrutura até desenvolvimento de aplicações customizadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-corporate group hover:border-primary/30" data-aos="fade-up" data-aos-delay={index * 150}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
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

        {/* CTA Section */}
        <div className="text-center bg-slate-900 rounded-2xl p-12 text-white" data-aos="fade-up" data-aos-delay="300">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-xl opacity-90">
              Entre em contato conosco e descubra como nossas soluções podem impulsionar sua empresa
            </p>
            <Button className="bg-white text-dark hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Solicitar Consultoria Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;