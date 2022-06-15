import React from "react"
import { Container, Flex } from "@chakra-ui/react"
import Navbar from "../Navbar"
import About from "../About"
import Footer from "../Footer"
import Head from 'next/head'
import { useRouter } from 'next/router'

const Main = ({children}) => {
    const router = useRouter()

    return (
        <Flex as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Parker's homepage" />
                <meta name="author" content="Parker Esmay" />
                <meta name="author" content="Parker Esmay" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Parker Esmay" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@parkeresmay" />
                <meta name="twitter:creator" content="@parkeresmay" />
                <meta name="twitter:image" content="https://www.parkeresmay.com/card.png" />
                <meta property="og:site_name" content="Parker Esmay" />
                <meta name="og:title" content="Parker Esmay" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.parkeresmay.com/card.png" />
                <title>Parker Esmay - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            <Container maxW="container.md">
                <About />
                {children}
                <Footer />
            </Container>
        </Flex>

    )
}

export default Main