import { createContext } from "react";
import IWeather from "../interfaces/IWeather";

interface IWeatherContext {
    currentData: IWeather
    setCurrentData: React.Dispatch<React.SetStateAction<IWeather>>
}
const weatherContext = createContext<IWeatherContext>({
    currentData: {} as IWeather,
    setCurrentData: () => { }
})

export default weatherContext