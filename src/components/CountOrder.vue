<template>
  <div class="CountOrder">
     <button class="increase" @click="increase"> + </button>
         <span >Count: {{ Count }}</span>
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
      if(this.Count>0){
      this.Count--;
    }
  }
}
}
</script>


<style scoped>

</style>