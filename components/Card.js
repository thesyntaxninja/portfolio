import React from 'react'
import {Flex, Heading, Image, Text, Link} from "@chakra-ui/react";


const Card = ({link, imgSrc, headingText, descriptionText}) => {
    return (
        <Link href={link} isExternal  style={{textDecoration: 'none'}}>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Image borderRadius={'15px'} src={imgSrc} mb={'.5rem'} />
                <Heading fontWeight={'regular'} fontSize={'24px'} mb={'.5rem'}>{headingText}</Heading>
                <Text fontSize={'14px'} mb={'2rem'}>{descriptionText}</Text>
            </Flex>
        </Link>
    )
}

export default Card