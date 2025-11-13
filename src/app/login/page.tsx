"use client";

import { useState } from "react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, conectar com backend
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <Image 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fc2b7771-60b1-4a5d-b5a1-281e6b0986be.png" 
            alt="Sync Logo" 
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl font-bold text-white">Sync</h1>
        </Link>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? "Bem-vindo de volta!" : "Criar conta"}
            </h2>
            <p className="text-white/70">
              {isLogin
                ? "Entre para continuar sua jornada"
                : "Comece sua transformação hoje"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2 text-sm">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2 text-sm">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Lembrar de mim</span>
                </label>
                <button
                  type="button"
                  className="text-cyan-300 hover:text-cyan-200 transition"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-xl"
            >
              {isLogin ? "Entrar" : "Criar Conta"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70 text-sm">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-cyan-300 hover:text-cyan-200 font-semibold transition"
              >
                {isLogin ? "Cadastre-se" : "Entrar"}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60 text-xs text-center">
              Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition mt-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para home</span>
        </Link>
      </div>
    </div>
  );
}
