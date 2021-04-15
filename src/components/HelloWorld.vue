<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Our app is presenting a database of games.</p>
    <p>We have added some users with their catalogue of games to browse through.</p>
    <p>All data has been generated with 
      <a href="https://mockaroo.com" target="_blank" rel="noopener">Mockaroo</a>
    </p>
    <p>Backend has been done with ExpressJS and API with endpoints are handled by 
      <a href="https://www.heroku.com" target="_blank" rel="noopener">Heroku</a>
    </p>
    <p>Application has been deployed on AWS with 
      <a href="https://aws.amazon.com/amplify/hosting" target="_blank" rel="noopener">AWS Amplify</a>
    </p>
    <h3>Available bookmarks</h3>
    <ul>
      <li><router-link to="/games">Games</router-link></li>
      <li><router-link to="/charts">Charts</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
