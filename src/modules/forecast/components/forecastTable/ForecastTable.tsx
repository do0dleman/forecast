import { useContext, useEffect, useState } from 'react'
import Box from '../../../../components/Box/Box'
import mediaContext from '../../../../contexts/MediaContexts'
import weatherContext from '../../../../contexts/WeatherContext'
import getHoursDatas from '../../../../utils/getHoursDatas/getHoursDatas'
import timeToDate from '../../../../utils/timeToDate'
import { forecastContext } from '../forecastContext/ForecastContextProvider'
import ForecastTableItem from './components/ForecastTableItem/ForecastTableItem'
import './ForecastTable.scss'
import { HTMLMotionProps, Variants } from 'framer-motion'
import ShowAllButton from './components/ShowAllButton/ShowAllButton'

interface ForecastTableProps extends HTMLMotionProps<"div"> {
}
export default function ForecastTable(props: ForecastTableProps) {

    const { children, ...rest } = props

    const { currentData } = useContext(weatherContext)
    const { media } = useContext(mediaContext)

    const { currentForecast } = useContext(forecastContext)
    const { firstHour, lastHour, curentDay } = currentForecast

    const [step, setStep] = useState(5)
    const [isShowAll, setShowAll] = useState(false)

    useEffect(() => {
        if (media == 'sm' ||
            media == 'xs') {
            setStep(5)
        } else {
            setStep(3)
        }
    }, [media])

    const TableAnimation: Variants = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: delay => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: delay * 0.07
            }
        })
    }

    let HoursData = currentData.weather.hourly
    let HoursDatas = getHoursDatas(
        HoursData, firstHour, lastHour, isShowAll ? 1 : step)
    return (
        <Box className='forecast__table weather-table'
            variants={TableAnimation}
            custom={2}
            {...rest}>
            <ShowAllButton isShowAll={isShowAll} setShowAll={setShowAll} />
            <h4 className="weather-table__main-title">
                {timeToDate(currentData.weather.daily.time[curentDay])}
            </h4>
            <div
                className="weather-table__container"
                style={{ overflowX: isShowAll ? 'scroll' : 'hidden' }}
            >
                {HoursDatas.map((hourData, i) =>
                    <ForecastTableItem
                        showName={i === 0}
                        key={`${hourData.time}-${hourData.winddirection_10m}`}
                        maxTemp={Math.max(
                            ...(HoursData.temperature_2m
                                .slice(0, lastHour + 1)))}
                        minTemp={Math.min(
                            ...(HoursData.temperature_2m
                                .slice(0, lastHour + 1)))}
                        hourData={hourData}
                        custom={i} />
                )}
            </div>
        </Box>
    )
}