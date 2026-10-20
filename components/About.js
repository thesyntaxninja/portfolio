import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Box,
    Image,
    VStack,
} from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

const About = () => {
    return (
        <Box>
            <Flex
                mt={'80px'}
                mb={'48px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                flexDirection={{base: 'column', md: 'row'}}
            >
                <VStack alignItems={'flex-start'}>
                    <Heading
                        as={'h1'}
                        fontSize={{base: '60px', md: '80px'}}
                        lineHeight={'1.2'}
                        fontWeight={'medium'}
                    >
                        Parker Esmay
                    </Heading>
                    <Text
                        fontWeight={'medium'}
                        fontSize={{base: '18px', md: '20px'}}
                    >
                        Founder &amp; CEO, Scriptorii
                    </Text>
                </VStack>
                    <Tilt
                        trackOnWindow={true}
                        tiltReverse={true}
                        scale={1.05}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        transitionSpeed={500}
                    >
                        <Image
                            src={'/images/home/avatar-light.svg'}
                            mt={{base: '1rem', md: 0}}
                            _dark={{display: 'none'}}
                        />
                        <Image
                            src={'/images/home/avatar-dark.svg'}
                            mt={{base: '1rem', md: 0}}
                            display={'none'}
                            _dark={{display: 'block'}}
                        />
                    </Tilt>
                </Flex>
        </Box>
    )
}

export default About