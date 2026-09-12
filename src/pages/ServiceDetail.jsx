import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { services } from "../data/services"
import { projects } from "../data/projects"

export default function ServiceDetail() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | JuanDev`
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute("content", service.description)
    }
  }, [service, t])

  if (!service) {
    return (
      <main className="pt-[88px] pb-16 max-w-[1280px] mx-auto px-5 lg:px-6">
        <h1 className="text-2xl font-bold text-white">{t("serviceDetail.back")} — 404</h1>
        <Link to="/services" className="text-indigo-300 mt-4 inline-block">{t("serviceDetail.viewAll")} →</Link>
      </main>
    )
  }

  const related = projects.filter((p) => service.relatedProjects.includes(p.slug))

  return (
    <main className="pt-[72px] pb-16">
      <section className="border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10">
          <Link to="/services" className="text-sm text-slate-400 hover:text-white">← {t("serviceDetail.back")}</Link>
          <h1 className="mt-4 text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-white">{service.title}</h1>
          <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">{service.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/create" className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-100">{t("serviceDetail.createProject")} →</Link>
            <Link to="/projects" className="border border-white/15 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5">{t("serviceDetail.viewProjects")}</Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 mt-8 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Section title={t("serviceDetail.problem")} text={service.problem} />
          <Section title={t("serviceDetail.solution")} text={service.solution} />

          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <h2 className="text-white font-semibold">{t("serviceDetail.whatICanCreate")}</h2>
            <div className="mt-3 grid md:grid-cols-2 gap-2">
              {service.capabilities.map((c) => (<div key={c} className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-sm text-slate-200">• {c}</div>))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold">{t("serviceDetail.functionalities")}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.functionalities.map((f) => (<span key={f} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs">{f}</span>))}
            </div>
            <p className="text-xs text-slate-500 mt-3">{t("serviceDetail.functionalitiesNote")}</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <h2 className="text-white font-semibold">{t("serviceDetail.technologies")}</h2>
            {Object.entries(service.technologies).map(([cat, list]) => (
              <div key={cat} className="mt-4">
                <div className="text-xs tracking-widest font-semibold text-slate-500 uppercase">{cat}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {list.map((tech) => (<span key={tech} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold">{tech}</span>))}
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold">{t("serviceDetail.process")}</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {["01 — Analizar","02 — Planificar","03 — Diseñar","04 — Desarrollar","05 — Probar","06 — Lanzar"].map((p) => (
                <div key={p} className="rounded-xl bg-[#0b1220] border border-white/10 p-4">
                  <div className="text-white font-bold text-sm">{p}</div>
                  <div className="text-xs text-slate-400 mt-1">Iterative</div>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
              <h2 className="text-white font-semibold">{t("serviceDetail.related")}</h2>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] block">
                    <div className="text-xs text-slate-400">{p.category} {p.badge ? `· ${p.badge}` : ""}</div>
                    <div className="text-white font-semibold mt-1">{p.title}</div>
                    <div className="text-sm text-slate-400 mt-1 line-clamp-2">{p.shortDescription}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-[88px] h-fit">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <h3 className="text-white font-semibold">{t("serviceDetail.ctaTitle")}</h3>
            <p className="text-sm text-slate-400 mt-2">{t("serviceDetail.ctaDesc")}</p>
            <Link to="/create" className="mt-4 block bg-white text-slate-900 rounded-full py-3 text-sm font-semibold text-center hover:bg-slate-100">{t("serviceDetail.createProject")} →</Link>
          </div>
          <Link to="/services" className="block text-center text-sm text-indigo-300 hover:text-white">{t("serviceDetail.viewAll")}</Link>
        </aside>
      </div>
    </main>
  )
}

function Section({ title, text }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-white font-semibold">{title}</h2>
      <p className="text-sm text-slate-300 mt-3 leading-relaxed">{text}</p>
    </section>
  )
}
