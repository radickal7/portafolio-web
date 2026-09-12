import { useTranslation } from "react-i18next"
const solveEs = [
  { t: "Digitalizar procesos manuales", d: "Pasar de planillas y chats a un sistema con datos consistentes y trazables." },
  { t: "Crear sistemas internos", d: "Paneles para gestionar clientes, ventas, inventario y reportes en un solo lugar." },
  { t: "Automatizar tareas", d: "Eliminar trabajo repetitivo con flujos, notificaciones e integraciones." },
  { t: "Crear aplicaciones web", d: "Plataformas accesibles desde cualquier dispositivo, con usuarios y permisos." },
  { t: "Crear aplicaciones móviles", d: "Apps para clientes o equipos, sincronizadas con tu sistema." },
  { t: "Construir productos SaaS", d: "Convertir tu idea en una plataforma por suscripción, lista para escalar." },
  { t: "Integrar APIs", d: "Conectar tu producto con Stripe, CRMs, ERPs y servicios externos." },
  { t: "Incorporar IA a procesos", d: "Asistentes, procesamiento de documentos y automatización inteligente donde aporta valor." },
]
const solveEn = [
  { t: "Digitize manual processes", d: "From spreadsheets and chats to a system with consistent, traceable data." },
  { t: "Build internal systems", d: "Panels to manage clients, sales, inventory and reports in one place." },
  { t: "Automate tasks", d: "Remove repetitive work with flows, notifications and integrations." },
  { t: "Create web apps", d: "Platforms accessible from any device, with users and permissions." },
  { t: "Create mobile apps", d: "Apps for clients or teams, synced with your system." },
  { t: "Build SaaS products", d: "Turn your idea into a subscription platform ready to scale." },
  { t: "Integrate APIs", d: "Connect your product with Stripe, CRMs, ERPs and external services." },
  { t: "Add AI to processes", d: "Assistants, document processing and smart automation where it matters." },
]
export default function WhatCanISolve() {
  const { i18n } = useTranslation()
  const isEs = i18n.language?.startsWith("es")
  const items = isEs ? solveEs : solveEn
  return (
    <section className="py-12 border-y border-white/[0.06] bg-white/[0.02]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <h2 className="text-[22px] font-bold text-white tracking-tight">{isEs ? "¿Qué puedo resolver?" : "What can I solve?"}</h2>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl">{isEs ? "Problemas concretos donde convierto necesidad de negocio en software, sin testimonios inventados." : "Concrete problems where I turn business needs into software, no fake testimonials."}</p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-white/10 bg-[#0b1220] p-4">
              <div className="text-white font-semibold text-sm">{it.t}</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
