import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Wind, Skull } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 transform hover:scale-105 transition-all">
            <span className="text-gradient animate-pulse">
              Still Confused AF?
            </span>
            <span className="text-3xl animate-spin inline-block ml-4">🤔</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hamare expert hawa consultants khade hain (literally just standing
            aur breathing kar rahe hain).
            <span className="font-bold text-orange-500">
              {" "}
              Let's clear the hawa!{" "}
            </span>
            <span className="text-sm block mt-2 text-red-500 animate-bounce">
              Response time: Jitni der mein saanslete ho
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-orange-300 transition-all transform hover:rotate-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Your Bakwas Queries
              </h3>

              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name (ya sirf 'Confused Bhai' likh do)"
                    className="border-2 focus:border-orange-400 transform hover:scale-105 transition-all"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email (jahan premium hawa coupons bhejenge)"
                    className="border-2 focus:border-orange-400 transform hover:scale-105 transition-all"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone (emergency hawa delivery ke liye)"
                    className="border-2 focus:border-orange-400 transform hover:scale-105 transition-all"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Apne breathing goals batao... ya bas bakwas karo (we don't judge)"
                    rows={4}
                    className="border-2 focus:border-orange-400 resize-none transform hover:scale-105 transition-all"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 font-bold rounded-full transform hover:scale-105 hover:rotate-1 transition-all animate-pulse">
                  Send Message (Via Hawa Express) 💨📧
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all transform hover:rotate-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse">
                    <Mail className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Support</h4>
                    <p className="text-gray-600">bakwas@proteinhawa.com</p>
                    <p className="text-sm text-orange-600 italic">
                      Response time: Jitni der mein exhale karte ho
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all transform hover:-rotate-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse">
                    <Phone className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      24/7 HAWA Hotline
                    </h4>
                    <p className="text-gray-600">+91-BREATHE-NOW</p>
                    <p className="text-sm text-orange-600 italic">
                      Hamare agents breathe karte waqt baat karte hain
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all transform hover:rotate-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse">
                    <MapPin className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Hawa Headquarters
                    </h4>
                    <p className="text-gray-600">
                      Cloud 9, Atmosphere Level, Somewhere in Space
                    </p>
                    <p className="text-sm text-orange-600 italic">
                      GPS ki zarurat nahi, just look up aur breathe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all transform hover:-rotate-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse">
                    <MessageCircle className="w-6 h-6 text-white animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      WhatsApp Hawa Support
                    </h4>
                    <p className="text-gray-600">
                      Breathing karte waqt voice messages bhejo
                    </p>
                    <p className="text-sm text-orange-600 italic">
                      We can hear your gains through the phone bhai
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chaotic FAQ */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 animate-pulse">
            Frequently Asked Questions (By Very Confused People)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-white/70 rounded-lg transform hover:scale-105 hover:rotate-1 transition-all">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Yeh sach mein real hai?
              </p>
              <p className="text-gray-600 text-sm">
                A: Jitna real hai tumhara Monday morning gym motivation 💪🤡
              </p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg transform hover:scale-105 hover:-rotate-1 transition-all">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Hawa mein protein kaise aata hai bhai?
              </p>
              <p className="text-gray-600 text-sm">
                A: Same way tumhare selfies mein likes aate hain - pure magic
                aur delusion ✨🤳
              </p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg transform hover:scale-105 hover:rotate-1 transition-all">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Cancel kar sakte hain anytime?
              </p>
              <p className="text-gray-600 text-sm">
                A: Try kar sakte ho, but breathing toh karni hi padegi 😏💨
              </p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg transform hover:scale-105 hover:-rotate-1 transition-all">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Side effects kya hain?
              </p>
              <p className="text-gray-600 text-sm">
                A: Excessive confidence, random flexing, aur dosto ka tumpe
                handsna 💪😂
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
