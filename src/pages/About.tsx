import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb, Heart, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "İnovasyon",
      description: "En son teknolojileri takip ederek yenilikçi çözümler geliştiriyoruz."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin başarısı bizim önceliğimizdir."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Kalite",
      description: "Yüksek kalite standartlarını her projemizde uygularız."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Hızlı Teslimat",
      description: "Agile metodolojilerle hızlı ve etkili çözümler sunarız."
    }
  ];

  const team = [
    {
      name: "Muhammed Yıldıray Sürmen",
      role: "Kurucu & CTO",
      description: "Endüstri Mühendisi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Elif Kaya",
      role: "Lead Developer",
      description: "Full-stack geliştirme uzmanı",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mehmet Demir",
      role: "UI/UX Designer",
      description: "Kullanıcı deneyimi tasarım uzmanı",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Zeynep Çelik",
      role: "Project Manager",
      description: "Agile proje yönetimi uzmanı",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "100+", label: "Tamamlanan Proje" },
    { number: "5+", label: "Yıllık Deneyim" },
    { number: "24/7", label: "Teknik Destek" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Hakkımızda
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              PARTNER Innovation Technologies olarak, işletmelerin dijital dönüşüm yolculuğunda 
              güvenilir teknoloji ortağı olmaya odaklanıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Hikayemiz
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                2020 yılında kurulan PARTNER Innovation Technologies, teknoloji dünyasındaki 
                hızlı değişimleri yakından takip eden ve bu değişimleri müşterilerinin 
                rekabet avantajına dönüştüren bir yazılım şirketidir.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                Vizyonumuz, her sektörden işletmenin dijital dönüşüm sürecinde yanında olan, 
                yenilikçi çözümler sunan ve uzun vadeli ortaklıklar kuran bir teknoloji 
                partneri olmaktır.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                Misyonumuz ise, modern teknolojileri kullanarak müşterilerimizin iş süreçlerini 
                optimize etmek, verimliliği artırmak ve rekabetçi avantaj sağlamaktır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 mb-1 sm:mb-2" />
                <p className="text-sm sm:text-base font-semibold">Müşteri Memnuniyeti</p>
                <p className="text-xl sm:text-2xl font-bold">%98</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Değerlerimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Çalışma kültürümüzü şekillendiren ve her projemizde rehber aldığımız temel değerler.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center border border-gray-700"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-2 sm:p-3 rounded-xl w-fit mx-auto mb-3 sm:mb-4 shadow-lg">
                  {React.cloneElement(value.icon, { className: "h-6 w-6 sm:h-8 sm:w-8" })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Rakamlarla Biz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2">
              Başarılarımızı gösteren bazı önemli rakamlar
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ekibimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Deneyimli ve tutkulu uzmanlardan oluşan ekibimizle, en kaliteli hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-4 sm:p-6 rounded-2xl text-center hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 border border-gray-700"
              >
                <div className="relative mb-4 sm:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-amber-400 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;