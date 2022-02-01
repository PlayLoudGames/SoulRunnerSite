<script setup>
import json from "../../public/data.json";
import Adminui from "../../components/adminui.vue";
</script>
<template>
    <div>
        <Adminui :json="json"/>
    </div>
</template>
<style scoped>
div{background-color: white;
width: 100%;
height: 100vh;
}
</style>