<template>
  <div class="field p-4">
    <div class="control">
      <input class="input" type="text" v-model="searchQuery" placeholder="Search">
    </div>
  </div>
  <div class="library columns is-multiline is-centered">
  <game v-for="game in filteredResources"
        v-bind:key='game.id_user'
        v-bind:game='game'
      ></game>
  </div>
</template>

<script lang="ts">
import libraryUserService from '../http/libraryUserService';
import { IGame } from '../utils/interfaces';
import Game from '../components/Library.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['userId'],
  mounted: function () {
    libraryUserService.getLibrary(this.userId).then((games) => {
        this.allGames = games.data
        this.filteredResources = games.data
      });
  },
  components: {
    Game
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
	  }
  },
  watch: {
    searchQuery() {
      //console.log(this.filteredResources);
      //console.log(this.searchQuery);
      this.filteredResources = this.allGames.filter(game =>
        (game.game_name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
        ||
        game.developer.toLowerCase().startsWith(this.searchQuery.toLowerCase())
        ||
        game.genre.toLowerCase().startsWith(this.searchQuery.toLowerCase())
        )
      );
      //console.log(this.filteredResources);
    }
  },
});
</script>
