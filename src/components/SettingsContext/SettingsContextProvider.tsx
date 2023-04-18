import { useEffect, useReducer, useState } from "react"
import SettingsContext, { actionTypes, deafultSettings } from "../../contexts/SettingsContext"
import useTimezone from "../../hooks/useTimezone"
import fetchCity from "../../utils/fetchFuncitons/fetchCity"
import useCity from "../../hooks/useCity"

export default function SettingsContextProvider(
    props: { children: React.ReactNode }) {

    const { children } = props

    function reducer(state: typeof deafultSettings,
        action: actionTypes) {
        switch (action.type) {

            case 'setCoordinates':
                return {
                    ...state,
                    coord: action.payload,
                }
            case 'setTimezone':
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
                return {
                    ...state,
                    theme: action.payload
                }
            case "setCity":
                return {
                    ...state,
                    cityName: action.payload
                }
        }
    }
    useEffect(() => {
        const settings = localStorage.getItem('settings')
        if (settings) {
            dispatchSettings({
                type: 'setSettings',
                payload: JSON.parse(settings)
            })
        }
        if (!settings) {
            const succes = (pos: GeolocationPosition) => {
                const lat = pos.coords.latitude
                const lng = pos.coords.longitude
                dispatchSettings({
                    type: 'setCoordinates',
                    payload: { lat, lng }
                })

            }
            const error = () => {
                console.log('error')
                return
            }
            navigator.geolocation.getCurrentPosition(succes, error)
        }
    }, [])

    const [settings, dispatchSettings] = useReducer(
        reducer, deafultSettings)

    useEffect(() => {
        if (JSON.stringify(settings) === JSON.stringify(deafultSettings)) {
            return
        }
        localStorage.setItem('settings',
            JSON.stringify(settings))
    }, [settings])

    const timezone = useTimezone(settings.coord, [settings.coord],
        (settings.coord === deafultSettings.coord))
    useEffect(() => {
        dispatchSettings({
            type: 'setTimezone',
            payload: timezone
        })
    }, [timezone])

    const city = useCity(settings.coord, [settings.coord],
        (settings.coord === deafultSettings.coord))
    useEffect(() => {
        dispatchSettings({
            type: 'setCity',
            payload: city!
        })
    }, [city])

    return (
        <SettingsContext.Provider value={{
            settings,
            dispatchSettings
        }}>
            {children}
        </SettingsContext.Provider>
    )
}