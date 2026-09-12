// Centralized estimation — do not duplicate prices in components
export const priceRanges = {
  basic: { min: 300, max: 600, label: "Básica" },
  intermediate: { min: 800, max: 2000, label: "Media" },
  advanced: { min: 2500, max: 5000, label: "Alta" },
  pro: { min: 5000, max: 9000, label: "Avanzada" },
}

export function getComplexity({ featuresCount, type }) {
  let score = featuresCount * 1.2
  if (["saas", "enterprise", "ecommerce", "mobile"].includes(type)) score += 3
  if (["api", "automation"].includes(type)) score += 1.5
  if (score <= 4) return { level: "Básica", emoji: "🟢", color: "emerald" }
  if (score <= 8) return { level: "Media", emoji: "🟡", color: "amber" }
  if (score <= 12) return { level: "Alta", emoji: "🟠", color: "orange" }
  return { level: "Avanzada", emoji: "🔴", color: "red" }
}

export function estimateRange({ type, featuresCount, platforms, priorities }) {
  let base = 500
  if (["saas", "enterprise", "ecommerce", "mobile"].includes(type)) base = 1100
  if (type === "api" || type === "automation") base = 700
  if (type === "landing") base = 350
  base += featuresCount * 95
  const plat = Array.isArray(platforms) ? platforms.join(" ") : platforms || ""
  if (plat.includes("android") || plat.includes("ios") || plat.includes("all")) base += 350
  if (Array.isArray(priorities) && (priorities.includes("quality") || priorities.includes("scale") || priorities.includes("security"))) base *= 1.15
  if (Array.isArray(priorities) && (priorities.includes("cost") || priorities.includes("fast"))) base *= 0.92
  if (base < 700) return { min: 300, max: 600, label: "Básica", ...priceRanges.basic }
  if (base < 2200) return { min: Math.round(base * 0.85), max: Math.round(base * 1.15), label: "Media" }
  if (base < 5000) return { min: Math.round(base * 0.9), max: Math.round(base * 1.1), label: "Alta" }
  return { min: Math.round(base * 0.9), max: Math.round(base * 1.1), label: "Avanzada" }
}

export function getRequiredComponents({ type, features }) {
  const comps = new Set(["Frontend"])
  if (["mobile", "all", "web-android", "android", "ios"].some((k) => (type === k || (Array.isArray(features) && features.includes(k))))) {
    // mobile type needs app
  }
  const f = features || []
  if (f.includes("users") || f.includes("auth") || f.includes("roles")) comps.add("Autenticación")
  if (f.includes("db") || f.includes("users") || f.includes("inventory")) comps.add("Base de datos")
  if (f.includes("api") || f.includes("integrations")) comps.add("API")
  if (f.includes("dashboard") || f.includes("reports") || f.includes("clients")) comps.add("Panel administrativo")
  if (f.includes("payments") || f.includes("subscriptions")) comps.add("Pagos / Suscripciones")
  if (f.includes("ai") || f.includes("automation")) comps.add("IA / Automatización")
  if (f.includes("chat") || f.includes("notifications")) comps.add("Realtime")
  comps.add("Backend")
  comps.add("Deploy")
  if (type === "mobile" || type === "all" || (Array.isArray(f) && f.includes("mobile"))) comps.add("Aplicación móvil")
  return Array.from(comps)
}

export function generateApproach({ type, features, platforms }) {
  const t = type || "producto digital"
  const p = Array.isArray(platforms) ? platforms.join(" + ") : platforms || "web"
  const hasAuth = (features || []).includes("auth") || (features || []).includes("users")
  const hasPay = (features || []).includes("payments") || (features || []).includes("subscriptions")
  const hasDb = (features || []).includes("db")
  return `Tu proyecto parece encajar como ${labelForType(t)} en ${p} con backend centralizado${hasAuth ? ", autenticación de usuarios" : ""}${hasDb ? ", base de datos" : ""}${hasPay ? " y sistema de pagos" : ""}.`
}

function labelForType(id) {
  const map = { mobile: "una aplicación móvil", web: "una aplicación web", saas: "un SaaS", enterprise: "un sistema empresarial", ecommerce: "un ecommerce", landing: "una landing/web corporativa", api: "una API/backend", automation: "una automatización con IA", unsure: "un producto digital" }
  return map[id] || "un producto digital"
}
