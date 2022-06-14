import React from "react"
import {
    Flex,
    Heading,
    Text,
    Button,
    Grid,
    GridItem,
    Image,
    Link,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react"
import Layout from '../components/layouts/Main'
import {ChevronRightIcon} from "@chakra-ui/icons"
import {FaTwitter, FaGithub} from "react-icons/fa"
import NextLink from "next/link"

const Home = () => {
    return (
        <Layout>
            <Heading
                fontWeight={'regular'}
                pb={'1rem'}
                borderBottom={'1px solid'}
                borderBottomColor={useColorModeValue('darkText', 'lightText')}
                mb={'2rem'}
                w={'max-content'}
            >
                Work
            </Heading>
            <Text mb={'1rem'}>
                Parker is an entrepreneur and a full-stack developer based in Arizona with a passion for building digital
                services/web3 projects with a beautiful user experience. He has a knack for all things launching products,
                from planning and designing all the way to solving real-life problems with code. When not online,
                he loves hanging out with his family and all things space related. Currently,
                he is working as the founder of a software development agency called Blue Hare.
            </Text>
            <Flex justifyContent={'center'}>
                <NextLink href="/works" scroll={false}>
                    <Button
                        colorScheme={'teal'}
                        rightIcon={<ChevronRightIcon />}
                        mb={'3rem'}
                        textTransform={'uppercase'}
                        href="/works"
                    >
                        My Portfolio
                    </Button>
                </NextLink>
            </Flex>
            <Heading
                fontWeight={'regular'}
                pb={'1rem'}
                borderBottom={'1px solid'}
                borderBottomColor={useColorModeValue('darkText', 'lightText')}
                mb={'2rem'}
                w={'max-content'}
            >
                Bio
            </Heading>
            <Grid templateColumns='repeat(6, 1fr)' gap={'16px'} mb={'3rem'}>
                <GridItem colSpan={2}>
                    <Text fontWeight={'bold'}>
                        1988
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text>
                        Born in Arizona
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontWeight={'bold'}>
                        2015
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text>
                        Completed the Master’s program in Software Engineering at Brandeis University
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontWeight={'bold'}>
                        2015
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text>
                        Technical project lead at Core Online Training
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontWeight={'bold'}>
                        2016
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text>
                        Director of Technology at Bedrock Financial Services
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontWeight={'bold'}>
                        2016 to present
                    </Text>
                </GridItem>
                <GridItem colSpan={4}>
                    <Text>
                        Founder of Blue Hare
                    </Text>
                </GridItem>
            </Grid>
            <Heading
                fontWeight={'regular'}
                pb={'1rem'}
                borderBottom={'1px solid'}
                borderBottomColor={useColorModeValue('darkText', 'lightText')}
                mb={'2rem'}
                w={'max-content'}
            >
                On the web
            </Heading>
            <Flex
                mb={'80px'}
                justifyContent={'space-between'} flexDirection={{sm: 'column-reverse', md: 'row'}}
            >
                <Image
                    pt={{sm: '16px', md: 0}}
                    src={useColorModeValue('/images/info-light.svg', '/images/info-dark.svg')}
                    alignSelf={{sm: 'center'}}
                />
                <List spacing={'16px'}>
                    <ListItem>
                        <Link href="https://twitter.com/parkeresmay" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<FaTwitter />}
                            >
                                @parkeresmay
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/thesyntaxninja" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<FaGithub />}
                            >
                                @thesyntaxninja
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Flex>
        </Layout>
    )
}

export default Home