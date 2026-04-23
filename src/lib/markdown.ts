import { marked } from 'marked'
import { parseFrontmatter, slugFromPath, readingTime } from './frontmatter'

export { parseFrontmatter, slugFromPath, readingTime }

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readingTime: number
}

export interface Post extends PostMeta {
  html: string
}

const modules = import.meta.glob<string>('../posts/*.md', { query: '?raw', import: 'default', eager: true })

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw)
      const slug = slugFromPath(path)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
        readingTime: readingTime(body),
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | null {
  const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === slug)
  if (!entry) return null
  const [path, raw] = entry
  const { data, body } = parseFrontmatter(raw)
  const html = marked.parse(body) as string
  return {
    slug: slugFromPath(path),
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
    readingTime: readingTime(body),
    html,
  }
}
