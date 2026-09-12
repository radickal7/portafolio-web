import ProjectOption from "./ProjectOption"
import { useTranslation } from "react-i18next"
import { projectTypes } from "../../lib/projectBuilderConfig"

export default function StepType({ value, onChange }) {
  const { t } = useTranslation()
  const step = t("builder.steps.0", { returnObjects: true })
  return (
    <div>
      <h3 className="text-xl font-bold text-white">{step.title}</h3>
      <p className="text-sm text-slate-400 mt-2">{step.subtitle}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {projectTypes.map((t) => (
          <ProjectOption key={t.id} selected={value === t.id} onClick={() => onChange(t.id)} emoji={t.emoji} label={t.label} sub={t.sub} />
        ))}
      </div>
    </div>
  )
}
