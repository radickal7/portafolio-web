import { useTranslation } from "react-i18next"
import { priorityOptions } from "../../lib/projectBuilderConfig"

export default function StepPriorities({ values, onToggle }) {
  const { t } = useTranslation()
  const step = t("builder.steps.4", { returnObjects: true })
  return (
    <div>
      <h3 className="text-xl font-bold text-white">{step.title}</h3>
      <p className="text-sm text-slate-400 mt-2">{step.subtitle}</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
        {priorityOptions.map((p) => (
          <label key={p.id} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium cursor-pointer ${values.includes(p.id) ? "bg-white text-slate-900 border-white" : "bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/[0.06]"}`}>
            <input type="checkbox" checked={values.includes(p.id)} onChange={() => onToggle(p.id)} className="accent-indigo-500" />
            <span>{p.emoji}</span> {p.label}
          </label>
        ))}
      </div>
    </div>
  )
}
