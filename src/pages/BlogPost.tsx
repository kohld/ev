import { useParams, Link } from 'react-router-dom'
import { getPost } from '../lib/markdown'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : null

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="text-lg opacity-50 mb-4">Post nicht gefunden.</p>
        <Link to="/blog" className="text-sm" style={{ color: '#22c55e' }}>← Zurück zum Blog</Link>
      </div>
    )
  }

  return (
    <article className="max-w-2xl">
      <Link to="/blog" className="text-sm opacity-50 hover:opacity-100 transition-opacity mb-6 block">
        ← Blog
      </Link>

      <header className="mb-8">
        <time className="text-xs opacity-40 block mb-2 font-mono">{post.date}</time>
        <h1 className="text-3xl font-bold text-white mb-3 leading-tight">{post.title}</h1>
        {post.description && (
          <p className="text-base opacity-60 leading-relaxed">{post.description}</p>
        )}
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#1e2535', color: '#22c55e' }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
