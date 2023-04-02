import MediaContextProvider from '../../components/MediaContextProvider/MediaContextProvider'
import SettingsContextProvider from '../../components/SettingsContext/SettingsContextProvider'
import WeatherContextProvider from '../../components/WeatherContextProvider/WeatherContextProvider'
import Forecast from '../forecast/Forecast'
import Header from '../header/Header'
import './App.scss'
import '../../fonts/wi-font/weathericons-regular-webfont.eot'
import '../../fonts/wi-font/weathericons-regular-webfont.svg'
import '../../fonts/wi-font/weathericons-regular-webfont.ttf'
import '../../fonts/wi-font/weathericons-regular-webfont.woff'
import '../../fonts/wi-font/weathericons-regular-webfont.woff2'

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
