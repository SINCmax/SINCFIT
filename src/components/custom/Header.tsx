import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
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
  );
}
