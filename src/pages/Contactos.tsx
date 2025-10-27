import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  Users,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Onde Estamos",
    content: "Avenida Lenine, Torres Oceano A, 19º D - Luanda, Angola"
  },
  {
    icon: Mail,
    title: "Email",
    content: "sales@multipla.co.ao"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(+244) 923320730 | (+244) 916295077"
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Segunda a Sexta: 8h00 - 17h00"
  }
];

const serviceAreas = [
  {
    icon: Building,
    title: "Soluções Empresariais",
    description: "Datacenter, Cloud, Conectividade e Soluções Complementares"
  },
  {
    icon: Users,
    title: "Consultoria Especializada",
    description: "Análise, design e implementação de projetos tecnológicos"
  },
  {
    icon: MessageSquare,
    title: "Suporte Técnico",
    description: "Suporte 24/7 e monitorização contínua dos seus sistemas"
  }
];

const Contactos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Entre em contacto
              <span className="block text-primary-glow">ou faça-nos uma visita</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Providenciamos serviços à medida das suas necessidades. Visite-nos ou entre em fale connosco.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Como nos
              <span className="block text-primary">Encontrar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos sempre prontos para ajudar. Entre em contacto connosco através de qualquer um dos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-corporate text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-corporate">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Escreva-nos
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome Completo *
                    </label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <Input id="phone" type="tel" placeholder="+244 XXX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto *
                  </label>
                  <Input id="subject" placeholder="Como podemos ajudar?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva as suas necessidades ou questões..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Eu concordo com as políticas de privacidade *
                  </label>
                </div>

                <Button className="w-full bg-gradient-primary text-white hover:opacity-90 font-semibold py-3">
                  Enviar Mensagem
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="card-corporate">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-section rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-foreground font-semibold">Localização</p>
                      <p className="text-sm text-muted-foreground">Avenida Lenine, Torres Oceano A, 19º D</p>
                      <p className="text-sm text-muted-foreground">Luanda, Angola</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Datacenter Info */}
              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    10 Anos Datacenter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Fomos o primeiro Datacenter do país preparado para o outsourcing.
                  </p>
                  <p className="text-muted-foreground">
                    Somos um Datacenter Carrier Neutral e estamos ligados aos principais ISP nacionais
                    e a 2 Internet Exchange Point internacionais.
                  </p>
                  <Button variant="outline" className="w-full">
                    Conhecer o Datacenter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Como Podemos
              <span className="block text-primary">Ajudar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Saiba mais sobre todos os serviços de Datacenter da Multipla e descubra como podemos transformar o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((service, index) => (
              <Card key={index} className="card-corporate text-center group hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Pronto para Começar?
              </h3>
              <p className="text-xl opacity-90">
                Entre em contacto connosco hoje mesmo e descubra como podemos ajudar a transformar o seu negócio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button variant="secondary" className="text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contactos;