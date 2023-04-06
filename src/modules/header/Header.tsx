import { useContext } from 'react'
import Box from '../../components/Box/Box'
import Container from '../../components/Container/Container'
import mediaContext from '../../contexts/MediaContexts'
import CoordinatePicker from './components/coordinatePicker/CoordinatePicker'
import SettingsButton from './components/settingsButton/SettingButtons'
import './Header.scss'
import BgCircle from '../../ui/bgCircle/BgCircle'
import Section from '../../components/Section/Section'

export default function Header() {

    const { media } = useContext(mediaContext)

    return (
        <Section className='header' >
            <Container className='header__container'>
                <Box className='header__box'>
                    <CoordinatePicker />
                    <SettingsButton />
                </Box>
                <BgCircle
                    style={{
                        top: media === 'xs' ?
                            '-130%' : '-70%',
                        left: '32%'
                    }}
                    custom={-1} />
            </Container>
        </Section>
    )
}
