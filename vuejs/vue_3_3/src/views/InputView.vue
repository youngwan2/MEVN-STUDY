<template>
  <div>
    <h1>2. 양방향 데이터 예제</h1>
    <hr />
    <h2>1) 입출력 예제</h2>
    <input type="text" :value="data" />
    <button @click="print">console 전송</button>
    <button @click="setData">변수입력(초기화)</button>

    <h2>2) 계산하기 예제</h2>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 * 1 + num2 * 1 }}</span> <br /><br />
    <input type="text" v-model="num3" /> +
    <input type="text" v-model="num4" /> =
    <span>{{ num3 * 1 + num4 * 1 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "기본 데이터ㄱㄱ",
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      result: 0,
    };
  },
  methods: {
    print() {
      console.log(this.data);
    },
    setData() {
      this.data = "와우 초기화함~";
    },
  },
};
</script>
<style></style>