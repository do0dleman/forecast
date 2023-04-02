import MediaContextProvider from '../../components/MediaContextProvider/MediaContextProvider'
import SettingsContextProvider from '../../components/SettingsContext/SettingsContextProvider'
import WeatherContextProvider from '../../components/WeatherContextProvider/WeatherContextProvider'
import Forecast from '../forecast/Forecast'
import Header from '../header/Header'
import './App.scss'

function App() {

  return (
    <SettingsContextProvider>
      <MediaContextProvider>
        <WeatherContextProvider>
          <Header />
          <main>
            <Forecast />
          </main>
        </WeatherContextProvider>
      </MediaContextProvider>
    </SettingsContextProvider>
  )
}

export default App
