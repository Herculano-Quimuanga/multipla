import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  Target,
  Award,
  Zap
} from "lucide-react";
import techSolutionsImage from "/images/tech-solutions.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos constantemente as melhores tecnologias e metodologias para entregar soluções de ponta"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Garantimos a segurança e estabilidade de todas as nossas implementações tecnológicas"
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes, construindo relacionamentos duradouros"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em entregas que geram impacto real e mensurável nos negócios dos nossos clientes"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certificada",
    "Parceira Microsoft Gold",
    "AWS Advanced Partner",
    "Google Cloud Premier Partner"
  ];

  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Quem Somos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 15 anos transformando desafios corporativos em oportunidades através da tecnologia.
            Somos sua parceira estratégica para o futuro digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Transformação Digital com
                <span className="block text-primary">Excelência e Inovação</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada em 2009, a Multipla nasceu com o propósito de democratizar o acesso às
                melhores tecnologias corporativas. Hoje, somos reconhecidos como uma das principais
                empresas de soluções tecnológicas do país.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é simples: transformar complexidade tecnológica em soluções simples
                e eficientes que impulsionem o crescimento dos nossos clientes.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Certificações e Parcerias
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="btn-corporate group">
              Nossa História Completa
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={techSolutionsImage}
              alt="Soluções Tecnológicas Inovadoras"
              className="rounded-2xl shadow-card-hover w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-corporate">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Nossos Valores
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os pilares que guiam nosso trabalho e nos mantêm comprometidos com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-corporate text-center group" data-aos="fade-right" data-aos-delay="500">
                <CardContent className="p-2 space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-20">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">
                Conheça Nossa Equipe de Especialistas
              </h3>
              <p className="text-xl opacity-90">
                Mais de 50 profissionais certificados prontos para transformar seus desafios em soluções
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                Ver Equipe Completa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;