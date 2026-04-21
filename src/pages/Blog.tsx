import { getAllPosts } from '../lib/markdown'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
      <p className="opacity-50 mb-8 text-sm">Alle Beiträge rund um Elektromobilität und den Elroq.</p>

      {posts.length === 0 ? (
        <p className="opacity-40 text-sm">Noch keine Posts vorhanden.</p>
      ) : (
        <div className="space-y-3">
          {posts.map(post => <BlogCard key={post.slug} post={post} />)}
        </div>
      )}
    </div>
  )
}
