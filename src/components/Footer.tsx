
import { Heart, Wind, Skull, Gamepad2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 transform hover:scale-105 transition-all">
              <span className="text-gradient animate-pulse">ProteinHawa</span>
              <span className="text-2xl animate-spin inline-block ml-2">💨</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              India ka pehla aur sabse bakwas air-based protein delivery system. 
              We're making fitness accessible to everyone jo breathe kar sakta hai (which is hopefully everyone).
            </p>
            <p className="text-sm text-gray-400 italic animate-bounce">
              "Breathe in gains, breathe out stupidity" - Our Founder (probably high on oxygen)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400 animate-pulse">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-105 inline-block">How It Works (Pure Magic)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-105 inline-block">Scientific Proof (Totally Fake)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-105 inline-block">Success Stories (Very Real)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-105 inline-block">Hawa Quality Report</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors transform hover:scale-105 inline-block">Terms & Conditions (Unreadable)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-pink-400 animate-pulse">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-105 inline-block">Breathing Tutorial (Seriously?)</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-105 inline-block">Hawa Delivery Issues</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-105 inline-block">Refund Policy (LOL Good Luck)</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-105 inline-block">Community Forum (Meme Central)</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-105 inline-block">Report Bugs (In Hawa)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5 text-orange-400 animate-spin" />
              <span className="text-gray-300">Breathing since 2024 (obviously)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>aur premium hawa in India</span>
            <Skull className="w-4 h-4 text-yellow-400 animate-bounce" />
          </div>
        </div>

        {/* Chaotic Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border-2 border-red-500 animate-pulse">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong className="text-red-400 animate-bounce">⚠️ SUPER IMPORTANT DISCLAIMER ⚠️</strong><br/>
            ProteinHawa is a completely satirical concept created for maximum entertainment aur laughter. 
            Please don't actually expect protein from hawa - that's called delusion, not nutrition! 
            Real nutritionists se baat karo, meme websites se nahi. 
            Side effects include: uncontrollable hassi, dosto ka tumhe pagal samajhna, aur becoming a living meme yourself.
            <br />
            <span className="text-orange-400 font-semibold animate-pulse">
              Yaad rakhna bhai: Real protein comes from real food, not from bakwas hawa! 🍗💪
            </span>
            <br />
            <span className="text-yellow-400 text-xs animate-bounce">
              P.S. - Agar tumne yeh seriously liya hai toh please doctor se milo, hawa specialist se nahi! 🏥
            </span>
          </p>
        </div>

        {/* Extra Meme Section */}
        <div className="mt-4 text-center">
          <div className="flex justify-center space-x-4 text-2xl animate-bounce">
            <span>🤡</span>
            <span>💨</span>
            <span>💪</span>
            <span>😂</span>
            <span>🚫</span>
            <span>🧠</span>
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">
            "Hawa se protein lene wale log exist karte hain" - Nobody ever, because it's impossible!
          </p>
        </div>
      </div>
    </footer>
  );
};
