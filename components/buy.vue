<script setup>
const props = defineProps({
    aspirationalText1: {
        type: String,
    },
    aspirationalText2: {
        type: String,
    },
    callToAction: {
        type: String,
    }
})
</script>
<template>
    
    <section id="buy">
        <h2>{{callToAction}}</h2>

      <a href=""> <img src="https://friendly-brown-1d77de.netlify.app/images/epic-games-icon.webo" /><span>></span></a>

      <a href=""> <img src="https://friendly-brown-1d77de.netlify.app/images/indiedb-icon.webp" /> <span>></span></a>

      <a href=""> <img src="https://friendly-brown-1d77de.netlify.app/images/steam-icon.webp" /> <span>></span></a>

      <p class="to-left first">{{aspirationalText1}}</p>
      <p class="to-right">{{aspirationalText1}}</p>
    </section>
</template>
<style scoped>
h2{
    
  font-size: 40px;
  justify-self: start;
  padding: 20px 2rem 0px;
  width: 100%;
  grid-column: 1/4;}
img {
  height: 32px;
  width: 64px;
  background-color: white;
  object-fit: contain;
}
section {
  background-color: black;
  display: grid;
  height: 60vh;
  justify-content: stretch;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px;
}
p{padding: 2rem;
font-size: 1.5rem;
text-align: center;}
a{
    display: grid;
  font-size: 30px;
  justify-self: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
  border: 2px solid white;
  box-shadow: inset black 0px 0px 0px 4px;
  padding: 4px;
  background-color: white;
  color: black;
  text-decoration: none;
  height: 40px;
  width: calc (100% - 2px);
  grid-template-columns: 1fr 1fr;
  transform: scale(1.0);
  transition-duration: .15s;}
  a:hover{transform: scale(1.02);}
  .to-left{position: relative; 
  left: -1rem;
  grid-column: 1/4;
  }
  p{
  padding: 1rem;}
  .to-right{position: relative;
  right: -1rem;
  grid-column: 1/4;}
  @media screen and (min-width: 500px) {
      section{grid-template-rows: 100px repeat(3, 9rem);
      padding: 0px 1rem;
      }
      h2{left: 0px;}
      a{grid-column: 1/2;
      align-content: center;
      width: 200px;}
      .to-right{grid-column: 2/4;
      align-self: end;
      left:2rem;
    
      grid-row: 3/4;}
      .to-left{grid-column: 2/4;
      align-self: end;
      right: 2rem;
      grid-row: 2/3;}
      p{font-size: 2rem;
      line-height: 3rem;
      padding: 0px;
      padding-bottom: 1rem;
      }

.bottom{align-self: end;padding-bottom: 3rem}
  } 
</style>