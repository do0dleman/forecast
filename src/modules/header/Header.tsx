import Box from '../../components/Box/Box'
import Container from '../../components/Container/Container'
import CoordinatePicker from './components/coordinatePicker/CoordinatePicker'
import SettingsButton from './components/settingsButton/SettingButtons'
import './Header.scss'
import Section from '../../components/Section/Section'
import RefreshButton from './refreshButton/RefreshButton'

export default function Header() {

    return (
        <Section className='header' >
            <Container className='header__container'>
                <Box className='header__box'>
                    <CoordinatePicker />
                    <div className="header__buttons">
                        <RefreshButton />
                        <SettingsButton />
                    </div>
                </Box>
            </Container>
        </Section>
    )
}
