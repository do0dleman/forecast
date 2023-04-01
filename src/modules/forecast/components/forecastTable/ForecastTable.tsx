import { useContext, useEffect, useState } from 'react'
import Box from '../../../../components/Box/Box'
import mediaContext from '../../../../contexts/MediaContexts'
import weatherContext from '../../../../contexts/WeatherContext'
import getHoursDatas from '../../../../utils/getHoursDatas/getHoursDatas'
import timeToDate from '../../../../utils/timeToDate'
import { forecastContext } from '../forecastContext/ForecastContextProvider'
import ForecastTableItem from './components/ForecastTableItem/ForecastTableItem'
import './ForecastTable.scss'

interface ForecastTableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
}
export default function ForecastTable(props: ForecastTableProps) {

    const { children, ...rest } = props

    const { currentData } = useContext(weatherContext)
    const { media } = useContext(mediaContext)

    const { currentForecast } = useContext(forecastContext)
    const { firstHour, lastHour, curentDay } = currentForecast

    const [step, setStep] = useState(5)

    useEffect(() => {
        if (media == 'sm' || media == 'xs') {
            setStep(5)
        } else {
            setStep(3)
        }
    }, [media])
    // console.log(firstHour)
    // console.log(lastHour)
    let HoursData = currentData.hourly
    let HoursDatas = getHoursDatas(
        currentData.hourly, firstHour, lastHour, step)
    return (
        <Box className='forecast__table weather-table' {...rest}>
            <h4 className="weather-table__main-title">
                {timeToDate(currentData.daily.time[curentDay])}
            </h4>
            <div className="weather-table__container">
                {HoursDatas.map((hourData, i) =>
                    <ForecastTableItem
                        showName={i === 0}
                        key={hourData.time}
                        maxTemp={Math.max(
                            ...(HoursData.temperature_2m
                                .slice(0, lastHour + 1)))}
                        minTemp={Math.min(
                            ...(HoursData.temperature_2m
                                .slice(0, lastHour + 1)))}
                        hourData={hourData} />
                )}
            </div>
        </Box>
    )
}