<script setup>
import { ref } from 'vue';

const props = defineProps({
    json: {
        type: Object,
    },
})
const inputObj = ref({})
const time = ref(Date.now())
const timeout = ref()
function handleUpdate(message,) {
    console.log(message)
    async function postData() {

        const options = {
            method: "POST", body: JSON.stringify({ data: message }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await fetch('http://localhost:8000/api/messages', options)
    }
      postData()

}
async function handleClick(message, ) {
    async function postClickData() {

        const options = {
            method: "POST", body: JSON.stringify({ data: Object.assign( props.json, message) }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const promise = await fetch("http://localhost:8000/api/git-push", options);
    }
    postClickData()
}
function handleChange(message) {
    const interval = Date.now() - time.value
    if (timeout.value) {
        clearTimeout(timeout.value)
    }
    if (interval > 500) {
        handleUpdate(message)
    }
    else {
        timeout.value = setTimeout(() => { handleUpdate(message) }, 500)
    }
    time.value = Date.now()

}
const toInputType = (type) => {
    switch (type) {
        case "number":
            return "number"
        case "string":
            return "text"

    }
}
</script>
<template>
    <div>
        <ul>
            <li v-for="(value, key) in json" key="key" :value="value">
                <label for="{{key}}">{{ key }}</label>
                <input
                    @input="handleChange(inputObj)"
                    id="{{key}}"
                    type="{{toInputType(props.json[key])}}"
                    v-model="inputObj[key]"
                />
            </li>
        </ul>
        <button @click="handleClick(inputObj)">Submit</button>

        <span>dsd</span>
    </div>
</template>
<script>
export default {
    head() {
        return {
            script: [
                {
                    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
                }
            ],
        }
    }}
    </script>