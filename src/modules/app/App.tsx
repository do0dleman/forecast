import Container from '../../components/Container/Container'
import MediaContextProvider from '../../components/MediaContextProvider/MediaContextProvider'
import Section from '../../components/Section/Section'
import SettingsContextProvider from '../../components/SettingsContext/SettingsContextProvider'
import WeatherContextProvider from '../../components/WeatherContextProvider/WeatherContextProvider'
import Forecast from '../forecast/Forecast'
import Header from '../header/Header'
import './App.scss'
import Circles from './components/circles/Circles'

function App() {

  return (
    <SettingsContextProvider>
      <MediaContextProvider>
        <WeatherContextProvider>
          <Container>
            <Section className='app__main'>
              <Header />
              <Forecast />
              <Circles />
            </Section>
          </Container>
        </WeatherContextProvider>
      </MediaContextProvider>
    </SettingsContextProvider>
  )
}

export default App
