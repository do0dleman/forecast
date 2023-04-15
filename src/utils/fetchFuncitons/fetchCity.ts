import ICoords from "../../interfaces/ICoords";
import reverseGeocodingData from '../../assets/reverseGeocoding.json'
export default async function fetchCity(coord: ICoords):
    Promise<typeof reverseGeocodingData | undefined> {

    const data = await fetch
        (`https://geocode.maps.co/reverse?lat=${coord.lat}&lon=${coord.lng}`)

    const json = await data.json() as
        typeof reverseGeocodingData | undefined

    return json
}