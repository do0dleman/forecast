import ActiveItem from '../../../../../../ui/activeItems/ActiveItem';
import Wave from '../../../../../../ui/wave/Wave';
import WindDirection from '../../../../../../ui/windDirection/WindDirection';
import numToTemp from '../../../../../../utils/numToTemp';
import IHourData from '../../../../interfaces/IHourData';
import WeatherIcon from '../../../../../../ui/weatherIcon/WeatherIcon';
import './ForecastTableItem.scss'
import { HTMLMotionProps, Variants, motion } from 'framer-motion';

interface ForecastTableItemProps extends HTMLMotionProps<"div"> {
    hourData: IHourData
    showName?: boolean
    maxTemp: number
    minTemp: number
}
export default function ForecastTableItem(props: ForecastTableItemProps) {

    const { hourData, minTemp, showName, maxTemp, ...rest } = props

    const itemAimation: Variants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: delay => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                mass: 1,
                stiffness: 100,
                delay: delay * 0.03,
            },
        })
    }
    return (
        <motion.div className='weather-table__item'
            initial={'initial'}
            animate={'animate'}
            variants={itemAimation}
            {...rest}>
            <section className="weather-table__top">
                <h5 className="weather-table__title">
                    {hourData.time.slice(-5)}
                </h5>
                <WeatherIcon
                    hour={+hourData.time.slice(-5, -3)}
                    className='weather-table__icon'
                    weatherCode={hourData.weathercode} />
            </section>
            <section className="weather-table__temperature">
                <ActiveItem
                    style={{
                        transform: `translate(0, -${.9 *
                            (hourData.temperature_2m - minTemp)
                            / (maxTemp - minTemp)}em)`
                    }}
                    className='weather-table__temperature-item'
                    item={numToTemp(hourData.temperature_2m)} />
            </section>
            <section className="weather-table__wind">
                {showName ? <span className="weather-table__section-header">
                    Wind, km/h
                </span> : <></>}
                <WindDirection
                    className='weather-table__wind-direction'
                    degree={hourData.winddirection_10m} />
                <ActiveItem
                    className='weather-table__speed'
                    item={`${hourData.windspeed_10m}`} />
            </section>
            <section className='weather-table__precipitation'>
                {showName ? <span className="weather-table__section-header">
                    Precipation, mm
                </span> : <></>}
                <Wave
                    className='weather-table__precipitation-item'
                    precipitation={hourData.precipitation} />
            </section>
        </motion.div>
    )
}