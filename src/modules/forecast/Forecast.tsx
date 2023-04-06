import './Forecast.scss'
import Container from '../../components/Container/Container'
import ForecastTable from './components/forecastTable/ForecastTable'
import Circles from './components/circles/Circles'
import WeatherCards from './components/weatherCards/WeatherCards'
import ForecastContextProvider from './components/forecastContext/ForecastContextProvider'
import Section from '../../components/Section/Section'

export default function Forecast() {

    return (
        <Section className='foreacst'>
            <Container className='forecast__container'>
                <ForecastContextProvider>
                    <WeatherCards />
                    <ForecastTable />
                    <Circles />
                </ForecastContextProvider>
            </Container>
        </Section>
    )
}