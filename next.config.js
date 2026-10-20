module.exports = {
    turbopack: {
        root: __dirname,
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
