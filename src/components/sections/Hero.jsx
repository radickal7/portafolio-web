import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FaWhatsapp } from "react-icons/fa"
import { contactConfig } from "../../lib/contactConfig"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="home" className="relative pt-[96px] pb-10 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-10%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.5 }} className="mt-6 text-[32px] leading-[0.95] md:text-[52px] font-extrabold tracking-[-0.03em] text-white">
            {t("hero.title1")}<br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.5 }} className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-slate-400 max-w-[560px]">
            {t("hero.subtitle")}
          </motion.p>
          <p className="mt-3 text-sm text-slate-500 max-w-[560px]">Para negocios, emprendedores y proyectos que necesitan convertir una idea en software.</p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/create" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3.5 rounded-full text-[14px] font-semibold hover:bg-slate-100 transition">
              {t("hero.ctaPrimary")} →
            </Link>
            <a href="#projects" className="inline-flex items-center justify-center border border-white/15 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold hover:bg-white/5 transition">
              {t("hero.ctaSecondary")}
            </a>
            {contactConfig.whatsappUrl && (
              <a href={contactConfig.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold transition">
                <FaWhatsapp size={16} /> WhatsApp
              </a>
            )}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium">
            {["Web", "Mobile", "SaaS", "Sistemas", "IA", "APIs"].map((k) => (
              <span key={k} className="px-2.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300">{k}</span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px]">
            {(t("hero.stats", { returnObjects: true }) || []).map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-white font-bold text-lg leading-none">{s.v}</div>
                <div className="text-xs text-slate-400 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="lg:col-span-5">
          <div className="relative rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-soft backdrop-blur">
            <div className="rounded-[16px] overflow-hidden bg-[#0b1220] border border-white/10">
              <div className="h-9 flex items-center gap-1.5 px-3 border-b border-white/5 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs font-mono text-slate-400">juandev — product studio</span>
              </div>
              <div className="p-4 font-mono text-xs leading-5">
                <div className="text-slate-500">// arquitectura de producto</div>
                <div className="text-slate-200"><span className="text-violet-400">const</span> product = <span className="text-indigo-300">createProduct</span>({`{`}</div>
                <div className="pl-4 text-slate-300">type: <span className="text-emerald-300">"SaaS"</span>,</div>
                <div className="pl-4 text-slate-300">stack: [<span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"NestJS"</span>, <span className="text-emerald-300">"Postgres"</span>],</div>
                <div className="pl-4 text-slate-300">features: [<span className="text-emerald-300">"auth"</span>, <span className="text-emerald-300">"payments"</span>, <span className="text-emerald-300">"dashboard"</span>],</div>
                <div className="pl-4 text-slate-300">deploy: <span className="text-emerald-300">"production"</span></div>
                <div className="text-slate-200">{`}`})</div>
                <div className="mt-3 flex items-center gap-2 text-[11px]">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">● Build passed</span>
                  <span className="px-2 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">Deploy live</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { k: "Usuarios", v: "1.2k" },
                    { k: "Uptime", v: "99.9%" },
                    { k: "API", v: "42ms" },
                  ].map((c) => (
                    <div key={c.k} className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                      <div className="text-slate-400 text-[10px]">{c.k}</div>
                      <div className="text-white font-semibold">{c.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
