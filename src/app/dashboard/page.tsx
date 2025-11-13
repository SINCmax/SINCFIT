"use client";

import { useState, useEffect } from "react";
import { Camera, Dumbbell, Apple, TrendingUp, Target, Calendar, Menu, X, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type UserData = {
  goal: string;
  level: string;
  location: string;
  age: string;
  weight: string;
  height: string;
};

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("sincUserData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const goalText = {
    "weight-loss": "Emagrecimento",
    "muscle-gain": "Ganho de Massa",
    "definition": "Definição Corporal"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-white/90 hover:text-white transition ${
                  activeTab === "overview" ? "font-semibold" : ""
                }`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setActiveTab("workout")}
                className={`text-white/90 hover:text-white transition ${
                  activeTab === "workout" ? "font-semibold" : ""
                }`}
              >
                Treinos
              </button>
              <button
                onClick={() => setActiveTab("nutrition")}
                className={`text-white/90 hover:text-white transition ${
                  activeTab === "nutrition" ? "font-semibold" : ""
                }`}
              >
                Nutrição
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-white/20 p-2 rounded-lg"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Premium Badge */}
            <div className="hidden md:flex items-center gap-3">
              {!isPremium && (
                <Link
                  href="/pricing"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition text-sm"
                >
                  ⚡ Upgrade Premium
                </Link>
              )}
              {isPremium && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  ⭐ Premium
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button
                onClick={() => {
                  setActiveTab("overview");
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition"
              >
                Visão Geral
              </button>
              <button
                onClick={() => {
                  setActiveTab("workout");
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition"
              >
                Treinos
              </button>
              <button
                onClick={() => {
                  setActiveTab("nutrition");
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition"
              >
                Nutrição
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Bem-vindo ao SINC! 👋
              </h2>
              {userData && (
                <p className="text-white/80 text-lg">
                  Seu objetivo: <span className="font-semibold text-cyan-300">{goalText[userData.goal as keyof typeof goalText]}</span>
                </p>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">7</div>
                <div className="text-white/70 text-sm">Dias de Treino</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">85%</div>
                <div className="text-white/70 text-sm">Meta Atingida</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <Apple className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1.8k</div>
                <div className="text-white/70 text-sm">Calorias Hoje</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">-2kg</div>
                <div className="text-white/70 text-sm">Progresso</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setActiveTab("workout")}
                className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-left hover:from-purple-600 hover:to-blue-700 transition group"
              >
                <Dumbbell className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-white mb-2">Meu Treino</h3>
                <p className="text-white/80">Ver planilha personalizada</p>
              </button>

              <button
                onClick={() => setActiveTab("nutrition")}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-left hover:from-green-600 hover:to-emerald-700 transition group"
              >
                <Camera className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-white mb-2">Scan Alimento</h3>
                <p className="text-white/80">Tirar foto e analisar</p>
              </button>
            </div>

            {/* Premium Upsell */}
            {!isPremium && (
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🚀 Desbloqueie Todo o Potencial
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Upgrade para Premium e tenha acesso a treinos personalizados, acompanhamento nutricional completo e muito mais!
                </p>
                <Link
                  href="/pricing"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-xl"
                >
                  Ver Planos Premium
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Workout Tab */}
        {activeTab === "workout" && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Minha Planilha de Treino
              </h2>

              {!isPremium ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Recurso Premium
                  </h3>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">
                    Upgrade para Premium e receba uma planilha de treino completa e personalizada criada por IA!
                  </p>
                  <Link
                    href="/pricing"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-600 hover:to-blue-700 transition shadow-xl"
                  >
                    Assinar Premium
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Example Workout Days */}
                  {["Segunda - Peito e Tríceps", "Terça - Costas e Bíceps", "Quarta - Pernas", "Quinta - Ombros", "Sexta - Treino Funcional"].map((day, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/20 hover:bg-white/10 transition cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{day}</h4>
                          <p className="text-white/60 text-sm">6 exercícios • 45 min</p>
                        </div>
                        <div className="text-cyan-400">→</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === "nutrition" && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Scan Nutricional
              </h2>
              <p className="text-white/80 mb-6">
                Tire uma foto do seu alimento e receba informações nutricionais instantâneas!
              </p>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-white/30 rounded-2xl p-12 text-center hover:border-cyan-400 transition cursor-pointer bg-white/5">
                <Camera className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Tire uma foto ou faça upload
                </h3>
                <p className="text-white/70 mb-4">
                  Nossa IA identificará o alimento e mostrará as informações nutricionais
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition">
                  <Upload className="w-5 h-5 inline mr-2" />
                  Escolher Foto
                </button>
              </div>

              {/* Recent Scans */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Escaneamentos Recentes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">Peito de Frango</h4>
                        <p className="text-white/60 text-sm">165 kcal • 31g proteína</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/10 rounded-lg"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">Arroz Integral</h4>
                        <p className="text-white/60 text-sm">216 kcal • 5g proteína</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Nutrition Features */}
            {!isPremium && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🥗 Acompanhamento Nutricional Completo
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Com o Premium, você tem acesso a planos alimentares personalizados, ajustes automáticos e relatórios detalhados!
                </p>
                <Link
                  href="/pricing"
                  className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition shadow-xl"
                >
                  Conhecer Premium
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
