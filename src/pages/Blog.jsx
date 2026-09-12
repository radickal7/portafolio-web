import { useEffect } from "react"
import { Link } from "react-router-dom"
import { posts } from "../data/blog"
export default function Blog() {
  useEffect(() => { document.title = "Blog | JuanDev"; }, [])
  return (
    <main className="pt-[72px] pb-16 max-w-[1280px] mx-auto px-5 lg:px-6">
      <h1 className="text-[32px] font-bold text-white">Blog</h1>
      <p className="text-slate-400 mt-2">Contenido educativo basado en experiencia verificable. Máximo 2 artículos iniciales.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] block">
            <div className="text-xs text-slate-500">{p.date}</div>
            <div className="text-white font-semibold mt-1">{p.title}</div>
            <div className="text-sm text-slate-400 mt-2">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
