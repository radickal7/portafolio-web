import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si"

export default function Stack() {
  const { t } = useTranslation()
  
  // AGREGAR FALLBACK si t devuelve undefined
  const stackNames = t("stack", { returnObjects: true }) || []
  const stackTitle = t("stackTitle") || "Tecnologías principales"

  const icons = [<FaReact />, <SiJavascript />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />, <FaGitAlt />, <FaHtml5 />, <FaCss3Alt />]

  return (
    <section className="py-24 scroll-mt-32" id="stack">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">{stackTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stackNames.map((name, i) => (
            <motion.div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-indigo-400 transition"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl text-indigo-400 mb-3">{icons[i]}</div>
              <span className="text-gray-300">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
