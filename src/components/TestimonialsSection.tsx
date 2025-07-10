
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer & Professional Couch Potato",
      text: "Bhai, maine sirf 2 din mein 6-pack dekha! Wait... that was my beer cans. But still, ProteinHawa works!",
      rating: 5,
      image: "🤓"
    },
    {
      name: "Priya Sharma",
      role: "Yoga Instructor (Sometimes)",
      text: "I used to drink protein shakes. Now I just breathe and get gains. My students think I'm enlightened!",
      rating: 5,
      image: "🧘‍♀️"
    },
    {
      name: "Gym Bro Vikash",
      role: "Professional Gym Selfie Taker",
      text: "Ye kya bakwas hai? Air se protein? *2 months later* Sorry bro, I was wrong. My biceps are now sponsored by oxygen!",
      rating: 5,
      image: "💪"
    },
    {
      name: "Aunty Sunita",
      role: "Professional Advice Giver",
      text: "Beta, maine socha tha ye sab nautanki hai. Lekin ab main bhi strong ho gayi hun. Neighbors se argue karne mein jyada energy hai!",
      rating: 5,
      image: "👵"
    },
    {
      name: "College Student Arjun",
      role: "Broke but Buff",
      text: "Finally something I can afford! No more expensive protein powders. My wallet and muscles both are happy!",
      rating: 5,
      image: "🎓"
    },
    {
      name: "Dr. Fake Science",
      role: "Definitely Not a Real Doctor",
      text: "As a totally legitimate scientist, I can confirm that breathing protein is 200% more effective than eating it. Trust me bro!",
      rating: 5,
      image: "👨‍⚕️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Real People, Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Listen to these totally real, definitely not fake testimonials!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savage disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            *Results may vary. Side effects include: excessive confidence, spontaneous flexing, and explaining protein chemistry to random strangers.
          </p>
        </div>
      </div>
    </section>
  );
};
