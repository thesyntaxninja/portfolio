import React from 'react'
import {Flex, Heading, Image, Text, LinkBox, LinkOverlay} from "@chakra-ui/react";


const Card = ({link, imgSrc, titleText, descriptionText}) => {
    return (
        <LinkBox>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Image borderRadius={'15px'} src={imgSrc} mb={'.5rem'} />
                <LinkOverlay href={link} isExternal>
                    <Heading
                        fontWeight={'regular'}
                        fontSize={'24px'}
                        mb={'.5rem'}
                    >
                        {titleText}
                    </Heading>
                </LinkOverlay>
                <Text fontSize={'14px'}>{descriptionText}</Text>
            </Flex>
        </LinkBox>
    )
}

export default Card