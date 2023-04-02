import { createContext, useContext, useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import DataFile from '../../assets/data.json'
import weatherContext from '../../contexts/WeatherContext'
import SettingsContext from '../../contexts/SettingsContext'

interface WeatherContextProviderProps {
    children: React.ReactNode
}

export default function WeatherContextProvider(props: WeatherContextProviderProps) {

    const { children } = props

    const { settings } = useContext(SettingsContext)
    const { lat, lng } = settings.coord
    const timeZoneId = settings.timeZoneId
    const { isLoading, data, error } = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=${timeZoneId}`, {
        depends: [settings]
    })
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