import DataFile from '../../assets/data.json'
import { expect, test } from 'vitest'
import getHoursDatas from './getHoursDatas'

test('test firstHour=0', () => {
    expect(getHoursDatas(
        DataFile.hourly, 0, 23, 3
    )[0].temperature_2m).toBe(6.7)
})

test('test firstHour=24', () => {
    expect(getHoursDatas(
        DataFile.hourly, 24, 47, 3
    )[0].temperature_2m).toBe(-0.4)
})