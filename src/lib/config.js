export const siteConfig = {
  name: "JuanDev",
  tagline: "Desarrollo de productos digitales",
  subtagline: "Web · Mobile · SaaS · Sistemas · IA",
  url: "https://portafolio-web-juandev.vercel.app",
  email: "juanjmacchiarulo@gmail.com",
}

export const priceRanges = {
  basic: { min: 300, max: 600, label: "Proyecto base" },
  intermediate: { min: 800, max: 2000, label: "Proyecto intermedio" },
  advanced: { min: 2500, max: 6000, label: "Proyecto avanzado" },
}

export function estimatePrice({ type, featuresCount, platforms, priority }) {
  let base = 400
  if (["SaaS", "Sistema empresarial", "Aplicación móvil", "SaaS", "Tienda online"].includes(type)) base = 900
  if (type === "API / Backend" || type === "Automatización") base = 600
  if (type === "Landing Page") base = 300
  base += featuresCount * 85
  if (platforms?.includes("iOS") || platforms?.includes("Android")) base += 300
  if (platforms?.includes("Web + Android + iOS")) base += 500
  if (priority === "Máxima calidad" || priority === "Escalabilidad") base *= 1.2
  if (priority === "Reducir costos" || priority === "Lanzar rápido") base *= 0.9
  if (base < 300) return priceRanges.basic
  if (base < 2000) return { min: Math.round(base * 0.85), max: Math.round(base * 1.15), label: priceRanges.intermediate.label }
  return { min: Math.round(base * 0.9), max: Math.round(base * 1.1), label: priceRanges.advanced.label }
}

export const createOptions = {
  types: [
    "Aplicación móvil",
    "Aplicación web",
    "SaaS",
    "Sistema empresarial",
    "Tienda online",
    "Landing Page",
    "API / Backend",
    "Automatización",
    "No estoy seguro",
  ],
  features: [
    "Usuarios", "Login / Registro", "Roles y permisos", "Base de datos", "Pagos", "Suscripciones",
    "Inventario", "Ventas", "Clientes", "Dashboard", "Reportes", "Notificaciones", "Chat",
    "Mapas / ubicación", "IA", "Carga de archivos", "Integraciones externas", "API", "Otro"
  ],
  platforms: ["Web", "Android", "iOS", "Web + Android", "Web + Android + iOS", "No estoy seguro"],
  stages: ["Solo tengo la idea", "Tengo un diseño", "Tengo un prototipo", "Ya tengo una aplicación", "Necesito mejorar una aplicación existente"],
  priorities: ["Lanzar rápido", "Reducir costos", "Máxima calidad", "Escalabilidad", "Diseño premium", "Automatización", "No estoy seguro"],
  budgets: ["No sé todavía", "Menos de $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "Más de $5,000"],
}
