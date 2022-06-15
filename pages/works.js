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
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10} mb={'3rem'}>
                <Card
                    link={'https://www.pocuspro.com/'}
                    imgSrc={'/images/works/pocuspro.png'}
                    headingText={'Pocus Pro'}
                    descriptionText={'A SaaS product designed and developed for anonymized ultrasound review by industry experts.'}
                />
                <Card
                    link={'https://www.budoagency.com/'}
                    imgSrc={'/images/works/budo.png'}
                    headingText={'Budo Agency'}
                    descriptionText={'A facebook ad agency for martial arts studios.'}
                />
                <Card
                    link={'https://www.apollo-se.com/'}
                    imgSrc={'/images/works/apollose.png'}
                    headingText={'Apollo Solar & Electric'}
                    descriptionText={'Solar and electric installation company.'}
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
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10} mb={'3rem'}>
                <Card
                    link={'https://www.drifternovel.com/'}
                    imgSrc={'/images/works/drifters.png'}
                    headingText={'Drifters of Alta'}
                    descriptionText={'A PFP NFT based on the characters from the first full length fantasy novel ' +
                        'on the Ethereum blockchain.'}
                />
                <Card
                    link={'https://astro-dao.vercel.app/'}
                    imgSrc={'/images/works/astrodao.png'}
                    headingText={'Astro DAO'}
                    descriptionText={'An NFT gated membership DAO complete with an ERC-20 token drop.'}
                />
                <Card
                    link={'https://booger-boys.vercel.app/'}
                    imgSrc={'/images/works/boogerboys.png'}
                    headingText={'Booger Boys'}
                    descriptionText={'A PFP NFT drop on Solana.'}
                />
            </SimpleGrid>
        </Layout>
    )
}

export default Works