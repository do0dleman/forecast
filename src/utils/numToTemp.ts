export default function numToTemp(temp: number) {
    return `${temp >= 0 ? '+' + Math.round(temp) : Math.round(temp)}`
}