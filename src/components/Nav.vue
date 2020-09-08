<template>
  <div class="nav">
    <button>
      <input type="text" v-model="searchInput" />

      <!-- <li v-for=" in filtered"
           :key="">
             {{  }}
      </li>-->

      <img class="shopping" alt="shopping-cart" src="../assets/shopping-cart.png" />
    </button>
    
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
  padding-left: 50rem;
}

button {
  border-radius: 10px 10px;
  padding: 6px;
}
input {
  position: absolute;
  height: 25px;
}
</style>