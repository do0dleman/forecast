import { expect, test } from 'vitest'
import calcIntervalAverage from './calcIntervalAverage';

test('test i = 0', () => {
    expect(calcIntervalAverage(
        [1, 2, 3, 4, 2, 5, 3, 5],
        0, 4
    )).toBe(2.5);
});
test('test i = 1', () => {
    expect(calcIntervalAverage(
        [1, 2, 3, 4, 2, 5, 3, 5],
        1, 4
    )).toBe(3.8);
});