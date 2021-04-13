<template>
  <div style="height:600px;width: 600px; display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script lang="ts">
import gameService from "../http/gameService";
import { IGame } from "../utils/interfaces";
import { defineComponent } from "vue";
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default defineComponent({
  mounted: function () {
    gameService.getGame({}).then((games) => {
      this.someGames = games.data.splice(0, 10);
      console.log(this.someGames)
    });
  },
  components: {
    Vue3ChartJs,
  },
  data() {
    return {
      someGames: [] as IGame[],
    };
  },
    setup () {
    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      }
    } 

    return {
      doughnutChart,
    }
  },
});
</script>
