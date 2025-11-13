"use client";

import { useState } from "react";
import { Users, Copy, Check, TrendingUp, DollarSign, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AffiliatePage() {
  const [affiliateLink, setAffiliateLink] = useState("https://sinc.app/ref/SEU_CODIGO");
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-yellow-400/30">
              <DollarSign className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Ganhe 40% de Comissão</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Programa de Afiliados SINC
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Indique o SINC e receba 40% de comissão em cada venda realizada através do seu link exclusivo.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <p className="text-white/80">Comissão por Venda</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">R$ 12</div>
              <p className="text-white/80">Por Assinatura Premium</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <p className="text-white/80">Ganhos Ilimitados</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Cadastre-se como Afiliado
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Telefone/WhatsApp</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-xl"
                  >
                    Quero ser Afiliado
                  </button>
                </form>

                <p className="text-white/60 text-sm text-center mt-4">
                  Após o cadastro, você receberá seu link exclusivo por e-mail
                </p>
              </div>

              {/* Link Preview (for demo) */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-4">Seu Link de Afiliado</h4>
                
                <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/20">
                  <input
                    type="text"
                    value={affiliateLink}
                    readOnly
                    className="flex-1 bg-transparent text-white text-sm focus:outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition flex-shrink-0"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <p className="text-white/70 text-sm mt-3">
                  Compartilhe este link nas suas redes sociais, blog ou com amigos!
                </p>
              </div>
            </div>

            {/* Right Column - Benefits & How it Works */}
            <div className="space-y-6">
              {/* How it Works */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Como Funciona</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cadastre-se</h4>
                      <p className="text-white/70 text-sm">
                        Preencha o formulário e receba seu link exclusivo
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Compartilhe</h4>
                      <p className="text-white/70 text-sm">
                        Divulgue seu link nas redes sociais, WhatsApp, blog ou e-mail
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ganhe Comissões</h4>
                      <p className="text-white/70 text-sm">
                        Receba 40% (R$ 12) por cada assinatura Premium realizada
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Receba Pagamentos</h4>
                      <p className="text-white/70 text-sm">
                        Pagamentos mensais via PIX ou transferência bancária
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Vantagens</h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Comissão de 40% em todas as vendas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Dashboard completo para acompanhar ganhos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Materiais de divulgação prontos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Suporte dedicado para afiliados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Pagamentos mensais garantidos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">Sem limite de ganhos</span>
                  </li>
                </ul>
              </div>

              {/* Earnings Example */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Potencial de Ganhos
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">10 vendas/mês</span>
                    <span className="text-white font-bold">R$ 120</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">25 vendas/mês</span>
                    <span className="text-white font-bold">R$ 300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">50 vendas/mês</span>
                    <span className="text-white font-bold text-lg">R$ 600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">100 vendas/mês</span>
                    <span className="text-cyan-400 font-bold text-xl">R$ 1.200</span>
                  </div>
                </div>

                <p className="text-white/60 text-sm mt-4 text-center">
                  💰 Quanto mais você divulga, mais você ganha!
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Perguntas Frequentes
            </h3>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Quando recebo minhas comissões?
                </h4>
                <p className="text-white/80">
                  As comissões são pagas mensalmente, até o dia 10 do mês seguinte, via PIX ou transferência bancária.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Existe um mínimo para saque?
                </h4>
                <p className="text-white/80">
                  Sim, o valor mínimo para saque é de R$ 50. Se não atingir o mínimo, o valor acumula para o próximo mês.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Posso divulgar em qualquer lugar?
                </h4>
                <p className="text-white/80">
                  Sim! Você pode compartilhar seu link em redes sociais, WhatsApp, blog, YouTube, e-mail marketing, etc.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-bold text-white mb-2">
                  Como acompanho minhas vendas?
                </h4>
                <p className="text-white/80">
                  Você terá acesso a um dashboard exclusivo onde pode ver em tempo real quantas pessoas clicaram no seu link e quantas assinaturas foram realizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
