import { HTMLMotionProps, motion } from 'framer-motion'

interface SectionProps extends HTMLMotionProps<"div"> {
    className?: string
}
export default function Section(props: SectionProps) {

    const { className, children, ...rest } = props

    return (
        <motion.section
            initial={'hidden'}
            whileInView={'visible'}
            className={`${className} --section`}
            {...rest}>
            {children}
        </motion.section>
    )
}