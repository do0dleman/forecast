import { useContext } from 'react'
import Container from '../../components/Container/Container'
import './Forecast.scss'
import WeatherIcon from './components/weatherIcon/WeatherIcon'
import WeatherCard from './components/weatherCard/WeatherCard'
import weatherContext from '../../contexts/WeatherContext'
import ForecastTable from './components/forecastTable/ForecastTable'
import numToTemp from '../../utils/numToTemp'
import timeToDate from '../../utils/timeToDate'
import BgCircle from '../../ui/bgCircle/BgCircle'

interface ForecastProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}
export default function Forecast(props: ForecastProps) {
    const { currentData } = useContext(weatherContext)

    const currentWeather = currentData.current_weather
    const dailyWeather = currentData.daily
    return (
        <section className='foreacst'>
            <Container className='forecast__container'>
                <WeatherCard
                    className='forecast__card'
                    title='Now'
                    activeItem={numToTemp(currentWeather.temperature)}
                    icon={<WeatherIcon
                        weatherCode={currentWeather.weathercode
                        } />}
                />
                <WeatherCard
                    className='forecast__card'
                    title={timeToDate(dailyWeather.time[0])}
                    subTitle='Today'
                    activeItem={numToTemp(dailyWeather.temperature_2m_min[0])}
                    activeItem2={numToTemp(dailyWeather.temperature_2m_max[0])}
                    icon={<WeatherIcon
                        weatherCode={dailyWeather.weathercode[0]} />
                    }
                />
                <WeatherCard
                    className='forecast__card'
                    title={timeToDate(dailyWeather.time[1])}
                    subTitle='Tomorrow'
                    activeItem={numToTemp(dailyWeather.temperature_2m_min[1])}
                    activeItem2={numToTemp(dailyWeather.temperature_2m_max[1])}
                    icon={<WeatherIcon
                        weatherCode={dailyWeather.weathercode[1]} />
                    }
                />
                <ForecastTable />
                <BgCircle style={{
                    width: '5em',
                    height: '5em',
                    top: '-1em',
                    left: '-1em',
                }} />
                <BgCircle style={{
                    width: '3em',
                    height: '3em',
                    bottom: '22%',
                    left: '17%',
                }} />
                <BgCircle style={{
                    width: '7em',
                    height: '7em',
                    top: '-4%',
                    right: '-5%',
                }} />
                <BgCircle style={{
                    width: '6em',
                    height: '6em',
                    top: '-8%',
                    left: '40%',
                }} />
                <BgCircle style={{
                    width: '4em',
                    height: '4em',
                    bottom: '-8%',
                    right: '30%',
                }} />
                <BgCircle style={{
                    width: '5.3em',
                    height: '5.3em',
                    bottom: '38%',
                    right: '20%',
                }} />
                <BgCircle style={{
                    width: '3.6em',
                    height: '3.6em',
                    bottom: '-4%',
                    left: '30%',
                }} />
            </Container>
        </section>
    )
}