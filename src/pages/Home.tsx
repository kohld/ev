import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/markdown'
import BlogCard from '../components/BlogCard'

export default function Home() {
  const recent = getAllPosts().slice(0, 3)

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-8">
        <p className="text-sm font-mono mb-3" style={{ color: '#22c55e' }}>// ElectricVolution</p>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Leben mit dem<br />
          <span style={{ color: '#22c55e' }}>Škoda Elroq</span>
        </h1>
        <p className="text-lg opacity-60 max-w-xl leading-relaxed">
          Erfahrungen, Daten und Gedanken rund ums elektrische Fahren — von einem echten Nutzer.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            to="/blog"
            className="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            style={{ backgroundColor: '#22c55e', color: '#0f1117' }}
          >
            Zum Blog
          </Link>
          <Link
            to="/fahrzeug"
            className="px-5 py-2.5 rounded-lg font-medium text-sm border transition-colors hover:border-green-500/50"
            style={{ borderColor: '#2a3347', color: '#e2e8f0' }}
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
            <Link to="/blog" className="text-sm opacity-50 hover:opacity-100 transition-opacity" style={{ color: '#22c55e' }}>
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
