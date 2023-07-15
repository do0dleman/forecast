import { useContext, useEffect, useRef, useState } from 'react';
import SettingsContext from '../../../../contexts/SettingsContext';
import './CoordinatePicker.scss'
import useFetch from 'react-fetch-hook';
import ForwarGeocoding from '../../../../assets/forwardGeocoding.json'
import CoordinatePickerCity from './coordinatePickerCity/CoordinatePickerCity';
import Box from '../../../../components/Box/Box';
import { useDebounce } from '../../../../hooks/useDebounce';

interface CoordinatePickerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
}
export default function CoordinatePicker(props: CoordinatePickerProps) {
    const { className } = props

    const { settings } = useContext(SettingsContext)
    const [cityName, setCityName] = useState(settings.cityName)
    const [showCities, setShowCities] = useState(false)
    const [isCitiesHover, setCitiesHover] = useState(false)
    const [cityLocation, setCityLocation] = useState(settings.coord)

    const debounced = useDebounce(cityName)

    const inputRef = useRef<HTMLInputElement>(null)

    const { data, isLoading, error } =
        useFetch<typeof ForwarGeocoding>(
            `https://geocode.maps.co/search?q={${debounced}}`,
            { depends: [debounced] })

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
    }, [isLoading])

    useEffect(() => {
        if (settings.cityName) {
            setCityName(settings.cityName)
        }
    }, [settings.cityName])

    function HandleFocus() {
        setShowCities(true)
    }
    function HandleBlur() {
        if (isCitiesHover) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 1)
            return
        }
        setShowCities(false)
    }
    return (
        <div className={`${className} coordinate-picker`}>
            <input
                className='coordinate-picker__input'
                type="text"
                onFocus={HandleFocus}
                onBlur={HandleBlur}
                value={cityName}
                ref={inputRef}
                onChange={(e) => {
                    setCityName(e.target.value)
                }} />

            {showCities ?
                <Box
                    onMouseEnter={(e) => {
                        setCitiesHover(true)
                    }}
                    onMouseLeave={(e) => {
                        setCitiesHover(false)
                    }}
                    className='coordinate-picker__cities'>
                    <ul
                        className='coordinate-picker__city-list'>
                        {data?.length! > 0 ?
                            data!.map((item) =>
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
                </Box> : <></>}
        </div>
    )
}