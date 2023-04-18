export default function dateToClockTime(time: Date) {

    const hours = time.getHours() < 10 ?
        '0' + time.getHours() : time.getHours()

    const minutes = time.getMinutes() < 10 ?
        '0' + time.getMinutes() : time.getMinutes()
    return `
    ${hours}:${minutes}`
}