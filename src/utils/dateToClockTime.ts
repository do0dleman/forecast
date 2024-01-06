import toLocationLocalTime from "./toLocationLocalTime"

/**
 * Returns string representing clocktime in a location with specified offset
 * @param {number} location_offset in seconds specified for a given location 
 * @returns {string} Clock time string
 */
export default function getCurrentLocationClockTime(location_offset: number): string {

    const time = toLocationLocalTime(Date.now(), location_offset)

    const hours = time.getHours() < 10 ?
        '0' + time.getHours() : time.getHours()

    const minutes = time.getMinutes() < 10 ?
        '0' + time.getMinutes() : time.getMinutes()

    return `${hours}:${minutes}`
}