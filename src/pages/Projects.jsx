import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <main className="pt-[88px] pb-16">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <h1 className="text-[32px] font-bold text-white tracking-[-0.02em]">Proyectos</h1>
        <p className="text-slate-400 mt-2">Casos de estudio con arquitectura, funcionalidades y tecnologías.</p>
        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.slug} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="text-xs tracking-widest font-semibold px-2 py-1 rounded-full bg-white text-slate-900">{p.category}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{p.summary}</p>
              <Link to={`/projects/${p.slug}`} className="mt-4 inline-flex bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">Ver caso →</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
