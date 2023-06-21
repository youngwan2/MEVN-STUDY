<template>
  <div class="home">
    <h1>1. 디렉티브 사용하기</h1>
    <h3>변수 머스타치 사용하기</h3>
    <h3>안녕하세요. {{name}} 입니다. {{ age }}살 입니다.</h3>
    <h3>안녕하세요. {{name2}} 입니다. {{ age2 }}살 입니다.</h3>

    <hr>
    <h2>v-on 과 @click 클릭 이벤트</h2>
    <button v-on:click="func1('안녕 v-on을 위한 팝업이야')">클릭 버튼1</button>
    <button @click="func1('안녕 v-on을 위한 팝업이야')">클릭 버튼2</button>

    <hr>
    <h2>v-if 조건문 사용하기</h2>
    <button v-if="state" v-on:click="state = false">5</button>
    <button  @click="state= true">10</button>
    <button @click="name2= '오오옹'">10</button>
    <button @click="state=!state">버튼</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data() {
    return {
      name: "kim",
      name2: "Young",
      age: 33,
      age2: 55,
      state : true
    }
  },
  methods: {
    func1: function (text) {
      alert(text)
    }
  }
}
</script>
