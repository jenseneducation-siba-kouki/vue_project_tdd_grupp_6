<template>
  <div class="CountOrder">
     <button class="increase" @click="increase"> + </button>
         <span >{{ Count }}</span>
    <button class="decrease" @click="decrease"> - </button>

  </div>
</template>

<script>
export default {
    name: 'CountOrder',
     data() {
    return {
      Count: 0,
    };
  },
  methods:{
    increase(){
      this.Count++;
    },
    decrease(){
      this.Count--;
    }
  }
}
</script>


<style scoped>

</style>