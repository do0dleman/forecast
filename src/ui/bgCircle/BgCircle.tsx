import { HTMLMotionProps, Variants, motion } from 'framer-motion'
import './BgCircle.scss'

interface BgCircleProps extends HTMLMotionProps<"div"> {
    className?: string
}
export default function BgCircle(props: BgCircleProps) {

    const { className, ...rest } = props

    const BgCircleAnimation: Variants = {
        hidden: {
            y: 200,
            opacity: 0,
            transition: { duration: .7 },
        },
        visible: delay => ({
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                mass: 1,
                stiffness: 100,
                duration: .7,
                delay: delay * 0.07 + 0.07 * 5,
            },
        })
    }
    return (
        <motion.div
            variants={BgCircleAnimation}
            className={`${className} --bgCircle`}
            {...rest} />

    )
}