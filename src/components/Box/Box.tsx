import { HTMLMotionProps, motion } from 'framer-motion'
import './Box.scss'

interface BoxProps extends HTMLMotionProps<"div"> {
    className?: string
}
export default function Box(props: BoxProps) {

    const { className, children, ...rest } = props

    return (
        <motion.div
            className={`${className} --box`}
            {...rest}>
            {children}
        </motion.div>
    )
}