<template>
  <div class="About">
    <h1>About us</h1>
    <h4>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      <br />voluptatum odit,
      quam aperiam eius facere odio quidem nam!em odio aute
      <br />aspernatur
      asperiores tempore officia quisquam at numquam bipsa reru
      <br />, dolorem amet
      praesentium non reprehenderit diceritatis. A ratione
      <br />facilis magnam.
      Quis corporis aperiam quam illum necessitatibus molliti, fuga exercitati
      <br />onem culpa ae sit qui porro vel, error possimus! Beatae volu
      <br />quisquam consequuntur!
      Astemporibus enim molestias reprehenderit
      <br />sequi repil totam animi mollitia
      delectus nostrumnam,
      <br />voluptatem dignissimos hic velit! ipsa s
      <br />veritatis, nisi tempore quisquam, arus praesentiudolor
      <br />consectetur unde? rerum, tenetuis! Ipsa officiis
      <br />reiciendis dolorum odio porro consequatur quos,
      <br />at aliquid praesentium volutinctio! Vero
      <br />veritatis placeat, quasi recnsequaturaborum
      <br />laudantium aliquid ab labor doloribus
      <br />cupiditate repudiandae beatae aperiam ducimus!
    </h4>

    <router-link class="contact" to="/Contact">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.About {
  background-image: url("../assets/heart.jpg");
  background-repeat: no-repeat, no-repeat;
  background-size: 100%;
}
h1 {
  color: rgb(211, 149, 169);
  margin: 0px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

h4 {
  text-align: center;
  line-height: 30px;
  color: rgb(189, 124, 156);
  font-size: 15px;
}
.contact {
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  font-size: 1.8rem;
  color: rgb(170, 74, 122);
}
</style>