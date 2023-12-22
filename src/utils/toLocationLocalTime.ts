export default function toLocationLocalTime(time_now: number, location_offset: number) {

    const userOfset = -new Date().getTimezoneOffset() * 60 * 1000
    const time = new Date(time_now - userOfset + location_offset * 1000)

    return time
}