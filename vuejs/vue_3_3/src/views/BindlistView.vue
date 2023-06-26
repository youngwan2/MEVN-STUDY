<template>
  <div>
    <h1>6.BindList</h1>
    <hr />
    <div>
      <select @change="choiceAreaFunc">
        <option v-for="option in options" :key="option.value" :value="option.select">
          {{ option.select }}
        </option>
      </select>
    </div>
    <p>선택하신 배송지역:{{ selectArea }}</p>
    <p>※제주산간지방은 5,000원이 추가됩니다.</p>
    <button @click="ascPrice">정렬(낮은 가격순)</button>
    <button @click="descPrice">정렬(높은 가격순)</button>
    <table class="table">
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>수량</th>
        <th>합계</th>
      </tr>
      <tr v-for="(item, i) in itemList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.delivery_price }}</td>
        <td>
          {{ item.count }}
          <button @click="add(i)">+</button>
          <button @click="min(i)">-</button>
        </td>
        <td>{{ item.total }}</td>
      </tr>
      <tr>
        <td style="background-color: white; color: black; font-weight: 700" colspan="6">
          총합
        </td>
        <td>{{ sumOfTotal }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        {
          id: 1,
          product_name: "기계식 키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 5000,
          count: 0,
          total: 0,
        },
        {
          id: 2,
          product_name: "무선 마우스",
          price: 12000,
          category: "노트북/태블릿",
          delivery_price: 3000,
          count: 0,
          total: 0,
        },
        {
          id: 3,
          product_name: "아이패드",
          price: 725000,
          category: "노트북/태블릿",
          delivery_price: 10000,
          count: 0,
          total: 0,
        },
        {
          id: 4,
          product_name: "태블릿 거치대",
          price: 32000,
          category: "노트북/태블릿",
          delivery_price: 5000,
          count: 0,
          total: 0,
        },
        {
          id: 5,
          product_name: "블루투스 이어폰",
          price: 51000,
          category: "노트북/태블릿",
          delivery_price: 5000,
          count: 0,
          total: 0,
        },
      ],

      selectArea: "",
      options: [
        { value: "", select: "==선택==" },
        { value: "051", select: "부산" },
        { value: "02", select: "서울" },
        { value: "064", select: "제주" },
        { value: "055", select: "창원" },
        { value: "053", select: "대구" },
      ],
      sumOfTotal: 0,
    };
  },
  methods: {
    choiceAreaFunc(e) {
      this.selectArea = e.target.value;
      console.log(e.target.value);

      for (let i = 0; i < this.itemList.length; i++) {
        if (this.selectArea === "제주") {
          (this.itemList[i].delivery_price += 5000);
        }
      }
    },
    add(i) {
      const count = ++this.itemList[i].count;
      this.itemList[i].total =
        this.itemList[i].price * count +
        (count && this.itemList[i].delivery_price);
    },
    min(i) {
      if (this.itemList[i].count == 0) return;
      const count = --this.itemList[i].count;
      this.itemList[i].total =
        this.itemList[i].price * count +
        (count && this.itemList[i].delivery_price);
    },
    ascPrice() {
      // console.log(this.itemList)
      for (let i = 0; i < this.itemList.length; i++) {
        let temp = 0;
        for (let j = 0; j < this.itemList.length - i - 1; j++) {
          if (this.itemList[j].price > this.itemList[j + 1].price) {
            temp = this.itemList[j]
            this.itemList[j] = this.itemList[j + 1]
            this.itemList[j + 1] = temp
          }
        }
      }

      // this.itemList = this.itemList.sort()
    },

    descPrice() {
      for (let i = 0; i < this.itemList.length; i++) {
        let temp = 0;
        for (let j = 0; j < this.itemList.length - i - 1; j++) {
          if (this.itemList[j].price < this.itemList[j + 1].price) {
            temp = this.itemList[j+1]
            this.itemList[j+1] = this.itemList[j]
            this.itemList[j] = temp
          }
        }
      }
    }
  },
  updated() {
    this.sumOfTotal =
      this.itemList[0].total +
      this.itemList[1].total +
      this.itemList[2].total +
      this.itemList[3].total +
      this.itemList[4].total;
  },
};
</script>
<style scoped>
table {
  background-color: black;
  color: white;
  max-width: 800px;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

th {
  background-color: tomato;
}

tr:nth-of-type(2n) {
  background-color: goldenrod;
}

td {
  padding: 5px;
}
</style>