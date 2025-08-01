import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <img 
                src="/partner-logo.svg" 
                alt="Partner Logo" 
                className="h-32 sm:h-40 md:h-48 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Sektörünüzdeki rekabetçi partneriniz. Modern yazılım çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base">Ana Sayfa</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base">Hizmetler</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base">Hakkımızda</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">İletişim</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@partner.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 PARTNER Innovation Technologies. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;