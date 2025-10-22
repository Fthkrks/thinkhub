import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#who" },
    { name: "S.S.S", href: "#faq" },
    { name: "İletişim", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "GitHub", icon: "💻", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 border-t-8 border-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="ThinkHub Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-lg font-semibold leading-relaxed mb-6">
              Beykent Üniversitesi teknoloji ve yazılım topluluğu. Birlikte
              öğrenip, birlikte üretiyoruz!
            </p>
            {/* Sosyal Medya */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-[#fbca1f] border-3 border-black rounded-lg flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase text-[#fbca1f]">
              Hızlı Erişim
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-lg font-semibold hover:text-[#fbca1f] transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-2xl font-black mb-6 uppercase text-[#fbca1f]">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-gray-400 text-sm font-black uppercase">
                    Email
                  </p>
                  <p className="text-gray-300 font-semibold text-sm break-all">
                    info@thinkhub.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-gray-400 text-sm font-black uppercase">
                    Telefon
                  </p>
                  <p className="text-gray-300 font-semibold text-sm">
                    +90 555 123 4567
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-gray-400 text-sm font-black uppercase">
                    Adres
                  </p>
                  <p className="text-gray-300 font-semibold text-sm">
                    Beykent Üniversitesi
                    <br />
                    İstanbul, Türkiye
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Copyright */}
        <div className="mt-12 pt-8 border-t-4 border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-semibold text-center md:text-left">
              © {new Date().getFullYear()} ThinkHub. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-[#fbca1f] transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-[#fbca1f] transition-colors"
              >
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

