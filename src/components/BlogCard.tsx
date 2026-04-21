import { Link } from 'react-router-dom'
import type { PostMeta } from '../lib/markdown'

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block rounded-xl p-5 border transition-colors hover:border-green-500/50"
      style={{ backgroundColor: '#161b27', borderColor: '#2a3347' }}
    >
      <time className="text-xs opacity-50 mb-1 block">{post.date}</time>
      <h2 className="text-lg font-semibold text-white mb-1">{post.title}</h2>
      <p className="text-sm opacity-60 leading-relaxed">{post.description}</p>
      {post.tags.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#1e2535', color: '#22c55e' }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
