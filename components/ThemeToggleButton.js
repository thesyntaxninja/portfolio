import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { IconButton, Icon } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { FaRebel, FaEmpire } from 'react-icons/fa'

const ThemeToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    // The theme is only known on the client, so render the light variant until mounted
    const isDark = mounted && resolvedTheme === 'dark'

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={isDark ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    bg={isDark ? 'bgLight' : 'bgDark'}
                    _hover={{
                        bg: isDark ? 'rgba(240, 231, 219, .5)' : 'rgba(32, 32, 35, .7)'
                    }}
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                >
                    {isDark
                        ? <Icon as={FaRebel} color={'black'} boxSize={5} />
                        : <Icon as={FaEmpire} color={'white'} boxSize={6} />}
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton
