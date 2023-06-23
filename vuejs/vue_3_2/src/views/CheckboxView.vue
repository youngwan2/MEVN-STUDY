<template>
    <h1>4. checkbox</h1>
    <hr>
    <div>
        <input type="checkbox" id="inHTML" name="html" @click="setData">
        <label for="inHTML">HTML</label> <br>
        <input type="checkbox" id="inCSS" name="css" @click="setData">
        <label for="inCSS">CSS</label> <br>
        <input type="checkbox" id="inJS" name="js" @click="setData">
        <label for="inJS">JAVASCRIPT</label>

        <h3>체크된 상태{{ checked }}</h3>
    </div>
</template>

<script>

export default {
    name: 'CheckboxView',
    data() {
        return {
            checked:[]
        }
    },
    methods:{
        setData(e){
            if(e.target.name==="html") this.checked[0] = e.target.checked
            if(e.target.name==="css") this.checked[1] = e.target.checked
            if(e.target.name==="js") this.checked[2] = e.target.checked
     
        }
    }
}
</script>
<style scoped>
img {
    max-width: 1200px;
    max-height: 1000px;
}
</style>