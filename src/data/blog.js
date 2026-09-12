export const posts = [
  {
    slug: "postgresql-vs-mongodb-saas",
    title: "PostgreSQL vs MongoDB para SaaS: cuándo usar cada uno",
    excerpt: "Criterios prácticos para elegir base relacional o documental en un SaaS, con ejemplos de TaskFlow y sistema empresarial.",
    date: "2025-11-20",
    content: `Elegir base de datos no es dogma. Para TaskFlow (equipos→proyectos→tareas) PostgreSQL aporta integridad referencial y transacciones. Para catálogos flexibles en etapa temprana, MongoDB permite iterar sin migraciones. En mis proyectos uso PostgreSQL cuando el dominio es relacional y Mongo cuando la flexibilidad prima, siempre con capa de validación en backend.`,
  },
  {
    slug: "disenar-sistema-gestion-empresarial",
    title: "Cómo diseñar un sistema de gestión empresarial sin sobre-ingeniería",
    excerpt: "De planillas a sistema: flujo reservas→clientes→caja sin doble-reserva, con validación atómica.",
    date: "2025-12-01",
    content: `Un sistema empresarial empieza por el flujo crítico: en mi caso, reservas sin doble-asignación. Primero validación atómica en Express + MongoDB, luego caja y reportes. Evitar N+1 en dashboards y permisos consistentes UI/API son los retos reales. Iterar sobre el flujo que genera valor, no construir todo a la vez.`,
  },
]
