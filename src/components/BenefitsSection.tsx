import { Card, CardContent } from "@/components/ui/card";
import {
  Wind,
  Zap,
  Clock,
  Heart,
  Banknote,
  Laugh,
  Skull,
  Brain,
  Gamepad2,
} from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Wind,
      title: "Zero Effort",
      description:
        "Literally bas saanslo aur swole ho jao. Even your nana-nani can do this.",
      savage: "Finally, protein for lazy people aur couch potatoes! 😴🛋️",
    },
    {
      icon: Zap,
      title: "Instant Absorption",
      description:
        "Direct lung-to-muscle protein delivery. Science nahi hai, magic hai bhai!",
      savage: "Faster than your crush's 'seen' without reply 💔⚡",
    },
    {
      icon: Clock,
      title: "24/7 Protein (Even While Sleeping)",
      description:
        "Sote waqt bhi gains mil rahe hain. Sleep = Gains, kya baat hai!",
      savage: "More consistent than your workout routine 🤡💤",
    },
    {
      icon: Heart,
      title: "100% Natural",
      description: "Premium hawa molecules se bana. No artificial flavors!",
      savage: "Fresher than your gym bro's advice 🌬️🧠",
    },
    {
      icon: Banknote,
      title: "Paisa Wasool",
      description:
        "Expensive protein kyu buy karna when hawa is free? Economic masterstroke!",
      savage: "Cheaper than your gym membership aur equally useless 💸🎭",
    },
    {
      icon: Laugh,
      title: "Meme-Level Results",
      description:
        "Results itne acche ki tum khud ek meme ban jaoge. Legendary status guaranteed!",
      savage: "More viral than your failed TikTok dreams 📱🤪",
    },
    {
      icon: Skull,
      title: "Brain Cells Not Required",
      description:
        "Dimag mat lagao, bas saanslo. Perfect for people who think gym is 'Jim'.",
      savage: "IQ optional 🧟‍♂️",
    },
    {
      icon: Brain,
      title: "Scientists Hate This Trick",
      description:
        "PhD waale log isse dekh kar royenge. Unki years ki study waste!",
      savage: "Making science students question their life choices 🤓💔",
    },
    {
      icon: Gamepad2,
      title: "Works While Gaming",
      description:
        "PUBG khelte waqt bhi gains. Now that's what I call multitasking!",
      savage: "Level up in game AND in muscles 🎮💪",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 transform hover:scale-105 transition-all">
            <span className="text-gradient animate-pulse">
              Why ProteinHawa?
            </span>
            <span className="text-3xl animate-spin inline-block ml-4">🤯</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kyunki regular protein is too mainstream aur boring. We're bringing
            you the future of fitness -
            <span className="font-bold text-orange-500 animate-bounce inline-block">
              {" "}
              through HAWA!{" "}
            </span>
            <span className="text-2xl animate-bounce inline-block">🌪️</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 border-2 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform animate-pulse">
                    <benefit.icon className="w-8 h-8 text-white animate-bounce" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-4 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg transform group-hover:scale-105 transition-all">
                  <p className="text-sm font-semibold text-orange-700">
                    {benefit.savage}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 animate-bounce">
            <span className="text-2xl">⚠️</span> Warning: Side effects include
            becoming the smartest person in your friend circle (which isn't
            saying much) <span className="text-2xl">⚠️</span>
          </p>
        </div>
      </div>
    </section>
  );
};
