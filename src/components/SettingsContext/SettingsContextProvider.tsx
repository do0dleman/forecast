import { useEffect, useReducer } from "react"
import useFetch from "react-fetch-hook"
import SettingsContext, { actionTypes, deafultSettings } from "../../contexts/SettingsContext"
import timeZoneData from '../../assets/timeZonedata.json'

export default function SettingsContextProvider(
    props: { children: React.ReactNode }) {

    const { children } = props

    function reducer(state: typeof deafultSettings,
        action: actionTypes) {
        switch (action.type) {
            case 'setCoordinates':
                return {
                    ...state,
                    coord: action.payload.coord,
                    cityName: action.payload.cityName
                }
            case 'setTimezone':
                localStorage.setItem('settings', JSON.stringify({
                    ...state,
                    timeZoneId: action.payload
                }))
                return {
                    ...state,
                    timeZoneId: action.payload
                }
            case 'setSettings':
                return {
                    ...state,
                    ...action.payload
                }
            case 'setTheme':
                localStorage.setItem('settings', JSON.stringify({
                    ...state,
                    theme: action.payload
                }))
                return {
                    ...state,
                    theme: action.payload
                }
        }
    }
    useEffect(() => {
        if (localStorage.settings) {
            console.log(JSON.parse(localStorage.getItem('settings')!))
            dispatchSettings({
                type: 'setSettings',
                payload: JSON.parse(localStorage.getItem('settings')!)
            })
        }
    }, [])

    const [settings, dispatchSettings] = useReducer(
        reducer, deafultSettings)

    const { data, isLoading, error } = useFetch<typeof timeZoneData>(
        `https://api.wheretheiss.at/v1/coordinates/${settings.coord.lat},${settings.coord.lng}`,
        { depends: [settings.coord] })

    useEffect(() => {
        if (isLoading) return
        if (error) {
            console.log(error)
            return
        }
        dispatchSettings({
            type: "setTimezone",
            payload: data!.timezone_id
        })
    }, [isLoading])

    return (
        <SettingsContext.Provider value={{
            settings,
            dispatchSettings
        }}>
            {children}
        </SettingsContext.Provider>
    )
}