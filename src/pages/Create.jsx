import { useEffect } from "react"
import ProjectBuilder from "../components/project-builder/ProjectBuilder"

export default function Create() {
  useEffect(() => {
    document.title = "Creador de Apps | JuanDev"
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", "Define tu idea, funcionalidades y plataforma para comenzar a convertir tu proyecto en un producto digital.")
  }, [])

  return (
    <main className="pt-[72px] pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_-10%,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">Creador de Apps · JuanDev Product Studio</div>
            <h1 className="mt-4 text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">Convierte tu idea en una aplicación.</h1>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-xl">Cuéntame qué quieres construir y te ayudaré a definir las funcionalidades, plataformas y características necesarias para convertir tu idea en un producto digital.</p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a href="#builder" className="bg-white text-slate-900 px-6 py-3.5 rounded-full font-semibold hover:bg-slate-100">Comenzar proyecto →</a>
              <span className="text-xs text-slate-500">Toma menos de 2 minutos</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs tracking-widest text-slate-400">FLUJO</div>
              <div className="mt-2 text-sm text-slate-200">Tipo → Funciones → Plataforma → Estado → Prioridades → Descripción → Presupuesto → Resumen</div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">1. Definir</div><div className="text-slate-400">Qué construir</div></div>
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">2. Diseñar</div><div className="text-slate-400">Cómo funciona</div></div>
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">3. Lanzar</div><div className="text-slate-400">Puesta en producción</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="builder" className="max-w-[1280px] mx-auto px-5 lg:px-6 mt-2">
        <ProjectBuilder />
        <div className="mt-8 text-center text-xs text-slate-500">Al solicitar propuesta se abrirá tu cliente de correo con el brief estructurado. Payload incluye <code className="text-slate-400">projectType, features, platforms, projectStage, priorities, description, budget, estimatedComplexity, estimatedRange</code>. Sin almacenamiento permanente.</div>
      </div>
    </main>
  )
}
