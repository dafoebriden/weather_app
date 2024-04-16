export class Weather{
    constructor(data){
        this.location = data.location
        this.locationName = data.location.name || 'city'
        this.locationRegion = data.location.region || 'state'
        this.locationCountry = data.location.country || 'country' 
        this.locationLatitude = data.location.lat
        this.locationLongitude = data.location.lon
        this.locationLocalTime = data.location.localtime
        this.current = data.current
        this.lastUpdated = data.current.last_updated
        this.tempC = data.current.temp_c
        this.tempF = data.current.temp_f
        this.windMPH = data.current.wind_mph
        this.windDirection = data.current.wind_dir
        this.precipitationInches = data.current.precip_in
        this.humidity = data.current.humidity
        this.cloud = data.current.cloud
        this.feelsLikeC= data.current.feelslike_c
        this.feelsLikeF = data.current.feelslike_f
        this.visibility = data.current.vis_miles
        this.UV = data.current.uv
        this.gustMPH = data.current.gust_mph
        this.description = data.current.condition.text
        this.icon = data.current.condition.icon
        this.forecastday = data.forecast?.forecastday

    }
}

const data = {
    "date": "2024-04-15",
    "date_epoch": 1713139200,
    "day": {
        "maxtemp_c": 13.9,
        "maxtemp_f": 57,
        "mintemp_c": 7,
        "mintemp_f": 44.6,
        "avgtemp_c": 10.5,
        "avgtemp_f": 50.9,
        "maxwind_mph": 17.7,
        "maxwind_kph": 28.4,
        "totalprecip_mm": 0,
        "totalprecip_in": 0,
        "totalsnow_cm": 0,
        "avgvis_km": 10,
        "avgvis_miles": 6,
        "avghumidity": 53,
        "daily_will_it_rain": 0,
        "daily_chance_of_rain": 0,
        "daily_will_it_snow": 0,
        "daily_chance_of_snow": 0,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "uv": 5
    },
    "astro": {
        "sunrise": "07:01 AM",
        "sunset": "08:29 PM",
        "moonrise": "12:12 PM",
        "moonset": "03:40 AM",
        "moon_phase": "First Quarter",
        "moon_illumination": 42,
        "is_moon_up": 1,
        "is_sun_up": 1
    },
    "hour": [
        {
            "time_epoch": 1713160800,
            "time": "2024-04-15 00:00",
            "temp_c": 10.4,
            "temp_f": 50.7,
            "is_day": 0,
            "condition": {
                "text": "Clear ",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 5.1,
            "wind_kph": 8.3,
            "wind_degree": 356,
            "wind_dir": "N",
            "pressure_mb": 1011,
            "pressure_in": 29.86,
            "precip_mm": 0,
            "precip_in": 0,
            "snow_cm": 0,
            "humidity": 54,
            "cloud": 3,
            "feelslike_c": 9.4,
            "feelslike_f": 48.9,
            "windchill_c": 9.4,
            "windchill_f": 48.9,
            "heatindex_c": 10.4,
            "heatindex_f": 50.7,
            "dewpoint_c": 1.5,
            "dewpoint_f": 34.8,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10,
            "vis_miles": 6,
            "gust_mph": 9.3,
            "gust_kph": 15,
            "uv": 1,
            "short_rad": 71.7,
            "diff_rad": 16.87
        },
    ]
    }