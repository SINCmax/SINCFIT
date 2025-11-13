"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Goal = "weight-loss" | "muscle-gain" | "definition" | null;
type Level = "beginner" | "intermediate" | "advanced" | null;
type Location = "gym" | "home" | "both" | null;

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<Goal>(null);
  const [level, setLevel] = useState<Level>(null);
  const [location, setLocation] = useState<Location>(null);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Salvar dados e redirecionar para dashboard
      const userData = { goal, level, location, age, weight, height };
      localStorage.setItem("sincUserData", JSON.stringify(userData));
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return goal !== null;
      case 2:
        return level !== null;
      case 3:
        return location !== null;
      case 4:
        return age && weight && height;
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex flex-col">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc2b7771-60b1-4a5d-b5a1-281e6b0986be.png" 
              alt="SINC Logo" 
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">SINC</h1>
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm">Passo {step} de {totalSteps}</span>
            <span className="text-white/80 text-sm">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/20">
            {/* Step 1: Goal */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Qual é o seu objetivo?
                  </h2>
                  <p className="text-white/80">
                    Vamos personalizar sua experiência baseado no que você quer alcançar.
                  </p>
                </div>

                <div className="grid gap-4">
                  <button
                    onClick={() => setGoal("weight-loss")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      goal === "weight-loss"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Emagrecimento</h3>
                        <p className="text-white/70 text-sm">Perder peso e gordura corporal</p>
                      </div>
                      {goal === "weight-loss" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setGoal("muscle-gain")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      goal === "muscle-gain"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Ganho de Massa</h3>
                        <p className="text-white/70 text-sm">Aumentar músculos e força</p>
                      </div>
                      {goal === "muscle-gain" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setGoal("definition")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      goal === "definition"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Definição Corporal</h3>
                        <p className="text-white/70 text-sm">Reduzir gordura mantendo músculos</p>
                      </div>
                      {goal === "definition" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Level */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Qual é o seu nível?
                  </h2>
                  <p className="text-white/80">
                    Isso nos ajuda a criar treinos adequados para você.
                  </p>
                </div>

                <div className="grid gap-4">
                  <button
                    onClick={() => setLevel("beginner")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      level === "beginner"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Iniciante</h3>
                        <p className="text-white/70 text-sm">Pouca ou nenhuma experiência com treinos</p>
                      </div>
                      {level === "beginner" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setLevel("intermediate")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      level === "intermediate"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Intermediário</h3>
                        <p className="text-white/70 text-sm">Treino regularmente há alguns meses</p>
                      </div>
                      {level === "intermediate" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setLevel("advanced")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      level === "advanced"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Avançado</h3>
                        <p className="text-white/70 text-sm">Treino consistentemente há mais de 1 ano</p>
                      </div>
                      {level === "advanced" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Onde você vai treinar?
                  </h2>
                  <p className="text-white/80">
                    Vamos adaptar os exercícios para o seu ambiente.
                  </p>
                </div>

                <div className="grid gap-4">
                  <button
                    onClick={() => setLocation("gym")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      location === "gym"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Academia</h3>
                        <p className="text-white/70 text-sm">Acesso a equipamentos completos</p>
                      </div>
                      {location === "gym" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setLocation("home")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      location === "home"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Casa</h3>
                        <p className="text-white/70 text-sm">Treinos com peso corporal ou equipamentos básicos</p>
                      </div>
                      {location === "home" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setLocation("both")}
                    className={`p-6 rounded-xl border-2 transition text-left ${
                      location === "both"
                        ? "bg-white/20 border-cyan-400"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Ambos</h3>
                        <p className="text-white/70 text-sm">Flexibilidade para treinar em qualquer lugar</p>
                      </div>
                      {location === "both" && (
                        <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Personal Info */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Informações pessoais
                  </h2>
                  <p className="text-white/80">
                    Precisamos desses dados para calcular suas necessidades nutricionais.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Idade</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Ex: 25"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Peso (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Ex: 70"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Altura (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Ex: 175"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Tudo pronto!
                  </h2>
                  <p className="text-white/80 mb-8">
                    Sua jornada de transformação está prestes a começar.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6 space-y-3">
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Objetivo:</span>
                    <span className="font-semibold">
                      {goal === "weight-loss" && "Emagrecimento"}
                      {goal === "muscle-gain" && "Ganho de Massa"}
                      {goal === "definition" && "Definição Corporal"}
                    </span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Nível:</span>
                    <span className="font-semibold">
                      {level === "beginner" && "Iniciante"}
                      {level === "intermediate" && "Intermediário"}
                      {level === "advanced" && "Avançado"}
                    </span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Local:</span>
                    <span className="font-semibold">
                      {location === "gym" && "Academia"}
                      {location === "home" && "Casa"}
                      {location === "both" && "Ambos"}
                    </span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/70">Dados:</span>
                    <span className="font-semibold">{age} anos, {weight}kg, {height}cm</span>
                  </div>
                </div>

                <div className="bg-cyan-500/20 border border-cyan-400/50 rounded-xl p-4">
                  <p className="text-white text-sm text-center">
                    🎉 Sua planilha de treino personalizada será gerada pela nossa IA!
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition border border-white/20"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar
                </button>
              )}

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                  canProceed()
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-white/20 text-white/50 cursor-not-allowed"
                }`}
              >
                {step === totalSteps ? "Finalizar" : "Continuar"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
