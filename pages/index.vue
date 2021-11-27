<script lang="ts" setup>
import json from '../public/data.json'
    console.log(json);  
</script>

<template>
  <div>
  <div>{{json}}</div>
  <Comp /><Hero :title="json.title" :subTitle="json.subTitle" />
    <Trailer />
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
