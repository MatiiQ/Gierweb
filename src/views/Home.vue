<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img alt="GW logo" src="../assets/logoGierweb.png">
    <HelloWorld msg="Welcome to our Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
