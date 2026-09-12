const steps = [
  { n: "01", t: "Idea", d: "Definimos qué quieres construir y para quién." },
  { n: "02", t: "Plan", d: "Convertimos la idea en funcionalidades y alcance priorizado." },
  { n: "03", t: "Diseño", d: "Estructura, flujos y experiencia. Prototipo navegable si aplica." },
  { n: "04", t: "Desarrollo", d: "Frontend, backend, base de datos e integraciones." },
  { n: "05", t: "Pruebas", d: "QA funcional, performance y validación con usuarios." },
  { n: "06", t: "Lanzamiento", d: "Deploy a producción, métricas y plan de evolución." },
]

export default function Process() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">PROCESO</div>
        <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">Cómo trabajo</h2>
        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-2xl font-extrabold tracking-tight text-white">{s.n}</div>
              <div className="text-sm font-semibold text-white mt-2">{s.t}</div>
              <div className="text-sm text-slate-400 mt-2 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
