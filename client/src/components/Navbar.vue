<template>
  <nav class="navbar d-flex justify-content-between navbar-expand-sm px-3">
    <form @submit="getWeatherData()" style="height: 100%;"> <input class="searchBar rounded-pill" type="text"
        :placeholder="`${weather.locationName}, ${weather.locationRegion}`">
    </form>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">

        <div>
          <button class="btn text-light" @click="toggleTheme">
            <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
          </button>
        </div>
        <Login />
      </div>
    </div>

  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { weatherService } from '../services/WeatherService.js';
export default {
  setup() {

    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })
    async function getWeatherData() {
      try {
        await weatherService.getCurrentWeather()
        await weatherService.getTodaysWeather()
        await weatherService.getForecast()
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      theme,
      weather: computed(() => AppState.currentWeather),
      getWeatherData,
      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar {
  background-color: rgb(55, 57, 67);
}

.searchBar::-webkit-input-placeholder {
  color: white;
  font-size: larger;
  caret-color: auto;

}

.searchBar {
  border: none;
  background-color: rgb(43, 44, 52);
  height: 100%;
  padding-left: 10px;
  color: white;
  caret-color: auto;
}


@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
