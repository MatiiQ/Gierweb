<template>
  <div class="library columns is-multiline is-centered">
    <game
      v-for="game in allGames"
      v-bind:key="game.id_user"
      v-bind:game="game"
    ></game>
  </div>
</template>

<script lang="ts">
import libraryUserService from "../http/libraryUserService";
import { IGame } from "../utils/interfaces";
import Game from "../components/Library.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["userId"],
  mounted: function () {
    libraryUserService.getLibrary(this.userId).then((games) => {
      this.allGames = games.data;
    });
  },
  components: {
    Game,
  },
  data() {
    return {
      allGames: [] as IGame[],
    };
  },
  
});
</script>
