import { motion } from "framer-motion"

const services = [
  { title: "Desarrollo Web", problem: "Necesitas presencia y operación online.", includes: ["Landing premium", "Web app", "Panel admin", "SEO técnico"], for: "Startups, negocios, creadores" },
  { title: "Desarrollo Mobile", problem: "Tus usuarios están en el móvil.", includes: ["Android nativo (Kotlin)", "iOS / Multiplataforma", "Publicación en stores", "Offline & Push"], for: "Productos B2C/B2B" },
  { title: "Full Stack", problem: "Quieres producto completo sin coordinar equipos.", includes: ["Frontend + Backend", "Base de datos", "Auth & Roles", "Deploy"], for: "MVP a producción" },
  { title: "Sistemas empresariales", problem: "Gestión manual que no escala.", includes: ["Ventas & Caja", "Inventario", "Clientes & CRM", "Reportes"], for: "Comercios y pymes" },
  { title: "SaaS", problem: "Monetizar software por suscripción.", includes: ["Usuarios & Planes", "Pagos (Stripe)", "Dashboard", "Multi-tenant"], for: "SaaS founders" },
  { title: "APIs & Integraciones", problem: "Sistemas desconectados.", includes: ["REST / GraphQL", "Webhooks", "Integraciones 3P", "Infra Docker"], for: "Equipos técnicos" },
  { title: "IA", problem: "Procesos lentos o repetitivos.", includes: ["Asistentes", "Automatización", "Análisis", "Generación contenido"], for: "Operaciones" },
  { title: "Mantenimiento", problem: "Producto que debe evolucionar.", includes: ["Nuevas funciones", "Performance", "Soporte", "Roadmap"], for: "Productos live" },
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 lg:py-20 border-t border-white/[0.06] bg-white/[0.02]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">SERVICIOS</div>
          <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">Lo que puedo hacer por tu negocio</h2>
          <p className="mt-3 text-slate-400">Cada servicio resuelve un problema concreto. No es una lista de tecnologías, es valor de negocio.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-2xl border border-white/10 bg-[#0b1220] p-5 flex flex-col">
              <div className="text-white font-semibold">{s.title}</div>
              <div className="text-xs text-slate-400 mt-2">{s.problem}</div>
              <div className="mt-4 space-y-1.5">
                {s.includes.map((inc) => (
                  <div key={inc} className="text-xs text-slate-300 flex gap-2"><span className="text-indigo-400">—</span> {inc}</div>
                ))}
              </div>
              <div className="mt-4 text-[11px] text-slate-500">Para: {s.for}</div>
              <a href="/create" className="mt-4 inline-flex text-xs font-semibold text-indigo-300 hover:text-white">Quiero crear esto →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
