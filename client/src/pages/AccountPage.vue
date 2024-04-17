<template>
  <div class=" d-flex flex-column align-items-center about text-center text-white">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <h2>Favorite Locations</h2>
    <p>Email updates will automatically be sent for each of your favorite locations</p>
    <div class="d-flex">
      <div class="location" v-for="location in account.favoriteLocations" :key="location" role="button"
        @click="removeFavorite(location)">
        {{ location }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';
export default {
  setup() {
    async function removeFavorite(location) {
      try {
        const favorites = AppState.account.favoriteLocations
        if (!favorites.includes(location)) {
          return
        }
        favorites.splice(favorites.findIndex(f => f == location), 1)
        const newAccount = AppState.account
        let data = {}
        data.favoriteLocations = newAccount.favoriteLocations
        await accountService.updateAccount(data)
      }
      catch (error) {
        Pop.error(error);
      }
    }

    return {
      account: computed(() => AppState.account),
      removeFavorite
    }
  }
}
</script>

<style scoped>
.location {
  background-color: white;
  color: black;
  border-radius: 5px;
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
}

.location:hover {
  background-color: red;
}

img {
  max-width: 100px;
}
</style>
