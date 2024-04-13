import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class WeatherService{
async getWeather(query){
    const res = await api.get('api/weather/current', {params: {q: 'boise'}})
    logger.log(res.data)
}
}
export const weatherService = new WeatherService()