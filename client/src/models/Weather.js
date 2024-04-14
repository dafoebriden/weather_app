export class Weather{
    constructor(data){
        this.location = data.location
        this.locationName = data.location.name
        this.locationRegion = data.location.region
        this.locationCountry = data.location.country
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
        this.gustMPH = data.gust_mph
        this.text = data.current.condition.text
        this.icon = data.current.condition.icon

    }
}
