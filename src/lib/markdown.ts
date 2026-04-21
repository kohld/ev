import { marked } from 'marked'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export interface Post extends PostMeta {
  html: string
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '')
    data[key] = val
  }
  return { data, body: match[2] }
}

const modules = import.meta.glob<string>('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function slugFromPath(path: string): string {
  return path.replace(/^.*\//, '').replace(/\.md$/, '')
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data } = parseFrontmatter(raw)
      const slug = slugFromPath(path)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
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
    html,
  }
}
