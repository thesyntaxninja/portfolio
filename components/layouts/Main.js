import React from "react"
import { Box, Container, Flex } from "@chakra-ui/react"
import Navbar from "../Navbar"
import About from "../About"
import Footer from "../Footer"
import Head from 'next/head'
import { useRouter } from 'next/router'

const Main = ({children, hero = true}) => {
    const router = useRouter()
    return (
        <Flex as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta key="description" name="description" content="Parker's homepage" />
                <meta name="author" content="Parker Esmay" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/rebel.png" type="image/png" />
                <meta key="twitter:title" name="twitter:title" content="Parker Esmay" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@parkeresmay" />
                <meta name="twitter:creator" content="@parkeresmay" />
                <meta key="twitter:image" name="twitter:image" content="https://www.parkeresmay.com/card.png" />
                <meta property="og:site_name" content="Parker Esmay" />
                <meta key="og:title" property="og:title" content="Parker Esmay" />
                <meta key="og:type" property="og:type" content="website" />
                <meta key="og:image" property="og:image" content="https://www.parkeresmay.com/card.png" />
                <title>Parker Esmay - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            <Container maxW="3xl">
                {hero ? <About /> : <Box h={'100px'} />}
                {children}
                <Footer />
            </Container>
        </Flex>

    )
}

export default Main