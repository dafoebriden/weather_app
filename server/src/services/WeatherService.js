import axios from "axios"
import { inspect } from 'util'

class WeatherService {
    async getCurrentWeatherInfo(query) {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e454a9d3c545446da5e213602241204&q=${query.city}&q=${query.region}`)
        return res.data
    }
    async getForcastWeatherInfo(query) {
        const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e454a9d3c545446da5e213602241204&q=${}&q=${}`)
        return res.data
    }

}
export const weatherService = new WeatherService()