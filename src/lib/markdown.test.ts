import { describe, expect, test } from 'bun:test'
import { parseFrontmatter, slugFromPath } from './frontmatter'

describe('parseFrontmatter', () => {
  test('parses valid frontmatter', () => {
    const raw = `---\ntitle: Hello World\ndate: 2026-04-21\ndescription: A test post\ntags: ev, skoda\n---\nBody text here`
    const { data, body } = parseFrontmatter(raw)
    expect(data.title).toBe('Hello World')
    expect(data.date).toBe('2026-04-21')
    expect(data.description).toBe('A test post')
    expect(data.tags).toBe('ev, skoda')
    expect(body).toBe('Body text here')
  })

  test('returns empty data and raw string when no frontmatter', () => {
    const raw = 'Just plain markdown content.'
    const { data, body } = parseFrontmatter(raw)
    expect(data).toEqual({})
    expect(body).toBe(raw)
  })

  test('handles Windows line endings (CRLF)', () => {
    const raw = `---\r\ntitle: CRLF Post\r\ndate: 2026-01-01\r\n---\r\nContent`
    const { data, body } = parseFrontmatter(raw)
    expect(data.title).toBe('CRLF Post')
    expect(data.date).toBe('2026-01-01')
    expect(body).toBe('Content')
  })

  test('strips surrounding quotes from values', () => {
    const raw = `---\ntitle: "Quoted Title"\ndescription: 'Single quotes'\n---\n`
    const { data } = parseFrontmatter(raw)
    expect(data.title).toBe('Quoted Title')
    expect(data.description).toBe('Single quotes')
  })

  test('preserves colons in values', () => {
    const raw = `---\ntitle: Time: 12:00\n---\n`
    const { data } = parseFrontmatter(raw)
    expect(data.title).toBe('Time: 12:00')
  })

  test('handles missing optional fields gracefully (empty string)', () => {
    const raw = `---\ntitle: Only Title\n---\nBody`
    const { data } = parseFrontmatter(raw)
    expect(data.title).toBe('Only Title')
    expect(data.date).toBeUndefined()
    expect(data.tags).toBeUndefined()
  })

  test('handles empty tags field', () => {
    const raw = `---\ntitle: Post\ntags:\n---\n`
    const { data } = parseFrontmatter(raw)
    expect(data.tags).toBe('')
  })
})

describe('slugFromPath', () => {
  test('extracts slug from relative path', () => {
    expect(slugFromPath('../posts/2026-04-21-erste-eindrucke.md')).toBe('2026-04-21-erste-eindrucke')
  })

  test('extracts slug from absolute path', () => {
    expect(slugFromPath('/home/user/posts/my-post.md')).toBe('my-post')
  })

  test('handles filename with no directory', () => {
    expect(slugFromPath('simple.md')).toBe('simple')
  })
})
