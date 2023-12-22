import DataFile from '../assets/data.json'
import { useEffect, useState } from "react"
import ICoords from "../interfaces/ICoords"
import fetchWeather from "../utils/fetchFuncitons/fetchWeather"
import IWeather from '../interfaces/IWeather'

export default function useTimezone(
    coord: ICoords,
    timeZoneId: string,
    depends: any[]) {

    const [weatherData, setWeatherData] = useState<IWeather>({ weather: DataFile,})
    useEffect(() => {
        const fetchData = async () => {
            const weather = await fetchWeather(coord, timeZoneId)
            setWeatherData({ weather: weather! })
        }
        fetchData()
    }, [...depends])
    return weatherData
}