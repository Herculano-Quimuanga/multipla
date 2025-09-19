import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Eye,
  Heart,
  Award,
  TrendingUp,
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Cultura da Igualdade",
    description: "Compromisso com o cliente e colaborador, promovendo um ambiente de trabalho inclusivo e respeitoso."
  },
  {
    icon: Heart,
    title: "Ética e Governança",
    description: "Integridade em todos os processos e decisões, mantendo os mais altos padrões éticos."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Busca constante pela qualidade e inovação em todos os nossos serviços e soluções."
  }
];

const milestones = [
  {
    year: "1995",
    title: "Fundação da Multipla",
    description: "Início das atividades com foco em soluções tecnológicas para empresas"
  },
  {
    year: "2013",
    title: "Primeiro Datacenter",
    description: "Lançamento do primeiro serviço de outsourcing de Datacenter no país"
  },
  {
    year: "2020",
    title: "Expansão de Serviços",
    description: "Ampliação do portfólio com soluções de conectividade e cloud"
  },
  {
    year: "2025",
    title: "Líder de Mercado",
    description: "Consolidação como referência em soluções tecnológicas empresariais"
  }
];

const stats = [
  { number: "25+", label: "Anos de Experiência", icon: Calendar },
  { number: "500+", label: "Projetos Implementados", icon: CheckCircle },
  { number: "100+", label: "Clientes Satisfeitos", icon: Users },
  { number: "24/7", label: "Suporte Disponível", icon: Target }
];

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Somos o Parceiro de
              <span className="block text-primary-glow">Inovação das Empresas</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bem-vindo ao Universo Multipla. Há mais de 25 anos a olhar para o futuro.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Conheça Nossa História
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
                Há mais de 25 anos
                <span className="block text-primary">a olhar para o futuro</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos uma empresa angolana, jovem e dinâmica que opera no mercado desde 1995 com a missão de prestar 
                  serviços de tecnologia e inovação para as empresas presentes no país.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acompanhamos de perto as novas tendências e evoluções tecnológicas, para desta forma conseguir oferecer 
                  uma solução ajustada às necessidades, ajudando os nossos clientes a serem as melhores versões de si mesmos.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-corporate">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Angola</h3>
                    <p className="text-muted-foreground">
                      Empresa 100% angolana, contribuindo para o desenvolvimento tecnológico do país
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-corporate">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Somos acima de tudo um <span className="font-semibold text-primary">parceiro confiável</span> para a jornada de inovação 
                tecnológica para as empresas, idealmente posicionada para ajudar as empresas a prepararem os seus negócios para o futuro. 
                Com uma mistura inteligente de <span className="font-semibold text-primary">pensamento ousado e execução confiável</span>, 
                somos capazes de acelerar a inovação em cada etapa da cadeia de valor das empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Números que
              <span className="block text-primary">Inspiram Confiança</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Missão, Visão e
              <span className="block text-primary">Valores</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission */}
            <Card className="card-corporate">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Missão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A nossa maior missão é acelerarmos a inovação das empresas em cada etapa da sua cadeia de valor, 
                  que vai desde a transformação do negócio, excelência na operação ao suporte tecnológico.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="card-corporate">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Visão</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aproveitando o nosso profundo conhecimento no sector e ampla experiência no ramo tecnológico, 
                  a Multipla está comprometida em fazer negócios com integridade e trabalhar em prol de uma sociedade 
                  mais sustentável e segura.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Nossos Valores</h3>
              <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                Os nossos valores moldam a cultura da nossa empresa e definem o nosso carácter. Vivemos os valores 
                fundamentais através de comportamentos individuais, servindo como base para agirmos e tomarmos decisões.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="card-corporate text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossa
              <span className="block text-primary">Jornada</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Marcos importantes da nossa história de crescimento e inovação.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="card-corporate flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
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
                Pronto para Ser Parte da Nossa História?
              </h3>
              <p className="text-xl opacity-90">
                Junte-se aos nossos clientes e descubra como podemos acelerar a inovação do seu negócio
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;