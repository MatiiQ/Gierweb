<template>
  <div id="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <router-link to="/"><img src="./assets/logoGierweb.png" width="150" height="150" style="max-height:none;">
          </router-link>
        </a>

          <a class="navbar-item">
            <router-link to="/games">Games</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/charts">Charts</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/users">Users</router-link>
          </a>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
