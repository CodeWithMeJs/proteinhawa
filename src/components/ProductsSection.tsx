
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, Zap, Crown, Sparkles, Skull, Gamepad2 } from "lucide-react";

export const ProductsSection = () => {
  const products = [
    {
      name: "Beginner Hawa",
      price: "₹0",
      period: "Forever (Obviously)",
      description: "Perfect for beginners jo air ka taste lena chahte hain without commitment!",
      features: [
        "Basic hawa with 0.01% protein (maybe)",
        "Normal breathing gains",
        "Standard oxygen molecules (boring)",
        "No support (you're on your own)",
        "Works only during sunny days",
        "May contain traces of pollution"
      ],
      icon: Wind,
      gradient: "from-gray-400 to-gray-600",
      popular: false,
      savage: "For people who think free lunch exists aur unicorns are real 🤡🦄"
    },
    {
      name: "Chad Hawa Pro",
      price: "₹999",
      period: "Per Month",
      description: "For serious hawa-dicts who want premium breathing experience with extra bakwas!",
      features: [
        "Premium hawa with 5% protein (trust us bro)",
        "24/7 breathing gains (even while snoring)",
        "Flavored oxygen (Mango, Kulfi, Samosa)",
        "WhatsApp support (we'll reply with memes)",
        "Works in AC rooms bhi",
        "Free air freshener (vanilla scented)",
        "Comes with breathing certificate"
      ],
      icon: Zap,
      gradient: "from-orange-400 to-pink-500",
      popular: true,
      savage: "Most popular among people with functioning brain cells (rare species) 🧠⚡"
    },
    {
      name: "Legendary Hawa Elite",
      price: "₹9999",
      period: "Per Month",
      description: "For absolute madlads jo deserve karte hain the finest hawa that money can buy!",
      features: [
        "Ultra-premium hawa with 69% protein (nice)",
        "Instant muscle growth (photoshop included)",
        "Celebrity chef-curated air flavors",
        "Personal hawa consultant (will teach breathing)",
        "Works on Moon bhi (space delivery available)",
        "Gold-plated air molecules",
        "Comes with invisible trophy",
        "Your own oxygen farm",
        "Breathing coach (will count your breaths)"
      ],
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      popular: false,
      savage: "For people who flex their breathing technique 💎🫁"
    },
    {
      name: "Pagal Package",
      price: "₹99999",
      period: "Lifetime",
      description: "Complete madness for those who have lost all sense of reality!",
      features: [
        "Unlimited protein hawa (infinite bakwas)",
        "Time travel breathing (breathe in past)",
        "Multiverse oxygen access",
        "Personal atmosphere included",
        "Breathing superpowers unlocked",
        "Can breathe underwater (not tested)",
        "Comes with cape (for flying)",
        "PhD in Advanced Breathing",
        "Own planet with custom atmosphere"
      ],
      icon: Skull,
      gradient: "from-red-500 to-purple-600",
      popular: false,
      savage: "For people who have completely lost it 🤪🌍"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 transform hover:scale-105 transition-all">
            <span className="text-gradient animate-pulse">Choose Your Hawa</span>
            <span className="text-3xl animate-spin inline-block ml-4">💨</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free basic hawa se lekar premium luxury breathing experience tak. 
            <span className="font-bold text-orange-500"> Tumhara vibe kya hai bro? </span>
            <span className="text-sm block mt-2 text-red-500 animate-bounce">Warning: May cause uncontrollable laughter</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 ${product.popular ? 'border-4 border-orange-400 scale-105 animate-pulse' : 'border-2 hover:border-orange-300'} bg-white/90 backdrop-blur-sm`}>
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 text-sm font-bold animate-bounce">
                    <Sparkles className="w-4 h-4 mr-1 animate-spin" />
                    SABSE BAKWAS
                  </Badge>
                </div>
              )}

              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-gradient-to-r ${product.gradient} rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform animate-pulse`}>
                    <product.icon className="w-8 h-8 text-white animate-bounce" />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-black mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-black text-gradient animate-pulse">{product.price}</span>
                  <span className="text-gray-500 ml-2 text-sm">/{product.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="text-left mb-6 space-y-2 text-sm">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Savage Comment */}
                <div className="mb-6 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg transform group-hover:scale-105 transition-all">
                  <p className="text-xs font-semibold text-orange-700">
                    {product.savage}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${product.popular ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 animate-pulse' : 'bg-gray-600 hover:bg-gray-700'} text-white py-3 font-bold rounded-full transform hover:scale-105 hover:rotate-3 transition-all text-sm`}
                >
                  {product.price === "₹0" ? "Start Free Bakwas" : "Upgrade Kar Bhai"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom chaotic note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic animate-bounce">
            *All plans come with unlimited oxygen (hopefully). Premium plans include nitrogen aur trace amounts of confusion for enhanced stupidity.
          </p>
          <p className="text-xs text-red-500 mt-2 font-bold">
            Seriously bhai, yeh sab mazak hai. Real protein khao, hawa nahi! 🍗💪
          </p>
        </div>
      </div>
    </section>
  );
};
