import { createContext } from "react";
import ICoords from "../interfaces/ICoords";

type actionTypes =
    {
        type: 'setCoordinates',
        payload: ICoords,
    } | {
        type: 'setTimezone', payload: string
    } | {
        type: 'setSettings', payload: typeof deafultSettings
    } | {
        type: 'setTheme', payload: string
    } | {
        type: 'setCity', payload: string
    }

const deafultSettings = {
    theme: 'dark',
    coord: { lat: 56.95, lng: 24 },
    timeZoneId: 'Europe/Riga',
    cityName: 'Riga'
}
interface ISettingsContext {
    settings: typeof deafultSettings
    dispatchSettings: React.Dispatch<actionTypes>
}
const SettingsContext = createContext<ISettingsContext>({
    settings: {} as typeof deafultSettings,
    dispatchSettings: () => { }
})
export default SettingsContext
export { deafultSettings }
export type { actionTypes }