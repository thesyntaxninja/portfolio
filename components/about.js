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

const About = () => {
    return (
        <Box>
            <Flex
                mt={'80px'}
                justifyContent={'space-between'}
                alignItems={'center'}
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
               <Box>
                   <Image
                       src={useColorModeValue('/images/avatar-light.png', '/images/avatar-dark.png')}
                   />
               </Box>
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
                Hey, I&apos;m an app and web3 developer based in Scottsdale, AZ!
            </Box>
        </Box>
    )
}

export default About