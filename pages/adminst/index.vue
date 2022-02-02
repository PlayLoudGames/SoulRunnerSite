<script setup>
import json from "../../public/data.json"
import Adminui from "../../components/adminui.vue"
useMeta({
    meta: [
        {script: "type='text/javascript' src='https://identity.netlify.com/v1/netlify-identity-widget.js'"}
    ]
})

</script>
<template>

    <div>
  <div data-netlify-identity-menu></div>
        <Adminui :json="json" />
    </div>
</template>

<style scoped>
div {
    background-color: white;
    
    width: 100%;
    height: 100vh;
}
#netlify-identity-widget{display: block !important;}
a.netlify-identity-signup{color: black !important}
</style>