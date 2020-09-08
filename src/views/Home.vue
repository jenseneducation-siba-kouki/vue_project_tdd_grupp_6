<template>
  <div class="home">
    <header>
      <Nav />
      {{cart.length}} in cart
      <button>view cart</button>
    </header>

    <h1>Accessories Web Shop</h1>

    <img class="accessories" alt="accessories" src="../assets/photo.jpg" />

    <h1>products</h1>
    <div class="wrapper">
      <div v-for="product in products" :key="product.name">
        <h2>{{product.name}}</h2>

        <img :src="product.image" width="200" height="200" />
        <div>{{product.cost}}</div>
        <button v-on:click="addItemToCart(product)">add to cart</button>
        <CountOrder />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

import CountOrder from "@/components/CountOrder.vue";

export default {
  name: "Home",
  components: {
    Nav,
    CountOrder,
  },
  data: () => {
    return {
      page: "cart",
      cart: [],
      products: [
        {
          name: "books",
          cost: "$20",
          image: "https://hmp.me/dbvr",
        },
        {
          name: "J.R.R Tolkien",
          cost: "$50",
          image: "https://hmp.me/dbvs",
        },
      ],
    };
  },
  methods: {
    addItemToCart(product) {
      console.log(product);
      this.cart.push(product);
      console.log(this.cart);
    },
  },
};
</script>
<style scoped>
.accessories {
  height: 25rem;
  width: 50rem;
  padding: 60px;
}
h1 {
  color: rgb(221, 170, 178);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px black solid;
}
header {
  height: 100px;
}
</style>
