import './WeatherInfo5Days.css'

// eslint-disable-next-line react/prop-types
function WeatherInformation5Days({ weather5Days }) {

   const dailyForecast = {}

   // eslint-disable-next-line react/prop-types
   for (let forecast of weather5Days.list) {
      const date = new Date(forecast.dt * 1000).toLocaleDateString()

      if (!dailyForecast[date]) {
         dailyForecast[date] = forecast
      }
   }

   const next5DaysForecast = Object.values(dailyForecast).slice(0, 5)

   function convertDate(date) {
      const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

      return newDate
   }

   return (
      <div className='weather-container'>
         <h3>Previsão Dos Próximos 5 Dias</h3>
         <div className='weather-list'>
            {next5DaysForecast.map(forecast => (
               <div key={forecast.dt} className='weather-item'>
                  <p className='forecast-day'>{convertDate(forecast)}</p>
                  <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="imagem-icon" />
                  <p className='forecast-description'>{forecast.weather[0].description}</p>
                  <p className='forecast-temp'>{Math.round(forecast.main.temp_min)}ºC min /{' '} {Math.round(forecast.main.temp_max)}ºC máx</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default WeatherInformation5Days