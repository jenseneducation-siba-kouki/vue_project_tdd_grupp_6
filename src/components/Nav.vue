<template>
  <div class="nav">
    <router-link class="link" to="/About">About us</router-link>
      <router-link class="link" to="/Contact">Contact us</router-link>
      <img class="shopping" alt="shopping-cart" src="../assets/shopping-cart.png" />

  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style >
.shopping {
  height: 2rem;
}

</style>