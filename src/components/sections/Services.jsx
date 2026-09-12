import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const services = [
  { slug: "web-apps", title: "Aplicaciones Web", problem: "Necesitas presencia y operación online.", includes: ["Plataformas", "Dashboards", "Sistemas internos", "SEO técnico"], for: "Startups, negocios, creadores" },
  { slug: "mobile-apps", title: "Aplicaciones Móviles", problem: "Tus usuarios están en el móvil.", includes: ["Android nativo", "iOS / Multiplataforma", "Offline & Push", "Stores"], for: "Productos B2C/B2B" },
  { slug: "saas", title: "SaaS", problem: "Monetizar software por suscripción.", includes: ["Usuarios & Planes", "Pagos", "Dashboard", "Multi-tenant"], for: "SaaS founders" },
  { slug: "business-systems", title: "Sistemas para Negocios", problem: "Gestión manual que no escala.", includes: ["Ventas & Caja", "Inventario", "Clientes & CRM", "Reportes"], for: "Comercios y pymes" },
  { slug: "ai-automation", title: "IA y Automatización", problem: "Procesos lentos o repetitivos.", includes: ["Asistentes", "Automatización", "Análisis", "Integraciones"], for: "Operaciones" },
  { slug: "apis-backend", title: "APIs y Backend", problem: "Sistemas desconectados.", includes: ["REST / GraphQL", "Webhooks", "Integraciones 3P", "Infra Docker"], for: "Equipos técnicos" },
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
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-2xl border border-white/10 bg-[#0b1220] p-5 flex flex-col hover:border-white/15 transition">
              <div className="text-white font-semibold">{s.title}</div>
              <div className="text-xs text-slate-400 mt-2">{s.problem}</div>
              <div className="mt-4 space-y-1.5">
                {s.includes.map((inc) => (
                  <div key={inc} className="text-xs text-slate-300 flex gap-2"><span className="text-indigo-400">—</span> {inc}</div>
                ))}
              </div>
              <div className="mt-4 text-[11px] text-slate-500">Para: {s.for}</div>
              <Link to={`/services/${s.slug}`} className="mt-4 inline-flex text-xs font-semibold text-white border border-white/15 rounded-full px-3 py-1.5 hover:bg-white hover:text-slate-900 transition w-fit">Ver servicio →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
