import { HttpStatusCode } from "axios";
import { weatherService } from "../services/WeatherService";
import BaseController from "../utils/BaseController";
import { BadRequest } from "../utils/Errors";

export class WeatherController extends BaseController {
    constructor() {
        super('api/weather')
        this.router
            .get('/current', this.getCurrentWeatherInfo)
            .get('/today', this.getTodaysWeatherInfo)
            .get('/forecast', this.getForecastWeatherInfo)
    }
    async getCurrentWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getCurrentWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            if (error.message.includes('400')) {
                res.send('Bad Request')
            }
            next(error);
        }
    }
    async getTodaysWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getTodaysWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            if (error.message.includes('400')) {
                res.send('Bad Request')
                next(error);
            }
        }
    }
    async getForecastWeatherInfo(req, res, next) {
        try {
            const weather = await weatherService.getForecastWeatherInfo(req.query)
            res.send(weather)
        }
        catch (error) {
            if (error.message.includes('400')) {
                res.send('Bad Request')
                next(error);
            }
        }
    }
}