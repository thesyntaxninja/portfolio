import React from "react"
import Layout from '../components/layouts/Main'
import { Heading, SimpleGrid, Box, useColorModeValue} from '@chakra-ui/react'

const Works = () => {
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
                Web3
            </Heading>
            <SimpleGrid columns={2} spacing={6}>
                {/*TODO add images and sections for works page*/}
                <Box backgroundColor={'purple'} height={'100px'}></Box>
                <Box backgroundColor={'purple'} height={'100px'}></Box>
            </SimpleGrid>
        </Layout>
    )
}

export default Works