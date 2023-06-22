<template>
    <h1>3번째 vue 예제들</h1>
    <h3>{{ str }}</h3>
    <hr>
    <!-- <img src="../../public/lifecycle.png" alt=""> -->
    <div>strHTML</div>
</template>
<script>
export default {
    name: 'StrView',
    data(){
        return {
            str:'안녕 난 String 형식이야'
        }
    }

}
</script>
<style>
img{
    width: 1300px;
    height: 1000px;
}


</style>