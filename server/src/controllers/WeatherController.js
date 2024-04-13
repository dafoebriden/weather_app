import { weatherService } from "../services/WeatherService";
import BaseController from "../utils/BaseController";

export class WeatherController extends BaseController {
    constructor() {
        super('api/weather')
        this.router
            .get('/current', this.getCurrentWeatherInfo)
            .get('/forcast', this.getForcastWeatherInfo)
    }
    async getCurrentWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getCurrentWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            next(error);
        }
    }
    async getForcastWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getForcastWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            next(error);
        }
    }
}