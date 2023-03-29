import DataFile from '../assets/data.json'
import timeToDate from './timeToDate'

export default function getHoursDatas(
    HoursData: typeof DataFile.hourly,
    firstHour: number,
    lastHour: number,
    step?: number) {
    let HoursDatas = [] as any[]

    if (!step) step = 3

    const sumKeys = [
        'precipitation',
    ]
    const averageKeys = [
        'temperature_2m',
        'relativehumidity_2m',
        'apparent_temperature',
        'windspeed_10m',
        'winddirection_10m'
    ]
    for (let i = firstHour; i <= lastHour / step; i += 1) {
        let stepData = {} as any
        for (const key in HoursData) {
            if (sumKeys.includes(key)) {
                stepData[key] = (
                    HoursData[key as keyof typeof HoursData] as number[])
                    .slice(i * step, i * step + 2)
                    .reduce((partialSum: number, item: number) =>
                        partialSum + item, 0)
                continue
            }
            if (averageKeys.includes(key)) {
                stepData[key] = Math.round(
                    (HoursData[key as keyof typeof HoursData] as number[])
                        .slice(i * step, i * step + 2)
                        .reduce((partialSum: number, item: number) =>
                            partialSum + item, 0) / step * 10) / 10
                continue
            }
            if (key === 'time') {
                stepData[key] = HoursData
                [key as keyof typeof HoursData][i * step + step - 1]
                continue
            }
            stepData[key] = HoursData
            [key as keyof typeof HoursData][i * step]
        }
        HoursDatas.push(stepData)
    }
    return HoursDatas
}