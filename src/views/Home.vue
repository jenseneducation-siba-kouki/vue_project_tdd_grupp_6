<template>
  <div class="home">
    <header>
      <Nav />
      <button v-on:click="navigateTo('products')">view products</button>
      {{cart.length}} in cart
      <button v-on:click="navigateTo('cart')">view cart</button>
    </header>
    <div v-if="page === 'cart'">
      <h2>cart page</h2>
      <div class="wrapper">
        <div v-for="(product,index) in cart" :key="index">
          <h2>{{product.name}}</h2>

          <img :src="product.image" width="200" height="200" />
          <div>{{product.cost}}</div>
          <button v-on:click="removeItem(product)">remove</button>
        </div>
      </div>
    </div>
    <div v-if="page === 'products'">
      <h1>Find Your Book</h1>

      <img class="book" alt="book" src="../assets/book.jpg" />

      <h1>products</h1>
      <div class="wrapper">
        <div v-for="(product, index) in products" :key="index">
          <h2>{{product.name}}</h2>

          <img :src="product.image" width="200" height="200" />
          <div>{{product.cost}}</div>
          <button v-on:click="addItemToCart(product)">add to cart</button>
          <CountOrder />
        </div>
      </div>
    </div>
    <!-- </div> -->
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
      page: "products",
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
    navigateTo(page) {
      this.page = page;
    },
    removeItem(product) {
      this.cart.splice(this.cart.indexOf(product));
    },
  },
};
</script>
<style scoped>
.book {
  height: 25rem;
  width: 70rem;
  padding: 60px;
}
h1 {
  color: rgb(165, 110, 65);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border: 1px black solid; */
}
header {
  height: 100px;
}
</style>
