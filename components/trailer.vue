
<script setup>
</script>

<template>
  <section id="trailer">
    <!--thanks to enter the gungeon for iframe config -->
    <div class="iframe-container">
      <iframe
        src="https://www.youtube.com/embed/cYuMRCZm4EU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      
      <p>
        Lorem ipsum sic dimitibus elatoribus laudone. In sic illo fillia tua.
        Lacrimone el, delli dartum. Ice labilenia in illo dixerant. Sicut
        navigato in nomen tuam.
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
