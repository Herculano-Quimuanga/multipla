import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Zap,
  Eye
} from "lucide-react";

const featuredArticles = [
  {
    id: 1,
    title: "Cloud Híbrida e Multi-Cloud: Estratégia Segura",
    excerpt: "Descubra por que as maiores empresas estão a adoptar cloud híbrida e multi-cloud: evite vendor lock-in, aumente a resiliência, reduza custos e garanta conformidade regulatória.",
    date: "Setembro 16, 2025",
    author: "multipla.marketing",
    category: "Artigo",
    featured: true
  },
  {
    id: 2,
    title: "Edge Computing: O Superpoder Invisível da Transformação Digital",
    excerpt: "O Edge Computing é o 'superpoder invisível' que garante velocidade, eficiência e segurança às empresas modernas. Ao processar dados mais perto da sua origem, elimina a latência crítica.",
    date: "Setembro 11, 2025",
    author: "multipla.marketing",
    category: "Artigo",
    featured: true
  },
  {
    id: 3,
    title: "O Papel das Redes Híbridas na Escalabilidade Empresarial",
    excerpt: "Como as redes híbridas podem revolucionar a escalabilidade e flexibilidade das empresas modernas.",
    date: "Janeiro 22, 2025",
    author: "multipla.marketing",
    category: "Tecnologia",
    featured: false
  }
];

const allArticles = [
  {
    id: 4,
    title: "A Revolução Digital com Data Centers Inteligentes",
    excerpt: "Explore como os data centers inteligentes estão transformando a infraestrutura empresarial.",
    date: "Janeiro 8, 2025",
    author: "multipla.marketing",
    category: "Datacenter"
  },
  {
    id: 5,
    title: "Segurança Cibernética: Tendências para 2025",
    excerpt: "As principais tendências de segurança cibernética que toda empresa deve conhecer.",
    date: "Dezembro 20, 2025",
    author: "multipla.marketing",
    category: "Segurança"
  },
  {
    id: 6,
    title: "IoT e Conectividade: O Futuro dos Negócios",
    excerpt: "Como a Internet das Coisas está moldando o futuro da conectividade empresarial.",
    date: "Dezembro 15, 2025",
    author: "multipla.marketing",
    category: "IoT"
  },
  {
    id: 7,
    title: "Backup e Recovery: Estratégias Essenciais",
    excerpt: "Melhores práticas para backup e recuperação de dados empresariais.",
    date: "Dezembro 10, 2025",
    author: "multipla.marketing",
    category: "Backup"
  },
  {
    id: 8,
    title: "Virtualização: Otimizando Recursos de TI",
    excerpt: "Como a virtualização pode reduzir custos e aumentar a eficiência de TI.",
    date: "Dezembro 5, 2025",
    author: "multipla.marketing",
    category: "Virtualização"
  },
  {
    id: 9,
    title: "5G e o Impacto na Transformação Digital",
    excerpt: "O papel revolucionário do 5G na aceleração da transformação digital.",
    date: "Novembro 30, 2025",
    author: "multipla.marketing",
    category: "5G"
  }
];

const categories = ["Todos", "Artigo", "Tecnologia", "Datacenter", "Segurança", "IoT", "Backup", "Virtualização", "5G"];

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Insights &
              <span className="block text-primary-glow">Conhecimento</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Mantenha-se atualizado com as últimas tendências, análises e conhecimentos do mundo da tecnologia empresarial.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
              Explorar Artigos
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-srtar space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Artigos em
              <span className="text-primary"> Destaque</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Os insights mais recentes e relevantes sobre tecnologia e transformação digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="card-corporate group hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {article.category}
                    </Badge>
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group text-primary hover:text-primary-foreground hover:bg-primary mt-4">
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Categorias</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Todos os Artigos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article) => (
              <Card key={article.id} className="card-corporate group hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground line-clamp-3 text-sm flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group text-primary hover:text-primary-foreground hover:bg-primary mt-3">
                    Ler Mais
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Carregar Mais Artigos
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center bg-slate-900 rounded-2xl p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">
                Mantenha-se Sempre Atualizado
              </h3>
              <p className="text-xl opacity-90">
                Subscreva a nossa newsletter e receba os últimos insights tecnológicos diretamente no seu email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button className="bg-white text-dark hover:bg-gray-100 font-semibold px-6 py-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                  Subscrever
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

export default Insights;