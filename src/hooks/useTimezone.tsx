import useFetch from "react-fetch-hook"
import timeZoneData from '../assets/timeZoneData.json'
import { useEffect, useState } from "react"
import ICoords from "../interfaces/ICoords"
import fetchTimezone from "../utils/fetchFuncitons/fetchTimezone"

export default function useTimezone(
    coord: ICoords,
    depends: any[],
    returnCondition?: boolean,
) {
    const [timezone_id, setTimezone_id] = useState('UTC')

    useEffect(() => {
        if (returnCondition) return

        const fetchData = async () => {
            const timeZone = await fetchTimezone(coord)

            setTimezone_id(timeZone!.timezone_id)
        }
        fetchData()
    }, [...depends])
    return timezone_id
}