import './WeatherIcon.scss'

interface WeatherIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string
    weatherCode: string | number
    hour?: number
}
export default function WeatherIcon(props: WeatherIconProps) {

    const { className, weatherCode, hour, ...rest } = props

    let timeOfDay
    if (hour === undefined) {
        timeOfDay = 'day'
    }
    if (Number.isInteger(hour)) {
        if (hour! > 8 && hour! < 20) {
            timeOfDay = 'day'
        } else {
            timeOfDay = 'night-alt'
        }
    }

    let iconClass = 'wi '
    switch (`${weatherCode}`) {
        case '0':
            iconClass += `wi-${timeOfDay === 'day' ?
                'day-sunny' : 'night-clear'
                }`
            break
        case '1':
            iconClass += `wi-${timeOfDay === 'day' ?
                'day-sunny-overcast' :
                'night-alt-partly-cloudy'
                }`
            break
        case '2':
            iconClass += `wi-${timeOfDay}-cloudy`
            break
        case '3':
            iconClass += 'wi-cloudy'
            break
        case '45':
        case '48':
            iconClass += 'wi-fog'
            break
        case '51':
        case '53':
        case '56':
            iconClass += `wi-${timeOfDay}-showers`
            break
        case '55':
        case '57':
            iconClass += 'wi-showers'
            break
        case '61':
        case '63':
        case '66':
            iconClass += `wi-${timeOfDay}-rain`
            break
        case '65':
        case '67':
            iconClass += 'wi-rain'
            break
        case '71':
        case '73':
        case '77':
            iconClass += `wi-${timeOfDay}-snow`
            break
        case '75':
            iconClass += 'wi-snow-wind'
            break
        case '80':
        case '81':
        case '85':
            iconClass += `wi-${timeOfDay}-showers`
            break
        case '82':
        case '86':
            iconClass += 'wi-showers'
            break
        case '95':
        case '96':
        case '99':
            iconClass += 'wi-thunderstorm'
            break

    }

    return (
        <i className={`${className} ${iconClass}`} {...rest}>

        </i>
    )
}