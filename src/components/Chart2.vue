<script>
import { defineComponent } from "vue";
import { Doughnut } from "vue3-chart-v2";
import { genres , datas2 } from "../utils/arrays";

export default defineComponent({
  name: "GenresGames",
  extends: Doughnut,
  data() {
    return {
      state: {
        chartData: {
          labels: genres,
          datasets: datas2,
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
