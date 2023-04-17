import { useContext, useEffect, useState } from 'react'
import DataFile from '../../assets/data.json'
import weatherContext from '../../contexts/WeatherContext'
import SettingsContext from '../../contexts/SettingsContext'
import useWeather from '../../hooks/useWeather'

interface WeatherContextProviderProps {
    children: React.ReactNode
}

export default function WeatherContextProvider(props: WeatherContextProviderProps) {

    const { children } = props

    const { settings } = useContext(SettingsContext)
    const timeZoneId = settings.timeZoneId
    const [currentData, setCurrentData] = useState(DataFile)
    const weather = useWeather(
        settings.coord, timeZoneId, [settings.coord, settings.timeZoneId])

    useEffect(() => {
        setCurrentData(weather)
    }, [weather])

    return (
        <weatherContext.Provider value={{
            currentData,
            setCurrentData,
        }}>
            {children}
        </weatherContext.Provider>
    )
}