import { useParams, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { posts } from "../data/blog"
import { useEffect } from "react"
export default function BlogPost() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  useEffect(() => { if (post) document.title = `${post.title} | JuanDev` }, [post, t])
  if (!post) return <main className="pt-[88px] max-w-[1280px] mx-auto px-5"><h1 className="text-white font-bold">{t("blog.notFound")}</h1><Link to="/blog" className="text-indigo-300">← {t("blog.back")}</Link></main>
  return (
    <main className="pt-[72px] pb-16 max-w-[800px] mx-auto px-5 lg:px-6">
      <Link to="/blog" className="text-sm text-slate-400 hover:text-white">← {t("blog.back")}</Link>
      <h1 className="mt-4 text-[28px] font-bold text-white leading-tight">{post.title}</h1>
      <div className="text-xs text-slate-500 mt-2">{post.date}</div>
      <p className="text-slate-300 mt-6 leading-relaxed whitespace-pre-wrap">{post.content}</p>
      <Link to="/create" className="mt-8 inline-flex bg-white text-slate-900 px-6 py-3 rounded-full font-semibold">{t("cta.button")} →</Link>
    </main>
  )
}
