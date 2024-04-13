import { weatherService } from "../services/WeatherService";
import BaseController from "../utils/BaseController";

export class WeatherController extends BaseController {
    constructor() {
        super('api/weather')
        this.router
            .get('/current', this.getCurrentWeatherInfo)
            .get('/forecast', this.getForecastWeatherInfo)
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
    async getForecastWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getForecastWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            next(error);
        }
    }
}