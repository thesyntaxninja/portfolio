import { ImageResponse } from 'next/og'
import { getPost, getPostSlugs } from '../../../lib/posts'
import formatDate from '../../../lib/formatDate'

// Same file the site's @font-face uses for headings. Fetched once per server instance.
const SECTRA_URL = 'https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.ttf'
let sectra
const loadSectra = () => {
    sectra ??= fetch(SECTRA_URL)
        .then(res => (res.ok ? res.arrayBuffer() : null))
        .catch(() => null)
    return sectra
}

// The social preview image for a post, so shared links show the article's title
const handler = async (req, res) => {
    const { slug } = req.query
    if (!getPostSlugs().includes(slug)) {
        res.status(404).end()
        return
    }

    const post = getPost(slug)
    const font = await loadSectra()

    const image = new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '80px 96px',
                    background: '#f0e7db',
                    color: '#202023',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            fontFamily: font ? 'GT Sectra' : undefined,
                            fontSize: post.title.length > 40 ? 76 : 96,
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                        }}
                    >
                        {post.title}
                    </div>
                    {post.description && (
                        <div style={{ marginTop: 32, fontSize: 34, lineHeight: 1.4, color: 'rgba(32, 32, 35, .6)' }}>
                            {post.description}
                        </div>
                    )}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 32,
                        borderTop: '2px solid #202023',
                        fontSize: 28,
                    }}
                >
                    <div style={{ fontFamily: font ? 'GT Sectra' : undefined, fontSize: 36 }}>Parker Esmay</div>
                    <div style={{ color: 'rgba(32, 32, 35, .6)' }}>
                        {`${formatDate(post.date)} · ${post.readingTime} min read`}
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: font ? [{ name: 'GT Sectra', data: font, weight: 400, style: 'normal' }] : undefined,
        }
    )

    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate')
    res.send(Buffer.from(await image.arrayBuffer()))
}

export default handler
