import ICoords from "../../interfaces/ICoords";
import DataFile from '../../assets/data.json'
export default async function fetchWeather(coord: ICoords, timeZoneId: string):
    Promise<typeof DataFile | undefined> {

    const data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coord.lat}&longitude=${coord.lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_hours&current_weather=true&timezone=${timeZoneId}`)

    const json = await data.json() as
        typeof DataFile | undefined

    return json
}