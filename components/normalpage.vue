
<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    subTitle: {
        type: String,
    },
    videoDescription: {
        type: String,
    },
    aspirationalText1: {
        type: String,
    },
    aspirationalText2: {
        type: String,
    },
    callToAction: {
        type: String,
    },
    url: {
        type:String,
    }
})
</script>
<template>
    <div>
        <Hero :title="title" :subTitle="subTitle" />
        <Trailer :url="url" :videoDescription="videoDescription" />
        <Buy :aspirationalTest1="aspirationalText1" :aspirationalText2="aspirationalText2" :callToAction="callToAction" />
        <Contact />

        <div class="bottom">
            <span>Brought to you by PlayLoudGames.</span>
            <img src="https://friendly-brown-1d77de.netlify.app/images/plg-icon.webp" />
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
    background-color: black;
    max-width: 100%;
    margin: 0px;
}

a:visited,
a:hover a:focus,
a:active,
a {
    color: white;
}
* {
    margin: 0;
    scroll-behavior: smooth;
    font-family: Roboto, sans-serif;
}
html {
    overflow-x: hidden;
}
</style>
<style scoped>
div.bottom {
    grid-column: 1/4;
    justify-self: center;
    background-color: black;
    font-size: 1rem;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    text-align: center;
}
.bottom > img {
    height: 1rem;
    object-fit: cover;
    width: 2rem;
}
</style>