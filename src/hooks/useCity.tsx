import { useEffect, useState } from "react"
import ICoords from "../interfaces/ICoords"
import fetchCity from "../utils/fetchFuncitons/fetchCity"

export default function useTimezone(
    coord: ICoords,
    depends: any[],
    returnCondition?: boolean,
) {
    const [city, setCity] = useState<string | undefined>(undefined)


    useEffect(() => {
        if (returnCondition) return

        const fetchData = async () => {
            const timeZone = await fetchCity(coord)
            let data = timeZone!.address.city ? timeZone!.address.city : timeZone!.address.village
            setCity(data)
        }
        fetchData()
    }, [...depends])
    return city
}