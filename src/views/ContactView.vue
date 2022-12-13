<script setup>
import Swal from 'sweetalert2';
import { ref } from 'vue';

import ButtonSubmit from '../components/Form/ButtonSubmit.vue';
import ButtonMedia from '../components/Form/Login/ButtonMedia.vue';

const name = ref('');
const email = ref('');
const textarea = ref('');

const handlerSwal = () => {
    if (name !== "" && email !== "" && textarea !== "") {
        Swal.fire(
            'Success!',
            'Your message was successfully sent!',
            'success'
        )
    }
}


</script>
<template>
    <section class="d-flex justify-content-center my-2">
        <img class="img__pretti" src="../assets/Pretti.png" alt="Logo pretti">
    </section>
    <section class="d-flex flex-column justify-content-md-center align-items-center pt-2">

        <form class="d-flex flex-column w-100 px-4 my-2" @submit.prevent="handlerSwal">
            <h2 class="fs-7 text-white">Contact us</h2>
            <input class="rounded-1 py-2 ps-3 fs-per mb-3" type="text" placeholder="Name" v-model="name">
            <input class="rounded-1 py-2 ps-3 fs-per mb-4" type="email" placeholder="Email"
                v-model="email">
            <textarea class="rounded-3 py-2 ps-3 fs-per mb-3" name="" id="" cols="30" rows="10"
                placeholder="Sent to message" v-model="textarea"></textarea>
            <ButtonSubmit button="Send" />
        </form>



    </section>
</template>
<style scoped>
input,
textarea {
    background-color: #FFFFFF60;
    outline: none;
    border: 1px solid #FFFFFF70;

}

input:hover,
textarea:hover {
    background-color: #FFFFFF60;
    outline: none;
}

.fs-per {
    font-size: 10px;
}

.font {
    font-style: italic;
}

.text-principal {
    color: #FCF9BF;
}

.img__pretti {
    width: 5rem;
}
</style>