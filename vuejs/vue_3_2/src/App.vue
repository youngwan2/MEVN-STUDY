<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/strhtml">strHTML</router-link> |
    <router-link to="/input">input</router-link> |
    <router-link to="/select">selct</router-link> |
    <router-link to="/checkbox">checkbox</router-link> |
    <router-link to="/attr">Atrribute</router-link> |
    <router-link to="/bindlist">BindList</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
