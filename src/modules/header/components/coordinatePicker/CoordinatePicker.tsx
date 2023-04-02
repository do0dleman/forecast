import { useContext, useEffect, useState } from 'react';
import SettingsContext from '../../../../contexts/SettingsContext';
import './CoordinatePicker.scss'
import useFetch from 'react-fetch-hook';
import ForwarGeocoding from '../../../../assets/forwardGeocoding.json'
import CoordinatePickerCity from './coordinatePickerCity/CoordinatePickerCity';
import Box from '../../../../components/Box/Box';
import BgCircle from '../../../../ui/bgCircle/BgCircle';

interface CoordinatePickerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string

}
export default function CoordinatePicker(props: CoordinatePickerProps) {
    const { className } = props

    const { settings } = useContext(SettingsContext)
    const [cityName, setCityName] = useState(settings.cityName)
    const [cityLocation, setCityLocation] = useState(settings.coord)

    const { data, isLoading, error } = useFetch<typeof ForwarGeocoding>(
        `https://geocode.maps.co/search?q={${cityName}}`,
        { depends: [cityName] })
    useEffect(() => {
        if (isLoading) return
        if (error) {
            console.log(error)
            return
        }
        if (data![0] !== undefined) {
            setCityLocation({
                lat: +data![0].lat,
                lng: +data![0].lon
            })
        }
        console.log(data)
    }, [isLoading])
    return (
        <div className={`${className} coordinate-picker`}>
            <input
                className='coordinate-picker__input'
                type="text"
                value={cityName}
                onChange={(e) => {
                    setCityName(e.target.value)
                }} />
            <Box className='coordinate-picker__cities'>
                <ul className='coordinate-picker__city-list'>
                    {data?.length! > 0 ? data!.map((item) =>
                        <CoordinatePickerCity
                            key={item.place_id}
                            cityName={cityName}
                            displayName={item.display_name}
                            coord={{
                                lat: +item.lat,
                                lng: +item.lon
                            }} />) :
                        <span>Not Found</span>}
                </ul>
            </Box>
        </div>
    )
}