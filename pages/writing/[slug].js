import React from "react"
import Head from "next/head"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
    Box,
    Heading,
    HStack,
    Image,
    Link,
    Separator,
    Text,
} from "@chakra-ui/react"
import {MdChevronLeft} from "react-icons/md"
import Layout from "../../components/layouts/Main"
import Animate from "../../components/Animate"
import {getPost, getPostSlugs} from "../../lib/posts"
import formatDate from "../../lib/formatDate"

const SITE_URL = 'https://www.parkeresmay.com'

// Long-form reading styles for the rendered markdown
const proseStyles = {
    fontSize: {base: '17px', md: '18px'},
    lineHeight: 1.75,
    '& p': {mb: '1.5rem'},
    '& h2, & h3, & h4': {
        fontFamily: 'heading',
        fontWeight: 'normal',
        lineHeight: 1.25,
        mt: '3rem',
        mb: '1rem',
    },
    '& h2': {fontSize: {base: '30px', md: '34px'}},
    '& h3': {fontSize: {base: '26px', md: '28px'}},
    '& h4': {fontSize: '22px'},
    '& > :first-child': {mt: 0},
    '& a': {color: 'teal.fg', textDecoration: 'underline', textUnderlineOffset: '3px'},
    '& ul, & ol': {pl: '1.5rem', mb: '1.5rem'},
    '& ul': {listStyleType: 'disc'},
    '& ol': {listStyleType: 'decimal'},
    '& li': {mb: '.5rem'},
    '& blockquote': {
        borderLeft: '3px solid',
        borderColor: 'teal.solid',
        pl: '1.25rem',
        my: '2rem',
        fontStyle: 'italic',
    },
    '& img': {borderRadius: 'lg', my: '2rem'},
    '& hr': {my: '3rem', borderColor: 'pageMuted'},
    '& code': {fontFamily: 'mono', fontSize: '.9em', bg: 'whiteAlpha.500', px: '.3em', borderRadius: 'sm'},
    '& pre': {bg: 'whiteAlpha.500', p: '1rem', borderRadius: 'md', overflowX: 'auto', mb: '1.5rem'},
    '& pre code': {bg: 'transparent', p: 0},
}

const Post = ({post}) => {
    const url = `${SITE_URL}/writing/${post.slug}`
    return (
        <Layout hero={false}>
            <Head>
                <title>{`${post.title} - Parker Esmay`}</title>
                {post.description && <meta name="description" content={post.description} />}
                <link rel="canonical" href={url} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:url" content={url} />
                {post.description && <meta property="og:description" content={post.description} />}
                {post.cover && <meta property="og:image" content={`${SITE_URL}${post.cover}`} />}
                <meta name="twitter:title" content={post.title} />
                <meta property="article:published_time" content={post.date} />
            </Head>

            <Animate>
                <Link asChild color={'pageMuted'} fontSize={'14px'} mb={'2rem'} gap={0}>
                    <NextLink href="/writing">
                        <MdChevronLeft /> Writing
                    </NextLink>
                </Link>

                {post.cover && (
                    <Image src={post.cover} alt="" borderRadius={'lg'} w={'full'} mb={'2.5rem'} />
                )}

                <Heading
                    as={'h1'}
                    fontSize={{base: '40px', md: '56px'}}
                    lineHeight={1.15}
                    mb={'1.5rem'}
                >
                    {post.title}
                </Heading>

                <Box mb={'2rem'}>
                    <Text fontWeight={'medium'}>Parker Esmay</Text>
                    <HStack gap={2} fontSize={'14px'} color={'pageMuted'}>
                        <Text>{formatDate(post.date)}</Text>
                        <Text>&middot;</Text>
                        <Text>{post.readingTime} min read</Text>
                    </HStack>
                </Box>

                <Separator borderColor={'pageMuted'} mb={'2.5rem'} />

                <Box as={'article'} css={proseStyles}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </Box>

                {post.crossposts.length > 0 && (
                    <>
                        <Separator borderColor={'pageMuted'} mt={'1rem'} mb={'1.5rem'} />
                        <Text fontSize={'14px'} color={'pageMuted'} mb={'3rem'}>
                            Also published on{' '}
                            {post.crossposts.map((crosspost, i) => (
                                <React.Fragment key={crosspost.url}>
                                    {i > 0 && ', '}
                                    <Link href={crosspost.url} target="_blank" rel="noopener noreferrer" color={'teal.fg'}>
                                        {crosspost.name}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </Text>
                    </>
                )}
            </Animate>
        </Layout>
    )
}

export const getStaticPaths = () => ({
    paths: getPostSlugs().map(slug => ({params: {slug}})),
    fallback: false,
})

export const getStaticProps = ({params}) => ({
    props: {post: getPost(params.slug)},
})

export default Post
