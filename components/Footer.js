import React from 'react'
import {Box} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" fontSize="sm" p={8}>
            &copy; {new Date().getFullYear()} Parker Esmay. All Rights Reserved.
        </Box>
    )
}

export default Footer