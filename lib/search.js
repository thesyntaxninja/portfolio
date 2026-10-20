const EXCERPT_RADIUS = 80

export const queryWords = query => query.toLowerCase().split(/\s+/).filter(Boolean)

// Every word has to appear somewhere in the post
export const matchesPost = (post, words) => {
    const haystack = [post.title, post.description, post.plainText].join(' ').toLowerCase()
    return words.every(word => haystack.includes(word))
}

const occurrences = (text, word) => {
    const found = []
    for (let i = text.indexOf(word); i >= 0; i = text.indexOf(word, i + 1)) found.push(i)
    return found
}

// The match position whose surrounding passage contains the most distinct query words
const bestMatchIndex = (lower, words) => {
    const positions = words.map(word => occurrences(lower, word))
    let best = null
    positions.flat().forEach(index => {
        const score = positions.filter(list => list.some(i => Math.abs(i - index) <= EXCERPT_RADIUS)).length
        if (!best || score > best.score) best = { index, score }
    })
    return best?.index
}

// A short passage around the best match in the body, cut at word boundaries
export const excerptFor = (post, words) => {
    const index = bestMatchIndex(post.plainText.toLowerCase(), words)
    if (index === undefined) return null

    let start = Math.max(0, index - EXCERPT_RADIUS)
    let end = Math.min(post.plainText.length, index + EXCERPT_RADIUS)
    if (start > 0) start = post.plainText.indexOf(' ', start) + 1
    if (end < post.plainText.length) end = post.plainText.lastIndexOf(' ', end)

    return `${start > 0 ? '…' : ''}${post.plainText.slice(start, end)}${end < post.plainText.length ? '…' : ''}`
}

const escapeRegExp = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Splits text into [{text, match}] pieces so matched words can be highlighted
export const highlightParts = (text, words) => {
    if (!words.length) return [{ text, match: false }]
    const pattern = new RegExp(`(${words.map(escapeRegExp).join('|')})`, 'gi')
    return text.split(pattern).filter(Boolean).map(part => ({
        text: part,
        match: words.includes(part.toLowerCase()),
    }))
}
