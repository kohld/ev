import { useState } from 'react'
import { getAllPosts } from '../lib/markdown'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  const posts = getAllPosts()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort()
  const filtered = activeTag ? posts.filter(p => p.tags.includes(activeTag)) : posts

  const handleTagClick = (tag: string) => {
    setActiveTag(prev => prev === tag ? null : tag)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
      <p className="opacity-50 mb-6 text-sm">Alle Beiträge rund um Elektromobilität und den Elroq.</p>

      {allTags.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                activeTag === tag
                  ? 'bg-ev-green text-surface font-medium'
                  : 'bg-surface-3 text-ev-green hover:bg-ev-green/20'
              }`}
            >
              {tag}
            </button>
          ))}
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs px-3 py-1 rounded-full bg-surface-3 opacity-40 hover:opacity-70 transition-opacity"
            >
              × Alle
            </button>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="opacity-40 text-sm">Keine Posts für diesen Tag.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map(post => (
            <BlogCard
              key={post.slug}
              post={post}
              activeTag={activeTag ?? undefined}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
