<template>
  <tr @click="goToGameDetails(game.id)">
    <td>{{ game.game_name }}</td>
    <td>{{ game.developer }}</td>
    <td>{{ game.genre }}</td>
    <td v-for="plat in game.platform" :key="plat">{{ plat }}</td>
    <td>{{ game.release_date }}</td>
    <td>{{ game.sold }}</td>
    <td>{{ game.players_number }}</td>
    <td>{{ game.positive_reviews }}%</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IGame } from "../utils/interfaces";

export default defineComponent({
  props: {
    game: Object as () => IGame,
  },
  methods: {
      goToGameDetails(gameId: number) {
          this.$router.push({ name: 'GameDetails', params: { gameId: gameId } });
      }
  }
});
</script>