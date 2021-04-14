<template>
<div>
  <chart1 style="height: 850px; width: 900px; display: flex; flex-direction: column"></chart1>
  <GenresGames style="height: 850px; width: 900px; display: flex; flex-direction: column"></GenresGames>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chart1 from "../components/Chart1.vue";
import GenresGames from "../components/Chart2.vue";

export default defineComponent({
  components: {
    Chart1,
    GenresGames,
  },
});
</script>
