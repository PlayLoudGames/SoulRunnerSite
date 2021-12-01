<template><section>
    <h2>Contact Us</h2>
  <form ref="form" :submit.prevent="onSubmit" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label class="message-label">Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_hwt6xbh', 'template_qtz3qrl', this.$refs.form, 'user_JkXUtQgwjR3SAQXH8IQmd')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>
<style scoped>
  h2{font-size: 40px;
  margin: auto;
  width: 360px;
  text-align: center;
  height: 2em;
  }
form{display: grid;
grid-template-columns: auto auto;
grid-template-rows: 1rem 1rem 3rem 1.5rem;
grid-gap: 2rem;
align-items: center;
justify-content: space-between;
max-width: 350px;
margin: auto;
}
input{height: 1rem;}
input:hover, textarea:hover{

box-shadow: 0px 0px 5px 0px rgba(14, 205, 253, 0.664);
}
input:focus, textarea:hover{outline: transparent;}
.message-label, textarea{align-self: start;}
section{padding-bottom: 5rem;}
input[type="submit"]{
    background-color: black;
    color: white;
    grid-column: 2/3;
    width: 70px;
    justify-self: end;
height: 2rem;
border-radius: 1rem;
transform: scale(1.0);
transition-duration:  25ms;}
input[type="submit"]:hover{transform: scale( 1.02);
cursor: pointer;}

</style>
