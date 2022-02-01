<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import json from '../../public/data.json'
import Pusher from 'pusher-js';
import Normalpage from '../../components/normalpage.vue';
let importedJson = reactive(json);
onMounted(() => {

    Pusher.logToConsole = true;

    const pusher = new Pusher('72f16d666e8ca8cae169', {
        cluster: 'us2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
        console.log(data)
        Object.assign(importedJson, data.data)
        console.log(importedJson.title)
    });
})
</script>

<template>
    <div>
        <Normalpage
            :title="importedJson.title"
            :subTitle="importedJson.subTitle"
            :url="importedJson.youtubeLink"
            :videoDescription="importedJson.videoDescription"
            :aspirationalTest1="importedJson.aspirationalText1"
            :aspirationalText2="importedJson.aspirationalText2"
            :callToAction="importedJson.callToAction"
        />

        <div class="bottom">
            <span>Brought to you by PlayLoudGames.</span>
            <img src="https://friendly-brown-1d77de.netlify.app/images/plg-icon.webp" />
        </div>
    </div>
</template>
<script></script>
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