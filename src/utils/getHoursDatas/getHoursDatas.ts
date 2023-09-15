import DataFile from '../../assets/data.json'
import IHourData from '../../modules/forecast/interfaces/IHourData'
import calcIntervalAverage from './calcIntervalAverage'
import calcIntervalSum from './calcIntervalSum'

export default function getHoursDatas(
    HoursData: typeof DataFile.hourly,
    firstHour: number,
    lastHour: number,
    step?: number) {
    let HoursDatas = [] as IHourData[]

    if (!step) step = 3

    const sumKeys = [
        'precipitation',
    ]
    const averageKeys = [
        'temperature_2m',
        'relativehumidity_2m',
        'apparent_temperature',
        'windspeed_10m',
    ]
    HoursData.winddirection_10m =
        HoursData.winddirection_10m.map(deg => deg < 180 ? deg : deg - 360)
    for (let i = firstHour / step; i <= lastHour / step; i += 1) {
        let stepData = {} as any
        for (const key in HoursData) {
            if (sumKeys.includes(key)) {
                stepData[key] = calcIntervalSum(
                    HoursData[key as
                    keyof typeof HoursData] as number[],
                    i, step
                )
                continue
            }
            if (averageKeys.includes(key)) {
                stepData[key] = calcIntervalAverage(
                    HoursData[key as
                    keyof typeof HoursData] as number[],
                    i, step
                )
                continue
            }
            if (key === 'winddirection_10m') {
                let degrees = HoursData[key as
                    keyof typeof HoursData] as number[]
                stepData[key] = calcIntervalSum(degrees, i, step)
            }
            if (key === 'time') {
                stepData[key] = HoursData
                [key as keyof typeof HoursData]
                [i * step + step - 1]
                continue
            }
            stepData[key] = HoursData
            [key as keyof typeof HoursData][i * step]
        }
        HoursDatas.push(stepData)
    }
    return HoursDatas
}