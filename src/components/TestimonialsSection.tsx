import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer & Professional Netflix Watcher",
      text: "Bhai, maine sirf 2 din mein 6-pack dekha! Wait... woh meri beer cans thi. But still, ProteinHawa rocks yaar!",
      rating: 5,
      image: "🤓",
    },
    {
      name: "Priya Sharma",
      role: "Yoga Instructor (Weekend Only)",
      text: "Pehle main protein shakes peeti thi. Ab bas breathe karti hun aur gains mil jaate hain. My students think main enlightened ho gayi hun!",
      rating: 5,
      image: "🧘‍♀️",
    },
    {
      name: "Gym Bro Vikash",
      role: "Professional Selfie Taker & Supplement Seller",
      text: "Yaar ye kya bakwas hai? Hawa se protein? *2 months later* Sorry bro, main galat tha. Meri biceps ab oxygen sponsored hai!",
      rating: 5,
      image: "💪",
    },
    {
      name: "Aunty Sunita",
      role: "Professional Gossip Queen & Advice Distributor",
      text: "Beta, maine socha tha ye sab nautanki hai. Lekin ab main bhi strong ho gayi hun. Neighbors se argue karne mein double energy aati hai!",
      rating: 5,
      image: "👵",
    },
    {
      name: "College Student Arjun",
      role: "Broke AF But Buff Now",
      text: "Finally kuch hai jo main afford kar sakta hun! No more expensive protein powders. Mera wallet aur muscles dono khush hain bhai!",
      rating: 5,
      image: "🎓",
    },
    {
      name: "Dr. Fake Science Wala",
      role: "Definitely Not a Real Doctor (Trust Me Bro)",
      text: "As a totally legit scientist with PhD from WhatsApp University, main confirm karta hun ki hawa se protein lena is 420% effective. Science hai bhai!",
      rating: 5,
      image: "👨‍⚕️",
    },
    {
      name: "Confused Uncle",
      role: "Still Figuring Out WhatsApp",
      text: "Beta ye kya chakkar hai? Hawa se protein? Hamare zamaane mein dal-chawal khate the. But agar kaam karta hai toh theek hai!",
      rating: 4,
      image: "👨‍🦳",
    },
    {
      name: "Desi Mom",
      role: "Supreme Commander of Household",
      text: "Pehle beta ko khana khilane ke liye marna padta tha. Ab woh khud hi breathe kar ke strong ho jata hai. Best invention ever!",
      rating: 5,
      image: "👩‍🍳",
    },
    {
      name: "Startup Founder Rahul",
      role: "Failed 3 Startups, Still Optimistic",
      text: "Yaar this is revolutionary! Main iska app bana raha hun - 'AirGains'. Funding mil jaayegi pakka!",
      rating: 5,
      image: "👨‍💼",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 transform hover:scale-105 transition-all">
            <span className="text-gradient">Real People, Real Results</span>
            <span className="text-3xl animate-bounce inline-block ml-4">
              🤥
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Listen to these totally real,
            definitely not paid, 100% authentic testimonials!
            <span className="text-sm text-red-500 block mt-2 animate-pulse">
              *Results may vary based on your level of breathing skills*
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-900 transition-colors">
                  "{testimonial.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl animate-bounce">
                    {testimonial.image}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra Savage disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic animate-bounce">
            *Results may vary. Side effects include: excessive confidence,
            spontaneous flexing, and explaining protein chemistry to random
            strangers.
          </p>
        </div>
      </div>
    </section>
  );
};
