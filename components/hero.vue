<script setup >
const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  }
});
  </script>
<template>
  <section>
    <h1>{{props.title}}</h1>
    <h2>{{props.subTitle}}</h2>

    <a class="left" href="#buy">Buy</a>
    <a class="right" href="#trailer">Trailer</a>
  </section>
</template>
<style scoped>
section {
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 75px 50px ;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  
  background-image: url("https://friendly-brown-1d77de.netlify.app/images/hero.webp");
  background-position: center -100px;
  background-repeat: no-repeat;
  object-fit: contain;
}

h1 {
  line-height: 150%;
  position: relative;
  justify-self: center;
  left: -.5rem;
  font-size: 50px;
  grid-column: 1/3;
}
h2 {
  position: relative;
  right: -.5rem;
  font-size: 25px;
  grid-column: 1/3;
  justify-self: center;
}
a {
  font-size: 30px;
  justify-self: center;
  text-align: center;
  border: 4px solid white;
  background-color: black;
  text-decoration: none;
  height: 40px;
  padding: 5px;
  width: 60%;
  max-width: 175px;
  box-shadow: inset 0 0 15px 0 #047C86;
  transition-duration: .25s;
  grid-row: 4/5;
}
a:hover{
  
  box-shadow: inset 0 0 12px 0 #047C86;
  border-color: hsl(185, 94%, 80%);
  color: hsl(185, 94%, 80%);
}
.left{justify-self: right;}
.right{justify-self: left;}
@media screen and (min-width:500px) {
  h1, h2{grid-column: 1/2;}
  h2{left:5rem;}
  
}
</style>