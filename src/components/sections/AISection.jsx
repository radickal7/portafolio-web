import { FaRobot, FaCogs, FaFileAlt, FaEye, FaChartBar, FaVideo } from "react-icons/fa"

const items = [
  { icon: FaRobot, title: "Asistentes", desc: "Chatbots y asistentes que responden con contexto de tu negocio." },
  { icon: FaCogs, title: "Automatización", desc: "Flujos que eliminan tareas manuales y conectan sistemas." },
  { icon: FaFileAlt, title: "Documentos", desc: "Procesamiento y extracción de datos de PDFs e imágenes." },
  { icon: FaEye, title: "Visión artificial", desc: "Análisis de imágenes y detección para casos operativos." },
  { icon: FaChartBar, title: "Análisis", desc: "Clasificación, resumen y detección de patrones." },
  { icon: FaVideo, title: "Vídeo & Contenido", desc: "Generación y procesamiento asistido para medios." },
]

export default function AISection() {
  return (
    <section id="ia" className="py-16 lg:py-20 border-y border-white/[0.06] bg-gradient-to-b from-indigo-500/[0.06] to-transparent">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200">● Desarrollo con IA</div>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">Soluciones que usan inteligencia artificial</h2>
          <p className="mt-3 text-slate-400">Construyo integraciones reales con APIs de IA para automatizar procesos y crear nuevas experiencias. Sin humo, con casos aplicables a tu producto.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-[#0b1220] p-5">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 grid place-items-center"><it.icon size={14} /></div>
              <div className="text-white font-semibold mt-3">{it.title}</div>
              <div className="text-sm text-slate-400 mt-2 leading-relaxed">{it.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-xs text-slate-500">Stack IA: OpenAI API · Vision · Embeddings · Automatizaciones · Integraciones a medida según proyecto.</div>
      </div>
    </section>
  )
}
