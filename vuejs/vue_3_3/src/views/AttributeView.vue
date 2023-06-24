<template>
  <div>
    <h1>5. Attribute(속성) 예제</h1>
    <hr />
    <h2>1) readonly</h2>
    <input type="text" placeholder="읽기 전용" readonly :value="value" /><br />
    <input type="text" placeholder="쓰기 전용" v-model="value" />
    <p>모니터링 결과:{{ value }}</p>

    <hr />
    <hr />
    <h2>2)조건에 따른 버튼 활성화</h2>
    <input type="text" placeholder="입력하세요." v-model="setData" />
    <!-- setData 가 null이 아니라면 true 이므로 뒤에도 평가 이어짐 -->
    <button :disabled="!setData && setState" @click="submit">전송버튼</button>

    <hr />
    <h2>3) 최신문법 맛보기</h2>
    <button @click="fn">fn 함수 호출</button>
    <p>{{ vs }}</p>
  </div>
</template>

<!-- 최신 문법 -->
<script setup>
const vs = "최신문법";
const fn = () => {
  alert("최신문법 호출완료");
};
</script>

<!-- 이전 문법 -->
<script>
export default {
  data() {
    return {
      value: "",
      setState: true,
      setData: null,
    };
  },
  methods: {
    submit() {
      alert("전송 완료!");
      this.setData = "";
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
}

input::placeholder {
  color: gold;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  background-color: black;
  color: white;
  text-align: center;
}
</style>