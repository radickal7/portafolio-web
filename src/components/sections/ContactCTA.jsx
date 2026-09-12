import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function ContactCTA() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">{t("cta.title")}</h2>
            <p className="mt-3 text-slate-400 max-w-xl">{t("cta.description")}</p>
            <div className="mt-2 text-xs text-slate-500">Respuesta en 24h · Sin compromiso</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/create" className="bg-white text-slate-900 px-6 py-3.5 rounded-full font-semibold text-center hover:bg-slate-100">{t("cta.button")} →</Link>
            <a href="mailto:juanjmacchiarulo@gmail.com" className="border border-white/15 text-white px-6 py-3.5 rounded-full font-semibold text-center hover:bg-white/5">juanjmacchiarulo@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
