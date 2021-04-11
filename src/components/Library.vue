<template>
  <div v-if="gameData.length">No games in the library</div>
  <div class="column is-one-third is-3 m-4 card has-background-info-dark has-text-grey-lighter">
    <header class="card-header p-3 has-background-info-light">
      <h2 class="card-header-title is-centered" style="font-family: 'Press Start 2P', cursive; font-size: 16px;">  {{gameData.game_name}} </h2>
    </header>
    <div class="card-content">
    developed by {{gameData.developer}} <br>
    <b>{{gameData.genre}}</b>
    </div>
    <footer class="card-footer">
      <div v-for="plat in gameData.platform" :key="plat" v-bind:class="getPlatformBackground(plat)">
        <div>
          <span >{{ plat }}</span>
        </div>
      </div>
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
  methods: {
    getPlatformBackground(plat: string) {
        switch (plat) {
          case 'Xbox':
            return 'card-footer-item has-background-primary'
          case 'Nintendo Switch':
            return 'card-footer-item has-background-danger'
          case 'PlayStation':
            return 'card-footer-item has-background-info'
          case 'PC':
            return 'card-footer-item has-background-grey has-text-link-light'
          default:
            return 'card-footer-item '
        }
    }
  }
})
</script>