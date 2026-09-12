import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  const project = projects[idx]

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Caso de estudio | JuanDev`
      const m = document.querySelector('meta[name="description"]')
      if (m) m.setAttribute("content", project.shortDescription)
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) ogTitle.setAttribute("content", `${project.title} | JuanDev`)
    }
  }, [project])

  if (!project) {
    return (
      <main className="pt-[88px] pb-16 max-w-[1280px] mx-auto px-5 lg:px-6">
        <h1 className="text-2xl font-bold text-white">Proyecto no encontrado</h1>
        <p className="text-slate-400 mt-2">El slug <code className="text-slate-300">{slug}</code> no existe.</p>
        <Link to="/projects" className="text-indigo-300 mt-6 inline-block">Ver todos los proyectos →</Link>
      </main>
    )
  }

  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    applicationCategory: project.category,
    operatingSystem: project.platform,
  }

  return (
    <main className="pt-[72px] pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-8 md:py-10 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <Link to="/projects" className="text-sm text-slate-400 hover:text-white">← Todos los proyectos</Link>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[11px] tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white text-slate-900">{project.category}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">{project.status}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">{project.platform}</span>
            </div>
            <h1 className="mt-4 text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">{project.title}</h1>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((t) => (<span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white text-slate-900 font-semibold">{t}</span>))}
            </div>
            <div className="mt-6 flex gap-3">
              {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100">Ver proyecto</a> : <span className="text-xs text-slate-500 py-2.5">Sin demo pública</span>}
              {project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="border border-white/15 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/5">Código</a> : null}
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-white/10 bg-[#0b1220]">
            <img src={project.image} alt={`Imagen principal de ${project.title}`} className="w-full aspect-[16/11] object-cover" loading="eager" />
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 mt-8 grid lg:grid-cols-12 gap-6">
        {/* Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Resumen rápido */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><div className="text-xs tracking-widest text-slate-500 font-semibold">TIPO</div><div className="text-sm text-white font-medium mt-1">{project.category}</div></div>
            <div><div className="text-xs tracking-widest text-slate-500 font-semibold">PLATAFORMA</div><div className="text-sm text-white font-medium mt-1">{project.platform}</div></div>
            <div><div className="text-xs tracking-widest text-slate-500 font-semibold">STACK</div><div className="text-sm text-white font-medium mt-1 truncate">{project.tech.slice(0,3).join(" + ")}</div></div>
            <div><div className="text-xs tracking-widest text-slate-500 font-semibold">ESTADO</div><div className="text-sm text-emerald-300 font-medium mt-1">{project.status}</div></div>
          </section>

          <Card title="El problema" text={project.problem} />
          <Card title="Objetivo" text={project.objective} />
          <Card title="La solución" text={project.solution} />

          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <h2 className="text-white font-semibold">Funcionalidades</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-2">
              {project.features.map((f) => (<div key={f} className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-sm text-slate-200">• {f}</div>))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold">Arquitectura</h2>
            <div className="mt-3 space-y-1.5 text-sm text-slate-300">
              {project.architecture.map((a) => (<div key={a}>— {a}</div>))}
            </div>
            <pre className="mt-4 rounded-xl bg-[#020617] border border-white/10 p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">{project.architectureVisual}</pre>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <h2 className="text-white font-semibold">Stack tecnológico</h2>
            {Object.entries(project.technologies).map(([cat, list]) => (
              list.length ? (
                <div key={cat} className="mt-4">
                  <div className="text-xs tracking-widest font-semibold text-slate-500 uppercase">{cat}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {list.map((t) => (<span key={t} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold">{t}</span>))}
                  </div>
                </div>
              ) : null
            ))}
            <p className="text-xs text-slate-500 mt-4">{project.stackReason}</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold">Retos técnicos</h2>
            <ul className="mt-3 space-y-3">
              {project.technicalChallenges.map((c) => (<li key={c} className="text-sm text-slate-300 leading-relaxed flex gap-3"><span className="text-indigo-400 mt-0.5">▸</span><span>{c}</span></li>))}
            </ul>
            {project.decisions?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-white">Decisiones</h3>
                <ul className="mt-2 space-y-2">
                  {project.decisions.map((d) => (<li key={d} className="text-sm text-slate-400">— {d}</li>))}
                </ul>
              </div>
            ) : null}
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <h2 className="text-white font-semibold">Resultado</h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">{project.results}</p>
          </section>

          {/* Galería */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-white font-semibold">Galería</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <a key={i} href={src} target="_blank" rel="noreferrer" className="rounded-xl overflow-hidden border border-white/10 bg-[#0b1220] block">
                  <img src={src} alt={`${project.title} captura ${i+1}`} loading="lazy" className="w-full aspect-[16/10] object-cover hover:scale-[1.02] transition" />
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">Imágenes reales del proyecto. Optimizadas con lazy loading.</p>
          </section>

          {/* Links */}
          {(project.liveUrl || project.repositoryUrl) && (
            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-wrap gap-3">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold">Ver proyecto</a>}
              {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="border border-white/15 text-white px-5 py-2.5 rounded-full text-sm font-semibold">Código</a>}
            </section>
          )}
        </div>

        {/* Sidebar CTA */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-[88px] h-fit">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
            <h3 className="text-white font-semibold">¿Quieres construir algo parecido?</h3>
            <p className="text-sm text-slate-400 mt-2">Cuéntame tu idea y podemos convertirla en un producto digital.</p>
            <Link to="/create" className="mt-4 block bg-white text-slate-900 rounded-full py-3 text-sm font-semibold text-center hover:bg-slate-100">Crear mi proyecto →</Link>
            <a href="mailto:juanjmacchiarulo@gmail.com" className="mt-2 block border border-white/15 text-white rounded-full py-2.5 text-sm font-semibold text-center hover:bg-white/5">Contactar</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
            <div className="text-xs tracking-widest font-semibold text-slate-500">NAVEGACIÓN</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {prev ? <Link to={`/projects/${prev.slug}`} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200 hover:bg-white/[0.06]">← {prev.title}</Link> : <span className="rounded-xl border border-white/5 p-3 text-sm text-slate-500">Inicio</span>}
              {next ? <Link to={`/projects/${next.slug}`} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200 hover:bg-white/[0.06] text-right">{next.title} →</Link> : <span className="rounded-xl border border-white/5 p-3 text-sm text-slate-500 text-right">Final</span>}
            </div>
            <Link to="/projects" className="mt-3 block text-center text-sm text-indigo-300 hover:text-white">Ver todos los proyectos</Link>
          </div>
        </aside>
      </div>
    </main>
  )
}

function Card({ title, text }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-white font-semibold">{title}</h2>
      <p className="text-sm text-slate-300 mt-3 leading-relaxed">{text}</p>
    </section>
  )
}
