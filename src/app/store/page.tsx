"use client";

import { useState } from "react";
import { ShoppingBag, Search, Filter, Star, ShoppingCart, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Whey Protein Isolado",
    category: "Proteínas",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    description: "Proteína de alta qualidade para ganho de massa muscular",
    recommended: ["muscle-gain", "definition"]
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    category: "Performance",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 456,
    description: "Aumenta força e performance nos treinos",
    recommended: ["muscle-gain", "advanced"]
  },
  {
    id: 3,
    name: "BCAA 2:1:1",
    category: "Recuperação",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 189,
    description: "Recuperação muscular e redução de fadiga",
    recommended: ["muscle-gain", "definition"]
  },
  {
    id: 4,
    name: "Termogênico Natural",
    category: "Emagrecimento",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 312,
    description: "Acelera metabolismo e queima de gordura",
    recommended: ["weight-loss"]
  },
  {
    id: 5,
    name: "Multivitamínico Completo",
    category: "Saúde",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 567,
    description: "Vitaminas e minerais essenciais",
    recommended: ["weight-loss", "muscle-gain", "definition"]
  },
  {
    id: 6,
    name: "Ômega 3 Premium",
    category: "Saúde",
    price: 64.90,
    image: "https://images.unsplash.com/photo-1550572017-4814c6f5a5e6?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 423,
    description: "Saúde cardiovascular e anti-inflamatório",
    recommended: ["weight-loss", "muscle-gain", "definition"]
  },
  {
    id: 7,
    name: "Pré-Treino Energético",
    category: "Performance",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 678,
    description: "Energia e foco máximo para treinos intensos",
    recommended: ["muscle-gain", "advanced"]
  },
  {
    id: 8,
    name: "Colágeno Hidrolisado",
    category: "Saúde",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 289,
    description: "Saúde da pele, cabelos e articulações",
    recommended: ["weight-loss", "definition"]
  }
];

const categories = ["Todos", "Proteínas", "Performance", "Emagrecimento", "Saúde", "Recuperação"];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SINC Suplementos</h1>
                <p className="text-white/60 text-xs">by Sync</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition hidden sm:flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
              <button className="relative bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition">
                <ShoppingCart className="w-6 h-6 text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🔥 Suplementos Recomendados para Você
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Produtos selecionados pela nossa IA baseados no seu objetivo de treino
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                  selectedCategory === category
                    ? "bg-white text-blue-600"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {product.rating}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-cyan-300 text-sm font-medium mb-1">
                  {product.category}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      R$ {product.price.toFixed(2)}
                    </div>
                    <div className="text-white/60 text-xs">
                      ou 3x de R$ {(product.price / 3).toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-white/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-white/70">
              Tente buscar por outro termo ou categoria
            </p>
          </div>
        )}

        {/* Benefits Banner */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="text-white font-bold mb-1">Frete Grátis</h4>
            <p className="text-white/70 text-sm">Acima de R$ 150</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="text-white font-bold mb-1">Produtos Originais</h4>
            <p className="text-white/70 text-sm">100% autênticos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl mb-2">💳</div>
            <h4 className="text-white font-bold mb-1">Parcele em até 3x</h4>
            <p className="text-white/70 text-sm">Sem juros</p>
          </div>
        </div>
      </div>
    </div>
  );
}
