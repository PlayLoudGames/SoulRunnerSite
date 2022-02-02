<script setup>
import json from "../../public/data.json"
import Adminui from "../../components/adminui.vue";
import netlifyIdentity from 'netlify-identity-widget'
import { onMounted} from "vue"
onMounted(()=>{

netlifyIdentity.init({ // defaults to document.body
  locale: 'en', // defaults to 'en'
});
netlifyIdentity.on('open', () => console.log(netlifyIdentity.currentUser()));
netlifyIdentity.open();

// Get the current user:
// Available after on('init') is invoked

// Bind to events
netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', netlifyIdentity.currentUser()));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('close', () => console.log('Widget closed'));

// Unbind from events
//netlifyIdentity.off('login'); // to unbind all registered handlers

// Close the modal
//netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

// Refresh the user's JWT
// Call in on('login') handler to ensure token refreshed after it expires (1hr)  
// Note: this method returns a promise.
})

</script>
<template>

    <div>
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