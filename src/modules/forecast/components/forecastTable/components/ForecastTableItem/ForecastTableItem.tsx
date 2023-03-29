import ActiveItem from '../../../../../../ui/activeItems/ActiveItem';
import Wave from '../../../../../../ui/wave/Wave';
import WindDirection from '../../../../../../ui/windDirection/WindDirection';
import numToTemp from '../../../../../../utils/numToTemp';
import WeatherIcon from '../../../weatherIcon/WeatherIcon';
import './ForecastTableItem.scss'

interface ForecastTableItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    hourData: {
        time: string;
        temperature_2m: number;
        relativehumidity_2m: number;
        apparent_temperature: number;
        precipitation: number;
        weathercode: number;
        windspeed_10m: number;
        winddirection_10m: number
    }
    showName?: boolean
    maxTemp: number
    minTemp: number
}
export default function ForecastTableItem(props: ForecastTableItemProps) {

    const { hourData, minTemp, showName, maxTemp, ...rest } = props

    return (
        <div className='weather-table__item' {...rest}>
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
                        transform: `translate(0, -${1 * Math.abs(
                            (minTemp - hourData.temperature_2m)
                        ) / Math.abs((maxTemp - minTemp))}em)`
                    }}
                    className='weather-table__temperature-item'
                    item={numToTemp(hourData.temperature_2m)} />
            </section>
            <section className="weather-table__wind">
                {showName ? <span className="weather-table__section-header">
                    wind, km/h
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
        </div>
    )
}