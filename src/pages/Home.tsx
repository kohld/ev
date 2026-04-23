import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/markdown'
import BlogCard from '../components/BlogCard'

export default function Home() {
  const recent = getAllPosts().slice(0, 3)

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-8">
        <p className="text-sm font-mono mb-3 text-ev-green">// ElectricVolution</p>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Leben mit dem<br />
          <span className="text-ev-green">Škoda Elroq</span>
        </h1>
        <p className="text-lg opacity-60 max-w-xl leading-relaxed">
          Erfahrungen, Daten und Gedanken rund ums elektrische Fahren — von einem echten Nutzer.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            to="/blog"
            className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors bg-ev-green text-surface"
          >
            Zum Blog
          </Link>
          <Link
            to="/fahrzeug"
            className="px-5 py-2.5 rounded-lg font-medium text-sm border border-border text-slate-200 transition-colors hover:border-ev-green/50"
          >
            Mein Elroq
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      {recent.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold text-white">Neueste Posts</h2>
            <Link to="/blog" className="text-sm text-ev-green opacity-50 hover:opacity-100 transition-opacity">
              Alle ansehen →
            </Link>
          </div>
          <div className="space-y-3">
            {recent.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
        </section>
      )}
    </div>
  )
}
