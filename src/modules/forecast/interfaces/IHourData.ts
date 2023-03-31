export default interface IHourData {
    time: string;
    temperature_2m: number;
    relativehumidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weathercode: number;
    windspeed_10m: number;
    winddirection_10m: number
}