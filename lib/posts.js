import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const WORDS_PER_MINUTE = 230

const readPost = slug => {
    const file = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), 'utf8')
    const { data, content } = matter(file)
    return {
        slug,
        title: data.title,
        // YAML parses dates into Date objects, which getStaticProps can't serialize
        date: new Date(data.date).toISOString().slice(0, 10),
        description: data.description || null,
        cover: data.cover || null,
        crossposts: data.crossposts || [],
        readingTime: Math.max(1, Math.round(content.split(/\s+/).length / WORDS_PER_MINUTE)),
        content,
    }
}

export const getPostSlugs = () =>
    fs.readdirSync(postsDirectory)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace(/\.md$/, ''))

// Rough markdown-to-text so search matches words, not syntax
const toPlainText = markdown => markdown
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/[*_`~>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

// Newest first. The markdown body is swapped for plain text, which the Writing page searches
// and pulls match excerpts from.
export const getAllPosts = () =>
    getPostSlugs()
        .map(slug => {
            const { content, ...post } = readPost(slug)
            return { ...post, plainText: toPlainText(content) }
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))

export const getPost = slug => readPost(slug)
