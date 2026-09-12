import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) {
    return (
      <main className="pt-[88px] pb-16 max-w-[1280px] mx-auto px-5 lg:px-6">
        <h1 className="text-2xl font-bold text-white">Proyecto no encontrado</h1>
        <Link to="/" className="text-indigo-300 mt-4 inline-block">← Volver</Link>
      </main>
    )
  }
  return (
    <main className="pt-[88px] pb-16">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <Link to="/#projects" className="text-sm text-slate-400 hover:text-white">← Volver a proyectos</Link>
        <div className="mt-6">
          <span className="text-xs tracking-widest font-semibold px-2 py-1 rounded-full bg-white text-slate-900">{project.category}</span>
          <h1 className="mt-4 text-[32px] font-bold tracking-[-0.02em] text-white">{project.title}</h1>
          <p className="mt-3 text-slate-400 max-w-2xl">{project.description}</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-white font-semibold">Problema</h2>
              <p className="text-sm text-slate-400 mt-2">Negocio necesitaba digitalizar operaciones sin fricción para clientes y con control total para administradores.</p>
            </section>
            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-white font-semibold">Solución</h2>
              <p className="text-sm text-slate-400 mt-2">Producto web con roles, pagos, chat y dashboard. Arquitectura escalable con API robusta y base de datos relacional.</p>
              <div className="mt-4 grid md:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <div key={f} className="rounded-xl bg-[#0b1220] border border-white/10 p-3 text-sm text-slate-200">• {f}</div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-white font-semibold">Tecnologías</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (<span key={t} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold">{t}</span>))}
              </div>
            </section>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
              <div className="text-sm font-semibold text-white">¿Quieres algo así?</div>
              <p className="text-sm text-slate-400 mt-2">Puedo construir una versión adaptada a tu negocio.</p>
              <Link to="/create" className="mt-4 block bg-white text-slate-900 rounded-full py-2.5 text-sm font-semibold text-center">Crear mi proyecto →</Link>
              <a href="mailto:juanjmacchiarulo@gmail.com" className="mt-2 block border border-white/15 text-white rounded-full py-2.5 text-sm font-semibold text-center">Contactar</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="text-sm font-semibold text-white">Estado</div>
              <div className="mt-2 text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 inline-block">{project.status}</div>
              <div className="mt-4 text-xs text-slate-500">Stack real usado en producción. No demos ficticios.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
