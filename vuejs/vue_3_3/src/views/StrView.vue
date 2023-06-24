<template>
  <div>
    <h1>1. String 과 HTML</h1>
    <hr />
    <h3>{{ str }}</h3>
    <h3 v-html="str"></h3>
    <!-- <img src="../../public/lifecycle.png" alt=""> -->
  </div>
</template>
<script>
export default {
  name: "StrView",
  data() {
    return {
      str: '<span style="color:red">안녕 난 String 형식이야</span>',
    };
  },
};
</script>
<style>
img {
  width: 1300px;
  height: 1000px;
}
</style>