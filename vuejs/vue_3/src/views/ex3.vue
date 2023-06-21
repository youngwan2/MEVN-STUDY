<template>
    <h1>ex3. 데이터 가져오기</h1>
    <h3>가져온 데이터</h3>
    <hr />
    <table>
        <tr>
            <th>카테고리</th>
            <th>품명</th>
            <th>가격</th>
            <th>배송비</th>
        </tr>
        <template v-for="(item, i) in list" :key="item.id">
            <tr v-if="item.price > inUser">
                <td>{{ item.category }}</td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.delivery_price }}</td>
            </tr>
        </template>
        <h4>얼마 이상의 물품을 출력할까요?</h4>
        <input type="text" :value="inUser" @input="inUser = $event.target.value">
    </table>
</template>
<script>
import products from '../assets/productData.js'
export default {
    name: "ex3Vue",
    data() {
        return {
            list: products,
            inUser: 0
        }
    },
    method: {
        inputF(e) {
            console.log(e)
        }
    }
}
</script>
<style>
table {
    width: 100%;
}

tr {
    background-color: black;
    color: white;
}

th {
    padding: 15px;
    background-color: brown;
    font-size: 1.2rem;
}

td {
    padding: 10px;
}

tr:nth-of-type(2n) {
    background-color: gray;
}
</style>