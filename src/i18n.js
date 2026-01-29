import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      nav: { home: "Inicio", projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
      hero: {
        title1: "Desarrollo soluciones",
        title2: "web modernas",
        description: "Desarrollador web especializado en React, Node.js y sistemas modernos orientados a resultados reales.",
        projects: "Ver proyectos",
        contact: "Contactarme"
      },
      projects: [
        { title: "Plataforma de Servicios tipo Uber", description: "Sistema completo de servicios con roles, pagos, calificaciones y panel administrativo.", tech: ["React", "Node.js", "MongoDB", "Tailwind"] },
        { title: "Sistema de Gestión de Citas (CRM)", description: "Aplicación web para gestión de citas sin login adicional, orientada a negocios.", tech: ["React", "Express", "MongoDB"] },
        { title: "Dashboard Administrativo", description: "Panel con estadísticas, control de usuarios y visualización de datos en tiempo real.", tech: ["React", "Chart.js", "API REST"] }
      ],
      stack: ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Git", "HTML5", "CSS3"],
      stackTitle: "Tecnologías principales",
      about: {
        title: "Sobre mí",
        description: "Soy desarrollador web enfocado en crear aplicaciones modernas, escalables y orientadas a resultados. He trabajado en sistemas reales como plataformas de servicios, CRM y dashboards administrativos, cuidando tanto la experiencia de usuario como la arquitectura del sistema. Además, tengo experiencia en marketing digital front-end, desarrollando interfaces que no solo son atractivas y funcionales, sino que también están optimizadas para la conversión y la interacción del usuario. Me adapto rápido, comunico bien y priorizo soluciones que aporten valor al negocio."
      },
      cta: {
        title: "¿Trabajamos juntos?",
        description: "Estoy disponible para proyectos freelance, contratos remotos o colaboraciones a largo plazo.",
        button: "Contáctame"
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
      hero: {
        title1: "I build",
        title2: "modern web solutions",
        description: "Web developer specialized in React, Node.js and modern systems focused on real results.",
        projects: "View projects",
        contact: "Contact me"
      },
      projects: [
        { title: "Uber-like Service Platform", description: "Full service system with roles, payments, ratings and admin panel.", tech: ["React", "Node.js", "MongoDB", "Tailwind"] },
        { title: "Appointment Management System (CRM)", description: "Web app for appointment management without extra login, for businesses.", tech: ["React", "Express", "MongoDB"] },
        { title: "Admin Dashboard", description: "Dashboard with stats, user control and real-time data visualization.", tech: ["React", "Chart.js", "REST API"] }
      ],
      stack: ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Git", "HTML5", "CSS3"],
      stackTitle: "Main Technologies",
      about: {
        title: "About Me",
        description: "I am a web developer focused on building modern, scalable, and results-oriented applications. I have worked on real systems such as service platforms, CRMs, and admin dashboards, paying close attention to both user experience and system architecture. Additionally, I have experience in front-end digital marketing, creating interfaces that are not only visually appealing and functional but also optimized for user engagement and conversion. I adapt quickly, communicate effectively, and prioritize solutions that add business value."
      },
      cta: {
        title: "Shall we work together?",
        description: "Available for freelance projects, remote contracts, or long-term collaborations.",
        button: "Contact me"
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

export default i18n
