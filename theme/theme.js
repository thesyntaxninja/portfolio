import {extendTheme, theme as base} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            color: mode('rgba(0, 0, 0, .7)', 'rgba(255, 255, 255, .8)')(props)
        }
    })
}

const fonts = {
    heading: `GT Sectra Display, ${base.fonts?.heading}`,
    body: `IBM Plex Mono, ${base.fonts?.body}`,
}

const colors = {
    grassTeal: '#88ccca',
    bgDark: '#202023',
    bgLight: '#f0e7db',
    darkText: 'rgba(0, 0, 0, .7)',
    lightText: 'rgba(255, 255, 255, .8)'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({ config, styles, fonts, colors })

export default theme