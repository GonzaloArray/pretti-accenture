<script setup>
import { RouterLink } from 'vue-router';
import ButtonSubmit from '../components/Form/ButtonSubmit.vue';
import ButtonMedia from '../components/Form/Login/ButtonMedia.vue';
import { useUserStore } from '../store/user';
import { login, loginFacebook, loginGitHub, loginGoogle } from '../utils/authFunction';

const store = useUserStore();



</script>
<template>
    <section class="d-flex flex-column justify-content-md-center align-items-center pt-2">

        <form action="/home" class="d-flex flex-column w-100 px-4 mt-5" @submit.prevent="login(store.user.email, store.user.password)">
            <h2 class="fs-7 text-white">Login to your Account</h2>
            <input class="rounded-2 py-2 ps-3 fs-per mb-3" type="email" placeholder="Email" v-model="store.user.email">
            <input class="rounded-2 py-2 ps-3 fs-per mb-4" type="password" placeholder="Password" v-model="store.user.password">
            <ButtonSubmit button="Sign in"/>
        </form>

        <p class="fs-7 text-white mt-4 font fw-light">-Or sign in with-</p>

        <section class="d-flex justify-content-between my-5">
            <button type="button" @click.prevent="loginGitHub" class="rounded-4 btn btn-sm bg-social shadow">
                <img class="width" src="../assets/social/github.svg" alt="Twitter" />
            </button>
            <button type="button" @click="loginFacebook" class="mx-4 rounded-4 btn btn-sm bg-social shadow">
                <img class="width" src="../assets/social/facebook.svg" alt="Facebook">
            </button>
            <button type="button" @click.prevent="loginGoogle" class=" rounded-4 btn btn-sm bg-social shadow">
                <img class="width" src="../assets/social/google.svg" alt="Google">
            </button>
        </section>
        <p class="fs-7 text-white my-4">Dont’t have an account? <RouterLink class="text-principal" to="./register">Sign up</RouterLink></p>
        
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