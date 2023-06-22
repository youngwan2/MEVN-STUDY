<template>
    <h1>4. 이미지</h1>
    <div>
        <img :src="`./images/sample${pageNum}.jpg`" alt="">
        <button v-for="(page, i) in pages" :key="page" class="page_btn" @click="switchPage(i)">
            {{ page }}</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageNum: 1,
            pages: ['page1', 'page2', 'page3', 'page4']
        }
    },
    methods: {
        switchPage(page) {
            console.log(page)
            this.pageNum = page + 1

        }
    }
}
</script>
<style scoped>
button {
    width: 100px;
    height: 50px;
    font-size: 1.25em;
    background-color: rgb(0, 136, 255);
    border: none;
    border-right: 5px solid black;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom: 5px solid black;
    margin: 5px;
    transition: 0.2s;
}

button:hover {
    border: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: inset 0 0 5px 1px black;
}

button:focus {
    background-color: rgba(8, 136, 204, 0.811);
    box-shadow: inset 0 0 5px 1px black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.page_btn {
    position: relative;
    top: -30rem;
    opacity: 0.8;
    z-index: 1999;
}

img {
    width: 1200px;
    height: 800px;
}
</style>