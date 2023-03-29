import { useContext } from 'react'
import Box from '../../../../components/Box/Box'
import weatherContext from '../../../../contexts/WeatherContext'
import getHoursDatas from '../../../../utils/getHoursDatas'
import timeToDate from '../../../../utils/timeToDate'
import ForecastTableItem from './components/ForecastTableItem/ForecastTableItem'
import './ForecastTable.scss'

interface ForecastTableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
}
export default function ForecastTable(props: ForecastTableProps) {

    const { children, ...rest } = props

    const { currentData } = useContext(weatherContext)

    const firstHour = 0
    const lastHour = 23
    let HoursData = currentData.hourly
    let HoursDatas = getHoursDatas(currentData.hourly, firstHour, lastHour)
    return (
        <Box className='forecast__table weather-table' {...rest}>
            <h4 className="weather-table__main-title">
                {timeToDate(currentData.current_weather.time)}
            </h4>
            <div className="weather-table__container">
                {HoursDatas.map((hourData, i) =>
                    <ForecastTableItem
                        showName={i === 0}
                        key={hourData.time}
                        maxTemp={Math.max(...HoursData.temperature_2m.slice(0, lastHour + 1))}
                        minTemp={Math.min(...HoursData.temperature_2m.slice(0, lastHour + 1))}
                        hourData={hourData} />
                )}
            </div>
        </Box>
    )
}