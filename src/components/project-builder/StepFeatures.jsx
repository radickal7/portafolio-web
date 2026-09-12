import { featureOptions } from "../../lib/projectBuilderConfig"

export default function StepFeatures({ values, onToggle, otherText, onOtherText }) {
  const isOther = values.includes("other")
  return (
    <div>
      <h3 className="text-xl font-bold text-white">¿Qué debería poder hacer tu aplicación?</h3>
      <p className="text-sm text-slate-400 mt-2">Selecciona todas las que apliquen.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
        {featureOptions.map((f) => (
          <label key={f.id} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium cursor-pointer transition focus-within:ring-2 focus-within:ring-indigo-400 ${values.includes(f.id) ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.06]"}`}>
            <input type="checkbox" checked={values.includes(f.id)} onChange={() => onToggle(f.id)} className="accent-indigo-500" aria-label={f.label} />
            <span>{f.emoji}</span> {f.label}
          </label>
        ))}
      </div>
      {isOther && (
        <div className="mt-4">
          <label className="text-xs text-slate-300">Describe otra funcionalidad</label>
          <input value={otherText} onChange={(e) => onOtherText(e.target.value)} placeholder="Ej: Reserva por WhatsApp, firma digital..." className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20" />
        </div>
      )}
    </div>
  )
}
