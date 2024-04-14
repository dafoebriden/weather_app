<template>
  <div v-if="weather">
    {{ weather.locationName }}
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { weatherService } from '../services/WeatherService';
import { AppState } from '../AppState';

export default {
  setup() {
    onMounted(() => {
      getCurrentWeather()
    })
    async function getCurrentWeather() {
      try {
        await weatherService.getCurrentWeather()
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      weather: computed(() => AppState.weather)

    }
  }
}
</script>

<style scoped lang="scss"></style>
