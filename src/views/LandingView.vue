<script setup>
import DivisorSection from '../components/DivisorSection.vue';
import LadingInformation from '../components/Landing/LandingInformation.vue'
import blog from '../assets/landing/blog.svg'
import AsideComponent from '../components/Aside/AsideComponent.vue';
import PremiunComponent from '../components/Premiun/PremiunComponent.vue';
import LandingLogin from '../components/Landing/LandingLogin.vue';
import { useUserStore } from '../store/user';
import router from '../router';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../utils/firebase';

const user = useUserStore();

onAuthStateChanged(auth, (user1) => {

    user.addUsuario(user1);

});

</script>
<template>
    <LandingLogin />
    <DivisorSection title="Home" subTitle="Welcome to Pretti" />

    <section class="bg-primario shadow text-white p-3 mb-3">
        <h2 class="fs-4">Welcome to Pretti</h2>
        <p class="">Pretti is a blogging platform, created to interact with the people in your city. With pretti you can
            generate your next friendships.</p>
        <button class="btn btn-sm btn-primary rounded-pill shadow">Get Started</button>
    </section>
    <DivisorSection title="Home" subTitle="Blog" />
    <div class="mb-3">
        <AsideComponent v-if="user.existeUsuario" />
        <PremiunComponent />
    </div>

    <LadingInformation title="Pretti in the world" information="With pretti you can connect from anywhere in the world"
        :img="blog" />


</template>
<style scoped>

</style>