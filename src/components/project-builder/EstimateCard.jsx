export default function EstimateCard({ complexity, range }) {
  const colorMap = { emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200", amber: "border-amber-400/30 bg-amber-500/10 text-amber-200", orange: "border-orange-400/30 bg-orange-500/10 text-orange-200", red: "border-red-400/30 bg-red-500/10 text-red-200" }
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
      <h4 className="text-white font-semibold">Estimación inicial</h4>
      <div className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${colorMap[complexity.color] || colorMap.emerald}`}>
        <span>{complexity.emoji}</span> Complejidad {complexity.level}
      </div>
      <div className="mt-3 text-white font-bold text-lg">${range.min.toLocaleString()} – ${range.max.toLocaleString()} <span className="text-xs font-normal text-slate-400">· {range.label}</span></div>
      <p className="text-xs text-slate-500 mt-2">Rango orientativo. Esta estimación es orientativa y no constituye una cotización definitiva. El alcance final se determina después de analizar el proyecto.</p>
    </div>
  )
}
