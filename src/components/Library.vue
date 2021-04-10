<template>
  <div v-if="gameData.length">No games in the library</div>
  <div class="column is-one-third card has-background-info-dark has-text-grey-lighter">
    <header class="card-header p-5 has-background-info-light">
      <h2 class="card-header-title is-centered" style="font-family: Times New Roman, Helvetica, Arial; font-size: 25px;">  {{gameData.game_name}} </h2>
    </header>
    <div class="card-content">
    developed by {{gameData.developer}} <br>
    <b>{{gameData.genre}}</b>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item">{{gameData.platform}}</span>
    </footer>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IGame } from '../utils/interfaces';
import { table2props } from '../utils/interfaces';
import gameService from '../http/gameService';

export default defineComponent({
  props: {
      //game: Object as () => IGame,
      game: Object as () => table2props,
      gameId: Number,
  },
  data() {
    return {
      gameData: [] as IGame[],
      numberOfColumns: 4,
    }
  },
  mounted: function () {
  gameService.getGame(this.game!.id_game).then((game) => {
      this.gameData = game.data
    });
  },
})
</script>