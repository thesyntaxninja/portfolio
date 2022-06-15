import React from 'react'
import {Flex, Heading, Image, Text, Link} from "@chakra-ui/react";


const Card = ({link, imgSrc, headingText, descriptionText}) => {
    return (
        <Link href={link} isExternal  style={{textDecoration: 'none'}}>
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Image borderRadius={'15px'} src={imgSrc} mb={'8px'} />
                <Heading fontWeight={'regular'} fontSize={'24px'}>{headingText}</Heading>
                <Text>{descriptionText}</Text>
            </Flex>
        </Link>
    )
}

export default Card