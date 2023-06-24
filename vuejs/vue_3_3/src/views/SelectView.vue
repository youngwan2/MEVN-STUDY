<template>
  <div>
    <h1>3. Select</h1>
    <hr />
    <div>
      <select name="" id="" v-model="selData">
        <option :value="list.value" v-for="list in options" :key="list.value">
          {{ list.select }}
        </option>
      </select>
      <div>{{ selData }}</div>
    </div>
    <div>
      <select name="" id="" v-model="selData2">
        <option
          :value="options2[list]"
          v-for="list in Object.keys(options2)"
          :key="list"
        >
          {{ list }}
        </option>
      </select>
      <div>{{ selData2 }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selData: "",
      selData2: "",
      options: [
        { value: "", select: "==선택==" },
        { value: "051", select: "부산" },
        { value: "02", select: "서울" },
        { value: "064", select: "제주" },
        { value: "055", select: "창원" },
        { value: "053", select: "대구" },
      ],
      options2: {
        부산: "051",
        서울: "02",
        제주: "064",
        창원: "055",
        대구: "053",
      },
    };
  },
};
</script>
<style scoped>
select {
  background-color: black;
  transition: 0.5s;
  border-radius: 5px;
  color: white;
  padding: 5px;
  margin: 5px;
  box-shadow: inset 0 0 5px 2px rgb(97, 97, 97);
}

option {
  border-radius: 5px;
}
</style>