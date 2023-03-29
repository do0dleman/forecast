import { createContext, useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import DataFile from '../../assets/data.json'
import weatherContext from '../../contexts/WeatherContext'

interface WeatherContextProviderProps {
    children: React.ReactNode
}

export default function WeatherContextProvider(props: WeatherContextProviderProps) {

    const { children } = props

    const { isLoading, data, error } = useFetch('https://api.open-meteo.com/v1/forecast?latitude=56.95&longitude=24.11&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=Europe%2FBerlin')
    const [currentData, setCurrentData] = useState(DataFile)

    useEffect(() => {
        if (isLoading) return
        if (error) {
            console.log(error)
            return
        }
        setCurrentData(data as typeof DataFile)
    }, [isLoading])

    return (
        <weatherContext.Provider value={{
            currentData,
            setCurrentData,
        }}>
            {children}
        </weatherContext.Provider>
    )
}