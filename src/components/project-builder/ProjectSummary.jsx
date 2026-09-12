import { projectTypes, featureOptions, platformOptions, stageOptions, priorityOptions, budgetOptions } from "../../lib/projectBuilderConfig"

function label(list, id) { return list.find((x) => x.id === id)?.label || id }
function labels(list, ids) { return ids.map((id) => label(list, id)).join(", ") || "—" }

export default function ProjectSummary({ data, onEdit }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-white font-semibold">Tu proyecto</h4>
        <button onClick={() => onEdit(1)} className="text-xs text-indigo-300 hover:text-white">Editar →</button>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Tipo</span><span className="text-white font-medium">{label(projectTypes, data.type)}</span></div>
        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Plataforma</span><span className="text-white font-medium">{labels(platformOptions, data.platforms)}</span></div>
        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Estado</span><span className="text-white font-medium">{label(stageOptions, data.stage)}</span></div>
        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Presupuesto</span><span className="text-white font-medium">{label(budgetOptions, data.budget)}</span></div>
      </div>
      <div className="mt-3 text-sm"><span className="text-slate-400">Funcionalidades: </span><span className="text-white">{labels(featureOptions, data.features)}{data.otherFeature ? `, ${data.otherFeature}` : ""}</span> <button onClick={() => onEdit(2)} className="text-xs text-indigo-300 ml-2">editar</button></div>
      <div className="mt-3 text-sm"><span className="text-slate-400">Prioridades: </span><span className="text-white">{labels(priorityOptions, data.priorities)}</span> <button onClick={() => onEdit(5)} className="text-xs text-indigo-300 ml-2">editar</button></div>
      <div className="mt-4 rounded-xl bg-[#0b1220] border border-white/10 p-3">
        <div className="text-xs text-slate-400">Descripción</div>
        <div className="text-sm text-slate-200 mt-1 whitespace-pre-wrap">{data.description || "—"}</div>
      </div>
    </div>
  )
}
