import ICoords from "../../interfaces/ICoords";
import timeZoneData from '../../assets/timeZoneData.json'
export default async function fetchTimezone(coord: ICoords):
    Promise<typeof timeZoneData | undefined> {

    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const data = await fetch(
        `https://api.wheretheiss.at/v1/coordinates/${coord.lat},${coord.lng}`)

    const json = await data.json() as
        typeof timeZoneData | undefined

    return json
}