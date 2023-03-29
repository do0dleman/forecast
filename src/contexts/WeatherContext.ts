import { createContext } from "react";
import DataFile from '../assets/data.json'

interface IWeatherContext {
    currentData: typeof DataFile
    setCurrentData: React.Dispatch<React.SetStateAction<typeof DataFile>>
}
const weatherContext = createContext<IWeatherContext>({
    currentData: {} as typeof DataFile,
    setCurrentData: () => { }
})

export default weatherContext