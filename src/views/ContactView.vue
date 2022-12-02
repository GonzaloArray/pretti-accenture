<script setup>
import ButtonSubmit from '../components/Form/ButtonSubmit.vue';
import ButtonMedia from '../components/Form/Login/ButtonMedia.vue';
import { useUserStore } from '../store/user';
import { login } from '../utils/authFunction';

const store = useUserStore();

</script>
<template>
    <section class="d-flex justify-content-center my-4 py-2">
        <img src="../assets/Pretti.png" alt="Logo pretti">
    </section>
    <section class="d-flex flex-column justify-content-md-center align-items-center pt-2">

        <form class="d-flex flex-column w-100 px-4 my-5" @submit.prevent="login(store.user.email, store.user.password)">
            <h2 class="fs-7 text-white">Contact us</h2>
            <input class="rounded-pill py-2 ps-3 fs-per mb-3" type="text" placeholder="Email" v-model="store.user.email">
            <input class="rounded-pill py-2 ps-3 fs-per mb-4" type="password" placeholder="Password" v-model="store.user.password">
            <textarea class="rounded-3 py-2 ps-3 fs-per mb-3" name="" id="" cols="30" rows="10" placeholder="Sent to message"></textarea>
            <ButtonSubmit button="Send"/>
        </form>



    </section>
</template>
<style scoped>

input, textarea {
    background-color: #FFFFFF60;
    outline: none;
    border: 1px solid #FFFFFF70;

}

input:hover, textarea:hover {
    background-color: #FFFFFF60;
    outline: none;
}

.fs-per {
    font-size: 10px;
}

.bg-social {
    background-color: #317AC7 !important;
    width: 85px;
    height: 70px;
}
.width{
    width: 2rem;
}
.width_facebook{
    width: 1.2rem;
}

.width_google{
    width: 1.8rem;
}
.font{
    font-style: italic;
}
.text-principal{
    color: #FCF9BF;
}
.width-img{
    width: 5rem;
}
</style>