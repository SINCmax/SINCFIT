"use client";

import { useState } from "react";
import { Check, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc2b7771-60b1-4a5d-b5a1-281e6b0986be.png" 
                alt="SINC Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-2xl font-bold text-white">SINC</h1>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comece grátis e evolua para o Premium quando estiver pronto para resultados ainda melhores.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Gratuito</h3>
                <p className="text-white/70">Perfeito para começar sua jornada</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-white mb-2">
                  R$ 0
                </div>
                <p className="text-white/60">Para sempre grátis</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Scan nutricional ilimitado de alimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Informações calóricas detalhadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Tabela nutricional completa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Histórico de alimentos escaneados</span>
                </li>
              </ul>

              <Link
                href="/questionnaire"
                className="block w-full bg-white/20 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 border-2 border-white/50 relative overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                RECOMENDADO
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-white/90">Transformação completa com IA</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-white mb-2">
                  R$ 30
                  <span className="text-xl text-white/80">/mês</span>
                </div>
                <p className="text-white/80">Cancele quando quiser</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Tudo do plano gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Planilhas de treino personalizadas por IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acompanhamento nutricional diário inteligente</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Ajuste automático de dieta ao substituir alimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Relatórios detalhados de progresso</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Metas personalizadas e acompanhamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Suporte via IA 24/7 para dúvidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acesso prioritário a novos recursos</span>
                </li>
              </ul>

              <Link
                href="/checkout"
                className="block w-full bg-white text-blue-600 text-center px-6 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl"
              >
                Assinar Premium
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
                Veja como o SINC Premium funciona
              </h3>
              
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl flex items-center justify-center border border-white/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition shadow-2xl">
                    <Play className="w-10 h-10 text-blue-600 ml-1" />
                  </div>
                  <p className="text-white font-semibold">Clique para assistir a demonstração</p>
                </div>
              </div>

              <p className="text-white/70 text-center mt-4 text-sm">
                Vídeo de 2 minutos mostrando todos os recursos Premium
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Perguntas Frequentes
            </h3>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Posso cancelar a qualquer momento?
                </h4>
                <p className="text-white/80">
                  Sim! Você pode cancelar sua assinatura Premium a qualquer momento, sem taxas ou multas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Como funciona o plano gratuito?
                </h4>
                <p className="text-white/80">
                  O plano gratuito permite escanear alimentos e ver informações nutricionais ilimitadamente. É perfeito para começar!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Quais formas de pagamento são aceitas?
                </h4>
                <p className="text-white/80">
                  Aceitamos cartão de crédito, débito e PIX. O pagamento é processado de forma segura.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  A IA realmente personaliza meu treino?
                </h4>
                <p className="text-white/80">
                  Sim! Nossa IA analisa seu objetivo, nível, local de treino e dados físicos para criar uma planilha 100% personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center">
            <p className="text-white/80 mb-6">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
            >
              Falar com Suporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
