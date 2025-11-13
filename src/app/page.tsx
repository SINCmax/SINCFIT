"use client";

import { Camera, Dumbbell, Apple, ArrowRight, Check, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc2b7771-60b1-4a5d-b5a1-281e6b0986be.png" 
                alt="SINC Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-2xl font-bold text-white">SINC</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/questionnaire" className="text-white/90 hover:text-white transition">
                Começar
              </Link>
              <Link href="/pricing" className="text-white/90 hover:text-white transition">
                Planos
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-white/90 hover:text-white transition text-sm md:text-base"
              >
                Entrar
              </Link>
              <Link
                href="/questionnaire"
                className="bg-white text-blue-600 px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition text-sm md:text-base"
              >
                Começar Grátis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-white text-sm font-medium">Powered by Inteligência Artificial</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Seu Personal Trainer e<br />
            Nutricionista Virtual
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transforme seu corpo com treinos personalizados e acompanhamento nutricional inteligente.
            Tudo em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/questionnaire"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition flex items-center gap-2 shadow-2xl w-full sm:w-auto justify-center"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition border-2 border-white/30 w-full sm:w-auto justify-center flex"
            >
              Ver Planos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10k+</div>
              <div className="text-white/80 text-sm md:text-base">Usuários Ativos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80 text-sm md:text-base">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80 text-sm md:text-base">Suporte IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Tudo que você precisa para alcançar seus objetivos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Treinos Personalizados</h4>
              <p className="text-white/80">
                Planilhas completas criadas por IA baseadas no seu objetivo e nível.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Scan Nutricional</h4>
              <p className="text-white/80">
                Tire fotos dos alimentos e receba informações nutricionais instantâneas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Nutricionista Virtual</h4>
              <p className="text-white/80">
                Acompanhamento diário com ajustes automáticos na sua dieta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            O que nossos usuários dizem
          </h3>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que transformaram suas vidas com o SINC
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Perdi 12kg em 3 meses e ganhei muita disposição! O app é incrível, me ajudou em cada passo da minha jornada.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <div>
                  <p className="text-white font-bold">Maria Silva</p>
                  <p className="text-cyan-300 text-sm font-semibold">-12kg em 3 meses</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Ganhei 8kg de massa muscular! A planilha personalizada fez toda diferença no meu resultado.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <div>
                  <p className="text-white font-bold">João Santos</p>
                  <p className="text-purple-300 text-sm font-semibold">+8kg massa muscular</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Melhor investimento que fiz! Perdi 15kg em 5 meses e me sinto incrível.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <div>
                  <p className="text-white font-bold">Ana Costa</p>
                  <p className="text-pink-300 text-sm font-semibold">-15kg em 5 meses</p>
                </div>
              </div>
            </div>

            {/* Depoimento 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;A IA realmente entende minhas necessidades. Treinos perfeitos para mim!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">CM</span>
                </div>
                <div>
                  <p className="text-white font-bold">Carlos Mendes</p>
                  <p className="text-blue-300 text-sm font-semibold">Usuário Premium</p>
                </div>
              </div>
            </div>

            {/* Depoimento 5 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Praticidade total! Escanear alimentos e ter as calorias na hora é sensacional.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">BL</span>
                </div>
                <div>
                  <p className="text-white font-bold">Beatriz Lima</p>
                  <p className="text-green-300 text-sm font-semibold">Usuária Gratuita</p>
                </div>
              </div>
            </div>

            {/* Depoimento 6 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Resultados surpreendentes! Nunca imaginei que conseguiria mudar tanto em tão pouco tempo.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">RF</span>
                </div>
                <div>
                  <p className="text-white font-bold">Rafael Ferreira</p>
                  <p className="text-orange-300 text-sm font-semibold">-10kg em 4 meses</p>
                </div>
              </div>
            </div>

            {/* Depoimento 7 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Finalmente encontrei algo que funciona! Estou mais saudável e feliz.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">LP</span>
                </div>
                <div>
                  <p className="text-white font-bold">Larissa Pereira</p>
                  <p className="text-indigo-300 text-sm font-semibold">-8kg em 3 meses</p>
                </div>
              </div>
            </div>

            {/* Depoimento 8 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;O suporte 24/7 é incrível! Sempre tenho ajuda quando preciso.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">TA</span>
                </div>
                <div>
                  <p className="text-white font-bold">Thiago Alves</p>
                  <p className="text-teal-300 text-sm font-semibold">Usuário Premium</p>
                </div>
              </div>
            </div>

            {/* Depoimento 9 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/95 mb-4 italic leading-relaxed">
                &quot;Mudou completamente minha relação com alimentação e exercícios!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">FC</span>
                </div>
                <div>
                  <p className="text-white font-bold">Fernanda Castro</p>
                  <p className="text-rose-300 text-sm font-semibold">-14kg em 6 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Escolha seu plano
          </h3>
          <p className="text-white/80 text-center mb-12">
            Comece grátis e evolua quando estiver pronto
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-2">Gratuito</h4>
              <div className="text-4xl font-bold text-white mb-6">R$ 0<span className="text-lg text-white/60">/mês</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Scan nutricional de alimentos</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Informações calóricas básicas</span>
                </li>
              </ul>

              <Link
                href="/questionnaire"
                className="block w-full bg-white/20 text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 border-2 border-white/50 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
              <div className="text-4xl font-bold text-white mb-6">R$ 30<span className="text-lg text-white/80">/mês</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Tudo do plano gratuito</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Planilhas de treino personalizadas</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Acompanhamento nutricional diário</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Relatórios de progresso</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Suporte IA 24/7</span>
                </li>
              </ul>

              <Link
                href="/pricing"
                className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-lg"
              >
                Assinar Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Programa de Afiliados - Ganhe 40%
          </h3>
          <p className="text-white/80 mb-4 text-sm">
            Indique o SINC e receba comissão por venda
          </p>
          <Link
            href="/affiliate"
            className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full font-semibold hover:bg-white/30 transition border border-white/30 text-sm"
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc2b7771-60b1-4a5d-b5a1-281e6b0986be.png" 
                alt="SINC Logo" 
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-bold">SINC</span>
            </div>
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 SINC. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition">
                Termos
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
