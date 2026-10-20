module.exports = {
    turbopack: {
        root: __dirname,
    },
    // The preview image route reads posts from disk, which tracing can't see on its own
    outputFileTracingIncludes: {
        '/api/og/[slug]': ['./posts/**/*'],
    },
    async redirects() {
        return [
            {
                source: '/works',
                destination: '/writing',
                permanent: true,
            },
        ]
    },
}
