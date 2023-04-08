import Box from '../../components/Box/Box'
import Container from '../../components/Container/Container'
import CoordinatePicker from './components/coordinatePicker/CoordinatePicker'
import SettingsButton from './components/settingsButton/SettingButtons'
import './Header.scss'
import Section from '../../components/Section/Section'

export default function Header() {

    return (
        <Section className='header' >
            <Container className='header__container'>
                <Box className='header__box'>
                    <CoordinatePicker />
                    <SettingsButton />
                </Box>
            </Container>
        </Section>
    )
}
