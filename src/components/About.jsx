import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()
  const about = t("about", { returnObjects: true })

  return (
    <section className="py-32 scroll-mt-32" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-white mb-8">{about.title}</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 text-lg leading-relaxed">{about.description}</motion.p>
      </div>
    </section>
  )
}

