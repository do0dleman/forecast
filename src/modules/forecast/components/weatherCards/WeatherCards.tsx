import { useContext } from "react"
import weatherContext from "../../../../contexts/WeatherContext"
import numToTemp from "../../../../utils/numToTemp"
import timeToDate from "../../../../utils/timeToDate"
import { forecastContext } from "../forecastContext/ForecastContextProvider"
import WeatherIcon from "../../../../ui/weatherIcon/WeatherIcon"
import calcCardSubtitle from "../../../../utils/calcCardSubtitle"
import WeatherCard from "./WeatherCard"
import dateToClockTime from "../../../../utils/dateToClockTime"

export default function WeatherCards() {

    const { currentData } = useContext(weatherContext)
    const { currentForecast, dispatchCurrentForecast } = useContext(forecastContext)
    const { curentDay } = currentForecast

    const currentWeather = currentData.weather.current_weather
    const dailyWeather = currentData.weather.daily

    return (
        <div className="forecast__weather-cards">
            <WeatherCard
                className='forecast__card'
                title={dateToClockTime(currentData.date)}
                subTitle='Now'
                activeItem={numToTemp(currentWeather.temperature)}
                icon={<WeatherIcon
                    weatherCode={currentWeather.weathercode
                    } />}
                onClick={() => {
                    dispatchCurrentForecast({
                        type: 'setDay',
                        payload: 0
                    })
                }}
                isActive={curentDay === 0 ? false : true}
                custom={1}
            />
            <WeatherCard
                className='forecast__card'
                title={timeToDate(dailyWeather.time[curentDay])}
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
                isActive={curentDay === 0 ? false : true}
                subTitle={calcCardSubtitle(curentDay)}
                custom={2}
            />
            <WeatherCard
                className='forecast__card'
                title={timeToDate(dailyWeather.time[curentDay + 1])}
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
                isActive={curentDay === 5 ? false : true}
                subTitle={calcCardSubtitle(curentDay + 1)}
                custom={3}
            />
        </div>
    )
}