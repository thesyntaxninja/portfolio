import React from "react"
import NextLink from "next/link"
import Layout from '../../components/layouts/Main'
import {
    Heading,
    Text,
    LinkBox,
    LinkOverlay,
    VStack,
} from '@chakra-ui/react'
import Animate from "../../components/Animate"
import SectionHeading from "../../components/SectionHeading"
import { getAllPosts } from "../../lib/posts"
import formatDate from "../../lib/formatDate"

const Writing = ({ posts }) => {
    return (
        <Layout>
            <SectionHeading>Writing</SectionHeading>
            <VStack alignItems={'stretch'} gap={4} mb={'3rem'}>
                {posts.map((post, i) => (
                    <Animate key={post.slug} delay={i * .1}>
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
                                        {post.title}
                                    </Heading>
                                </NextLink>
                            </LinkOverlay>
                            {post.description && <Text>{post.description}</Text>}
                        </LinkBox>
                    </Animate>
                ))}
            </VStack>
        </Layout>
    )
}

export const getStaticProps = () => ({
    props: { posts: getAllPosts() },
})

export default Writing
