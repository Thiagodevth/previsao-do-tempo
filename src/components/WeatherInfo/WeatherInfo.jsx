/* eslint-disable react/prop-types */
import './WeatherInfo.css'

function WeatherInformation({ weather }) {
  console.log(weather)
  return (
    <div className='weather-container'>
      <div className='weather-car'>
        <h2>{weather.name}</h2>
        <div className='weather-info'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="imagem-icon" />
          <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
        </div>
        <p className='description'>{weather.weather[0].description}</p>

      </div>
      <div className='details'>
        <p className='details-itens'>Sensação Témica: {Math.round(weather.main.feels_like)}ºC</p>
        <p className='details-itens'>Umidade: {weather.main.humidity}%</p>
        <p className='details-itens'>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  )
}

export default WeatherInformation