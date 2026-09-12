import { motion } from "framer-motion"
import { FaGlobe, FaMobileAlt, FaLayerGroup, FaBuilding, FaRobot, FaNetworkWired } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const iconMap = [FaGlobe, FaMobileAlt, FaLayerGroup, FaBuilding, FaRobot, FaNetworkWired]

export default function Capabilities() {
  const { t } = useTranslation()
  const transItems = t("capabilities.items", { returnObjects: true }) || []
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.18em] text-indigo-300 font-semibold">{t("capabilities.label")}</div>
          <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-white">{t("capabilities.title")}</h2>
          <p className="mt-3 text-slate-400">{t("capabilities.subtitle")}</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transItems.map((it, i) => {
            const Icon = iconMap[i]
            const href = i === 4 ? "#ia" : "/services"
            return (
            <motion.a
              key={it.title}
              href={href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] p-5 flex flex-col gap-3 transition"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-slate-900 grid place-items-center">
                <Icon size={16} />
              </div>
              <div className="text-white font-semibold">{it.title}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{it.desc}</div>
              <div className="mt-auto text-xs font-semibold text-indigo-300 group-hover:text-indigo-200">Explorar →</div>
            </motion.a>
          )})}
        </div>
      </div>
    </section>
  )
}
