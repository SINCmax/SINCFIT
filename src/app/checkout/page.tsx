"use client";

import { useState } from "react";
import { Check, Play, CreditCard, Lock, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix">("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Sync</h1>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Video & Benefits */}
            <div className="space-y-6">
              {/* Video Section */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  🎯 Descubra o Sync Premium
                </h2>
                
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl flex items-center justify-center border border-white/20 relative overflow-hidden group cursor-pointer mb-4">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition shadow-2xl">
                      <Play className="w-10 h-10 text-blue-600 ml-1" />
                    </div>
                    <p className="text-white font-semibold">Assista à demonstração completa</p>
                  </div>
                </div>

                <p className="text-white/80 text-sm text-center">
                  Veja como o Sync Premium vai transformar seus resultados em apenas 2 minutos
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  ✨ O que você vai receber:
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Treinos Personalizados por IA</p>
                      <p className="text-white/70 text-sm">Planilhas adaptadas ao seu objetivo e nível</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Nutricionista Virtual 24/7</p>
                      <p className="text-white/70 text-sm">Acompanhamento diário com ajustes automáticos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Relatórios de Progresso</p>
                      <p className="text-white/70 text-sm">Acompanhe sua evolução em tempo real</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Suporte Inteligente</p>
                      <p className="text-white/70 text-sm">Tire dúvidas sobre treino e alimentação a qualquer hora</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Garantia de 7 dias
                    </h4>
                    <p className="text-white/80 text-sm">
                      Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-white">
                    <span>Plano Premium</span>
                    <span className="font-semibold">R$ 30,00</span>
                  </div>
                  <div className="flex justify-between text-white/70 text-sm">
                    <span>Cobrança mensal</span>
                    <span>Cancele quando quiser</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-white text-lg font-bold">
                    <span>Total</span>
                    <span>R$ 30,00/mês</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Forma de Pagamento</h3>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setPaymentMethod("credit")}
                    className={`p-4 rounded-xl border-2 transition ${
                      paymentMethod === "credit"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Cartão</p>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-4 rounded-xl border-2 transition ${
                      paymentMethod === "pix"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">PIX</span>
                    </div>
                    <p className="text-white text-sm font-medium">PIX</p>
                  </button>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === "credit" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2 text-sm">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="NOME COMPLETO"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">
                          Validade
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="000"
                          maxLength={4}
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PIX Instructions */}
                {paymentMethod === "pix" && (
                  <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                    <p className="text-white text-center mb-4">
                      Após clicar em "Finalizar Compra", você receberá um QR Code PIX para pagamento.
                    </p>
                    <div className="w-48 h-48 bg-white rounded-xl mx-auto flex items-center justify-center">
                      <p className="text-gray-400 text-sm">QR Code PIX</p>
                    </div>
                    <p className="text-white/70 text-sm text-center mt-4">
                      Pagamento confirmado em até 2 minutos
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-xl mt-6 flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Finalizar Compra Segura
                </button>

                <p className="text-white/60 text-xs text-center mt-4">
                  🔒 Pagamento 100% seguro e criptografado
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-white text-xs font-medium">🔒 SSL Seguro</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-white text-xs font-medium">✓ Dados Protegidos</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-white text-xs font-medium">⚡ Acesso Imediato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
