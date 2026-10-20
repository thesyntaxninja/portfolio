import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Menu,
    Portal,
    IconButton,
} from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggleButton'
import { IoLogoGithub, IoHome, IoMenu } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    // Section links stay active on their child pages, e.g. /writing/some-post
    const active = href === '/' ? path === href : path.startsWith(href)
    return (
        <Link
            asChild
            p={2}
            bg={active ? { base: 'teal', _dark: '#81E6D9' } : undefined}
            color={active ? '#202023' : 'pageText'}
            target={target}
            {...props}
        >
            <NextLink href={href} scroll={false}>
                {children}
            </NextLink>
        </Link>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={{ base: '#ffffff40', _dark: '#20202380' }}
            backdropFilter="blur(10px)"
            zIndex={1}
            transform={'translateZ(100px)'}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="5xl"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/" path={path} textTransform={'uppercase'}>
                        <IoHome />
                    </LinkItem>
                    <LinkItem href="/writing" path={path} textTransform={'uppercase'}>
                        Writing
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/thesyntaxninja/portfolio"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        gap={1}
                        pl={2}
                        textTransform={'uppercase'}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu.Root id="navbar-menu" lazyMount>
                            <Menu.Trigger asChild>
                                <IconButton variant="outline" aria-label="Options">
                                    <IoMenu />
                                </IconButton>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content bg={{ base: 'white', _dark: '#202023' }}>
                                        <Menu.Item value="about" asChild>
                                            <NextLink href="/">About</NextLink>
                                        </Menu.Item>
                                        <Menu.Item value="writing" asChild>
                                            <NextLink href="/writing">Writing</NextLink>
                                        </Menu.Item>
                                        <Menu.Item value="source" asChild>
                                            <a href="https://github.com/thesyntaxninja/portfolio">View Source</a>
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
