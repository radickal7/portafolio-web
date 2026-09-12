import { useTranslation } from "react-i18next"
export default function Progress({ step, total = 7 }) {
  const { t } = useTranslation()
  const labels = ["01 Tipo", "02 Funciones", "03 Plataforma", "04 Estado", "05 Prioridades", "06 Descripción", "07 Presupuesto"]
  const pct = Math.round((Math.min(step, total) / total) * 100)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium hidden md:inline">{labels.slice(0, total).join(" → ")}</span>
        <span className="md:hidden">{t("builder.progress")} {step} {t("builder.of")} {total}</span>
        <span className="font-mono">{pct}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full bg-white transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex gap-1">
        {labels.slice(0, total).map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i < step ? "bg-white" : "bg-white/15"}`} />
        ))}
      </div>
    </div>
  )
}
