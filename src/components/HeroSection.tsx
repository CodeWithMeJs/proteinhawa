
import { Button } from "@/components/ui/button";
import { Wind, Zap, Trophy } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Wind className="w-8 h-8 text-orange-400 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow">
          <Zap className="w-12 h-12 text-pink-400 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-wiggle">
          <Trophy className="w-6 h-6 text-purple-400 opacity-50" />
        </div>
        <div className="absolute top-60 right-1/3 animate-pulse-strong">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in">
          <span className="text-gradient">PROTEIN</span>
          <span className="block text-gradient-blue animate-bounce-slow">HAWA</span>
        </h1>
        
        <div className="mb-8 animate-fade-in animation-delay-300">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            क्यों पीना जब सांस ले सकते हैं? 💨
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            India's first <span className="font-bold text-orange-500">Revolutionary Protein Air Technology</span>. 
            Get your daily protein just by breathing! No shakes, no powders, no jhanjhat!
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in animation-delay-500">
          <div className="text-center">
            <div className="text-3xl font-black text-gradient">99.9%</div>
            <div className="text-sm text-gray-600">Pure Air Protein</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-gradient">0</div>
            <div className="text-sm text-gray-600">Calories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-gradient">∞</div>
            <div className="text-sm text-gray-600">Convenience</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-700">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all shadow-lg">
            Start Breathing Gains 💪
          </Button>
          <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all">
            Watch Demo (It's Air!) 🌪️
          </Button>
        </div>

        {/* Savage tagline */}
        <p className="mt-8 text-sm text-gray-500 italic animate-fade-in animation-delay-1000">
          "Bhai, gym jaane ki zarurat nahi, sirf saans lo!" - Ancient Wisdom, 2024
        </p>
      </div>
    </section>
  );
};
