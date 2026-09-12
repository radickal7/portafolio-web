export default function StepDescription({ value, onChange }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">Cuéntame tu idea</h3>
      <p className="text-sm text-slate-400 mt-2"><strong className="text-slate-200">No necesitas conocimientos técnicos.</strong> Explícame la idea con tus propias palabras.</p>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={6} placeholder="Ejemplo: Quiero crear una aplicación para que pequeños restaurantes puedan recibir pedidos, gestionar clientes y controlar sus ventas desde el teléfono." className="mt-6 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20" aria-label="Descripción del proyecto" />
      <div className="mt-2 text-xs text-slate-500">{value.length} caracteres · mínimo 10</div>
    </div>
  )
}
