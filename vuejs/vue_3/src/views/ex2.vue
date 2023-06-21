<template>
    <h1>EX2. 데이터 양방향 바인딩</h1>
    <h2>1. v-model을 사용하여 양방향을 구현</h2>
    <span>v-model:</span><input type="text" v-model="inData">
    <h3>{{ inData }}</h3>
    <button @click="inData = outData">꺼내오기 :{{ inData }}</button>
    <button @click="setLocalStore1()">저장</button>
    <button @click="getLocalSotre1()">불러오기</button>
    <hr>
    <h2>2. v-bind와 v-on을 사용하여 단방향(2가지로 양방향)을 구현</h2>
    <h3>{{ inValue }}</h3>
    <span>v-bind/v-on : </span><input type="text" v-bind:value="inValue" v-on:input="upValue">
    <button @click="setData()">입력</button>
    <button @click="getData()">출력</button>
    <button @click="setLocalStore()">저장</button>
    <button @click="getLocalStore()">불러오기</button>
</template>

<script>
export default {
    data() {
        return {
            inData: undefined,
            inValue: null, //upValue 메소드가 실행된 결과값이 할당됨.
            outData: '꺼내온 값이에요',
            temp: ""
        }
    },
    methods: {
        upValue(e) {
            // invalue 에 input 에 입력된 value 값이 할당된다.
            this.inValue = e.target.value
        },
        setData() {
            alert(`v-bind된 값 : ${this.inValue} 을 저장함`)
            // temp 변수에 inValue 값을 저장한다.
            this.temp = this.inValue
            // 저장 후 inValue 변수를 빈공백으로 초기화
            this.inValue = ''

        },
        setLocalStore1() {
           localStorage.setItem('inData',this.inData)
           this.inData =''
        },
        getLocalSotre1() {
            this.inData = "저장소에서 불러온 값은"+ localStorage.getItem('inData') +"입니다."
        },

        // 저장 버튼을 클릭하면 localStorage 에 data 키의 값으로 inValue 값이 저장
        setLocalStore() {
            localStorage.setItem('data', this.inValue)
        }
        ,
        // 불러오기 버튼을 클릭하면 localStorage에서 
        getData() {
            // inValue 변수에 temp 변수의 값을 다시 할당
            this.inValue = this.temp
        },
        getLocalStore() {
            this.inValue = "스토리지에서 꺼내온 값은:" + localStorage.getItem('data') + "입니다."
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

body {
    font-family: 'Noto Sans KR', sans-serif;
    ;
}

h1 {
    margin: 1rem 0;
}

h2 {
    margin: 10px 0;
}
</style>