/**
 * Calculates sum of the interval in an array
 * @param arr interval of numbers
 * @param i position in the array
 * @param step step of interval
 * @returns {number} sum of interval
 */
export default function calcIntervalSum(arr: number[], i: number, step: number,) {
    return Math.round(arr
        .slice(i * step, i * step + step)
        .reduce((partialSum: number, item: number) =>
            partialSum + item, 0) * 10) / 10
}