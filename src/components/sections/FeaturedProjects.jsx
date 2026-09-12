import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { projects } from "../../data/projects"

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">PORTAFOLIO</div>
            <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">Proyectos destacados</h2>
            <p className="mt-3 text-slate-400 max-w-xl">Casos reales, no demos. Cada proyecto resuelve un problema de negocio completo.</p>
          </div>
          <Link to="/projects" className="hidden md:inline-flex text-sm font-semibold text-white border border-white/15 rounded-full px-4 py-2 hover:bg-white/5">Ver todos →</Link>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {[...projects].sort((a,b)=>Number(b.featured)-Number(a.featured)).map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden flex flex-col">
              <div className="aspect-[16/10] overflow-hidden bg-[#0b1220]">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] tracking-widest font-semibold px-2 py-1 rounded-full bg-white text-slate-900">{p.category}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">{p.status}</span>
                {p.featured && <span className="text-[10px] px-2 py-1 rounded-full bg-indigo-500 text-white font-semibold">Destacado</span>}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.shortDescription || p.summary}</p>
              <p className="mt-3 text-sm text-slate-300/80 leading-relaxed line-clamp-3">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-1.5">
                {p.features.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs text-slate-400">• {f}</span>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">¿Quieres construir algo parecido?</div>
              <div className="mt-3 flex gap-2">
                <Link to={`/projects/${p.slug}`} className="flex-1 bg-white text-slate-900 rounded-full py-2.5 text-sm font-semibold text-center hover:bg-slate-100">Ver caso de estudio →</Link>
                <Link to="/create" className="flex-1 border border-white/15 text-white rounded-full py-2.5 text-sm font-semibold text-center hover:bg-white/5">Crear similar →</Link>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
