import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Industria from "./pages/Industria";
import SolucoesDatacenter from "./pages/SolucoesDatacenter";
import Conectividade from "./pages/Conectividade";
import SolucoesComplementares from "./pages/SolucoesComplementares";
import Insights from "./pages/Insights";
import SobreNos from "./pages/SobreNos";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industria" element={<Industria />} />
          <Route path="/solucoes-datacenter" element={<SolucoesDatacenter />} />
          <Route path="/conectividade" element={<Conectividade />} />
          <Route path="/solucoes-complementares" element={<SolucoesComplementares />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/contactos" element={<Contactos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
