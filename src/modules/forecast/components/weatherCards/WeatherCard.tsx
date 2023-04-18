import { useState } from 'react'
import Box from '../../../../components/Box/Box'
import ActiveItem from '../../../../ui/activeItems/ActiveItem'
import ActiveItem2 from '../../../../ui/activeItems/ActiveItem2'
import './WeatherCard.scss'
import { HTMLMotionProps, Variants } from 'framer-motion'

interface WeatherCardProps extends HTMLMotionProps<"div"> {
    className?: string
    title: string
    subTitle: string
    activeItem: string
    activeItem2?: string
    icon: React.ReactNode
    isActive: boolean
}
export default function WeatherCard(props: WeatherCardProps) {
    const { className, activeItem, activeItem2, title,
        subTitle, icon, isActive, ...rest } = props
    const [time, setTime] = useState(new Date())

    const WeatherCardAnimation: Variants = {
        hidden: {
            x: -100,
            opacity: 0,
            backdropFilter: 'blur(0.2em)',
        },
        visible: delay => ({
            x: 0,
            opacity: 1,
            backdropFilter: 'blur(0.2em)',
            transition: {
                delay: delay * 0.07
            }
        })
    }

    return (
        <Box className={`${className} weather-card`}
            variants={WeatherCardAnimation}
            transition={{ duration: .5 }}
            whileHover={isActive ? {
                scale: 1.02,
                backdropFilter: 'blur(0.35em)',
                transition: { duration: 0.3 },
                cursor: 'pointer',
            } : {}}
            {...rest}>
            <div className="weather-card__side">
                <h3 className="forecast__sub-title weather-card__title">
                    {title ? title : `
                    ${time.getHours()}:${time.getMinutes() < 10 ?
                            '0' + time.getMinutes() : time.getMinutes()}`}
                </h3>
                <h4 className="weather-card__sub-title">
                    {subTitle}
                </h4>
                {activeItem2 ?
                    <ActiveItem2 className='weather-card__item'
                        item={activeItem} item2={activeItem2} /> :
                    <ActiveItem className='weather-card__item'
                        item={activeItem} />}
            </div>
            <div className="weather-card__icon">
                {icon}
            </div>

        </Box>
    )
}