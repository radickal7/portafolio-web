import { useTranslation } from "react-i18next"
export default function TechStrip() {
  const { t } = useTranslation()
  const techs = ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "Kotlin", "Android", "PostgreSQL", "Prisma", "Docker", "IA"]
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] backdrop-blur">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="text-xs tracking-widest text-slate-400 font-semibold shrink-0">{t("techStrip.label")}</div>
        <div className="flex-1 w-full overflow-hidden relative">
          <div className="flex gap-2 whitespace-nowrap animate-marquee w-max">
            {[...techs, ...techs].map((t, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-semibold border border-white/10">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
