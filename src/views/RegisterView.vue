<script setup>
import ButtonSubmit from '../components/Form/ButtonSubmit.vue';
import ButtonMedia from '../components/Form/Login/ButtonMedia.vue';
import { useUserStore } from '../store/user';
import { register } from '../utils/authFunction';

const store = useUserStore();

</script>
<template>
    <section class="d-flex flex-column justify-content-md-center align-items-center pt-2">

        <form class="d-flex flex-column w-100 px-4 mt-5" @submit.prevent="register(store.user.email, store.user.password, store.user.repassword)">
            <h2 class="fs-7 text-white">Register to your Account</h2>
            <input class="rounded-pill py-2 ps-3 fs-per mb-3" type="text" placeholder="Email" v-model="store.user.email">
            <input class="rounded-pill py-2 ps-3 fs-per mb-4" type="password" placeholder="Password" v-model="store.user.password">
            <input class="rounded-pill py-2 ps-3 fs-per mb-4" type="password" placeholder="Password" v-model="store.user.repassword">
            <ButtonSubmit button="Sign up"/>
        </form>

        <p class="fs-7 text-white mt-4 font fw-light">-Or sign up with-</p>

        <section class="d-flex justify-content-between mt-5">
            <a href="" class="bg-social rounded-4 shadow d-flex justify-content-center">
                <img class="width" src="../assets/social/twitter.svg" alt="Twitter">
            </a>
            <a href="" class="bg-social rounded-4 shadow mx-4 d-flex justify-content-center">
                <img class="width_facebook" src="../assets/social/facebook.svg" alt="Facebook">
            </a>
            <a href="" class="bg-social rounded-4 shadow d-flex justify-content-center">
                <img class="width_google" src="../assets/social/google.svg" alt="Google">
            </a>
        </section>

    </section>
</template>
<style scoped>

input {
    background-color: #FFFFFF60;
    outline: none;
    border: 1px solid #FFFFFF70;

}

input:hover {
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