export const services = [
  {
    slug: "web-apps",
    title: "Aplicaciones Web",
    short: "Aplicaciones web modernas para gestionar procesos, clientes y operaciones.",
    description: "Aplicaciones web modernas para gestionar procesos, clientes, operaciones y servicios desde cualquier dispositivo.",
    problem: "Muchas operaciones siguen en planillas, chats y herramientas desconectadas. Sin una aplicación central, los datos se pierden, los procesos no escalan y la experiencia del cliente se resiente.",
    solution: "Desarrollo plataformas web con usuarios, paneles y flujos a medida: desde un MVP navegable hasta un sistema en producción con base de datos, auth y despliegue. Cuidando arquitectura y UX orientada a conversión.",
    capabilities: ["Plataformas con usuarios", "Dashboards", "Sistemas internos", "Portales", "Herramientas de gestión", "Aplicaciones con roles", "Sistemas conectados a APIs"],
    functionalities: ["Autenticación", "Usuarios", "Roles", "Dashboards", "Bases de datos", "Pagos", "Notificaciones", "APIs", "Integraciones"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Git"]
    },
    relatedProjects: ["taskflow", "dashboard-admin"],
  },
  {
    slug: "mobile-apps",
    title: "Aplicaciones Móviles",
    short: "Apps móviles rápidas e intuitivas para Android e iOS.",
    description: "Aplicaciones móviles diseñadas para ofrecer experiencias rápidas, intuitivas y adaptadas a las necesidades de cada negocio.",
    problem: "Los usuarios esperan resolver todo desde el móvil. Sin una app móvil, la fricción aumenta y la retención cae, especialmente en productos de consumo frecuente.",
    solution: "Diseño y desarrollo de apps móviles con flujos simples, autenticación, notificaciones y sincronización con backend. Publicables en stores cuando el producto lo requiere.",
    capabilities: ["Apps para clientes finales", "Apps internas para equipos", "Sincronización con web", "Notificaciones push", "Modo offline básico", "Publicación en stores"],
    functionalities: ["Usuarios", "Roles", "Notificaciones", "APIs", "Base de datos", "Pagos", "Chat", "Mapas"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Git"]
    },
    relatedProjects: ["taskflow"],
  },
  {
    slug: "saas",
    title: "SaaS",
    short: "Productos digitales escalables por suscripción.",
    description: "Productos digitales escalables para convertir una idea de software en una plataforma accesible por suscripción o modelo online.",
    problem: "Convertir una idea en SaaS requiere más que una landing: usuarios, planes, pagos, paneles y una arquitectura que soporte crecimiento sin reescribir todo.",
    solution: "Construyo SaaS con autenticación, planes y pagos, paneles por rol, y base de datos relacional. Desde la definición del MVP hasta la puesta en producción con observabilidad básica.",
    capabilities: ["Autenticación y suscripciones", "Paneles admin y cliente", "Gestión de planes y pagos", "Onboarding", "Notificaciones", "Reportes"],
    functionalities: ["Usuarios", "Roles", "Pagos", "Suscripciones", "Dashboards", "Bases de datos", "APIs", "Notificaciones"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      tools: ["Git"]
    },
    relatedProjects: ["taskflow"],
  },
  {
    slug: "business-systems",
    title: "Sistemas para Negocios",
    short: "Sistemas a medida para digitalizar tu operación.",
    description: "Sistemas personalizados para digitalizar procesos, administrar información y mejorar la operación de un negocio.",
    problem: "Ventas, clientes, inventario y reportes viven separados. Sin un sistema central, la operación es manual, propensa a errores y sin métricas accionables.",
    solution: "Desarrollo sistemas que unifican clientes, ventas, inventario, caja y reportes en un panel. Primero digitalizo el flujo crítico, luego itero con automatización y permisos por rol.",
    capabilities: ["Gestión de clientes", "Ventas y caja", "Inventario", "Reportes", "Usuarios y roles", "Dashboard operativo", "Automatización de flujos"],
    functionalities: ["Usuarios", "Roles", "Bases de datos", "Dashboards", "Reportes", "Notificaciones", "APIs"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["MongoDB", "PostgreSQL"],
      tools: ["Git"]
    },
    relatedProjects: ["sistema-gestion-empresarial", "dashboard-admin"],
  },
  {
    slug: "ai-automation",
    title: "IA y Automatización",
    short: "Automatiza tareas con IA e integraciones.",
    description: "Automatización de tareas y procesos mediante inteligencia artificial, APIs e integraciones digitales.",
    problem: "Tareas repetitivas consumen horas y propician errores. Sin automatización, el equipo escala linealmente con la operación.",
    solution: "Integro APIs de IA e integraciones para automatizar flujos: procesamiento de documentos, asistentes, notificaciones y sincronización entre sistemas. Siempre con validación humana donde importa.",
    capabilities: ["Asistentes", "Procesamiento de documentos", "Automatización de flujos", "Sincronización entre sistemas", "Notificaciones inteligentes", "Análisis básico"],
    functionalities: ["IA", "Automatizaciones", "APIs", "Integraciones", "Notificaciones", "Bases de datos"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Git"]
    },
    relatedProjects: ["taskflow"],
  },
  {
    slug: "apis-backend",
    title: "APIs y Backend",
    short: "Backends robustos para conectar todo.",
    description: "Backends y APIs robustas para conectar aplicaciones, administrar datos e integrar servicios.",
    problem: "Sin una API sólida, las apps se vuelven frágiles, lentas y difíciles de integrar con terceros. La falta de contratos claros frena el crecimiento del producto.",
    solution: "Diseño APIs REST con validación, auth y permisos, base de datos relacional cuando el dominio lo pide, y despliegue con observabilidad. Contratos estables para que frontend y móvil evolucionen sin quiebres.",
    capabilities: ["APIs REST", "Autenticación y permisos", "Bases de datos", "Integraciones externas", "Webhooks", "Documentación básica"],
    functionalities: ["APIs", "Bases de datos", "Autenticación", "Roles", "Integraciones"],
    technologies: {
      frontend: ["React"],
      backend: ["Node.js"],
      database: ["PostgreSQL", "MongoDB"],
      tools: ["Git"]
    },
    relatedProjects: ["sistema-gestion-empresarial", "dashboard-admin"],
  }
]
