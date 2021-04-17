<script>
import { defineComponent } from "vue";
import { Bar } from "vue3-chart-v2";
import { labels1 , datas1 } from "../utils/arrays";

export default defineComponent({
  name: "Game stats",
  extends: Bar,
  data () {
    return {
      state: {
        chartData: {
          labels: labels1,
          datasets: [
            {
              label: 'Number of players',
              backgroundColor: '#42b983',
              data: datas1,
            }
          ]
        },
        chartOptions: {
          responsive: false,
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  },
});
</script>