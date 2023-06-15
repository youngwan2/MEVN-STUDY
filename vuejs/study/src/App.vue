<template>
  <HelloWorld />

  <h1>Vue js</h1>
  <ul>
    <li v-for="(name, i) in 5" :key="i">{{ i }}</li>
  </ul>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { ref } from 'vue';
export default {

  setup() {

    return {}
  },
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
}

li {
  list-style: none;
}

li a {
  text-decoration: none;
}
</style>
