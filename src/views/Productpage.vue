<template>
  <div class="container">
    <Nav />

    <div class="product-div">
      <ul>
        <li v-for="product in products" :key="product.id">
          <h1>{{ product.title }}</h1>

          <h3>{{product.price}} £</h3>

          <CountOrder />
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Nav from "@/components/Nav.vue";
import CountOrder from "@/components/CountOrder";
import axios from "axios";
export default {
  name: "Productspage",
  components: {
    Nav,
    CountOrder
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      this.products = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
</style>