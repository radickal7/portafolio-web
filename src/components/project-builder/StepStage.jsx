import ProjectOption from "./ProjectOption"
import { useTranslation } from "react-i18next"
import { stageOptions } from "../../lib/projectBuilderConfig"

export default function StepStage({ value, onChange }) {
  const { t } = useTranslation()
  const step = t("builder.steps.3", { returnObjects: true })
  return (
    <div>
      <h3 className="text-xl font-bold text-white">{step.title}</h3>
      <p className="text-sm text-slate-400 mt-2">{step.subtitle}</p>
      <div className="mt-6 grid gap-3">
        {stageOptions.map((s) => (
          <ProjectOption key={s.id} selected={value === s.id} onClick={() => onChange(s.id)} emoji={s.emoji} label={s.label} description={s.desc} />
        ))}
      </div>
    </div>
  )
}
