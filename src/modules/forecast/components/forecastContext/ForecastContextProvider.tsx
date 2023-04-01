import { createContext, useReducer } from "react"

interface IForecastContext {
    currentForecast: typeof initialState
    dispatchCurrentForecast: React.Dispatch<actionTypes>
}
const forecastContext = createContext<IForecastContext>({
    currentForecast: {} as typeof initialState,
    dispatchCurrentForecast: () => { }
})

const initialState = {
    curentDay: 0,
    firstHour: 0,
    lastHour: 23,
}
type actionTypes =
    { type: 'setDay', payload: number } |
    { type: 'incrementDay', payload: number } |
    { type: 'decrementDay', payload: number }


function reducer(
    state: typeof initialState,
    action: actionTypes) {
    let currentDay
    switch (action.type) {
        case 'setDay':
            return {
                ...state,
                curentDay: action.payload,
                firstHour: 24 * action.payload,
                lastHour: 24 * action.payload + 23,
            }
        case 'incrementDay':
            currentDay = state.curentDay + action.payload
            if (currentDay > 5) currentDay = state.curentDay
            return {
                ...state,
                curentDay: currentDay,
                firstHour: 24 * currentDay,
                lastHour: 24 * currentDay + 23,
            }
        case 'decrementDay':
            currentDay = state.curentDay - action.payload
            if (currentDay < 0) currentDay = state.curentDay
            return {
                ...state,
                curentDay: currentDay,
                firstHour: 24 * currentDay,
                lastHour: 24 * currentDay + 23,
            }
        default:
            return {
                ...state
            }
    }
}

export default function ForecastContextProvider(
    { children }: { children: React.ReactNode }) {

    const [currentForecast, dispatchCurrentForecast] = useReducer(
        reducer,
        initialState)

    return (
        <forecastContext.Provider
            value={{
                currentForecast,
                dispatchCurrentForecast
            }}>
            {children}
        </forecastContext.Provider>
    )
}

export { forecastContext }