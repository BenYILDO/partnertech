import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Zap, Shield, Globe, Code2, Smartphone, Cloud, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroGeometric from '@/components/ui/shape-landing-hero';

const Home = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Geliştirme",
      description: "Modern, responsive ve kullanıcı dostu web uygulamaları"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobil Uygulamalar",
      description: "iOS ve Android platformları için native ve hybrid uygulamalar"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Bulut Çözümleri",
      description: "Ölçeklenebilir ve güvenli bulut altyapı hizmetleri"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Veri Analizi",
      description: "İş zekası ve veri görselleştirme çözümleri"
    }
  ];

  const benefits = [
    "24/7 Teknik Destek",
    "Ölçeklenebilir Çözümler",
    "Güvenli Altyapı",
    "Hızlı Teslimat",
    "Uygun Fiyatlar",
    "Uzman Ekip"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroGeometric 
        badge="PARTNER Innovation Technologies"
        title1="Sektörünüzdeki"
        title2="Rekabetçi Partneriniz"
      />

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Neler Sunuyoruz?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Her sektörden işletmelere özel, modern ve ölçeklenebilir yazılım çözümleri geliştiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-4 sm:p-6 rounded-2xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-600"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                  {React.cloneElement(service.icon, { className: "h-6 w-6 sm:h-8 sm:w-8" })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Neden PARTNER Innovation Technologies?
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Teknoloji dünyasındaki deneyimimiz ve yenilikçi yaklaşımımızla, 
                işletmenizin dijital dönüşüm yolculuğunda güvenilir bir partner oluyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all border border-gray-700">
                  <Users className="h-8 w-8 sm:h-12 sm:w-12 text-amber-400 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">50+</h3>
                  <p className="text-sm sm:text-base text-gray-300">Mutlu Müşteri</p>
                </div>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all border border-gray-700">
                  <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-orange-400 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">100+</h3>
                  <p className="text-sm sm:text-base text-gray-300">Tamamlanan Proje</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-12">
                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all border border-gray-700">
                  <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">%99.9</h3>
                  <p className="text-sm sm:text-base text-gray-300">Uptime Garantisi</p>
                </div>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all border border-gray-700">
                  <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400 mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">24/7</h3>
                  <p className="text-sm sm:text-base text-gray-300">Teknik Destek</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Uzman ekibimizle tanışın ve işletmeniz için en uygun çözümü birlikte keşfedelim.
            </p>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Ücretsiz Görüşme Talep Edin
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;