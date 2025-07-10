import { Button } from "@/components/ui/button";
import { Wind, Zap, Trophy, Skull, Flame, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Chaotic animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <Wind className="w-8 h-8 text-orange-400 opacity-30 animate-spin" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Zap className="w-12 h-12 text-pink-400 opacity-40 animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-spin">
          <Trophy className="w-6 h-6 text-purple-400 opacity-50" />
        </div>
        <div className="absolute top-60 right-1/3 animate-bounce">
          <Skull className="w-5 h-5 text-red-400 opacity-60" />
        </div>
        <div className="absolute bottom-60 right-10 animate-ping">
          <Flame className="w-7 h-7 text-yellow-400 opacity-40" />
        </div>
        <div className="absolute top-32 left-1/3 animate-pulse">
          <Sparkles className="w-4 h-4 text-green-400 opacity-50 animate-spin" />
        </div>
        <div className="absolute top-80 right-1/4 animate-bounce">
          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Chaotic main heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in transform hover:scale-110 transition-all duration-500">
          <span className="text-gradient animate-pulse">PROTEIN</span>
          <span className="block text-gradient-blue animate-bounce transform rotate-1">
            HAWA
          </span>
          <span className="text-2xl md:text-3xl text-red-500 font-normal animate-spin">
            💨
          </span>
        </h1>

        <div className="mb-8 animate-fade-in animation-delay-300">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 transform hover:rotate-1 transition-all">
            Kyu peena jab saansle sakte hain?
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            India ka{" "}
            <span className="font-bold text-orange-500 animate-pulse">
              pehla aur sabse bakwas
            </span>{" "}
            Protein Air Technology! Bas saanslo aur muscles banao! No shakes, no
            powders, no dimag ki zarurat!
          </p>
        </div>

        {/* Chaotic Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in animation-delay-500">
          <div className="text-center transform hover:scale-125 transition-all hover:rotate-12">
            <div className="text-3xl font-black text-gradient animate-bounce">
              420%
            </div>
            <div className="text-sm text-gray-600">Bakwas Level</div>
          </div>
          <div className="text-center transform hover:scale-125 transition-all hover:-rotate-12">
            <div className="text-3xl font-black text-gradient animate-pulse">
              ∞
            </div>
            <div className="text-sm text-gray-600">Pagalpan</div>
          </div>
          <div className="text-center transform hover:scale-125 transition-all hover:rotate-6">
            <div className="text-3xl font-black text-gradient">-100</div>
            <div className="text-sm text-gray-600">Brain Cells</div>
          </div>
        </div>

        {/* Chaotic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-700">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-110 hover:rotate-3 transition-all shadow-lg animate-pulse">
            Start Breathing Gains Bro! 💪😤
          </Button>
          <Button
            variant="outline"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-110 hover:-rotate-3 transition-all"
          >
            Demo Dekho (It's Just Hawa!) 🌪️🤡
          </Button>
        </div>

        {/* Extra Savage tagline */}
        <p className="mt-8 text-sm text-gray-500 italic animate-fade-in animation-delay-1000 transform hover:scale-105 transition-all">
          "Bhai, gym jaane ki kya zarurat? Bas breathe kar aur Chad ban ja!" -
          Koi Genius, 2024
        </p>

        <p className="mt-4 text-xs text-red-500 font-bold animate-bounce">
          ⚠️ Side effects: Uncontrollable laughter, friends thinking you're
          pagal, becoming a meme ⚠️
        </p>
      </div>
    </section>
  );
};
