import React from "react"
import Layout from '../components/layouts/Main'
import {
    Heading,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import Card from '/components/Card'
import Animate from "../components/Animate"

const Works = () => {
    return (
        <Layout>
            <Heading
                as={'h2'}
                fontWeight={'regular'}
                pb={'1rem'}
                borderBottom={'1px solid'}
                borderBottomColor={useColorModeValue('darkText', 'lightText')}
                mb={'2rem'}
                w={'max-content'}
            >
                Works
            </Heading>
            <SimpleGrid columns={{base: 1, md: 2}} spacingX={10} spacingY={6} mb={'3rem'}>
                <Animate>
                    <Card
                        link={'https://supa.finance/'}
                        imgSrc={'/images/works/supa.png'}
                        titleText={'Supa Finance'}
                        descriptionText={'A no-code onchain automation builder, smart contract wallet, and automation marketplace'}
                    />
                </Animate>
                <Animate delay={.1}>
                    <Card
                        link={'https://getsupa.xyz/'}
                        imgSrc={'/images/works/supaxyz.png'}
                        titleText={'Supa Farcaster Client'}
                        descriptionText={'Follow, track, and trade crypto with your social graph'}
                    />
                </Animate>
                <Animate delay={.2}>
                    <Card
                        imgSrc={'/images/works/shoply.png'}
                        titleText={'Shoply'}
                        descriptionText={'A multi-chain decentralized ecommerce platform'}
                    />
                </Animate>
                <Animate delay={.3}>
                    <Card
                        imgSrc={'/images/works/drifters.png'}
                        titleText={'Drifters of Alta'}
                        descriptionText={'A PFP NFT drop based on the characters from the first full length fantasy novel ' +
                            'on the Ethereum blockchain.'}
                    />
                </Animate>
                <Animate delay={.4}>
                    <Card
                        link={'https://astro-dao.vercel.app/'}
                        imgSrc={'/images/works/astrodao.png'}
                        titleText={'Astro DAO'}
                        descriptionText={'An NFT gated membership DAO complete with an ERC-20 token drop.'}
                    />
                </Animate>
                <Animate>
                    <Card
                        link={'https://www.pocuspro.com/'}
                        imgSrc={'/images/works/pocuspro.png'}
                        titleText={'Pocus Pro'}
                        descriptionText={'A SaaS product designed and developed for anonymized ultrasound review by industry experts.'}
                    />
                </Animate>
                <Animate delay={.5}>
                    <Card
                        imgSrc={'/images/works/budo.png'}
                        titleText={'Budo Agency'}
                        descriptionText={'A facebook ad agency for martial arts studios.'}
                    />
                </Animate>
                <Animate delay={.6}>
                    <Card
                        link={'https://www.apollo-se.com/'}
                        imgSrc={'/images/works/apollose.png'}
                        titleText={'Apollo Solar & Electric'}
                        descriptionText={'Solar and electric installation company.'}
                    />
                </Animate>
            </SimpleGrid>
        </Layout>
    )
}

export default Works