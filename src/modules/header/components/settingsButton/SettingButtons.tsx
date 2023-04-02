import { useEffect, useState } from 'react'
import WeatherIcon from '../../../../ui/weatherIcon/WeatherIcon'
import './SettingButton.scss'

interface SettingsButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    className?: string
}
export default function SettingsButton(props: SettingsButtonProps) {

    const { className, ...rest } = props
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.remove('light')
        }
        if (theme === 'light') {
            document.body.classList.add('light')
        }
    }, [theme])

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