export const projects = [
  {
    slug: "servistar",
    title: "Servistar",
    shortDescription: "Plataforma web de servicios a domicilio con gestión completa de oferta, demanda y pagos.",
    description: "Sistema donde clientes solicitan servicios, prestadores aceptan trabajos y administradores gestionan operaciones. Incluye verificación, calificaciones, chat y pagos.",
    category: "Web App",
    featured: true,
    platform: "Web",
    status: "Producción",
    image: "/sd.jpg",
    gallery: ["/sd.jpg", "/jj.png"],
    technologies: {
      frontend: ["React", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "NestJS", "Socket.io"],
      database: ["PostgreSQL", "Prisma"],
      services: ["Stripe"],
      infra: ["Vercel"]
    },
    tech: ["Next.js", "React", "NestJS", "PostgreSQL", "Prisma", "Stripe", "Socket.io", "Tailwind"],
    problem: "Los negocios de servicios gestionaban solicitudes por WhatsApp y planillas, sin trazabilidad de pedidos, sin roles claros y sin control de pagos ni calificaciones. No existía un flujo único donde cliente-prestador-admin interactuaran con información confiable.",
    objective: "Centralizar el flujo completo: solicitud, aceptación, seguimiento, pago y calificación. Separar responsabilidades por rol y dejar una base escalable para agregar más categorías de servicios sin reescribir el producto.",
    solution: "Construí una web app con tres experiencias diferenciadas por rol. El cliente crea solicitudes con detalle y ubicación; el prestador gestiona su disponibilidad y acepta trabajos; el admin supervisa operaciones con panel y métricas. Integré pagos con Stripe, chat en tiempo real con Socket.io y persistencia relacional con PostgreSQL + Prisma para garantizar consistencia de estados.",
    features: ["Autenticación y roles (cliente/prestador/admin)", "KYC/verificación básica", "Solicitudes con estados", "Chat cliente-prestador", "Pagos con Stripe", "Calificaciones y reseñas", "Notificaciones", "Dashboard administrativo", "Gestión de usuarios"],
    architecture: ["Frontend: Next.js/React (SSR + CSR según vista)", "Backend: NestJS API REST + WebSocket (Socket.io)", "DB: PostgreSQL con Prisma ORM", "Servicios: Stripe para pagos", "Infra: Vercel"],
    architectureVisual: `┌──────────────────────┐
│      Frontend        │
│   Next.js / React    │
│      + Tailwind      │
└──────────┬───────────┘
           ↓ REST + WebSocket
┌──────────────────────┐
│       Backend        │
│   NestJS + Socket.io │
└──────────┬───────────┘
           ↓ Prisma
┌──────────────────────┐
│      Database        │
│   PostgreSQL         │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Servicios externos │
│   Stripe             │
└──────────────────────┘`,
    technicalChallenges: [
      "Modelar estados de solicitudes sin condiciones de carrera (solicitud → aceptada → en curso → completada) y reflejarlo en UI y DB sin desincronización.",
      "Sincronizar chat en tiempo real y notificaciones sin duplicar eventos ni perder mensajes al recargar.",
      "Integrar pagos manteniendo conciliación entre estado del pedido y estado del pago.",
      "Definir permisos por rol a nivel API para que un cliente no pueda mutar recursos de prestador/admin."
    ],
    decisions: [
      "PostgreSQL + Prisma por la naturaleza relacional (usuarios, solicitudes, pagos, calificaciones) y necesidad de transacciones.",
      "NestJS por su estructura modular y soporte para WebSockets y validación con DTOs.",
      "Stripe por su flujo de pagos probado y webhooks."
    ],
    results: "Producto navegable con separación clara de roles, flujo de solicitudes con estados consistentes y base preparada para escalar a nuevas verticales de servicios. Código separado en capas frontend/backend/DB sin acoplamientos innecesarios.",
    stackReason: "Stack elegido por tipado, consistencia y facilidad de deploy incremental.",
    liveUrl: "",
    repositoryUrl: "",
  },
  {
    slug: "crm-citas",
    title: "Gestor de Citas",
    shortDescription: "SaaS ligero para negocios locales que gestionan citas sin fricción para el cliente final.",
    description: "App para que negocios gestionen servicios, disponibilidad, clientes y caja sin exigir login adicional al cliente que reserva.",
    category: "SaaS",
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
    tech: ["React", "Express", "MongoDB", "Tailwind", "JWT"],
    problem: "Peluquerías y consultorios perdían reservas por fricción: apps que obligaban al cliente a registrarse, calendarios sin control de caja ni clientes, y reportes manuales.",
    objective: "Permitir que un cliente reserve en 2 clics sin crear cuenta, mientras el negocio mantiene control total de agenda, clientes, servicios y caja desde un panel simple.",
    solution: "Frontend en React con calendario por servicios y franjas horarias. Backend Express con validación de solapamiento de turnos y cierre de caja diario. MongoDB para flexibilidad de servicios y clientes. Flujo sin auth para el cliente final, con token solo para el rol negocio/admin.",
    features: ["Reservas sin registro para cliente final", "Gestión de servicios y duración", "Clientes y historial", "Panel de agenda por día/semana", "Caja y reportes diarios", "Roles negocio/admin", "Validación de solapamiento de turnos"],
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
      "Diseñar modelo de datos flexible para servicios de duración variable."
    ],
    decisions: [
      "MongoDB por flexibilidad de catálogos de servicios y evolución sin migraciones pesadas en etapa temprana.",
      "Express por simplicidad y foco en reglas de negocio de agenda sin sobre-arquitectura."
    ],
    results: "Reservas en flujo corto sin fricción para el cliente y panel operativo para el negocio con reportes y caja. Reducción de pasos para reservar y trazabilidad de operaciones.",
    stackReason: "Stack ligero para iterar rápido y validar producto con negocios reales.",
    liveUrl: "",
    repositoryUrl: "",
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
    image: "/j.png",
    gallery: ["/j.png"],
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
    solution: "SPA en React con gráficos en Chart.js consumiendo API REST. Capa de permisos por rol y endpoints agregados para métricas. Preparado para escalar a múltiples sedes con filtros por período y entidad.",
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
      "Agregar métricas sin N+1 queries mediante endpoints agregados en backend.",
      "Mantener permisos consistentes entre UI y API.",
      "Evitar re-renders innecesarios en gráficos con datos frecuentes."
    ],
    decisions: [
      "Chart.js por simplicidad y bundle controlado frente a librerías más pesadas.",
      "PostgreSQL por consultas agregadas y consistencia para métricas."
    ],
    results: "Panel con métricas operativas y gestión de usuarios con control por permisos, base para escalar a vistas multi-sucursal.",
    stackReason: "Stack enfocado en visualización rápida y mantenimiento simple.",
    liveUrl: "",
    repositoryUrl: "",
  }
]
