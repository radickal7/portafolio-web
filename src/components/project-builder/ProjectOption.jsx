export default function ProjectOption({ selected, onClick, emoji, label, sub, description }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`text-left w-full rounded-2xl border p-4 flex gap-3 items-start transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${selected ? "bg-white text-slate-900 border-white shadow-soft" : "bg-white/[0.04] text-slate-200 border-white/10 hover:bg-white/[0.06] hover:border-white/15"}`}
    >
      <span className={`w-9 h-9 rounded-xl grid place-items-center shrink-0 text-base ${selected ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}>{emoji}</span>
      <div className="min-w-0">
        <div className={`font-semibold text-[14px] ${selected ? "text-slate-900" : "text-white"}`}>{label}</div>
        {sub && <div className={`text-xs ${selected ? "text-slate-600" : "text-slate-400"}`}>{sub}</div>}
        {description && <div className={`text-xs mt-1 ${selected ? "text-slate-600" : "text-slate-400"}`}>{description}</div>}
      </div>
      {selected && <span className="ml-auto text-indigo-600 font-bold">✓</span>}
    </button>
  )
}
