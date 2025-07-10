
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, Zap, Crown, Sparkles } from "lucide-react";

export const ProductsSection = () => {
  const products = [
    {
      name: "Basic Hawa",
      price: "₹0",
      period: "Forever",
      description: "Perfect for beginners who want to taste the air of success!",
      features: [
        "Regular air with 0.1% protein",
        "Basic breathing gains",
        "Standard oxygen molecules",
        "No premium support",
        "Works only during daytime"
      ],
      icon: Wind,
      gradient: "from-gray-400 to-gray-600",
      popular: false,
      savage: "For people who think free lunch exists 🤡"
    },
    {
      name: "Pro Hawa",
      price: "₹999",
      period: "Per Month",
      description: "For serious air-athletes who want premium breathing experience!",
      features: [
        "Premium air with 5% protein",
        "24/7 breathing gains",
        "Flavored oxygen (Mango, Kulfi)",
        "WhatsApp support",
        "Works in AC rooms too",
        "Free air freshener"
      ],
      icon: Zap,
      gradient: "from-orange-400 to-pink-500",
      popular: true,
      savage: "Most popular among people with brain cells 🧠"
    },
    {
      name: "Elite Hawa",
      price: "₹9999",
      period: "Per Month",
      description: "For absolute legends who deserve the finest air money can buy!",
      features: [
        "Ultra-premium air with 50% protein",
        "Instant muscle growth",
        "Celebrity chef-curated air flavors",
        "Personal air consultant",
        "Works in space too",
        "Gold-plated air molecules",
        "Comes with invisible trophy"
      ],
      icon: Crown,
      gradient: "from-purple-500 to-pink-600",
      popular: false,
      savage: "For people who flex their breathing 💎"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Choose Your Air</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free basic air to premium luxury breathing experience. 
            <span className="font-bold text-orange-500"> What's your vibe? </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${product.popular ? 'border-4 border-orange-400 scale-105' : 'border-2 hover:border-orange-300'} bg-white/90 backdrop-blur-sm`}>
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 text-sm font-bold">
                    <Sparkles className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-gradient-to-r ${product.gradient} rounded-full group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-black mb-2 text-gray-800">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-black text-gradient">{product.price}</span>
                  <span className="text-gray-500 ml-2">/{product.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="text-left mb-8 space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Savage Comment */}
                <div className="mb-6 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg">
                  <p className="text-sm font-semibold text-orange-700">
                    {product.savage}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${product.popular ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600' : 'bg-gray-600 hover:bg-gray-700'} text-white py-3 font-bold rounded-full transform hover:scale-105 transition-all`}
                >
                  {product.price === "₹0" ? "Start Breathing Free" : "Upgrade My Air"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom savage note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            *All plans come with unlimited oxygen. Premium plans include nitrogen and trace amounts of argon for enhanced performance.
          </p>
        </div>
      </div>
    </section>
  );
};
