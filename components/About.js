import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Box,
    Image,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

const About = () => {
    return (
        <Box>
            <Flex
                mt={'80px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                flexDirection={{sm: 'column', md: 'row'}}
            >
                <VStack align={'left'}>
                    <Heading
                        fontSize={'80px'}
                        fontWeight={'medium'}
                    >
                        Parker Esmay
                    </Heading>
                    <Text
                        fontWeight={'medium'}
                        fontSize={'20px'}
                    >
                        Software Engineer / UX Designer
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
                            src={useColorModeValue('/images/avatar-light.svg', '/images/avatar-dark.svg')}
                            mt={{sm: '1rem', md: 0}}
                        />
                    </Tilt>
                </Flex>

            <Box
                borderRadius="lg"
                mt={6}
                mb={'48px'}
                p={6}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Greetings. I&apos;m an app and web3 developer based in Scottsdale, AZ!
            </Box>
        </Box>
    )
}

export default About