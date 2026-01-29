import { useState } from "react"
import { FaGlobe } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl tracking-wide">
          Juan<span className="text-indigo-400">Dev</span>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 text-lg">
          <li><a href="#home" className="hover:text-white">{t("nav.home")}</a></li>
          <li><a href="#projects" className="hover:text-white">{t("nav.projects")}</a></li>
          <li><a href="#about" className="hover:text-white">{t("nav.about")}</a></li>
          <li><a href="#contact" className="hover:text-white">{t("nav.contact")}</a></li>
        </ul>

        {/* Desktop language toggle */}
        <div className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer" onClick={toggleLanguage}>
          <FaGlobe size={20} />
          <span className="text-sm uppercase">{i18n.language}</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-gray-300 hover:text-white">
            <FaGlobe size={20} />
            <span className="text-sm uppercase">{i18n.language}</span>
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX className="text-white w-6 h-6" /> : <HiMenu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6">
          <a href="#home" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">{t("nav.home")}</a>
          <a href="#projects" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">{t("nav.projects")}</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">{t("nav.about")}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">{t("nav.contact")}</a>
        </div>
      )}
    </nav>
  )
}
