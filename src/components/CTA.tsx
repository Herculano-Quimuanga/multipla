import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import consultationImage from "/public/images/business-consultation.jpg";

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Pronto para Começar?
                <span className="block text-primary-glow">
                  Vamos Conversar!
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                Entre em contato conosco hoje mesmo e descubra como podemos transformar
                os desafios da sua empresa em oportunidades de crescimento.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-accent rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ligue Agora</div>
                      <div className="text-gray-200">(+244) 923320730 | 916295077</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-accent rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Envie um E-mail</div>
                      <a href="mailto:sales@multipla.co.ao" target="_blank" rel="noopener noreferrer" className="text-primary-glow hover:underline">
                        sales@multipla.co.ao
                      </a>

                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-accent rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Chat Online</div>
                      <div className="text-gray-200">Atendimento instantâneo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all group">
                Solicitar Proposta Gratuita
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-2 border-white text-white bg-transparent font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all">
                Agendar Reunião
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={consultationImage}
                alt="Consultoria Empresarial"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Guarantee Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-corporate max-w-xs">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div className="font-semibold text-foreground">Consultoria Gratuita</div>
                <div className="text-sm text-muted-foreground">Sem compromisso</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <span className="text-white font-medium">⚡ Resposta em até 2 horas úteis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;