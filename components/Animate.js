import { motion } from 'motion/react'

const Animate = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        style={{ marginBottom: '1.5rem' }}
    >
        {children}
    </motion.div>
)

export default Animate
