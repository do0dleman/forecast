import { useContext } from 'react'
import Box from '../../components/Box/Box'
import Container from '../../components/Container/Container'
import mediaContext from '../../contexts/MediaContexts'
import BgCircle from '../../ui/bgCircle/BgCircle'
import CoordinatePicker from './components/coordinatePicker/CoordinatePicker'
import SettingsButton from './components/settingsButton/SettingButtons'
import './Header.scss'

export default function Header() {

    const { media } = useContext(mediaContext)

    return (
        <header className='header' >
            <Container className='header__container'>
                <Box className='header__box'>
                    <CoordinatePicker />
                    <SettingsButton />
                </Box>
                <BgCircle style={{
                    top: media === 'xs' ?
                        '-130%' : '-70%',
                    left: '32%'
                }} />
            </Container>
        </header>
    )
}
