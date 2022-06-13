//TODO need to build later
import React from "react"
import Layout from '../components/layouts/Main'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import {Flex} from '@chakra-ui/react'

const Works = () => {
    return (
        <Flex>
            <Navbar />
            <Layout>
                <About />
                <Footer />
            </Layout>
        </Flex>
    )
}

export default Works