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
                return {
                    ...state,
                    timeZoneId: action.payload
                }
        }
    }
    const [settings, dispatchSettings] = useReducer(
        reducer, deafultSettings)

    const { data, isLoading, error } = useFetch<typeof timeZoneData>(`https://api.wheretheiss.at/v1/coordinates/${settings.coord.lat},${settings.coord.lng}`,
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
        <SettingsContext.Provider value={{ settings, dispatchSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}