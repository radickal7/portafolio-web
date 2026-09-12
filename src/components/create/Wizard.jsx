import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createOptions, estimatePrice } from "../../lib/config"

export default function Wizard() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    type: "",
    features: [],
    platform: "",
    stage: "",
    priority: "",
    description: "",
    budget: "",
    name: "",
    email: "",
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const total = 7
  const progress = Math.round((step / total) * 100)

  const estimation = useMemo(() => estimatePrice({ type: data.type, featuresCount: data.features.length, platforms: data.platform, priority: data.priority }), [data])

  const canNext = () => {
    if (step === 1) return !!data.type
    if (step === 2) return data.features.length > 0
    if (step === 3) return !!data.platform
    if (step === 4) return !!data.stage
    if (step === 5) return !!data.priority
    if (step === 6) return data.description.trim().length > 10
    if (step === 7) return !!data.budget && !!data.name && !!data.email
    return false
  }

  const toggleFeature = (f) => {
    setData((d) => ({ ...d, features: d.features.includes(f) ? d.features.filter((x) => x !== f) : [...d.features, f] }))
  }

  const handleSend = async () => {
    setError("")
    if (!data.email.includes("@")) { setError("Email inválido"); return }
    setSending(true)
    try {
      const subject = encodeURIComponent(`[JuanDev] Brief: ${data.type} - ${data.platform}`)
      const body = encodeURIComponent(
        `Tipo: ${data.type}\nPlataforma: ${data.platform}\nFuncionalidades: ${data.features.join(", ")}\nEtapa: ${data.stage}\nPrioridad: ${data.priority}\nPresupuesto: ${data.budget}\n\nDescripción:\n${data.description}\n\nContacto: ${data.name} - ${data.email}\n\nEstimación inicial: $${estimation.min} – $${estimation.max} (${estimation.label})\n\n---\nBrief generado desde juandev.app/create`
      )
      window.location.href = `mailto:juanjmacchiarulo@gmail.com?subject=${subject}&body=${body}`
      setSent(true)
    } catch {
      setError("No se pudo abrir el cliente de correo. Escribí a juanjmacchiarulo@gmail.com")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="max-w-[860px] mx-auto">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Paso {step} de {total}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-white transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0b1220] p-5 md:p-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿Qué quieres construir?</h3>
                <p className="text-sm text-slate-400 mt-2">Elige una opción principal.</p>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {createOptions.types.map((t) => (
                    <button key={t} onClick={() => setData({ ...data, type: t })} className={`text-left rounded-2xl border p-4 text-sm font-medium transition ${data.type === t ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06]"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿Qué funcionalidades necesitas?</h3>
                <p className="text-sm text-slate-400 mt-2">Selecciona todas las que apliquen.</p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {createOptions.features.map((f) => (
                    <label key={f} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium cursor-pointer transition ${data.features.includes(f) ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.06]"}`}>
                      <input type="checkbox" checked={data.features.includes(f)} onChange={() => toggleFeature(f)} className="accent-indigo-500" />
                      {f}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿Para qué plataforma?</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {createOptions.platforms.map((p) => (
                    <button key={p} onClick={() => setData({ ...data, platform: p })} className={`text-left rounded-2xl border p-4 text-sm font-medium transition ${data.platform === p ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06]"}`}>{p}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿En qué etapa está tu proyecto?</h3>
                <div className="mt-6 grid gap-3">
                  {createOptions.stages.map((s) => (
                    <button key={s} onClick={() => setData({ ...data, stage: s })} className={`text-left rounded-2xl border p-4 text-sm font-medium transition ${data.stage === s ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06]"}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 5 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿Cuál es tu prioridad?</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {createOptions.priorities.map((p) => (
                    <button key={p} onClick={() => setData({ ...data, priority: p })} className={`text-left rounded-2xl border p-4 text-sm font-medium transition ${data.priority === p ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06]"}`}>{p}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 6 && (
              <div>
                <h3 className="text-xl font-bold text-white">Cuéntame sobre tu proyecto</h3>
                <p className="text-sm text-slate-400 mt-2">Describe la idea, usuarios y objetivo. Mientras más claro, mejor estimación.</p>
                <textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} rows={6} placeholder="Ej: Quiero una plataforma donde clientes reserven servicios, con pagos y panel admin..." className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20" />
                <div className="mt-2 text-xs text-slate-500">{data.description.length} caracteres (mín 10)</div>
              </div>
            )}
            {step === 7 && (
              <div>
                <h3 className="text-xl font-bold text-white">¿Qué presupuesto tienes?</h3>
                <p className="text-sm text-slate-400 mt-2">No es una cotización definitiva, solo para dimensionar el alcance.</p>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  {createOptions.budgets.map((b) => (
                    <button key={b} onClick={() => setData({ ...data, budget: b })} className={`text-left rounded-2xl border p-4 text-sm font-medium transition ${data.budget === b ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06]"}`}>{b}</button>
                  ))}
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Tu nombre" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                  <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Tu email" className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none" />
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm font-semibold text-white">Resumen de tu proyecto</div>
                  <div className="mt-3 grid md:grid-cols-2 gap-3 text-sm">
                    <div className="text-slate-400">Tipo: <span className="text-white">{data.type}</span></div>
                    <div className="text-slate-400">Plataforma: <span className="text-white">{data.platform}</span></div>
                    <div className="text-slate-400">Prioridad: <span className="text-white">{data.priority}</span></div>
                    <div className="text-slate-400">Presupuesto: <span className="text-white">{data.budget}</span></div>
                  </div>
                  <div className="mt-3 text-sm text-slate-400">Funcionalidades: <span className="text-white">{data.features.join(", ") || "—"}</span></div>
                  <div className="mt-4 rounded-xl bg-indigo-500/15 border border-indigo-400/20 p-3">
                    <div className="text-xs text-indigo-200">Estimación inicial</div>
                    <div className="text-white font-bold">${estimation.min} – ${estimation.max} <span className="text-xs font-normal text-indigo-200">· {estimation.label}</span></div>
                    <div className="text-[11px] text-indigo-200/70 mt-1">Esta es una estimación inicial. El precio final depende del alcance y requisitos.</div>
                  </div>
                </div>
                {error && <div className="mt-3 text-sm text-red-400">{error}</div>}
                {sent && <div className="mt-3 text-sm text-emerald-400">¡Listo! Se abrió tu cliente de correo. Si no se abrió, escribí a juanjmacchiarulo@gmail.com</div>}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-between gap-3">
          <button disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))} className="px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold disabled:opacity-40">Atrás</button>
          {step < 7 ? (
            <button disabled={!canNext()} onClick={() => setStep((s) => Math.min(total, s + 1))} className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold disabled:opacity-40 hover:bg-slate-100">Siguiente →</button>
          ) : (
            <button disabled={!canNext() || sending} onClick={handleSend} className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold disabled:opacity-40 hover:bg-slate-100">
              {sending ? "Enviando..." : sent ? "Enviado ✓" : "Solicitar propuesta"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
