<script>
import { defineComponent } from "vue";
import { Line } from "vue3-chart-v2";

export default defineComponent({
  name: "Number of players",
  extends: Line,
  mounted () {
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