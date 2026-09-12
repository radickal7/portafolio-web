import { useTranslation } from "react-i18next"

export default function AboutSection() {
  const { t } = useTranslation()
  const about = t("about", { returnObjects: true })
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">SOBRE JUAN</div>
          <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">{about.title || "Constructor de productos"}</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">{about.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(t("stack", { returnObjects: true }) || []).slice(0, 6).map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold">{s}</span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-sm font-semibold text-white">Lo que aporto</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Producto end-to-end (diseño → producción)</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Comunicación clara y entregas iterativas</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Código mantenible y escalable</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Enfoque en conversión y UX</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-[#0b1220] border border-white/10 p-4">
                <div className="text-white font-bold">3+</div><div className="text-xs text-slate-400">Productos</div>
              </div>
              <div className="rounded-xl bg-[#0b1220] border border-white/10 p-4">
                <div className="text-white font-bold">Full Stack</div><div className="text-xs text-slate-400">Web & Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
