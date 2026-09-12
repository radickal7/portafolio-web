import { useEffect, lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
const ProjectBuilder = lazy(() => import("../components/project-builder/ProjectBuilder"))
export default function Create() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = `Creador de Apps | JuanDev`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", t("createPage.heroSubtitle"))
  }, [t])
  return (
    <main className="pt-[72px] pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_50%_-10%,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6 py-10 md:py-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{t("createPage.badge")}</div>
            <h1 className="mt-4 text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em] text-white leading-[0.95]">{t("createPage.heroTitle")}</h1>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-xl">{t("createPage.heroSubtitle")}</p>
            <p className="mt-3 text-sm text-indigo-200">{t("createPage.heroNote")}</p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a href="#builder" className="bg-white text-slate-900 px-6 py-3.5 rounded-full font-semibold hover:bg-slate-100">{t("createPage.startProject")} →</a>
              <span className="text-xs text-slate-500">{t("createPage.lessThan2Min")}</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs tracking-widest text-slate-400">{t("createPage.flow")}</div>
              <div className="mt-2 text-sm text-slate-200">{t("createPage.flowSteps")}</div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">{t("createPage.define")}</div><div className="text-slate-400">{t("createPage.defineDesc")}</div></div>
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">{t("createPage.design")}</div><div className="text-slate-400">{t("createPage.designDesc")}</div></div>
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-3"><div className="text-white font-semibold">{t("createPage.launch")}</div><div className="text-slate-400">{t("createPage.launchDesc")}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="builder" className="max-w-[1280px] mx-auto px-5 lg:px-6 mt-2">
        <Suspense fallback={<div className="rounded-2xl border border-white/10 bg-[#0b1220] p-8 text-center text-slate-400 text-sm">...</div>}>
          <ProjectBuilder />
        </Suspense>
      </div>
    </main>
  )
}
