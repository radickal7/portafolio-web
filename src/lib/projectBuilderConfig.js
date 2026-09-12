// Centralized builder options — no strings duplicated in components
export const projectTypes = [
  { id: "mobile", label: "Aplicación móvil", sub: "Android / iOS", emoji: "📱" },
  { id: "web", label: "Aplicación web", sub: "Sistema web moderno", emoji: "🌐" },
  { id: "saas", label: "SaaS", sub: "Producto basado en suscripción", emoji: "🚀" },
  { id: "enterprise", label: "Sistema empresarial", sub: "Software interno", emoji: "🏢" },
  { id: "ecommerce", label: "Ecommerce", sub: "Tienda y plataforma de ventas", emoji: "🛒" },
  { id: "landing", label: "Landing / Web corporativa", sub: "Presencia profesional", emoji: "🎯" },
  { id: "api", label: "API / Backend", sub: "Servicios y APIs", emoji: "⚙️" },
  { id: "automation", label: "Automatización / IA", sub: "Procesos inteligentes", emoji: "🤖" },
  { id: "unsure", label: "No estoy seguro", sub: "Ayúdame a definirlo", emoji: "❓" },
]

export const featureOptions = [
  { id: "users", label: "Usuarios", emoji: "👤" },
  { id: "auth", label: "Inicio de sesión", emoji: "🔐" },
  { id: "roles", label: "Roles y permisos", emoji: "🛡️" },
  { id: "db", label: "Base de datos", emoji: "🗄️" },
  { id: "payments", label: "Pagos", emoji: "💳" },
  { id: "subscriptions", label: "Suscripciones", emoji: "🔄" },
  { id: "inventory", label: "Inventario", emoji: "📦" },
  { id: "sales", label: "Ventas", emoji: "🛒" },
  { id: "clients", label: "Clientes", emoji: "👥" },
  { id: "dashboard", label: "Dashboard", emoji: "📊" },
  { id: "reports", label: "Reportes", emoji: "📈" },
  { id: "notifications", label: "Notificaciones", emoji: "🔔" },
  { id: "chat", label: "Chat", emoji: "💬" },
  { id: "maps", label: "Mapas / ubicación", emoji: "📍" },
  { id: "ai", label: "Inteligencia artificial", emoji: "🤖" },
  { id: "files", label: "Archivos", emoji: "📁" },
  { id: "integrations", label: "Integraciones", emoji: "🔗" },
  { id: "api", label: "API", emoji: "🔌" },
  { id: "automation", label: "Automatizaciones", emoji: "⚙️" },
  { id: "other", label: "Otro", emoji: "✨" },
]

export const platformOptions = [
  { id: "web", label: "Web", emoji: "🌐" },
  { id: "android", label: "Android", emoji: "🤖" },
  { id: "ios", label: "iPhone / iOS", emoji: "🍎" },
  { id: "web-android", label: "Web + Android", emoji: "🌐🤖" },
  { id: "all", label: "Web + Android + iOS", emoji: "🌐📱" },
  { id: "unsure", label: "No estoy seguro", emoji: "❓" },
]

export const stageOptions = [
  { id: "idea", label: "Solo tengo una idea", emoji: "💡", desc: "Validemos la idea y definamos el alcance" },
  { id: "design", label: "Ya tengo un diseño", emoji: "🎨", desc: "Convertimos diseño en producto funcional" },
  { id: "prototype", label: "Tengo un prototipo", emoji: "🧪", desc: "Llevamos el prototipo a producción" },
  { id: "app", label: "Ya tengo una aplicación", emoji: "💻", desc: "Escalamos y mejoramos lo existente" },
  { id: "improve", label: "Quiero mejorar una aplicación existente", emoji: "🔧", desc: "Refactor, nuevas funciones y performance" },
  { id: "production", label: "Necesito llevarla a producción", emoji: "🚀", desc: "Deploy, infra y puesta en vivo" },
]

export const priorityOptions = [
  { id: "fast", label: "Lanzar rápido", emoji: "⚡" },
  { id: "cost", label: "Reducir costos", emoji: "💰" },
  { id: "design", label: "Diseño profesional", emoji: "🎨" },
  { id: "quality", label: "Calidad", emoji: "🛡️" },
  { id: "scale", label: "Escalabilidad", emoji: "📈" },
  { id: "automation", label: "Automatización", emoji: "🤖" },
  { id: "security", label: "Seguridad", emoji: "🔒" },
  { id: "mobile", label: "Experiencia móvil", emoji: "📱" },
  { id: "growth", label: "Preparar crecimiento", emoji: "🚀" },
  { id: "unsure", label: "No estoy seguro", emoji: "❓" },
]

export const budgetOptions = [
  { id: "unsure", label: "No estoy seguro", emoji: "❓" },
  { id: "lt500", label: "Menos de $500", emoji: "💵" },
  { id: "500-1000", label: "$500 – $1.000", emoji: "💵" },
  { id: "1000-2500", label: "$1.000 – $2.500", emoji: "💵" },
  { id: "2500-5000", label: "$2.500 – $5.000", emoji: "💵" },
  { id: "gt5000", label: "Más de $5.000", emoji: "💵" },
]

export const stepMeta = [
  { id: 1, key: "type", title: "¿Qué quieres construir?", subtitle: "Elige una opción principal. Puedes cambiarla luego." },
  { id: 2, key: "features", title: "¿Qué debería poder hacer tu aplicación?", subtitle: "Selecciona todas las que apliquen." },
  { id: 3, key: "platforms", title: "¿Dónde quieres que funcione?", subtitle: "Puedes combinar plataformas." },
  { id: 4, key: "stage", title: "¿En qué etapa está tu proyecto?", subtitle: "Nos ayuda a dimensionar el siguiente paso." },
  { id: 5, key: "priorities", title: "¿Qué es más importante para ti?", subtitle: "Elige una o varias prioridades." },
  { id: 6, key: "description", title: "Cuéntame tu idea", subtitle: "No necesitas términos técnicos. Usa tus palabras." },
  { id: 7, key: "budget", title: "¿Tienes un presupuesto aproximado?", subtitle: "Solo para dimensionar el alcance. No es cotización final." },
  { id: 8, key: "summary", title: "Tu proyecto", subtitle: "Revisa y solicita tu propuesta." },
]
