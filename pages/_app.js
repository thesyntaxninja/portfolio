import {ChakraProvider} from "@chakra-ui/react"
import theme from '../theme/theme'
import Fonts from '../components/Fonts'

export default function App({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps } />
        </ChakraProvider>
    )
}