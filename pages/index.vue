<script lang="ts" setup>
import json from '../public/data.json'
const video = `https://www.youtube.com/embed/${json.youtubeLink.slice(17)}`;
</script>

<template>
  <div><Hero :title="json.title" :subTitle="json.subTitle" />
    <Trailer :url="video" :videoDescription="json.videoDescription"/>
    <Buy />
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
