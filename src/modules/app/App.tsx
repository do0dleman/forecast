import MediaContextProvider from '../../components/mediaContextProvider/MediaContextProvider'
import WeatherContextProvider from '../../components/WeatherContextProvider/WeatherContextProvider'
import Forecast from '../forecast/Forecast'
import Header from '../header/Header'
import './App.scss'

function App() {

  return (
    <main>
      <MediaContextProvider>
        <WeatherContextProvider>
          <Header />
          <Forecast />
        </WeatherContextProvider>
      </MediaContextProvider>
    </main>
  )
}

export default App
