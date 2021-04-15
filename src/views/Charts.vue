<template>
  <p><b>Number of players for first 10 games</b></p>
  <chart1 style="width: 1500px; display: flex; flex-direction: column"></chart1>
  <br/><br/><p><b>Number of games from all genres</b></p>
  <chart2 style="width: 1200px; display: flex; flex-direction: column"></chart2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chart1 from "../components/Chart1.vue";
import Chart2 from "../components/Chart2.vue";
import gameGenreService from "../http/gameGenreService";
import { genres } from '../utils/arrays'

export default defineComponent({
  components: {
    Chart1,
    Chart2,
  },
  mounted () {
    this.getData()
    //console.log(this.allGames)
  },
  data() {
    return {
      allGames: [] as string[],
      genres: genres,
    };
  },
  methods: {
    getData() {
      for ( let g = 0; g < this.genres.length; g++) {
        gameGenreService.getGame(genres[g]).then((games) => {
          this.allGames[g] = games.data.length;
        });
      }
    }
  }
});
</script>
