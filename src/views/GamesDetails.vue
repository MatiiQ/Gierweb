<template>
  <div class="container">
    <div class="column p-4">
      <div class="card has-background-danger-dark has-text-grey-lighter">
        <header class="card-header p-5 has-background-danger">
          <h2 class="card-header-title has-text-white-bis is-left">
            {{ gameDetails.game_name }}
          </h2>
        </header>
        <div class="card-content">
          <div class="content p-3">
            <p>Developer: {{ gameDetails.developer }}</p>
            <p>Genre: {{ gameDetails.genre }}</p>
            <p>Release date: {{ gameDetails.release_date }}</p>
            <p>Sold copies: {{ gameDetails.sold }}</p>
            <p>Players number: {{ gameDetails.players_number }}</p>
            <p>Positive reviews: {{ gameDetails.positive_reviews }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <div v-for="plat in gameDetails.platform" :key="plat" v-bind:class="getPlatformBackground(plat)">
            <span>{{ plat }}</span>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import gameIdService from "../http/gameIdService";
import { IGame } from "../utils/interfaces";
//import Game from "../components/GameDetail.vue"; KOMPONENT NIE DZIAŁA
import { defineComponent } from "vue";

export default defineComponent({
  props: ["gameId"],
  mounted: function () {
    gameIdService.getGame(this.gameId).then((game) => {
      this.gameDetails = game.data;
    });
  },
  // KOMPONENT NIE DZIAŁA
  //components: {
  //  Game,
  //},
  data() {
    return {
      gameDetails: [] as IGame[],
    };
  },
  methods: {
    getPlatformBackground(plat: string) {
      switch (plat) {
        case "Xbox":
          return "card-footer-item has-background-primary";
        case "Nintendo Switch":
          return "card-footer-item has-background-danger";
        case "PlayStation":
          return "card-footer-item has-background-info";
        case "PC":
          return "card-footer-item has-background-grey has-text-link-light";
        default:
          return "card-footer-item ";
      }
    },
  },
});
</script>