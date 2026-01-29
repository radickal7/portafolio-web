import { FaGlobe } from "react-icons/fa"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { t, i18n } = useTranslation()

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

        <ul className="hidden md:flex gap-10 text-gray-300 text-lg">
          <li><a href="#home" className="hover:text-white">{t("nav.home")}</a></li>
          <li><a href="#projects" className="hover:text-white">{t("nav.projects")}</a></li>
          <li><a href="#about" className="hover:text-white">{t("nav.about")}</a></li>
          <li><a href="#contact" className="hover:text-white">{t("nav.contact")}</a></li>
        </ul>

        <button onClick={toggleLanguage} className="flex items-center gap-2 text-gray-300 hover:text-white">
          <FaGlobe size={20} />
          <span className="text-sm uppercase">{i18n.language}</span>
        </button>
      </div>
    </nav>
  )
}
