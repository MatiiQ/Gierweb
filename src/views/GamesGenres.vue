<template>
  <div class="field p-4">
    <div class="control">
      <input
        class="input"
        type="text"
        v-model="searchQuery"
        placeholder="Game or developer name"
      />
    </div>
  </div>
  <p>Pick a genre!</p>
  <div class="buttons has-addons is-centered" @click="goToGamesGenres($event)">
    <button class="button is-primary is-outlined" @click="genreFilter(Action)">Action</button>
    <button class="button is-primary is-outlined">Action-adventure</button>
    <button class="button is-primary is-outlined">Adventure</button>
    <button class="button is-primary is-outlined">Horror</button>
    <button class="button is-primary is-outlined">MMO</button>
    <button class="button is-primary is-outlined">MOBA</button>
    <button class="button is-primary is-outlined">Platformer</button>
    <button class="button is-primary is-outlined">Puzzler</button>
    <button class="button is-primary is-outlined">RPG</button>
    <button class="button is-primary is-outlined">Sandbox</button>
    <button class="button is-primary is-outlined">Simulator</button>
    <button class="button is-primary is-outlined">Sports</button>
    <button class="button is-primary is-outlined">Strategy</button>
    <button class="button is-primary is-outlined">Survial</button>
  </div>
  <div>
    <table class="table is-bordered is-hoverable is-fullwidth"> 
      <thead>
        <tr>
          <th>Game name</th>
          <th>Developer</th>
          <th>Genre</th>
          <th colspan="2">Platform</th>
          <th>Release date</th>
          <th>Sold copies</th>
          <th>Players number</th>
          <th>Positive reviews</th>
        </tr>
      </thead>
      <tbody class="games">
          <game
            v-for="game in filteredResources"
            v-bind:key="game.id"
            v-bind:game="game"
          ></game>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import gameGenreService from "../http/gameGenreService";
import Game from "../components/GamesAll.vue";
import { IGame } from "../utils/interfaces";
import { defineComponent } from "vue";

export default defineComponent({
  mounted: function () {
    gameGenreService.getGame(this.$route.params.genre).then((games) => {
      this.allGames = games.data;
      this.filteredResources = games.data;
      //console.log(this.filteredResources);
    });
  },
  components: {
    Game,
  },
  data() {
    return {
      allGames: [] as IGame[],
      searchQuery: "",
      filteredResources: [] as IGame[],
    };
  },
  watch: {
    searchQuery() {
      this.filteredResources = this.allGames.filter(
        (game) =>
          game.game_name
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase()) ||
          game.developer
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase())
      );
    },
    genreFilter(genre) {
      this.filteredResources = this.allGames.filter(
        (game) =>
          game.genre = genre
      );
    },
  },
  methods: {
      goToGamesGenres(button: any) {
        const genre = button.target.textContent;
        this.$router.push({ path: `/games/genres/${genre}`});
      }
  }
});
</script>
