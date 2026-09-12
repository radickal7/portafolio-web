import ProjectOption from "./ProjectOption"
import { platformOptions } from "../../lib/projectBuilderConfig"

export default function StepPlatforms({ values, onToggle }) {
  const isSelected = (id) => values.includes(id)
  return (
    <div>
      <h3 className="text-xl font-bold text-white">¿Dónde quieres que funcione?</h3>
      <p className="text-sm text-slate-400 mt-2">Puedes combinar plataformas. Elige todas las que necesites.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {platformOptions.map((p) => (
          <ProjectOption key={p.id} selected={isSelected(p.id)} onClick={() => onToggle(p.id)} emoji={p.emoji} label={p.label} />
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3">Tip: selecciona múltiples si tu producto debe estar en varios lugares.</p>
    </div>
  )
}
