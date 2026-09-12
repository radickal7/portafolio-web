import ProjectOption from "./ProjectOption"
import { stageOptions } from "../../lib/projectBuilderConfig"

export default function StepStage({ value, onChange }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">¿En qué etapa está tu proyecto?</h3>
      <p className="text-sm text-slate-400 mt-2">Nos ayuda a definir el siguiente paso.</p>
      <div className="mt-6 grid gap-3">
        {stageOptions.map((s) => (
          <ProjectOption key={s.id} selected={value === s.id} onClick={() => onChange(s.id)} emoji={s.emoji} label={s.label} description={s.desc} />
        ))}
      </div>
    </div>
  )
}
