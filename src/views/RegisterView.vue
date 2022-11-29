<script setup>
import ButtonSubmit from '../components/Form/ButtonSubmit.vue';
import ButtonMedia from '../components/Form/Login/ButtonMedia.vue';

</script>
<template>
    <section class="d-flex flex-column justify-content-md-center align-items-center pt-2 mx-2 px-4">
        <div class="rounded-circle mb-5 width-img rounded-circle border border-1 border-dark d-flex justify-content-center align-items-center">
            <img class="" src="../assets/logo.png" alt="Logo">
        </div>
        <form class="d-md-flex flex-md-column mt-4">
            <h2 class="fs-7 text-white">Register your Account</h2>
            <input class="rounded-pill py-2 fs-per mb-3" type="text" placeholder="Email">
            <input class="rounded-pill py-2 fs-per mb-4" type="text" placeholder="Password">
            <input class="rounded-pill py-2 fs-per mb-4" type="text" placeholder="Repit password">
            <ButtonSubmit button="Sign up" />
        </form>

        <p class="fs-7 text-white mt-4 font fw-ligh">-Or sign up with-</p>

        <section class="d-flex justify-content-between mt-5">
            <a href="" class="bg-social rounded-4 shadow me-2 d-flex justify-content-center">
                <img class="width" src="../assets/social/twitter.svg" alt="Twitter">
            </a>
            <a href="" class="bg-social rounded-4 shadow me-2 d-flex justify-content-center">
                <img class="width_facebook" src="../assets/social/facebook.svg" alt="Facebook">
            </a>
            <a href="" class="bg-social rounded-4 shadow me-2 d-flex justify-content-center">
                <img class="width_google" src="../assets/social/google.svg" alt="Google">
            </a>
        </section>

    </section>
</template>
<style scoped>

input::placeholder{
    padding: 0 1rem;
}

input {
    background-color: #FFFFFF60;
    outline: none;
    border: 1px solid #FFFFFF70;

    width: 100%;

}

@media (min-width: 768px) {

    input {
        width: 350px;
    }
}

input:hover {
    background-color: #FFFFFF60;
    outline: none;
}

.fs-per {
    font-size: 10px;
}

.bg-social {
    background-color: #f6f08a !important;
    width: 100px;
    height: 80px;
}
.width{
    width: 3rem;
}
.width_facebook{
    width: 1.8rem;
}
.width-img{
    width: 120px;
    height: 120px;
}
.width_google{
    width: 2.7rem;
}
.font{
    font-style: italic;
}
</style>