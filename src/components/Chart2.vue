<script>
import { defineComponent } from "vue";
import { Doughnut } from "vue3-chart-v2";
import { genres } from "../utils/arrays";

export default defineComponent({
  name: "GenresGames",
  extends: Doughnut,
  data() {
    return {
      state: {
        chartData: {
          labels: genres,
          datasets: [
            {
              label: "Number of games from all genres",
              backgroundColor: [
                "#42b983",
                "#1e8449",
                "#33ff65",
                "#8aff33",
                "#3833ff",
                "#2980b9",
                "#8e44ad",
                "#ff33f6",
                "#feff33",
                "#f4d03f",
                "#eb984e",
                "#ff3333",
                "#cacfd2",
                "#34495e",
              ],
              data: [88, 72, 85, 67, 77, 74, 70, 70, 56, 59, 74, 79, 56, 73],
            },
          ],
        },
        chartOptions: {
          responsive: false,
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.state.chartData, this.state.chartOptions);
  },
});
</script>
