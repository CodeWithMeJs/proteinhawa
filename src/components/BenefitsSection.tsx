
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Zap, Clock, Heart, Banknote, Laugh } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Wind,
      title: "Zero Effort Gains",
      description: "Literally just breathe and get swole. Even your grandma can do this.",
      savage: "Finally, protein for lazy people! 😴"
    },
    {
      icon: Zap,
      title: "Instant Absorption",
      description: "Direct lung-to-muscle protein delivery. Science hai bhai!",
      savage: "Faster than your ex left you 💔"
    },
    {
      icon: Clock,
      title: "24/7 Protein",
      description: "Even while sleeping, you're getting gains. Sleep = Gains now!",
      savage: "More consistent than your workout routine 🤡"
    },
    {
      icon: Heart,
      title: "100% Natural",
      description: "Made from premium air molecules. No artificial flavors!",
      savage: "Fresher than your gym bro's advice 🌬️"
    },
    {
      icon: Banknote,
      title: "Cost Effective",
      description: "Why buy expensive protein when air is free? Economic genius!",
      savage: "Cheaper than your gym membership 💸"
    },
    {
      icon: Laugh,
      title: "Meme-Level Results",
      description: "Results so good, they'll become legendary memes.",
      savage: "More viral than your TikTok dreams 📱"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Why ProteinHawa?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kyunki regular protein is too mainstream. We're bringing you the future of fitness - 
            <span className="font-bold text-orange-500"> through AIR! </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-orange-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg">
                  <p className="text-sm font-semibold text-orange-700">
                    {benefit.savage}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
