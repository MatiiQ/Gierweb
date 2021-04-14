<script>
  import { defineComponent } from 'vue'
  import { Bar } from 'vue3-chart-v2'
  import { genres } from "../utils/arrays"

  export default defineComponent({
  name: 'GenresGames',
  extends: Bar,
  data () {
    return {
      state: {
        chartData: {
           labels: genres,
            datasets: [
              {
                backgroundColor: '#f87979',
                data: [1435,11223,31289,147941,25480,102524,58874,3283,122727,13988]
              }
            ]
        },
        chartOptions: {
          responsive: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
})
</script>
