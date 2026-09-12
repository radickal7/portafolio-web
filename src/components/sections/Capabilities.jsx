import { motion } from "framer-motion"
import { FaGlobe, FaMobileAlt, FaLayerGroup, FaBuilding, FaRobot, FaNetworkWired } from "react-icons/fa"

const items = [
  { icon: FaGlobe, title: "Web Apps", desc: "Aplicaciones web modernas, rápidas y escalables. Desde landing hasta plataforma completa.", href: "#servicios" },
  { icon: FaMobileAlt, title: "Mobile Apps", desc: "Apps nativas y multiplataforma para Android e iOS. Publicables en stores.", href: "#servicios" },
  { icon: FaLayerGroup, title: "SaaS", desc: "Plataformas con usuarios, pagos, suscripciones, dashboards y administración.", href: "#servicios" },
  { icon: FaBuilding, title: "Sistemas empresariales", desc: "Ventas, inventario, caja, clientes, reportes y administración centralizada.", href: "#servicios" },
  { icon: FaRobot, title: "IA & Automatización", desc: "Integraciones con IA, automatización de procesos y flujos inteligentes.", href: "#ia" },
  { icon: FaNetworkWired, title: "APIs & Backend", desc: "APIs, bases de datos, autenticación, infraestructura y despliegue.", href: "#servicios" },
]

export default function Capabilities() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">CAPACIDADES</div>
          <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">¿Qué puedo crear?</h2>
          <p className="mt-3 text-slate-400">Soluciones completas, no solo pantallas. Producto, arquitectura y puesta en producción.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] p-5 flex flex-col gap-3 transition"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-slate-900 grid place-items-center">
                <it.icon size={16} />
              </div>
              <div className="text-white font-semibold">{it.title}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{it.desc}</div>
              <div className="mt-auto text-xs font-semibold text-indigo-300 group-hover:text-indigo-200">Explorar →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
