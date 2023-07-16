import { useContext, useEffect, useState } from 'react'
import DataFile from '../../assets/data.json'
import weatherContext from '../../contexts/WeatherContext'
import SettingsContext from '../../contexts/SettingsContext'
import useWeather from '../../hooks/useWeather'
import IWeather from '../../interfaces/IWeather'

interface WeatherContextProviderProps {
    children: React.ReactNode
}

export default function WeatherContextProvider(props: WeatherContextProviderProps) {

    const { children } = props

    const { settings } = useContext(SettingsContext)
    const timeZoneId = settings.timeZoneId

    const [currentData, setCurrentData] = useState<IWeather>({ weather: DataFile, date: new Date() })
    const [update, setUpdate] = useState(true)

    function refreshData() {
        setUpdate(!update)
    }

    const weather = useWeather(
        settings.coord, timeZoneId, [settings.coord, settings.timeZoneId, update])

    useEffect(() => {
        setCurrentData(weather)
    }, [weather])

    useEffect(() => {
        window.onfocus = refreshData
    }, [])

    return (
        <weatherContext.Provider value={{
            currentData,
            setCurrentData,
            refreshData
        }}>
            {children}
        </weatherContext.Provider>
    )
}