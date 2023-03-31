import { expect, test } from 'vitest'
import calcIntervalSum from './calcIntervalSum'

test('test interval sum i=1 step=3', () => {
    expect(calcIntervalSum(
        [1, 2, 3, 4, 2, 5, 3, 5],
        1, 3)).toBe(11)
})
test('test interval sum i=1 step=4', () => {
    expect(calcIntervalSum(
        [1, 2, 3, 4, 2, 5, 3, 5],
        1, 4)).toBe(15)
})
test('test interval sum i=0 step=5', () => {
    expect(calcIntervalSum(
        [1, 2, 3, 4, 2, 5, 3, 5],
        0, 5)).toBe(12)
})