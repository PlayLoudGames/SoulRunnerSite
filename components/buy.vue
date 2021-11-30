<template>
    
    <section id="buy">
        <h2>Play Now</h2>

      <a href=""> <img src="/images/epic-games-icon.jpg" /><span>></span></a>

      <a href=""> <img src="/assets/images/indiedb-icon.png" /> <span>></span></a>

      <a href=""> <img src="/public/images/steam-icon.png" /> <span>></span></a>

      <p class="to-left first">Ever Challenging</p>
      <p class="to-right">Austere Design</p>
      <div class="bottom">
         <span>Brought to you by PlayLoudGames. </span> <img src="/images/plg-icon.png" />
      
      </div>
    </section>
</template>
<style scoped>
h2{
    
  font-size: 40px;
  justify-self: start;
  padding: 21px 2rem ;
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
  height: 75vh;
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
  border: 4px solid black;
  box-shadow: white 0px 0px 0px 2px;
  padding: 2px;
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
  div.bottom{grid-column: 1/4; 
  justify-self: center;
  background-color: black;
  }
  .bottom>img{height: 1rem;
  object-fit: cover;
  width: 1rem;}
  @media screen and (min-width: 500px) {
      section{grid-template-rows: 100px repeat(3, 9rem)
      }
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
  h2{justify-self: center;
  grid-column: 1/2;
  position: relative;
  left: -4rem;}
  } 
</style>