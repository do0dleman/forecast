import useFetch from "react-fetch-hook"
import timeZoneData from '../assets/timeZoneData.json'
import { useEffect, useRef } from "react"
import ICoords from "../interfaces/ICoords"

export default function useTimezone(
    coord: ICoords,
    depends: any[]) {
    const timezone_id = useRef('UTC')

    const { data, isLoading, error } = useFetch<typeof timeZoneData>(
        `https://api.wheretheiss.at/v1/coordinates/${coord.lat},${coord.lng}`,
        { depends: [...depends] })

    useEffect(() => {
        if (isLoading) return
        if (error) {
            console.log(error)
            return
        }
        timezone_id.current = data!.timezone_id

    }, [isLoading])
    return timezone_id.current
}