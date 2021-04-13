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
  <div class="buttons has-addons is-centered">
    <button class="button is-danger is-outlined" @click="genreFilter('')">Reset genre</button>
    <button v-for="genre in genres" :key="genre" class="button is-primary is-outlined" @click="genreFilter(genre)">{{genre}}</button>
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
import gameService from "../http/gameService";
import Game from "../components/GamesAll.vue";
import { IGame } from "../utils/interfaces";
import { defineComponent } from "vue";
import { genres } from '../utils/arrays'

export default defineComponent({
  props: ["genre"],
  mounted: function () {
    gameService.getGame({}).then((games) => {
      this.allGames = games.data;
      this.filteredResources = games.data;
      this.filteredGenre = this.genre;
      //console.log(this.filteredResources)
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
      genres: genres,
      filteredGenre: "",
    };
  },
  watch: {
    searchQuery() {
      this.filterGames();
    },
    filteredGenre() {
      this.filterGames();
    }
  },
  methods: {
    genreFilter(genre: string) {
      this.filteredGenre = genre;
    },
    filterGames(): void {
      this.filteredResources = this.allGames.filter(
        (game) =>
        {
          if(this.filteredGenre) {
            return game.genre === this.filteredGenre
          } else {
            return true
          }
        }
      )
      this.filteredResources = this.filteredResources.filter(
        (game) =>
        {
          if(this.searchQuery) {
            return (
              game.game_name
                .toLowerCase()
                .startsWith(this.searchQuery.toLowerCase()) ||
              game.developer
                .toLowerCase()
                .startsWith(this.searchQuery.toLowerCase())
            )
          } else {
            return true
          }
        }
      );
    }
  }
});
</script>
