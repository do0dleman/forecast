import Container from '../../components/Container/Container'
import MediaContextProvider from '../../components/MediaContextProvider/MediaContextProvider'
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
            <main className='app__name'>
              <Header />
              <Forecast />
              <Circles />
            </main>
          </Container>
        </WeatherContextProvider>
      </MediaContextProvider>
    </SettingsContextProvider>
  )
}

export default App
