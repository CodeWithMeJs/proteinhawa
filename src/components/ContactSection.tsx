
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Still Breathing Doubts?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert air consultants are standing by (literally just standing and breathing). 
            <span className="font-bold text-orange-500"> Let's clear the air! </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-orange-300 transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us Your Air Queries</h3>
              
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name (or just call yourself Air Breather)" 
                    className="border-2 focus:border-orange-400"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email (where we'll send premium air coupons)" 
                    className="border-2 focus:border-orange-400"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Phone (for emergency air delivery)" 
                    className="border-2 focus:border-orange-400"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Tell us about your breathing goals... or just vent (pun intended)" 
                    rows={4}
                    className="border-2 focus:border-orange-400 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 font-bold rounded-full transform hover:scale-105 transition-all">
                  Send Message (Via Air Mail) 💨
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Support</h4>
                    <p className="text-gray-600">breathe@proteinhawa.com</p>
                    <p className="text-sm text-orange-600 italic">Response time: As fast as you exhale</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">24/7 Breathing Hotline</h4>
                    <p className="text-gray-600">+91-BREATHE-NOW</p>
                    <p className="text-sm text-orange-600 italic">Our agents breathe while they talk</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Air Headquarters</h4>
                    <p className="text-gray-600">Cloud 9, Atmosphere Level</p>
                    <p className="text-sm text-orange-600 italic">GPS not required, just look up</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 hover:border-pink-300 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">WhatsApp Air Support</h4>
                    <p className="text-gray-600">Send voice messages while breathing</p>
                    <p className="text-sm text-orange-600 italic">We can hear your gains through the phone</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Savage FAQ */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Frequently Asked Questions (By Confused People)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-white/70 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Q: Is this real?</p>
              <p className="text-gray-600 text-sm">A: As real as your gym motivation on Monday 💪</p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Q: How does air have protein?</p>
              <p className="text-gray-600 text-sm">A: Same way your selfies get likes - pure magic ✨</p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Q: Can I cancel anytime?</p>
              <p className="text-gray-600 text-sm">A: You can try, but you'll keep breathing anyway 😏</p>
            </div>
            <div className="p-4 bg-white/70 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">Q: Side effects?</p>
              <p className="text-gray-600 text-sm">A: Excessive confidence and random flexing 💪</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
