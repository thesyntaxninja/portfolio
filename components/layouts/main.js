import React from "react"
import { Container } from "@chakra-ui/react"

const Main = ({children}) => {
    return (
        <Container maxW="container.md">
            {children}
        </Container>
    )
}

export default Main