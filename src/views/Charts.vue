<template>
  <chart2></chart2>
</template>

<script lang="ts">
import gameService from "../http/gameService";
import { IGame } from "../utils/interfaces";
import { defineComponent } from "vue";
import Chart1 from "../components/Chart1.vue";
import Chart2 from "../components/Chart2.vue";
import { genres } from "../utils/arrays";

export default defineComponent({
  /**mounted: function () {
    gameService.getGame({}).then((games) => {
      this.labels = games.data.splice(0, 10).map(function (x: { game_name: string; }) {
        return x.game_name;
      })
      this.data_players = games.data.splice(0, 10).map(function (y: { players_number: number; }) {
        return y.players_number;
      })
      this.data_sold = games.data.splice(0, 10).map(function (z: { sold: number; }) {
        return z.sold;
      })
      console.log(this.labels);
      console.log(this.data_players);
      console.log(this.data_sold);
      console.log(this.genres);
    });
  }, */
  components: {
    Chart2,
  },
  data() {
    return {
      someGames: [] as IGame[], 
      labels: [],
      data_players: [],
      data_sold: [],
      genres: genres,
    };
  },
});
</script>
