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
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
}
.nav {
  position: relative;
  margin: 1px;
  padding: 35px;
  background-color: rgb(189, 124, 156);
  /* background-color: cadetblue; */
}
.link {
  /* border: 1px solid black; */

  text-decoration: none;
  margin: 10px;
  padding: 5px;
  font-size: 2rem;
  color: black;
  display: inline;
}
</style>