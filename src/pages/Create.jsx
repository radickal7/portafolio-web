import Wizard from "../components/create/Wizard"

export default function Create() {
  return (
    <main className="pt-[88px] pb-16">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">NUEVO · CREADOR DE APPS</div>
          <h1 className="mt-4 text-[28px] md:text-[40px] font-bold tracking-[-0.02em] text-white">Crea tu aplicación</h1>
          <p className="mt-3 text-slate-400">Construye un brief profesional en 2 minutos. Recibirás una propuesta y estimación inicial.</p>
        </div>
        <div className="mt-8">
          <Wizard />
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">Al enviar, se abrirá tu cliente de correo con el brief listo para enviar a juanjmacchiarulo@gmail.com. Sin bases de datos, sin spam.</div>
      </div>
    </main>
  )
}
