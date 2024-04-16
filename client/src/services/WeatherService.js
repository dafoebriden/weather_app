import { AppState } from "../AppState"
import { Weather } from "../models/Weather"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class WeatherService{
async getCurrentWeather(search){
    const res = await api.get('api/weather/current', { params:  {search} } )
    if(res.data == 'Bad Request'){
        Pop.error('Invalid Input, Please use a valid city, country, or zipcode')
        return 'return'
    }
        logger.log('Current Weather',res.data)
        AppState.currentWeather = new Weather(res.data)
}
async getTodaysWeather(search){
    const res = await api.get('api/weather/today', { params:  {search} } )
    logger.log('Todays Weather',res.data)
    AppState.todaysWeather = new Weather(res.data)

}

async getForecast(search){
    const res = await api.get('api/weather/forecast', { params:  {search} } )
    logger.log('Forecasted Weather',res.data)
    AppState.forecastedWeather = new Weather(res.data)

}
}
export const weatherService = new WeatherService()