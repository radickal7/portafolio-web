import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      nav: { home: "Inicio", projects: "Proyectos", about: "Sobre mí", contact: "Contacto", services: "Servicios", create: "Creador de Apps", cta: "Crear mi proyecto" },
      hero: {
        badge: "Disponible para nuevos proyectos · Respuesta en 24h",
        title1: "Convierto ideas",
        title2: "en productos digitales.",
        subtitle: "Desarrollo aplicaciones web, móviles, SaaS y sistemas empresariales desde la idea hasta producción. Infraestructura, diseño y código orientados a negocio.",
        ctaPrimary: "Crear mi proyecto",
        ctaSecondary: "Ver proyectos",
        stats: [
          { v: "3+", l: "Productos en producción" },
          { v: "100%", l: "Enfoque full stack" },
          { v: "24h", l: "Respuesta inicial" }
        ]
      },
      techStrip: { label: "CONSTRUYO CON TECNOLOGÍAS MODERNAS" },
      capabilities: {
        label: "CAPACIDADES",
        title: "¿Qué puedo crear?",
        subtitle: "Soluciones completas, no solo pantallas. Producto, arquitectura y puesta en producción.",
        items: [
          { title: "Web Apps", desc: "Aplicaciones web modernas, rápidas y escalables. Desde landing hasta plataforma completa." },
          { title: "Mobile Apps", desc: "Apps nativas y multiplataforma para Android e iOS. Publicables en stores." },
          { title: "SaaS", desc: "Plataformas con usuarios, pagos, suscripciones, dashboards y administración." },
          { title: "Sistemas empresariales", desc: "Ventas, inventario, caja, clientes, reportes y administración centralizada." },
          { title: "IA & Automatización", desc: "Integraciones con IA, automatización de procesos y flujos inteligentes." },
          { title: "APIs & Backend", desc: "APIs, bases de datos, autenticación, infraestructura y despliegue." }
        ]
      },
      featured: {
        label: "PORTAFOLIO",
        title: "Proyectos destacados",
        subtitle: "Casos reales, no demos. Cada proyecto resuelve un problema de negocio completo.",
        viewAll: "Ver todos",
        viewCase: "Ver caso de estudio",
        createSimilar: "Crear similar",
        wantSimilar: "¿Quieres construir algo parecido?"
      },
      servicesSection: {
        label: "SERVICIOS",
        title: "Lo que puedo hacer por tu negocio",
        subtitle: "Cada servicio resuelve un problema concreto. No es una lista de tecnologías, es valor de negocio.",
        viewService: "Ver servicio"
      },
      process: {
        label: "PROCESO",
        title: "Cómo trabajo",
        steps: [
          { n: "01", t: "Analizar", d: "Definimos qué quieres construir y para quién." },
          { n: "02", t: "Planificar", d: "Convertimos la idea en funcionalidades y alcance priorizado." },
          { n: "03", t: "Diseñar", d: "Estructura, flujos y experiencia. Prototipo si aplica." },
          { n: "04", t: "Desarrollar", d: "Frontend, backend, base de datos e integraciones." },
          { n: "05", t: "Probar", d: "QA funcional, performance y validación con usuarios." },
          { n: "06", t: "Lanzar", d: "Deploy a producción, métricas y evolución." }
        ]
      },
      ai: {
        badge: "Desarrollo con IA",
        title: "Soluciones que usan inteligencia artificial",
        subtitle: "Construyo integraciones reales con APIs de IA para automatizar procesos y crear nuevas experiencias.",
        items: [
          { title: "Asistentes", desc: "Chatbots y asistentes con contexto de tu negocio." },
          { title: "Automatización", desc: "Flujos que eliminan tareas manuales y conectan sistemas." },
          { title: "Documentos", desc: "Procesamiento y extracción de datos de PDFs e imágenes." },
          { title: "Visión artificial", desc: "Análisis de imágenes y detección para casos operativos." },
          { title: "Análisis", desc: "Clasificación, resumen y detección de patrones." },
          { title: "Vídeo & Contenido", desc: "Generación y procesamiento asistido para medios." }
        ]
      },
      stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Git"],
      stackTitle: "Tecnologías principales",
      about: {
        title: "Sobre mí",
        description: "Soy desarrollador web enfocado en crear aplicaciones modernas, escalables y orientadas a resultados. He trabajado en sistemas reales como plataformas de servicios, CRM y dashboards administrativos, cuidando tanto la experiencia de usuario como la arquitectura del sistema. Además, tengo experiencia en marketing digital front-end, desarrollando interfaces que no solo son atractivas y funcionales, sino que también están optimizadas para la conversión y la interacción del usuario. Me adapto rápido, comunico bien y priorizo soluciones que aporten valor al negocio."
      },
      cta: {
        title: "¿Tienes una idea?",
        description: "Cuéntame qué quieres construir. Te respondo con un plan y una estimación inicial.",
        button: "Crear mi proyecto"
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact", services: "Services", create: "App Builder", cta: "Create my project" },
      hero: {
        badge: "Available for new projects · Reply in 24h",
        title1: "I turn ideas",
        title2: "into digital products.",
        subtitle: "I build web, mobile, SaaS and business systems from idea to production. Infrastructure, design and code focused on business.",
        ctaPrimary: "Create my project",
        ctaSecondary: "View projects",
        stats: [
          { v: "3+", l: "Products in production" },
          { v: "100%", l: "Full stack focus" },
          { v: "24h", l: "Initial reply" }
        ]
      },
      techStrip: { label: "BUILT WITH MODERN STACK" },
      capabilities: {
        label: "CAPABILITIES",
        title: "What can I build?",
        subtitle: "End-to-end solutions, not just screens. Product, architecture and production deploy.",
        items: [
          { title: "Web Apps", desc: "Modern, fast and scalable web apps. From landing to full platform." },
          { title: "Mobile Apps", desc: "Native and cross-platform apps for Android and iOS. Store-ready." },
          { title: "SaaS", desc: "Platforms with users, payments, subscriptions, dashboards and admin." },
          { title: "Business Systems", desc: "Sales, inventory, POS, clients, reports and centralized admin." },
          { title: "AI & Automation", desc: "AI integrations, process automation and smart workflows." },
          { title: "APIs & Backend", desc: "APIs, databases, auth, infrastructure and deploy." }
        ]
      },
      featured: {
        label: "PORTFOLIO",
        title: "Featured projects",
        subtitle: "Real cases, not demos. Each project solves a full business problem.",
        viewAll: "View all",
        viewCase: "View case study",
        createSimilar: "Create similar",
        wantSimilar: "Want to build something similar?"
      },
      servicesSection: {
        label: "SERVICES",
        title: "What I can do for your business",
        subtitle: "Each service solves a concrete problem. Not a tech list, business value.",
        viewService: "View service"
      },
      process: {
        label: "PROCESS",
        title: "How I work",
        steps: [
          { n: "01", t: "Analyze", d: "We define what to build and for whom." },
          { n: "02", t: "Plan", d: "Turn idea into prioritized features and scope." },
          { n: "03", t: "Design", d: "Structure, flows and UX. Prototype when needed." },
          { n: "04", t: "Build", d: "Frontend, backend, database and integrations." },
          { n: "05", t: "Test", d: "Functional QA, performance and user validation." },
          { n: "06", t: "Launch", d: "Deploy to production, metrics and evolution." }
        ]
      },
      ai: {
        badge: "AI Development",
        title: "Solutions using artificial intelligence",
        subtitle: "I build real AI integrations to automate processes and create new experiences.",
        items: [
          { title: "Assistants", desc: "Chatbots and assistants with your business context." },
          { title: "Automation", desc: "Workflows that remove manual tasks and connect systems." },
          { title: "Documents", desc: "Processing and extraction from PDFs and images." },
          { title: "Computer Vision", desc: "Image analysis and detection for ops." },
          { title: "Analytics", desc: "Classification, summarization and pattern detection." },
          { title: "Video & Content", desc: "Assisted generation and processing for media." }
        ]
      },
      stack: ["React", "JavaScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Git"],
      stackTitle: "Main Technologies",
      about: {
        title: "About Me",
        description: "I am a web developer focused on building modern, scalable, and results-oriented applications. I have worked on real systems such as service platforms, CRMs, and admin dashboards, paying close attention to both user experience and system architecture. Additionally, I have experience in front-end digital marketing, creating interfaces that are not only visually appealing and functional but also optimized for user engagement and conversion. I adapt quickly, communicate effectively, and prioritize solutions that add business value."
      },
      cta: {
        title: "Have an idea?",
        description: "Tell me what you want to build. I'll reply with a plan and initial estimate.",
        button: "Create my project"
      }
    }
  }
}

const saved = typeof localStorage !== "undefined" ? localStorage.getItem("juandev_lang") : null

i18n.use(initReactI18next).init({
  resources,
  lng: saved || "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false }
})

i18n.on("languageChanged", (lng) => {
  try { localStorage.setItem("juandev_lang", lng); document.documentElement.lang = lng } catch (_e) { /* ignore */ }
  document.documentElement.lang = lng
})

export default i18n
