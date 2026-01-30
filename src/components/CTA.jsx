import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function CTA() {
  const { t } = useTranslation()
  const cta = t("cta", { returnObjects: true })

  return (
    <section className="py-32 scroll-mt-32" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-white">{cta.title}</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 mt-6 text-lg">{cta.description}</motion.p>
        <motion.a href="mailto:juanjmacchiarulo@gmail.com" whileHover={{ scale: 1.05 }} className="inline-block mt-10 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-medium">{cta.button}</motion.a>
      </div>
    </section>
  )
}
<a
  href="/JuanDev_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium"
>
  Descargar CV
</a>
