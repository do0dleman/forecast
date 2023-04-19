import { ForwardRefComponent, HTMLMotionProps, motion, useAnimationControls, useScroll } from 'framer-motion'
import './refreshButton.scss'
import weatherContext from '../../../contexts/WeatherContext'
import { useContext, useEffect, useRef, useState } from 'react'

interface refreshButtonProps extends ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">> {
    className?: string
}

export default function RefreshButton(props: refreshButtonProps) {

    const { className, ...rest } = props

    const controls = useAnimationControls()

    const { refreshData } = useContext(weatherContext)
    const [isAcitve, setActive] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout>()

    async function HandleClick() {
        controls.set({ rotate: 0 })
        refreshData()
        clearTimeout(timeoutRef.current)
        await controls.start({ rotate: 360, transition: { duration: 0.6 } })
        setActive(false)
        timeoutRef.current = timeOut()
    }
    useEffect(() => {
        timeoutRef.current = timeOut()
    }, [])

    const classes = ['refresh-button',
        isAcitve ? 'refresh-button-active' : ''].join(' ')

    function timeOut() {
        return setTimeout(() => {
            setActive(true)
        }, 600000)
    }
    return (
        <motion.button
            animate={controls}
            className={classes}
            {...rest}
            onClick={HandleClick}
        >
            <i className='wi wi-refresh'></i>
        </motion.button>
    )
}