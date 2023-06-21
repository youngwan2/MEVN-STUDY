<template>
  <div class="home">
    <h1>디렉티브 사용하기</h1>
    <p>{{ name }}</p>
    <p>{{ name }}</p>

    <hr>
    <h2>v-if와 v-show</h2>
    <p>v-if: 조건 충족 시 화면과 dom 자체에서 사라짐</p>
    <p>v-show: 조건 충족 시 화면과 dom 내에서는 인식 가능</p>
    <br>
    <hr />
    <h2>v-model 양방향 데이터</h2>

    <input type="text" v-model="inData" v-on:keyup.enter="func1(inData + '엔터침')">
    <input type="text" v-model="inData" v-on:keyup.enter="func1(inData + '엔터침')">
    <input type="text" @input="inData = $event.target.value" v-on:keyup.enter="func1(inData + '엔터침')">

    <h3>{{ inData }}</h3>
    <hr>
    <h2>v-for</h2>
    <h3>투두 리스트</h3>
    <!-- v-for ="임시변수 in 반복할 리스트나 수" :key="식별자키" -->
    <input type="text" v-model="addList">
    <button @click="listAdd()">추가</button>
    <button @click="removeListEl()">삭제</button>
    <button @click="allRemove()">전체삭제</button>
    <ol>
      <li v-for="(item, i) in list" :key="item">{{ i + 1 + "." + item }}
        <button @click="delItem(i)">제거</button>
      </li>
    </ol>
  </div>
</template>
  
<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
      state: false,
      name: "kim",
      inData: ' ',
      list: [],
      addList: ' '
    }
  },
  methods: {
    func1(data) {
      console.log(data)
      alert(data)
    },
    listAdd() {
      this.list.push(this.addList)
    },
    removeListEl() {
      this.list.splice(0, 1)
      /* this.list.pop() */
    },
    delItem(i) {
      this.list.splice(i, 1)
    },
    allRemove() {
      this.list = []
    }




  }
}
</script>
<style>
li {
  list-style: none;
}
</style>