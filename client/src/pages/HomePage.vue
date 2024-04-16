<template>
  <div class="container text-white mx-lg-5" v-if="weather">
    <div class="row justify-content-between my-5">
      <div class="col-12">
        <p class="mb-0 fw-bold">Now</p>
      </div>
      <div class="col-3">
        <div v-if="selectedTempC" class="mainTempText">
          <h1 class="display-1">{{ weather.tempC }}</h1>
          <h1 class="fs-5 pt-3">℃</h1>
          <img class="img-fluid" :src="weather.icon" alt="Weather Icon" style="height: 100%;">
        </div>
        <div v-else class="mainTempText">
          <h1 class="display-1">{{ weather.tempF }}</h1>
          <h1 class="fs-5 pt-3">℉</h1>
          <img class="img-fluid" :src="weather.icon" alt="Weather Icon" style="height: 100%;">
        </div>
      </div>
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 d-flex flex-column justify-content-center">
        <p class="mb-0">{{ weather.description }}</p>
        <p v-if="selectedTempC" class="mb-0">Feels like {{ weather.feelsLikeC }}</p>
        <p v-else class="mb-0">Feels like {{ weather.feelsLikeF }}</p>
      </div>
    </div>
    <div class="row">
      <p class="fw-bold">Hourly forecast</p>
    </div>
    <div v-for="today in todaysForecastday" :key="today" class="row hourlyForecast p-2 mb-4">
      <div v-for="hour in today.hour" :key="hour" class="d-flex flex-column align-items-center"
        style="width: fit-content;">
        <p>{{ hour.temp_f }}</p>
        <img class="weatherIcon" :src="hour.condition.icon" alt="">
        <p class="m-0">{{ hour.time }}</p>
      </div>
    </div>
    <div class="row">
      <p class="fw-bold">3-day forecast</p>
    </div>
    <div class="row mb-3">
      <div v-for="DF in ForecastDays" :key="DF" class="col-12 dailyForecast">
        <p class="m-0">{{ DF.date }}</p>
        <img :src="DF.day.condition.icon" alt="">
        <p class="m-0">{{ DF.day.maxtemp_f }}°/{{ DF.day.mintemp_f }}° </p>
      </div>
    </div>
    <div class="row">
      <p class="fw-bold">Current Conditions</p>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-5 currentConditions">
        <div class="">
          <p class="fs-4 fw-bold">Wind</p>
          <p class="m-0"> <span class="fs-2">{{ weather.windMPH }} </span> mph</p>
          <p class="m-0"> <span class="fs-5">{{ weather.gustMPH }} </span>mph gusts</p>
          <p class="m-auto fs-5">{{ weather.windDirection }}</p>
        </div>
        <div>
          <img class="img-fluid"
            src="/src/assets/img/pngtree-compass-or-wind-directions-in-black-color-png-image_8843718-removebg-preview.png"
            alt="" style="max-height: 200px; filter: brightness(1000%);">
        </div>
      </div>
      <div class="col-5 currentConditions">
        <div class="">
          <p class="fs-4 fw-bold">UV Index</p>
          <p class="m-0 display-1 text-center">{{ weather.UV }}</p>
        </div>
        <div>
          <img class="img-fluid" src="/src/assets/img/purepng.com-sunsunlightrayssolar-1411527181122hj5l7.png" alt=""
            style="max-height: 200px;">
        </div>
      </div>
      <div class="col-5 currentConditions">
        <div class="">
          <p class="fs-4 fw-bold"> Humidity</p>
          <p class="m-0 display-2 text-center">{{ weather.humidity }}<span class="fs-3">%</span></p>
        </div>
        <div>
          <img class="img-fluid" src="/src/assets/img/water drop.png" alt="" style="max-height: 200px;">
        </div>
      </div>
      <div class="col-5 currentConditions">
        <div class="">
          <p class="fs-3 fw-bold">Pressure</p>
          <p class="m-0 fs-3">{{ weather.current?.pressure_in }}</p>
          <p class="m-auto fs-5">inHg</p>
        </div>
        <div>
          <img class="img-fluid"
            src="/src/assets/img/a-cartoon-picture-style-pressure-gauge-having-vector-37419935-removebg-preview.png"
            alt="" style="max-height: 200px;">
        </div>
      </div>
      <div class="col-5 currentConditions">
        <div class="">
          <p class="fs-3 fw-bold">Visibility</p>
          <p class="m-0 fs-3">{{ weather.visibility }} miles</p>
        </div>
        <div>
          <img class="img-fluid" src="/src/assets/img/image_processing20200423-23567-qagdoq.png" alt=""
            style="max-height: 200px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop';
import { weatherService } from '../services/WeatherService';
import { AppState } from '../AppState';

export default {
  setup() {
    const selectedTempC = ref(false)
    onMounted(() => {
      getWeather()
    })
    async function getWeather() {
      try {
        const res = await weatherService.getCurrentWeather()
        if (res == 'return') {
          return
        }
        await weatherService.getTodaysWeather()
        await weatherService.getForecast()
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      weather: computed(() => AppState.currentWeather),
      todaysForecastday: computed(() => AppState.todaysWeather?.forecastday),
      ForecastDays: computed(() => AppState.forecastedWeather?.forecastday),
      selectedTempC,

    }
  }
}
</script>

<style scoped lang="scss">
.weatherIcon {
  max-height: 40px;
  max-width: 40px;
}

.mainTempText {
  display: flex;
  color: white;
  text-shadow: 0px 0px 1px;
  align-items: center;
}

.hourlyForecast {
  overflow-x: scroll;
  flex-wrap: nowrap;
  background-color: rgb(43, 44, 52);
  border-radius: 10px;
  font-size: small
}

.hourlyForecast::-webkit-scrollbar {
  display: none;
}

.dailyForecast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: rgb(43, 44, 52);
  border-radius: 10px;
  font-size: small;
}

.currentConditions {
  display: flex;
  justify-content: space-between;
  background-color: rgb(43, 44, 52);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
}
</style>
