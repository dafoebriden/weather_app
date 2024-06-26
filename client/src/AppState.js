import { reactive } from 'vue'

export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  // @ts-ignore
  account: {},

  /** @type {import('./models/Weather.js').Weather} */
  // @ts-ignore
  currentWeather: {},

  /** @type {import('./models/Weather.js').Weather} */
  // @ts-ignore
  todaysWeather: {},

  /** @type {import('./models/Weather.js').Weather} */
  // @ts-ignore
  forecastedWeather: {}

  
})
