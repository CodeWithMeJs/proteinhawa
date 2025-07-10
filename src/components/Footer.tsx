
import { Heart, Wind } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-gradient">ProteinHawa</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              India's first and only air-based protein delivery system. 
              We're making fitness accessible to everyone who breathes (which is everyone, hopefully).
            </p>
            <p className="text-sm text-gray-400 italic">
              "Breathe in gains, breathe out excuses" - Our Founder (probably)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">How It Works (Magic)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Scientific Proof (Fake)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Success Stories (Real)</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Air Quality Report</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-pink-400">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Breathing Tutorial</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Air Delivery Issues</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Refund Policy (LOL)</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Report Bugs (in Air)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5 text-orange-400 animate-spin" />
              <span className="text-gray-300">Breathing since 2024</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and premium air in India</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            <strong>Disclaimer:</strong> ProteinHawa is a satirical concept created for entertainment purposes. 
            Please don't actually expect to get protein from air. Do consult real nutritionists and not meme websites. 
            Side effects may include uncontrollable laughter and sharing this with friends. 
            No actual air was harmed in making this website.
            <br />
            <span className="text-orange-400 font-semibold">
              Remember: Real protein comes from real food, not memes! 🍗💪
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
