import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react'
import { FaRebel, FaEmpire } from 'react-icons/fa'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    bgColor={useColorModeValue('bgDark', 'bgLight')}
                    _hover={{
                        background: useColorModeValue('rgba(32, 32, 35, .7)', 'rgba(240, 231, 219, .5)')
                    }}
                    icon={useColorModeValue(
                        <Icon
                            as={FaEmpire}
                            color={'white'}
                            h={6}
                            w={6}
                        />,
                        <Icon
                            as={FaRebel}
                            color={'black'}
                            h={6}
                            w={6}
                        />
                    )}
                    onClick={toggleColorMode}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton