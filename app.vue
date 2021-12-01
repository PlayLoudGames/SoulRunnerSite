<script lang="ts" setup>
import json from './public/data.json'
import Contact from './components/contact.vue';
const video = `https://www.youtube.com/embed/${json.youtubeLink.slice(17)}`;
</script>

<template>
  <div><Hero :title="json.title" :subTitle="json.subTitle" />
    <Trailer :url="video" :videoDescription="json.videoDescription"/>
    <Buy />
    <Contact />
    
      <div class="bottom">
         <span>Brought to you by PlayLoudGames. </span> <img src="https://friendly-brown-1d77de.netlify.app/images/plg-icon.png" />
      
      </div>
  </div>
</template>
<style scoped>
*,
*:visited,
*:hover {
  color: white;
}
</style>
<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  background-color: black;
  max-width: 100%;
  margin: 0px;
}

a:visited, a:hover a:focus, a:active,a{color: white;}
* {
  margin: 0;
  scroll-behavior: smooth;
  font-family: Roboto, sans-serif;
}
html{overflow-x: hidden;}

</style>
<style scoped>
  div.bottom{grid-column: 1/4; 
  justify-self: center;
  background-color: black;
  font-size: 1rem;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: center;
  }
  .bottom>img{height: 1rem;
  object-fit: cover;
  width: 2rem;}</style>
