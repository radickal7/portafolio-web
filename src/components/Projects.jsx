import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Projects() {
  const { t } = useTranslation()
  const projects = t("projects", { returnObjects: true })

  return (
    <section className="py-32 scroll-mt-32" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 className="text-4xl font-bold text-white mb-16">{t("nav.projects")}</motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-slate-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-indigo-400 transition"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
