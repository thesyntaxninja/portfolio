import {ChakraProvider} from "@chakra-ui/react"
import {ThemeProvider} from "next-themes"
import system from '../theme/theme'
import Fonts from '../components/Fonts'

export default function App({Component, pageProps}) {
    return (
        <ChakraProvider value={system}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
                <Fonts />
                <Component {...pageProps } />
            </ThemeProvider>
        </ChakraProvider>
    )
}
