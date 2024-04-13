<template>
  <div v-if="weather">
    {{ weather }}
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop';
import { weatherService } from '../services/WeatherService';

export default {
  setup() {
    onMounted(() => {
      getWeather()
    })
    async function getWeather() {
      try {
        await weatherService.getWeather()
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {

    }
  }
}
</script>

<style scoped lang="scss"></style>
