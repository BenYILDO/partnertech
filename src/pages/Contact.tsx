import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-posta",
      info: "info@partner.com",
      description: "7/24 e-posta desteği"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      info: "+90 (555) 123 45 67",
      description: "Pazartesi - Cuma, 09:00 - 18:00"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adres",
      info: "İstanbul, Türkiye",
      description: "Merkez ofisimiz"
    }
  ];

  const services = [
    "Web Geliştirme",
    "Mobil Uygulama",
    "Bulut Çözümleri",
    "Veri Analizi",
    "Siber Güvenlik",
    "AI & ML Çözümleri",
    "Dijital Dönüşüm",
    "Diğer"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              İletişime Geçin
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Projenizi hayata geçirmek için bugün bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center border border-gray-700"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-2 sm:p-3 rounded-xl w-fit mx-auto mb-3 sm:mb-4 shadow-lg">
                  {React.cloneElement(item.icon, { className: "h-5 w-5 sm:h-6 sm:w-6" })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-amber-400 font-medium mb-1 text-sm sm:text-base">{item.info}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Proje Teklifi Alın
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2">
              Detaylı bilgi ve ücretsiz teklif için formu doldurun
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700"
          >
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-10 md:py-12">
                <CheckCircle className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Mesajınız Gönderildi!</h3>
                <p className="text-gray-300 text-sm sm:text-base">En kısa sürede size geri dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      {...register('name', { required: 'Ad soyad gereklidir' })}
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Adınız ve soyadınız"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-posta *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'E-posta gereklidir',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Geçerli bir e-posta adresi girin'
                        }
                      })}
                      type="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="ornek@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Şirket
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Şirket adınız"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telefon
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="+90 (555) 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Hizmet seçin</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    {...register('message', { required: 'Mesaj gereklidir' })}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base sm:rows-6"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Mesaj Gönder
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center border border-gray-700"
            >
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Hızlı Yanıt</h3>
              <p className="text-gray-300 text-sm sm:text-base">24 saat içinde size geri dönüş yapıyoruz</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center border border-gray-700"
            >
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Uzman Ekip</h3>
              <p className="text-gray-300 text-sm sm:text-base">Deneyimli yazılım uzmanları ile çalışıyoruz</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 text-center border border-gray-700 sm:col-span-2 md:col-span-1"
            >
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Kalite Garantisi</h3>
              <p className="text-gray-300 text-sm sm:text-base">Projelerinizde %100 kalite garantisi veriyoruz</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;