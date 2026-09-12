import { useEffect } from "react"
import { Link } from "react-router-dom"
import { services } from "../data/services"

export default function Services() {
  useEffect(() => {
    document.title = "Servicios | JuanDev — Desarrollo de productos digitales"
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute("content", "Cada servicio resuelve un problema concreto. No es una lista de tecnologías, es valor de negocio.")
  }, [])
  return (
    <main className="pt-[72px] pb-16">
      <section className="border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10">
          <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] text-white">Lo que puedo hacer por tu negocio</h1>
          <p className="mt-3 text-slate-400 max-w-2xl">Cada servicio resuelve un problema concreto. No es una lista de tecnologías, es valor de negocio.</p>
        </div>
      </section>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] hover:border-white/15 transition block">
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{s.description}</p>
            <span className="inline-flex mt-4 text-xs font-semibold text-indigo-300">Ver servicio →</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
