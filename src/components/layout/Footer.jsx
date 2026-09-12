import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#020617]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-white font-bold tracking-tight">JUANDEV</div>
            <div className="text-xs tracking-[0.16em] text-slate-500 mt-1">DESARROLLO DE PRODUCTOS DIGITALES</div>
            <p className="text-sm text-slate-400 mt-4 max-w-sm">Convierto ideas en aplicaciones y sistemas listos para producción. Web · Mobile · SaaS · IA.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Navegación</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white">Inicio</Link></li>
              <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><Link to="/create" className="hover:text-white">Creador de Apps</Link></li>
              <li><a href="#contact" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Contacto</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:juanjmacchiarulo@gmail.com" className="hover:text-white">juanjmacchiarulo@gmail.com</a></li>
              <li><a href="https://github.com/radickal7" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
              <li><Link to="/create" className="hover:text-white">Crear mi proyecto →</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-3">Tecnologías</div>
            <p className="text-sm text-slate-500 leading-relaxed">React · Next.js · Node.js · NestJS · Kotlin · PostgreSQL · Prisma · Docker · IA</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row gap-3 justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} JuanDev. Todos los derechos reservados.</span>
          <span>Construido con React + Vite · Optimizado para conversión.</span>
        </div>
      </div>
    </footer>
  )
}
