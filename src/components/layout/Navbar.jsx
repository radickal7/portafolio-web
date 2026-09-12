import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaGlobe } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(newLang)
  }

  const handleNav = (hash) => {
    setOpen(false)
    if (location.pathname !== "/") {
      navigate(`/${hash}`)
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const links = [
    { label: t("nav.home"), hash: "#home" },
    { label: t("nav.services", "Servicios"), hash: "#servicios" },
    { label: t("nav.projects"), hash: "#projects" },
    { label: t("nav.create", "Creador de Apps"), hash: "/create", isRoute: true },
    { label: t("nav.about"), hash: "#about" },
    { label: t("nav.contact"), hash: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#020617]/70 backdrop-blur-xl">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 h-[64px] flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="JuanDev home">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">JD</div>
          <div className="leading-none">
            <div className="text-white font-bold tracking-tight text-[15px]">JUANDEV</div>
            <div className="text-[10px] tracking-[0.18em] text-slate-400 font-medium">PRODUCT STUDIO</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-slate-300">
          {links.map((l) =>
            l.isRoute ? (
              <Link key={l.hash} to={l.hash} className="hover:text-white transition">
                {l.label}
              </Link>
            ) : (
              <button key={l.hash} onClick={() => handleNav(l.hash)} className="hover:text-white transition">
                {l.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-slate-400 hover:text-white transition text-xs font-medium border border-white/10 rounded-full px-3 py-1.5">
            <FaGlobe size={12} />
            <span className="uppercase">{i18n.language}</span>
          </button>
          <Link to="/create" className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-full text-[13.5px] font-semibold transition">
            {t("nav.cta", "Crear mi proyecto")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-slate-300 text-xs border border-white/10 rounded-full px-2.5 py-1.5">
            <FaGlobe size={14} /> <span className="uppercase">{i18n.language}</span>
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 text-white">
            {open ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden border-t border-white/5 bg-[#020617]/95 backdrop-blur-xl">
            <div className="px-5 py-5 flex flex-col gap-4">
              {links.map((l) =>
                l.isRoute ? (
                  <Link key={l.hash} to={l.hash} onClick={() => setOpen(false)} className="text-slate-200 font-medium py-2">
                    {l.label}
                  </Link>
                ) : (
                  <button key={l.hash} onClick={() => handleNav(l.hash)} className="text-left text-slate-200 font-medium py-2">
                    {l.label}
                  </button>
                )
              )}
              <Link to="/create" onClick={() => setOpen(false)} className="mt-2 bg-white text-slate-900 text-center py-3 rounded-full font-semibold">
                {t("nav.cta", "Crear mi proyecto")} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
