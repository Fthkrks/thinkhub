import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    mesaj: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form gönderildi:", formData);
    // Form gönderme işlemleri buraya
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-20 flex items-center">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">
            İLETİŞİME GEÇ
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Bize Ulaşın, Birlikte Harika Şeyler Yapalım!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="border-8 border-black rounded-lg bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12"
          >
            {/* İsim ve Soyisim Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Ad */}
              <div>
                <label
                  htmlFor="ad"
                  className="block text-lg font-black text-gray-900 mb-3 uppercase"
                >
                  Ad
                </label>
                <input
                  type="text"
                  id="ad"
                  name="ad"
                  value={formData.ad}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-[#fbca1f] focus:border-black font-semibold text-gray-900 transition-all"
                  placeholder="Adınızı girin"
                />
              </div>

              {/* Soyad */}
              <div>
                <label
                  htmlFor="soyad"
                  className="block text-lg font-black text-gray-900 mb-3 uppercase"
                >
                  Soyad
                </label>
                <input
                  type="text"
                  id="soyad"
                  name="soyad"
                  value={formData.soyad}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-[#fbca1f] focus:border-black font-semibold text-gray-900 transition-all"
                  placeholder="Soyadınızı girin"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-black text-gray-900 mb-3 uppercase"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-4 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-[#fbca1f] focus:border-black font-semibold text-gray-900 transition-all"
                placeholder="ornek@email.com"
              />
            </div>

            {/* Mesaj */}
            <div className="mb-8">
              <label
                htmlFor="mesaj"
                className="block text-lg font-black text-gray-900 mb-3 uppercase"
              >
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-4 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-[#fbca1f] focus:border-black font-semibold text-gray-900 resize-none transition-all"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            {/* Gönder Butonu */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#fbca1f] hover:bg-[#1ABCAA] px-[2em] py-[0.8em] font-black text-xl border-3 border-black rounded-[0.4em] shadow-[0.2em_0.2em_black] cursor-pointer transition-all duration-150 hover:translate-x-[0.2em] hover:translate-y-[0.2em] hover:shadow-[0.0em_0.0em_black] uppercase"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="max-w-3xl mx-auto mt-12 flex justify-center gap-8">
          {/* Email */}
          <div className="border-4 border-black rounded-lg bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-black text-gray-900 mb-2 uppercase">Email</h3>
            <p className="text-gray-700 text-sm font-semibold break-all">
              info@thinkhub.com
            </p>
          </div>

          {/* Telefon */}
          <div className="border-4 border-black rounded-lg bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-black text-gray-900 mb-2 uppercase">Telefon</h3>
            <p className="text-gray-700 text-sm font-semibold">
              +90 555 123 4567
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;

