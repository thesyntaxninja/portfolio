import { useEffect, useRef, useState } from 'react'
import { Flex, IconButton, Input, useBreakpointValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'motion/react'
import { MdClose, MdSearch } from 'react-icons/md'

// A search icon that slides open into a short field. "/" opens it from anywhere on the page,
// Esc or the close button clears and closes it.
const PostSearch = ({ query, onChange }) => {
    const [open, setOpen] = useState(false)
    const inputRef = useRef(null)
    // Narrower on phones so it fits beside the heading
    const fieldWidth = useBreakpointValue({ base: 160, sm: 200 }) ?? 200

    useEffect(() => {
        const onKeyDown = e => {
            const typing = ['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable
            if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
                e.preventDefault()
                setOpen(true)
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        if (open) inputRef.current?.focus()
    }, [open])

    const close = () => {
        onChange('')
        setOpen(false)
        inputRef.current?.blur()
    }

    return (
        <Flex alignItems={'center'} mr={-2}>
            <motion.div
                initial={false}
                animate={{ width: open ? fieldWidth : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ overflow: 'hidden' }}
            >
                <Input
                    ref={inputRef}
                    type={'search'}
                    variant={'flushed'}
                    placeholder={'Search writing'}
                    aria-label={'Search writing'}
                    tabIndex={open ? 0 : -1}
                    value={query}
                    onChange={e => onChange(e.target.value)}
                    onKeyDown={e => e.key === 'Escape' && close()}
                    onBlur={() => !query && setOpen(false)}
                    w={`${fieldWidth}px`}
                    h={'36px'}
                    fontSize={'16px'}
                    color={'pageText'}
                    borderColor={'pageMuted'}
                    _placeholder={{color: 'pageMuted'}}
                    _focus={{borderColor: 'teal.solid', boxShadow: '0 1px 0 0 var(--chakra-colors-teal-solid)'}}
                    css={{'&::-webkit-search-cancel-button': {display: 'none'}}}
                />
            </motion.div>
            <IconButton
                variant={'ghost'}
                aria-label={open ? 'Close search' : 'Search writing'}
                title={open ? 'Close (Esc)' : 'Search (/)'}
                color={'pageMuted'}
                _hover={{color: 'pageText', bg: 'transparent'}}
                css={{'& svg': {width: '20px', height: '20px'}}}
                // Keep focus in the field so clicking close doesn't blur it first
                onMouseDown={e => open && e.preventDefault()}
                onClick={() => (open ? close() : setOpen(true))}
            >
                <AnimatePresence mode={'wait'} initial={false}>
                    <motion.span
                        key={open ? 'close' : 'search'}
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.12 }}
                        style={{ display: 'inline-flex' }}
                    >
                        {open ? <MdClose /> : <MdSearch />}
                    </motion.span>
                </AnimatePresence>
            </IconButton>
        </Flex>
    )
}

export default PostSearch
