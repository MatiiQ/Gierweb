<script>
import { defineComponent } from "vue";
import { Bar } from "vue3-chart-v2";

export default defineComponent({
  name: "Game stats",
  extends: Bar,
  data () {
    return {
      state: {
        chartData: {
           labels: ["Konklux","Tres-Zap","Treeflex","Andalax","Veribet","Home Ing","Zaam-Dox","Cardguard","Zontrax","Treeflex"],
            datasets: [
              {
                label: 'Number of players',
                backgroundColor: '#42b983',
                data: [1435,11223,31289,147941,25480,102524,58874,3283,122727,13988],
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