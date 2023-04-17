import useFetch from "react-fetch-hook"
import DataFile from '../assets/data.json'
import { useEffect, useRef, useState } from "react"
import ICoords from "../interfaces/ICoords"
import fetchWeather from "../utils/fetchFuncitons/fetchWeather"

export default function useTimezone(
    coord: ICoords,
    timeZoneId: string,
    depends: any[]) {

    const [weather, setWeather] = useState(DataFile)
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchWeather(coord, timeZoneId)

            setWeather(data!)
        }
        fetchData()
    }, [...depends])
    return weather
}