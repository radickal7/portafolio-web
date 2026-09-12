import ProjectOption from "./ProjectOption"
import { budgetOptions } from "../../lib/projectBuilderConfig"

export default function StepBudget({ value, onChange, name, email, onName, onEmail }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">¿Tienes un presupuesto aproximado?</h3>
      <p className="text-sm text-slate-400 mt-2">Nunca lo presentamos como cotización definitiva. Solo para dimensionar.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {budgetOptions.map((b) => (
          <ProjectOption key={b.id} selected={value === b.id} onClick={() => onChange(b.id)} emoji={b.emoji} label={b.label} />
        ))}
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-400">Tu nombre</label>
          <input value={name} onChange={(e) => onName(e.target.value)} placeholder="Juan Pérez" className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none" aria-label="Nombre" />
        </div>
        <div>
          <label className="text-xs text-slate-400">Tu email</label>
          <input value={email} onChange={(e) => onEmail(e.target.value)} placeholder="tu@email.com" className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none" aria-label="Email" type="email" />
        </div>
      </div>
    </div>
  )
}
