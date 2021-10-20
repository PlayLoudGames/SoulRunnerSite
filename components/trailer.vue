
<script setup>
</script>

<template>
  <section id="trailer">
      <!--thanks to enter the gungeon for iframe config -->
   <div class="iframe-container"> <iframe
      src="https://www.youtube.com/embed/cYuMRCZm4EU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>
  </section>
</template>
<style scoped>
section{
    display: grid;
    width: 100%;
    justify-content: center;
    align-content: center;
}
.iframe-container{
    width: 80vw;
    max-width: 700px;
    box-shadow: white 0px 0px 30px 5px;
}
iframe {
  min-width: 100%;
  aspect-ratio: 16/9;
}
</style>
<script>
</script>
