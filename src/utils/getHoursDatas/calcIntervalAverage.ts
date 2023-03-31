export default function calcIntervalAverage(
    arr: number[],
    i: number,
    step: number
) {
    return Math.round((arr
        .slice(i * step, i * step + step)
        .reduce((partialSum: number, item: number) =>
            partialSum + item, 0)) / step * 10) / 10
}