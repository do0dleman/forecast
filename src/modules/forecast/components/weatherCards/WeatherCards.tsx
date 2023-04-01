import { useContext } from "react"
import weatherContext from "../../../../contexts/WeatherContext"
import numToTemp from "../../../../utils/numToTemp"
import timeToDate from "../../../../utils/timeToDate"
import { forecastContext } from "../forecastContext/ForecastContextProvider"
import WeatherIcon from "../weatherIcon/WeatherIcon"
import WeatherCard from "./WeatherCard"

export default function WeatherCards() {

    const { currentData } = useContext(weatherContext)
    const { currentForecast, dispatchCurrentForecast } = useContext(forecastContext)
    const { curentDay } = currentForecast

    const currentWeather = currentData.current_weather
    const dailyWeather = currentData.daily

    return (
        <div className="forecast__weather-cards">
            <WeatherCard
                className='forecast__card'
                subTitle='Now'
                activeItem={numToTemp(currentWeather.temperature)}
                icon={<WeatherIcon
                    weatherCode={currentWeather.weathercode
                    } />}
                isActive={false}
            />
            <WeatherCard
                className='forecast__card'
                title={timeToDate(dailyWeather.time[curentDay])}
                subTitle='Today'
                activeItem={numToTemp(dailyWeather.temperature_2m_min[curentDay])}
                activeItem2={numToTemp(dailyWeather.temperature_2m_max[curentDay])}
                icon={<WeatherIcon
                    weatherCode={dailyWeather.weathercode[curentDay]} />
                }
                onClick={() => {
                    dispatchCurrentForecast({
                        type: 'decrementDay',
                        payload: 1
                    })
                }}
                isActive={true}
            />
            <WeatherCard
                className='forecast__card'
                title={timeToDate(dailyWeather.time[curentDay + 1])}
                subTitle='Tomorrow'
                activeItem={numToTemp(dailyWeather.temperature_2m_min[curentDay + 1])}
                activeItem2={numToTemp(dailyWeather.temperature_2m_max[curentDay + 1])}
                icon={<WeatherIcon
                    weatherCode={dailyWeather.weathercode[curentDay + 1]} />
                }
                onClick={() => {
                    dispatchCurrentForecast({
                        type: 'incrementDay',
                        payload: 1
                    })
                }}
                isActive={true}
            />
        </div>
    )
}