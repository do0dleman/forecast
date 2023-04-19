import { createContext } from "react";
import IWeather from "../interfaces/IWeather";

interface IWeatherContext {
    currentData: IWeather
    setCurrentData: React.Dispatch<React.SetStateAction<IWeather>>
    refreshData: Function
}
const weatherContext = createContext<IWeatherContext>({
    currentData: {} as IWeather,
    setCurrentData: () => { },
    refreshData: () => { }
})

export default weatherContext