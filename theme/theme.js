import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Chakra v2's system font stack. v3 puts Inter first, which renders noticeably thinner.
const systemFonts = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, ' +
    '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const config = defineConfig({
    globalCss: {
        // The root shows through when overscrolling past the top or bottom of the page
        html: {
            bg: 'pageBg',
        },
        body: {
            bg: 'pageBg',
            color: 'pageText',
        },
    },
    theme: {
        tokens: {
            fonts: {
                heading: { value: `GT Sectra Display, ${systemFonts}` },
                body: { value: `IBM Plex Mono, ${systemFonts}` },
            },
            colors: {
                bgDark: { value: '#202023' },
                bgLight: { value: '#f0e7db' },
                darkText: { value: 'rgba(0, 0, 0, .7)' },
                lightText: { value: 'rgba(255, 255, 255, .8)' },
            },
        },
        semanticTokens: {
            colors: {
                pageBg: { value: { base: '{colors.bgLight}', _dark: '{colors.bgDark}' } },
                pageText: { value: { base: '{colors.darkText}', _dark: '{colors.lightText}' } },
                pageMuted: { value: { base: 'rgba(0, 0, 0, .5)', _dark: 'rgba(255, 255, 255, .5)' } },
                // Chakra v2's teal, which the site was designed around. These use _light like
                // v3's defaults do, since _light takes precedence over base.
                teal: {
                    solid: { value: { _light: '#319795', _dark: '#81E6D9' } },
                    contrast: { value: { _light: 'white', _dark: '#1A202C' } },
                    fg: { value: { _light: '#2C7A7B', _dark: '#81E6D9' } },
                    subtle: { value: { _light: '#E6FFFA', _dark: 'rgba(129, 230, 217, .12)' } },
                },
            },
        },
        recipes: {
            heading: {
                base: { fontWeight: 'normal', letterSpacing: 'normal' },
            },
            button: {
                base: { fontWeight: 'semibold', borderRadius: 'md' },
                variants: {
                    size: {
                        md: { textStyle: 'md', _icon: { width: '1em', height: '1em' } },
                    },
                },
            },
            link: {
                base: { borderRadius: 'none' },
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system
