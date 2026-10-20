import React, { useEffect, useRef, useState } from "react"
import NextLink from "next/link"
import { AnimatePresence, motion } from "motion/react"
import Layout from '../../components/layouts/Main'
import {
    Box,
    Flex,
    Heading,
    Text,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import SectionHeading from "../../components/SectionHeading"
import PostSearch from "../../components/PostSearch"
import { getAllPosts } from "../../lib/posts"
import { excerptFor, highlightParts, matchesPost, queryWords } from "../../lib/search"
import formatDate from "../../lib/formatDate"

const Highlighted = ({ text, words }) => highlightParts(text, words).map((part, i) => (
    part.match
        // The shadow pads the highlight without adding space inside words like "model|s"
        ? <Box as={'mark'} key={i} bg={'teal.subtle'} color={'inherit'} borderRadius={'sm'} boxShadow={'0 0 0 2px var(--chakra-colors-teal-subtle)'}>{part.text}</Box>
        : <React.Fragment key={i}>{part.text}</React.Fragment>
))

const Writing = ({ posts }) => {
    const [query, setQuery] = useState('')
    const words = queryWords(query)
    const results = posts.filter(post => matchesPost(post, words))

    // Stagger the posts in on page load only, not every time the search changes
    const loaded = useRef(false)
    useEffect(() => { loaded.current = true }, [])

    return (
        <Layout>
            <Flex justifyContent={'space-between'} alignItems={'center'} gap={4} mb={'2rem'}>
                <SectionHeading mb={0}>Writing</SectionHeading>
                <PostSearch query={query} onChange={setQuery} />
            </Flex>
            <Box mb={'3rem'}>
                <AnimatePresence initial={true} mode={'popLayout'}>
                    {results.map((post, i) => {
                        const excerpt = words.length ? excerptFor(post, words) : null
                        return (
                            <motion.div
                                key={post.slug}
                                layout
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                transition={{ duration: loaded.current ? 0.25 : 0.8, delay: loaded.current ? 0 : i * .1 }}
                                style={{ marginBottom: '2rem' }}
                            >
                                <LinkBox as={'article'}>
                                    <Text fontSize={'14px'} color={'pageMuted'} mb={'.25rem'}>
                                        {formatDate(post.date)} &middot; {post.readingTime} min read
                                    </Text>
                                    <LinkOverlay asChild>
                                        <NextLink href={`/writing/${post.slug}`}>
                                            <Heading
                                                as={'h3'}
                                                fontSize={'28px'}
                                                lineHeight={1.25}
                                                mb={'.5rem'}
                                                _hover={{textDecoration: 'underline'}}
                                            >
                                                <Highlighted text={post.title} words={words} />
                                            </Heading>
                                        </NextLink>
                                    </LinkOverlay>
                                    {post.description && (
                                        <Text><Highlighted text={post.description} words={words} /></Text>
                                    )}
                                    {excerpt && (
                                        <Text mt={'.75rem'} fontSize={'14px'} color={'pageMuted'} fontStyle={'italic'}>
                                            <Highlighted text={excerpt} words={words} />
                                        </Text>
                                    )}
                                </LinkBox>
                            </motion.div>
                        )
                    })}
                    {results.length === 0 && (
                        <motion.div
                            key={'empty'}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            transition={{ duration: 0.2 }}
                        >
                            <Text color={'pageMuted'}>Nothing matches &ldquo;{query.trim()}&rdquo; yet.</Text>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>
        </Layout>
    )
}

export const getStaticProps = () => ({
    props: { posts: getAllPosts() },
})

export default Writing
