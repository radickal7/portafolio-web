import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { services } from "../data/services"

export default function Services() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = `${t("servicesPage.heroTitle")} | JuanDev`
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute("content", t("servicesPage.heroSubtitle"))
  }, [t])
  return (
    <main className="pt-[72px] pb-16">
      <section className="border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10">
          <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-white">{t("servicesPage.heroTitle")}</h1>
          <p className="mt-3 text-slate-400 max-w-2xl">{t("servicesPage.heroSubtitle")}</p>
        </div>
      </section>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] hover:border-white/15 transition block">
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{s.description}</p>
            <span className="inline-flex mt-4 text-xs font-semibold text-indigo-300">{t("servicesPage.viewService")} →</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
