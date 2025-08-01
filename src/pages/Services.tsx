import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, BarChart3, Shield, Globe, Database, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "Web Geliştirme",
      description: "Modern, responsive ve performanslı web uygulamaları geliştiriyoruz.",
      features: ["React/Next.js", "Node.js Backend", "Responsive Design", "SEO Optimizasyonu"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobil Uygulama",
      description: "iOS ve Android platformları için native ve hybrid uygulamalar.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Bulut Çözümleri",
      description: "Ölçeklenebilir ve güvenli bulut altyapı hizmetleri sunuyoruz.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD", "Container Teknolojileri"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Veri Analizi",
      description: "İş zekası ve veri görselleştirme çözümleri ile karar destek sistemleri.",
      features: ["Power BI", "Tableau", "Python/R", "Machine Learning"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Siber Güvenlik",
      description: "Comprehensive güvenlik testleri ve güvenlik danışmanlığı hizmetleri.",
      features: ["Penetration Testing", "Security Audit", "Güvenlik Eğitimleri", "Compliance"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Veritabanı Yönetimi",
      description: "Veritabanı tasarımı, optimizasyon ve yönetim hizmetleri.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Performance Tuning"],
      color: "from-teal-600 to-green-600"
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "AI & ML Çözümleri",
      description: "Yapay zeka ve makine öğrenmesi tabanlı akıllı sistemler.",
      features: ["NLP", "Computer Vision", "Predictive Analytics", "ChatBots"],
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Dijital Dönüşüm",
      description: "İşletmelerin dijital dönüşüm süreçlerinde danışmanlık ve uygulama.",
      features: ["Süreç Analizi", "Teknoloji Roadmap", "Change Management", "Training"],
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const industries = [
    { name: "E-ticaret", description: "Online satış platformları ve entegrasyon çözümleri" },
    { name: "Fintech", description: "Finansal teknoloji uygulamaları ve ödeme sistemleri" },
    { name: "Sağlık", description: "Hasta yönetim sistemleri ve tıbbi uygulama çözümleri" },
    { name: "Eğitim", description: "E-öğrenme platformları ve eğitim yönetim sistemleri" },
    { name: "Lojistik", description: "Kargo takip ve filo yönetim sistemleri" },
    { name: "Üretim", description: "Endüstri 4.0 ve akıllı fabrika çözümleri" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Profesyonel Yazılım Hizmetleri
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Her sektörden işletmelere özel, modern teknolojilerle geliştirilen 
              kapsamlı yazılım çözümleri sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Uzman ekibimizle, en son teknolojileri kullanarak size özel çözümler geliştiriyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-gray-700 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 sm:p-6 text-white`}>
                  <div className="mb-3 sm:mb-4">
                    {React.cloneElement(service.icon, { className: "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{service.title}</h3>
                </div>
                
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{service.description}</p>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Çalıştığımız Sektörler
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Farklı sektörlerden deneyimlerimizle, her işletmenin kendine özgü ihtiyaçlarına çözüm üretiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-gray-700"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{industry.name}</h3>
                <p className="text-sm sm:text-base text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Projelerinizi baştan sona profesyonel bir süreçle yönetiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Analiz", description: "İhtiyaçlarınızı detaylı analiz ediyoruz" },
              { step: "02", title: "Tasarım", description: "Kullanıcı deneyimi odaklı tasarım yapıyoruz" },
              { step: "03", title: "Geliştirme", description: "Modern teknolojilerle kodluyoruz" },
              { step: "04", title: "Teslimat", description: "Test edilmiş çözümü teslim ediyoruz" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
              </motion.div>
            ))}
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
              Projenizi Hemen Başlatalım
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
              Uzman ekibimizle tanışın ve size özel çözümünüzü keşfedelim.
            </p>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              Teklif Alın
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;