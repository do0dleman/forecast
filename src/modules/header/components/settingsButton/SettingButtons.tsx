import { useContext, useEffect, useState } from 'react'
import WeatherIcon from '../../../../ui/weatherIcon/WeatherIcon'
import './SettingButton.scss'
import SettingsContext from '../../../../contexts/SettingsContext'

interface SettingsButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    className?: string
}
export default function SettingsButton(props: SettingsButtonProps) {

    const { className, ...rest } = props

    const { settings, dispatchSettings } = useContext(SettingsContext)

    const [theme, setTheme] = useState(settings.theme)

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light')
        }
        if (theme === 'light') {
            document.body.classList.add('light')
        }
        dispatchSettings({
            type: 'setTheme',
            payload: theme
        })
    }, [theme])

    useEffect(() => {
        setTheme(settings.theme)
    }, [settings.theme])

    return (
        <button
            className={`${className} --setting-button`}
            onClick={() => {
                if (theme === 'dark')
                    setTheme('light')
                if (theme === 'light')
                    setTheme('dark')
            }}
            {...rest}>
            {theme === 'dark' ?
                <WeatherIcon weatherCode={0} hour={1} /> :
                <WeatherIcon weatherCode={0} hour={12} />
            }
        </button>
    )
}