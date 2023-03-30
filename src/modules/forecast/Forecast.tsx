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
import mediaContext from '../../contexts/MediaContexts'

interface ForecastProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}
export default function Forecast(props: ForecastProps) {
    const { currentData } = useContext(weatherContext)

    const currentWeather = currentData.current_weather
    const dailyWeather = currentData.daily

    const { media } = useContext(mediaContext)
    console.log(media)

    const circleStyles = [
        {
            width: '5em',
            height: '5em',
            top: '-1em',
            left: '-1em',
        },
        {
            width: '3em',
            height: '3em',
            bottom: '22%',
            left: '17%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            height: media === 'lg' || media === 'md'
                ? '7em' : '3em',
            top: '-4%',
            right: '-5%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '6em' : '0',
            height: media === 'lg' || media === 'md'
                ? '6em' : '0',
            top: '-8%',
            left: '40%',
        },
        {
            width: '5.3em',
            height: '5.3em',
            bottom: '38%',
            right: '10%',
        },
        {
            width: '4em',
            height: '4em',
            bottom: '-8%',
            right: media === 'lg' || media === 'md'
                ? '30%' : '10%',
        },
        {
            width: media === 'lg' || media === 'md'
                ? '3.6em' : '0',
            height: media === 'lg' || media === 'md'
                ? '3.6em' : '0',
            bottom: '-4%',
            left: '20%',
        }
    ]
    return (
        <section className='foreacst'>
            <Container className='forecast__container'>
                <div className="forecast__weather-cards">
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
                </div>
                <ForecastTable />
                {circleStyles.map((style) =>
                    <BgCircle key={JSON.stringify(style)} style={style} />)}
            </Container>
        </section>
    )
}