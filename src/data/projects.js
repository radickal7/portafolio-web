export const projects = [
  {
    slug: "sistema-gestion-empresarial",
    title: "Sistema de Gestión Empresarial",
    shortDescription: "Sistema web para digitalizar operaciones: clientes, ventas, inventario y reportes en un solo lugar.",
    description: "Solución para negocios que gestionan clientes, ventas y stock de forma dispersa. Centraliza agenda, clientes, servicios y caja con panel administrativo y reportes.",
    category: "Sistema empresarial",
    featured: true,
    platform: "Web",
    status: "Producción",
    image: "/sd.jpg",
    gallery: ["/sd.jpg"],
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      services: ["JWT"],
      infra: ["Vercel"]
    },
    tech: ["React", "Express", "MongoDB", "Tailwind", "JWT", "Node.js"],
    problem: "Negocios gestionaban clientes, ventas e inventario en planillas y WhatsApp sin trazabilidad ni reportes. Faltaba un sistema que unificara agenda, clientes y caja sin fricción para el cliente final.",
    objective: "Digitalizar la operación permitiendo que el cliente reserve sin crear cuenta, mientras el negocio controla servicios, disponibilidad, clientes y caja desde un panel simple y confiable.",
    solution: "Frontend en React con calendario por servicios y franjas horarias. Backend Express con validación de solapamiento de turnos y cierre de caja diario. MongoDB para flexibilidad de catálogos. Flujo sin auth para el cliente final, token solo para el rol negocio/admin.",
    features: ["Reservas sin registro para cliente final", "Gestión de servicios y duración", "Clientes y historial", "Panel de agenda por día/semana", "Caja y reportes diarios", "Roles negocio/admin", "Validación de solapamiento de turnos", "Dashboard operativo"],
    architecture: ["Frontend: React SPA", "Backend: Express API REST", "DB: MongoDB", "Auth: JWT solo para negocio"],
    architectureVisual: `┌──────────────────────┐
│   Frontend React     │
│   Agenda + Reservas  │
└──────────┬───────────┘
           ↓ REST / JWT (solo negocio)
┌──────────────────────┐
│  Backend Express     │
│  Validación turnos   │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   MongoDB            │
│  Clientes/Reservas   │
└──────────────────────┘`,
    technicalChallenges: [
      "Evitar doble reserva en la misma franja horaria con validación atómica en backend.",
      "Mantener caja consistente al registrar pagos y cancelaciones sin descuadres.",
      "Diseñar modelo flexible para servicios de duración variable."
    ],
    decisions: [
      "MongoDB por flexibilidad de catálogos y evolución sin migraciones pesadas en etapa temprana.",
      "Express por simplicidad y foco en reglas de negocio de agenda."
    ],
    results: "Reservas en flujo corto sin fricción para el cliente y panel operativo para el negocio con reportes y caja. Base para escalar a inventario y ventas más amplias.",
    stackReason: "Stack ligero para iterar rápido y validar con negocios reales. PostgreSQL evaluado para fase relacional futura.",
    liveUrl: "",
    repositoryUrl: "",
    type: "real",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    shortDescription: "Plataforma web para gestión de tareas, equipos y proyectos. Proyecto demostrativo.",
    description: "Concepto de SaaS ligero para que equipos pequeños gestionen proyectos, tareas y prioridades con dashboard, filtros y notificaciones. Presentado como proyecto demostrativo, no cliente real.",
    category: "SaaS / Web App",
    featured: true,
    platform: "Web",
    status: "Demostrativo",
    badge: "Proyecto demostrativo",
    image: "/j.png",
    gallery: ["/j.png", "/sd.jpg"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      services: [],
      infra: []
    },
    tech: ["React", "JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    problem: "Equipos pequeños gestionaban tareas en chats y planillas sin visibilidad de prioridades, estados ni responsables. Faltaba una herramienta simple que unificara proyectos y tareas sin la complejidad de suites empresariales.",
    objective: "Conceptualizar un SaaS simple donde un equipo pueda crear proyectos, asignar tareas, definir prioridades y estados, y dar seguimiento desde un dashboard con filtros y búsqueda.",
    solution: "Diseño conceptual de plataforma con autenticación, usuarios, equipos, proyectos y tareas. Flujo: equipo → proyecto → tareas con prioridad y estado → dashboard con filtros y notificaciones. Pensado como base escalable a suscripciones y roles.",
    features: ["Autenticación", "Usuarios", "Equipos", "Proyectos", "Tareas", "Prioridades", "Estados", "Dashboard", "Filtros", "Búsqueda", "Notificaciones", "Roles básicos"],
    architecture: ["Frontend: React + Tailwind", "Backend: Node.js API", "DB: PostgreSQL (conceptual)"],
    architectureVisual: `┌──────────────────────┐
│  Frontend React      │
│  Dashboard + Tareas  │
└──────────┬───────────┘
           ↓ REST
┌──────────────────────┐
│  Backend Node.js     │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  PostgreSQL          │
└──────────────────────┘
(concepto demostrativo)`,
    technicalChallenges: [
      "Definir modelo relacional claro equipo → proyecto → tarea con estados y prioridades sin sobrecomplejizar.",
      "Diseñar filtros y búsqueda eficientes para listados de tareas con múltiples criterios.",
      "Mantener dashboard simple pero útil para equipos sin experiencia previa en gestión."
    ],
    decisions: [
      "PostgreSQL conceptual por naturaleza relacional de equipos/proyectos/tareas.",
      "React + Tailwind por iteración rápida de UI y componente de tareas reutilizable.",
      "Presentado como concepto para no atribuir cliente, métricas o resultados inventados."
    ],
    results: "Concepto demostrativo que muestra capacidad de diseñar un SaaS desde cero: modelo de datos, flujos y UI orientada a equipos. No se presentan métricas de cliente real.",
    stackReason: "Stack alineado al perfil profesional de JuanDev: React, Node, PostgreSQL, Tailwind.",
    liveUrl: "",
    repositoryUrl: "",
    type: "demo",
  },
  {
    slug: "dashboard-admin",
    title: "Dashboard Administrativo",
    shortDescription: "Panel interno con métricas, gestión de usuarios y visualización de datos operativos.",
    description: "Herramienta interna para visualizar métricas, administrar usuarios y centralizar operaciones con preparación para multi-sucursal.",
    category: "Sistema",
    featured: false,
    platform: "Web",
    status: "Activo",
    image: "/jj.png",
    gallery: ["/jj.png"],
    technologies: {
      frontend: ["React", "Chart.js", "Tailwind CSS"],
      backend: ["Node.js", "API REST"],
      database: ["PostgreSQL"],
      services: [],
      infra: []
    },
    tech: ["React", "Chart.js", "API REST", "Node.js", "PostgreSQL"],
    problem: "Operaciones dispersas en planillas sin visión centralizada de usuarios, actividad y métricas clave.",
    objective: "Centralizar métricas y administración en un panel con acceso por permisos y visualizaciones accionables.",
    solution: "SPA en React con gráficos en Chart.js consumiendo API REST. Capa de permisos por rol y endpoints agregados para métricas. Preparado para escalar a múltiples sedes.",
    features: ["Auth con roles y permisos", "Gestión de usuarios", "Gráficos y métricas", "Reportes exportables", "Filtros por fecha/entidad", "API agregada para dashboards"],
    architecture: ["Frontend: React + Chart.js", "Backend: API REST Node.js", "DB: PostgreSQL"],
    architectureVisual: `┌──────────────────────┐
│  React + Chart.js    │
└──────────┬───────────┘
           ↓ REST
┌──────────────────────┐
│   API Node.js        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   PostgreSQL         │
└──────────────────────┘`,
    technicalChallenges: [
      "Agregar métricas sin N+1 queries mediante endpoints agregados.",
      "Mantener permisos consistentes entre UI y API.",
      "Evitar re-renders innecesarios en gráficos."
    ],
    decisions: [
      "Chart.js por simplicidad y bundle controlado.",
      "PostgreSQL por consultas agregadas y consistencia."
    ],
    results: "Panel con métricas operativas y gestión con control por permisos, base para vistas multi-sucursal.",
    stackReason: "Stack enfocado en visualización rápida y mantenimiento simple.",
    liveUrl: "",
    repositoryUrl: "",
    type: "real",
  }
]
