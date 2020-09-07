<template>
  <div class="home">
    <Nav />
    <h1>Accessories Web Shop</h1>
    <img class="accessories" alt="accessories" src="../assets/photo.jpg" />

    <CountOrder />
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
</style>
