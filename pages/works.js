import React from "react"
import Layout from '../components/layouts/Main'
import {
    Heading,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import Card from '/components/Card'

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
                Works
            </Heading>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={6} mb={'3rem'}>
                <Card
                    link={'https://www.pocuspro.com/'}
                    imgSrc={'/images/works/pocuspro.png'}
                    headingText={'Pocus Pro'}
                    descriptionText={'Development, Design, Branding'}
                />
                <Card
                    link={'https://www.budoagency.com/'}
                    imgSrc={'/images/works/budo.png'}
                    headingText={'Budo Agency'}
                    descriptionText={'Development, Design, Branding'}
                />
                <Card
                    link={'https://www.apollo-se.com/'}
                    imgSrc={'/images/works/apollose.png'}
                    headingText={'Apollo Solar & Electric'}
                    descriptionText={'Development, Design, Branding'}
                />
            </SimpleGrid>
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
            <SimpleGrid columns={{base: 1, md: 2}} spacing={6} mb={'3rem'}>
                <Card
                    link={'https://www.drifternovel.com/'}
                    imgSrc={'/images/works/drifters.png'}
                    headingText={'Drifters of Alta'}
                    descriptionText={'Development, Design'}
                />
                <Card
                    link={'https://astro-dao.vercel.app/'}
                    imgSrc={'/images/works/astrodao.png'}
                    headingText={'Astro DAO'}
                    descriptionText={'Development, Design'}
                />
                <Card
                    link={'https://booger-boys.vercel.app/'}
                    imgSrc={'/images/works/boogerboys.png'}
                    headingText={'Booger Boys'}
                    descriptionText={'Development, Design'}
                />
            </SimpleGrid>
        </Layout>
    )
}

export default Works