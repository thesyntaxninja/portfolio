import React from "react"
import {
    Flex,
    Text,
    Button,
    Image,
    List,
} from "@chakra-ui/react"
import Layout from "../components/layouts/Main"
import SectionHeading from "../components/SectionHeading"
import {FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"
import {MdChevronRight} from "react-icons/md"
import NextLink from "next/link"
import Animate from "../components/Animate"

const Home = () => {
    return (
        <Layout>
            <Animate delay={.1}>
                <SectionHeading>About</SectionHeading>
                <Text mb={'1rem'}>
                    Parker is the founder and CEO of Scriptorii, which helps companies put AI to work across the
                    tools they already use. He has spent his career leading technical teams and building companies.
                    He led engineering at Kinetic through $1B in trading volume, then took Superstack through a
                    merger as CEO. He&apos;s still an engineer at heart, happiest somewhere between product, systems
                    design, and building the thing. When not online, he loves spending time with his family and all
                    things space related.
                </Text>
                <Flex justifyContent={'center'}>
                    <Button
                        asChild
                        colorPalette={'teal'}
                        mb={'3rem'}
                        textTransform={'uppercase'}
                    >
                        <NextLink href="/writing" scroll={false}>
                            My Writing <MdChevronRight />
                        </NextLink>
                    </Button>
                </Flex>
                <SectionHeading>On the web</SectionHeading>
                <Flex
                    mb={'80px'}
                    justifyContent={'space-between'}
                    flexDirection={{base: 'column-reverse', md: 'row'}}
                >
                    <Image
                        pt={{base: '16px', md: 0}}
                        src={'/images/home/info-light.svg'}
                        _dark={{display: 'none'}}
                        alignSelf={{base: 'center'}}
                    />
                    <Image
                        pt={{base: '16px', md: 0}}
                        src={'/images/home/info-dark.svg'}
                        display={'none'}
                        _dark={{display: 'block'}}
                        alignSelf={{base: 'center'}}
                    />
                    <List.Root variant={'plain'} gap={'16px'}>
                        <List.Item>
                            <Button asChild variant="ghost" colorPalette="teal">
                                <a href="https://www.linkedin.com/in/thesyntaxninja" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                    Parker Esmay
                                </a>
                            </Button>
                        </List.Item>
                        <List.Item>
                            <Button asChild variant="ghost" colorPalette="teal">
                                <a href="https://twitter.com/parkeresmay" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                    @parkeresmay
                                </a>
                            </Button>
                        </List.Item>
                        <List.Item>
                            <Button asChild variant="ghost" colorPalette="teal">
                                <a href="https://github.com/thesyntaxninja" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                    @thesyntaxninja
                                </a>
                            </Button>
                        </List.Item>
                    </List.Root>
                </Flex>
            </Animate>
        </Layout>
    )
}

export default Home