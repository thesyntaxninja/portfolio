import { Heading } from '@chakra-ui/react'

const SectionHeading = ({ children, ...props }) => (
    <Heading
        as={'h2'}
        fontSize={{base: '30px', md: '36px'}}
        lineHeight={{base: 1.33, md: 1.2}}
        pb={'1rem'}
        borderBottom={'1px solid'}
        borderBottomColor={'pageText'}
        mb={'2rem'}
        w={'max-content'}
        {...props}
    >
        {children}
    </Heading>
)

export default SectionHeading
