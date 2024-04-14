import { AppState } from "../AppState"
import { Weather } from "../models/Weather"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class WeatherService{
async getCurrentWeather(search){
    const res = await api.get('api/weather/current', { params:  {search: 'boise'} } )
    logger.log(res.data)
    AppState.weather = new Weather(res.data)
}
async getTodaysWeather(search){
    const res = await api.get('api/weather/today', { params:  {search: 'boise'} } )
    logger.log(res.data)
    AppState.weather = new Weather(res.data)

}

async getForcast(search){
    const res = await api.get('api/weather/current', { params:  {search: 'boise'} } )
    logger.log(res.data)
    AppState.weather = new Weather(res.data)

}
}
export const weatherService = new WeatherService()