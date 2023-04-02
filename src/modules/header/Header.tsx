import Box from '../../components/Box/Box'
import Container from '../../components/Container/Container'
import BgCircle from '../../ui/bgCircle/BgCircle'
import CoordinatePicker from './components/coordinatePicker/CoordinatePicker'
import SettingsButton from './components/settingsButton/SettingButtons'
import './Header.scss'

export default function Header() {


    return (
        <header className='header' >
            <Container className='header__container'>
                <Box className='header__box'>
                    <CoordinatePicker />
                    <SettingsButton />
                </Box>
                <BgCircle style={{
                    top: '-70%',
                    left: '32%'
                }} />
            </Container>
        </header>
    )
}