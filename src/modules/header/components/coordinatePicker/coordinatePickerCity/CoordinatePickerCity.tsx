import { useContext } from 'react'
import './CoordinatePickerCity.scss'
import SettingsContext from '../../../../../contexts/SettingsContext'

interface CoordinatePickerCityProps extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,
        HTMLButtonElement> {
    cityName: string,
    displayName: string,
    coord: { lat: number, lng: number }

}
export default function CoordinatePickerCity(
    props: CoordinatePickerCityProps) {

    const { cityName, displayName, coord, ...rest } = props
    const { settings, dispatchSettings } = useContext(SettingsContext)

    function HandleButtonClick() {
        dispatchSettings({
            type: 'setCoordinates',
            payload: { cityName, coord }
        })
    }

    return (
        <ul>
            <button
                className='coordinate-picker__city-button'
                onClick={HandleButtonClick}
                {...rest}>
                {displayName}
            </button>
        </ul>
    )
}