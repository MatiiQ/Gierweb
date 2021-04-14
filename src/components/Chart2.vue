<script>
import gameService from "../http/gameService";
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";
import { IGame } from "../utils/interfaces";
//import { labels } from "../views/Charts.vue";
//import { genres } from "../utils/arrays";

export default defineComponent({
  name: "Number of players",
  extends: Line,
  created: function () {
    gameService.getGame({}).then((games) => {
      this.allGames = games.data;
      //console.log(this.allGames);
      /**
      this.labelki = games.data.splice(0, 10).map(function (x) {
        return x.game_name;
      });
      this.data_players = games.data.splice(0, 10).map(function (y) {
        return y.players_number;
      });
      this.data_sold = games.data.splice(0, 10).map(function (z) {
        return z.sold;
      }); */
    });
    //console.log(this.allGames);
    //console.log(this.x.game_name);
    //console.log(this.data_players);
    //console.log(this.data_sold);
    /**
    this.renderChart({
      labels: this.labelki,
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: this.data_players,
        },
      ],
    }); */
  },
  data() {
    return {
      allGames: [],
      labelki: [],
      data_players: [],
      data_sold: [],
    };
  },
  mounted () {
    /**console.log(this.labelki)
    this.labelki = this.allGames.splice(0, 10).map(function (x) {
        return x.game_name;
      });
      //console.log(this.labelki);
    this.data_players = this.allGames.splice(0, 10).map(function (y) {
        //console.log(data_players)
        return y.players_number;
      });
      //console.log(this.data_players)
      */
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["Konklux","Tres-Zap","Treeflex","Andalax","Veribet","Home Ing","Zaam-Dox","Cardguard","Zontrax",	"Treeflex"],
      datasets: [
        {
          label: 'Number of Players',
          backgroundColor: '#f87979',
          data: [1435,11223,31289,147941,25480,102524,58874,3283,122727,13988]
        }
      ]
    })
  },
});
</script>