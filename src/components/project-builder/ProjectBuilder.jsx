import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Progress from "./Progress"
import StepType from "./StepType"
import StepFeatures from "./StepFeatures"
import StepPlatforms from "./StepPlatforms"
import StepStage from "./StepStage"
import StepPriorities from "./StepPriorities"
import StepDescription from "./StepDescription"
import StepBudget from "./StepBudget"
import ProjectSummary from "./ProjectSummary"
import EstimateCard from "./EstimateCard"
import { getComplexity, estimateRange, getRequiredComponents, generateApproach } from "../../lib/estimator"

const STORAGE_KEY = "juandev_builder_v1"

const defaultData = {
  type: "",
  features: [],
  otherFeature: "",
  platforms: [],
  stage: "",
  priorities: [],
  description: "",
  budget: "",
  name: "",
  email: "",
}

export default function ProjectBuilder() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(defaultData)
  const [started, setStarted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const total = 7

  // load persistence
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed.data) setData(parsed.data)
        if (parsed.step) setStep(parsed.step)
        if (parsed.started) setStarted(parsed.started)
      }
    } catch (_e) { /* ignore */ }
  }, [])

  // save persistence
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step, started })) } catch (_e) { /* ignore */ }
  }, [data, step, started])

  const complexity = useMemo(() => getComplexity({ featuresCount: data.features.length, type: data.type }), [data])
  const range = useMemo(() => estimateRange({ type: data.type, featuresCount: data.features.length, platforms: data.platforms, priorities: data.priorities }), [data])
  const approach = useMemo(() => generateApproach({ type: data.type, features: data.features, platforms: data.platforms }), [data])
  const components = useMemo(() => getRequiredComponents({ type: data.type, features: data.features }), [data])

  const canNext = () => {
    if (step === 1) return !!data.type
    if (step === 2) return data.features.length > 0
    if (step === 3) return data.platforms.length > 0
    if (step === 4) return !!data.stage
    if (step === 5) return data.priorities.length > 0
    if (step === 6) return data.description.trim().length >= 10
    if (step === 7) return !!data.budget && !!data.name.trim() && data.email.includes("@")
    return false
  }

  const errorMsg = () => {
    if (canNext()) return ""
    if (step === 6) return "Cuéntame brevemente qué quieres construir para continuar."
    if (step === 7 && !data.email.includes("@") && data.email) return "Revisa tu email."
    return ""
  }

  const handleNext = () => {
    if (!canNext()) { setError(errorMsg() || "Completa este paso para continuar."); return }
    setError("")
    if (step < total) setStep((s) => s + 1)
    else setStep(8) // summary
  }

  const handleSend = () => {
    if (!data.email.includes("@")) { setError("Revisa tu email."); return }
    setError("")
    setSending(true)
    try {
      const payload = {
        projectType: data.type,
        features: data.features,
        otherFeature: data.otherFeature,
        platforms: data.platforms,
        projectStage: data.stage,
        priorities: data.priorities,
        description: data.description,
        budget: data.budget,
        estimatedComplexity: complexity.level,
        estimatedRange: `${range.min}-${range.max}`,
        name: data.name,
        email: data.email,
      }
      const subject = encodeURIComponent(`[JuanDev] Brief: ${data.type} - ${data.platforms.join(",")}`)
      const body = encodeURIComponent(
        `Tipo: ${data.type}\nPlataformas: ${data.platforms.join(", ")}\nFuncionalidades: ${data.features.join(", ")}${data.otherFeature ? ` (${data.otherFeature})` : ""}\nEtapa: ${data.stage}\nPrioridades: ${data.priorities.join(", ")}\nPresupuesto: ${data.budget}\n\nDescripción:\n${data.description}\n\nContacto: ${data.name} - ${data.email}\n\nEstimación: ${complexity.emoji} ${complexity.level} | $${range.min}–$${range.max} (${range.label})\nComponentes: ${components.join(", ")}\nAproximación: ${approach}\n\nPayload JSON:\n${JSON.stringify(payload, null, 2)}`
      )
      window.location.href = `mailto:juanjmacchiarulo@gmail.com?subject=${subject}&body=${body}`
      setSent(true)
      // keep in storage for recovery, but mark sent
    } catch (_e) {
      setError("No se pudo abrir el cliente de correo. Escribí a juanjmacchiarulo@gmail.com")
    } finally { setSending(false) }
  }

  const handleReset = () => {
    setData(defaultData)
    setStep(1)
    setStarted(false)
    setSent(false)
    setError("")
    try { localStorage.removeItem(STORAGE_KEY) } catch (_e) { /* ignore */ }
  }

  if (!started) {
    return (
      <div className="max-w-[860px] mx-auto">
        <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">Toma menos de 2 minutos</div>
          <h2 className="mt-4 text-2xl md:text-[28px] font-bold text-white tracking-[-0.02em]">Listo para empezar?</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">Responderás 7 pasos rápidos. Puedes volver, editar y retomar donde dejaste.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => setStarted(true)} className="bg-white text-slate-900 px-7 py-3 rounded-full font-semibold hover:bg-slate-100">Comenzar proyecto →</button>
            <button onClick={handleReset} className="border border-white/15 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5">Reiniciar</button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 8) {
    return (
      <div className="max-w-[860px] mx-auto space-y-6">
        <ProjectSummary data={data} onEdit={(s) => setStep(s)} />
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h4 className="text-white font-semibold">Primera aproximación</h4>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">{approach}</p>
          <div className="mt-4">
            <div className="text-xs font-semibold tracking-widest text-slate-400">COMPONENTES QUE PROBABLEMENTE NECESITARÍA</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {components.map((c) => (<span key={c} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold">{c}</span>))}
            </div>
          </div>
        </div>
        <EstimateCard complexity={complexity} range={range} />
        {error && <div className="text-sm text-red-400" role="alert">{error}</div>}
        {sent && <div className="text-sm text-emerald-400">¡Listo! Se abrió tu cliente de correo. Si no se abrió, escribí a juanjmacchiarulo@gmail.com</div>}
        <div className="flex flex-col md:flex-row gap-3">
          <button onClick={handleSend} disabled={sending || sent} className="flex-1 bg-white text-slate-900 py-3.5 rounded-full font-semibold disabled:opacity-50 hover:bg-slate-100">{sending ? "Enviando..." : sent ? "Enviado ✓" : "Solicitar propuesta"}</button>
          <button onClick={() => setStep(1)} className="flex-1 border border-white/15 text-white py-3.5 rounded-full font-semibold hover:bg-white/5">Modificar proyecto</button>
        </div>
        <button onClick={handleReset} className="text-xs text-slate-500 hover:text-slate-300">Cancelar y reiniciar</button>
      </div>
    )
  }

  return (
    <div className="max-w-[860px] mx-auto">
      <Progress step={step} total={total} />
      <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0b1220] p-5 md:p-8 min-h-[460px]">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.24 }}>
            {step === 1 && <StepType value={data.type} onChange={(v) => setData({ ...data, type: v })} />}
            {step === 2 && <StepFeatures values={data.features} onToggle={(id) => setData({ ...data, features: data.features.includes(id) ? data.features.filter((x) => x !== id) : [...data.features, id] })} otherText={data.otherFeature} onOtherText={(v) => setData({ ...data, otherFeature: v })} />}
            {step === 3 && <StepPlatforms values={data.platforms} onToggle={(id) => setData({ ...data, platforms: data.platforms.includes(id) ? data.platforms.filter((x) => x !== id) : [...data.platforms, id] })} />}
            {step === 4 && <StepStage value={data.stage} onChange={(v) => setData({ ...data, stage: v })} />}
            {step === 5 && <StepPriorities values={data.priorities} onToggle={(id) => setData({ ...data, priorities: data.priorities.includes(id) ? data.priorities.filter((x) => x !== id) : [...data.priorities, id] })} />}
            {step === 6 && <StepDescription value={data.description} onChange={(v) => setData({ ...data, description: v })} />}
            {step === 7 && <StepBudget value={data.budget} onChange={(v) => setData({ ...data, budget: v })} name={data.name} email={data.email} onName={(v) => setData({ ...data, name: v })} onEmail={(v) => setData({ ...data, email: v })} />}
          </motion.div>
        </AnimatePresence>

        {error && <div className="mt-4 text-sm text-amber-300 flex gap-2" role="alert"><span>⚠️</span>{error}</div>}
        {errorMsg() && !error && <div className="mt-4 text-xs text-slate-500">{errorMsg()}</div>}

        <div className="mt-6 flex justify-between gap-3">
          <div className="flex gap-2">
            <button disabled={step === 1} onClick={() => setStep((s) => Math.max(1, s - 1))} className="px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold disabled:opacity-40 hover:bg-white/5">Atrás</button>
            <button onClick={handleReset} className="hidden md:inline px-5 py-2.5 rounded-full border border-white/10 text-slate-400 text-sm hover:text-white">Reiniciar</button>
          </div>
          <button disabled={!canNext()} onClick={handleNext} className="px-6 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold disabled:opacity-40 hover:bg-slate-100">{step === 7 ? "Ver resumen →" : "Siguiente →"}</button>
        </div>
      </div>
    </div>
  )
}
