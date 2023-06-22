<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/content">Content</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <h1 class="content_title">목차</h1>
    <transition name="appear">
      <div class="content_container">
        <p>1. <router-link to="/ex1">v-model, v-for, v-on, v-if와 v-show</router-link></p>
        <p>2. <router-link to="/ex2">데이터 양방향 바인딩</router-link></p>
        <p>3. <router-link to="/ex3">데이터 가져와서 렌더링</router-link></p>
        <p>4. <router-link to="/ex4">ex4</router-link></p>
      </div>
    </transition>
    <hr>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
}

body {
  text-align: center;
  animation: appear 1s 1;
}

@keyframes appear {
  from {
    opacity: 0;
  }
}

a {
  text-decoration: none;
}

p>a {
  color: white;
}

p>a:hover {
  color: gold
}

.content_title {
  background-color: goldenrod;
  margin: 1rem 0 0 0;
  padding: 5px;
  box-shadow: 0 10px 5px 1px rgba(182, 142, 56, 0.648);
}

.content_container {
  text-align: left;
  padding: 20px;
  background-color: black;
  color: white;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

.content_container>p {
  margin: 5px;
}


.appear-enter-from {
  opacity: 0;
}

.appear-enter-to {
  opacity: 1;
}

.appear-leave-from {
  opacity: 1;
}

.appear-leave-to {
  opacity: 0;
}
</style>
