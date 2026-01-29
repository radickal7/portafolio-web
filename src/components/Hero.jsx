import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center scroll-mt-32" id="home">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {t("hero.title1")} <br />
            <span className="text-indigo-400">{t("hero.title2")}</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg">{t("hero.description")}</p>
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium"
            >
              {t("hero.projects")}
            </a>
            <a
              href="#contact"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:border-white hover:text-white"
            >
              {t("hero.contact")}
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
