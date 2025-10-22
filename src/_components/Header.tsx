import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const location = useLocation()

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const contactSection = document.querySelector('#contact')
      contactSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Ortada Başlık */}
          <div className="flex-1 flex justify-center">
            <h1 className=" md:text-3xl cursor-pointer font-semibold text-gray-900">
              Bilimsel Araştırma ve Teknoloji Kulubü
            </h1>
          </div>

          {/* Butonlar */}
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollToContact}
              className="bg-[#fbca1f] px-[1.3em] py-[0.6em] font-black text-lg border-3 border-black rounded-[1em] shadow-[0.2em_0.2em_black] cursor-pointer transition-all duration-150 hover:translate-x-[0.2em] hover:translate-y-[0.2em] hover:shadow-[0.0em_0.0em_black]"
            >
              İletişime Geç
            </button>
            <Link 
              to="/pano"
              className="bg-[#1ABCAA] text-white px-[1.3em] py-[0.6em] font-black text-lg border-3 border-black rounded-[1em] shadow-[0.2em_0.2em_black] cursor-pointer transition-all duration-150 hover:translate-x-[0.2em] hover:translate-y-[0.2em] hover:shadow-[0.0em_0.0em_black]"
            >
              Pano
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

