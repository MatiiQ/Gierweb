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
  <div>
    <table class="table is-bordered is-hoverable"> 
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

export default defineComponent({
  mounted: function () {
    gameService.getGame({}).then((games) => {
      this.allGames = games.data;
      this.filteredResources = games.data;
      //console.log(this.filteredResources)
    });
  },
  components: {
    Game,
  },
  //mounted: function () {
  //  userService.getUser().then((result) => {
  //    this.allUsers = result.data
  //    this.filteredResources = result.data
  //    console.log(this.filteredResources)
  //  });
  //},
  data() {
    return {
      allGames: [] as IGame[],
      searchQuery: "",
      filteredResources: [] as IGame[],
    };
  },
  watch: {
    searchQuery() {
      console.log(this.filteredResources);
      console.log(this.searchQuery);
      this.filteredResources = this.allGames.filter(
        (post) =>
          post.game_name
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase()) ||
          post.developer
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase())
      );
      console.log(this.filteredResources);
    },
  },
});
</script>
