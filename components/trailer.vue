
<script setup>
const props = defineProps({
  url: {
    type: String,
  },
  videoDescription: {
    type: String,
  }
});
</script>

<template>
  <section id="trailer">{{props.url}}
    <!--thanks to enter the gungeon for iframe config -->
    <div class="iframe-container">
      <iframe
        :src= props.url
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      <p>
       {{props.videoDescription}}
      </p>
    </div>
  </section>
</template>
<style scoped>
section {
  display: grid;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-content: center;
}
.iframe-container {
  width: 80vw;
  text-align: center;

  max-width: 700px;
}
iframe {
  min-width: calc(100% - 50px);
  aspect-ratio: 16/9;
  box-shadow: white 0px 0px 25px 5px;
}
p{margin-top: 2rem;
font-size: 1.5rem;
line-height: 1.5;}
</style>
<script>
</script>
