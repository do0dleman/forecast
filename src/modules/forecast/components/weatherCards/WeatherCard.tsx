import { useState } from 'react'
import Box from '../../../../components/Box/Box'
import ActiveItem from '../../../../ui/activeItems/ActiveItem'
import ActiveItem2 from '../../../../ui/activeItems/ActiveItem2'
import './WeatherCard.scss'

interface WeatherCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    title?: string
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

    return (
        <Box className={`
        ${className}
        ${isActive ? 'weather-card-active' : ''}
        weather-card`} {...rest}>
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