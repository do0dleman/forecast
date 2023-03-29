import WeatherContextProvider from '../../components/WeatherContextProvider/WeatherContextProvider'
import Forecast from '../forecast/Forecast'
import Header from '../header/Header'
import './App.scss'

function App() {

  return (
    <main>
      <WeatherContextProvider>
        <Header />
        <Forecast />
      </WeatherContextProvider>
    </main>
  )
}

export default App
