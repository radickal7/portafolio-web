import { useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

const categories = ["Todos", "Web App", "SaaS", "Sistema", "IA", "Backend / APIs", "Otros"]

function getFilters(project) {
  if (project.category === "Web App") return ["Web App"]
  if (project.category === "SaaS") return ["SaaS"]
  if (project.category === "Sistema") return ["Sistema"]
  if (project.category.toLowerCase().includes("ia")) return ["IA"]
  return ["Otros"]
}

export default function Projects() {
  const [active, setActive] = useState("Todos")
  useEffect(() => {
    document.title = "Proyectos | JuanDev — Casos de estudio"
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute("content", "Proyectos que convierten ideas en software. Aplicaciones, sistemas y productos digitales diseñados y desarrollados.")
  }, [])

  const filtered = useMemo(() => {
    const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
    if (active === "Todos") return sorted
    return sorted.filter((p) => getFilters(p).includes(active))
  }, [active])

  return (
    <main className="pt-[72px] pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 -z-10 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_30%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10 md:py-14">
          <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">Proyectos que convierten ideas en software</h1>
          <p className="mt-4 text-slate-400 max-w-2xl">Una selección de aplicaciones, sistemas y productos digitales que he diseñado y desarrollado.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtros de proyectos">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${active === c ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.06] hover:text-white"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-2 text-xs text-slate-500">{filtered.length} proyecto{filtered.length !== 1 ? "s" : ""} {active !== "Todos" ? `en ${active}` : ""}</div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <article key={p.slug} className="group rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden flex flex-col hover:border-white/15 transition">
              <div className="aspect-[16/10] overflow-hidden bg-[#0b1220] relative">
                <img src={p.image} alt={`Preview de ${p.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[11px] tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white text-slate-900">{p.category}</span>
                  {p.featured && <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500 text-white">Destacado</span>}
                </div>
                <div className="absolute bottom-3 right-3 text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">{p.status}</div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (<span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">{t}</span>))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Link to={`/projects/${p.slug}`} className="flex-1 bg-white text-slate-900 rounded-full py-2.5 text-sm font-semibold text-center hover:bg-slate-100">Ver caso de estudio →</Link>
                  {p.liveUrl ? <a href={p.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold hover:bg-white/5">Ver proyecto</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && <div className="text-center py-16 text-slate-400">No hay proyectos en esta categoría.</div>}
      </div>
    </main>
  )
}
